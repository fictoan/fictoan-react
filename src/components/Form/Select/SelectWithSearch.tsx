import React, { useState, useRef, useEffect, MutableRefObject, KeyboardEvent } from "react";

import { Div } from "../../Element/Tags";
import { InputField } from "../InputField/InputField";
import { Badge } from "../../Badge/Badge";
import { Text } from "../../Typography/Text";
import { BaseInputComponent } from "../BaseInputComponent/BaseInputComponent";

import {
    SelectWithSearchProps,
    OptionForSearchWithSelectProps,
    SelectElementType,
    SelectWithSearchElementType,
} from "./constants";

import "./select-with-search.css";

// TODO: allowCustomEntries, clearSelection

const levenshteinDistance = (a: string, b: string): number => {
    const matrix = [];

    const aLength = a.length;
    const bLength = b.length;

    // Early exit if one of the strings is empty
    if (aLength === 0) return bLength;
    if (bLength === 0) return aLength;

    // Initialize the first row and column of the matrix
    for (let i = 0; i <= bLength; i++) {
        matrix[i] = [ i ];
    }
    for (let j = 0; j <= aLength; j++) {
        matrix[0][j] = j;
    }

    // Fill in the rest of the matrix
    for (let i = 1; i <= bLength; i++) {
        for (let j = 1; j <= aLength; j++) {
            if (b[i - 1] === a[j - 1]) {
                matrix[i][j] = matrix[i - 1][j - 1];
            } else {
                matrix[i][j] = Math.min(
                    matrix[i - 1][j] + 1,     // Deletion
                    matrix[i][j - 1] + 1,     // Insertion
                    matrix[i - 1][j - 1] + 1,  // Substitution
                );
            }
        }
    }

    return matrix[bLength][aLength];
};

const isSubsequence = (search: string, target: string): boolean => {
    let searchIndex = 0;
    let targetIndex = 0;

    while (searchIndex < search.length && targetIndex < target.length) {
        if (search[searchIndex] === target[targetIndex]) {
            searchIndex++;
        }
        targetIndex++;
    }

    return searchIndex === search.length;
};

// Function to generate acronym from label
const generateAcronym = (label: string): string => {
    return label
        .split(/[\s\-_]+/)
        .map(word => word.slice(0, 2)) // Take first two letters
        .join("")
        .toLowerCase();
};

// Custom search function that handles partial matches and common typos
const searchOptions = (options: OptionForSearchWithSelectProps[], searchTerm: string) => {
    if (!searchTerm) return options;

    const normalizedSearch = searchTerm.toLowerCase().trim();

    const maxDistance = Math.floor(normalizedSearch.length / 2);

    const matchedOptions = options
        .map(option => {
            const normalizedLabel = option.label.toLowerCase();

            const distance = levenshteinDistance(normalizedSearch, normalizedLabel);

            const words       = normalizedLabel.split(/[\s\-_]+/);
            const searchWords = normalizedSearch.split(/[\s\-_]+/);

            const isPartialMatch =
                      normalizedLabel.includes(normalizedSearch) ||
                      searchWords.every(searchWord =>
                          words.some(word => word.startsWith(searchWord)),
                      );

            const acronym = generateAcronym(normalizedLabel);

            const isAcronymMatch = isSubsequence(normalizedSearch, acronym);

            return {
                option,
                distance,
                isPartialMatch,
                isAcronymMatch,
            };
        })
        .filter(({ distance, isPartialMatch, isAcronymMatch }) =>
            isPartialMatch || isAcronymMatch || distance <= maxDistance,
        )
        .sort((a, b) => {
            if (a.isPartialMatch && !b.isPartialMatch) return -1;
            if (!a.isPartialMatch && b.isPartialMatch) return 1;

            if (a.isAcronymMatch && !b.isAcronymMatch) return -1;
            if (!a.isAcronymMatch && b.isAcronymMatch) return 1;

            return a.distance - b.distance;
        })
        .map(({ option }) => option);

    return matchedOptions;
};

export const SelectWithSearch = React.forwardRef<SelectWithSearchElementType, SelectWithSearchProps>(
    ({
         options,
         label,
         placeholder = "Select an option",
         id,
         allowMultiSelect = false,
         onChange,
         disabled,
         badgeBgColour,
         badgeBgColor,
         badgeTextColour,
         badgeTextColor,
         selectionLimit,
         allowCustomEntries = false,
         ...props }, ref
    ) => {
        const [ isOpen, setIsOpen ]                   = useState(false);
        const [ selectedOptions, setSelectedOptions ] = useState<OptionForSearchWithSelectProps[]>([]);
        const [ searchValue, setSearchValue ]         = useState("");
        const [ activeIndex, setActiveIndex ]         = useState(-1);

        const dropdownRef    = useRef() as MutableRefObject<HTMLSelectElement>;
        const searchInputRef = useRef<HTMLInputElement>(null);
        const effectiveRef   = (ref || dropdownRef) as React.RefObject<HTMLSelectElement>;

        const filteredOptions = searchOptions(options, searchValue);

        const handleSelectOption = (option: OptionForSearchWithSelectProps) => {
            if (option.disabled) return;

            let newSelectedOptions: OptionForSearchWithSelectProps[];
            if (allowMultiSelect) {
                const isSelected = selectedOptions.some(opt => opt.value === option.value);
                if (isSelected) {
                    newSelectedOptions = selectedOptions.filter(opt => opt.value !== option.value);
                } else {
                    // Check for selection limit before adding new option
                    if (selectionLimit && selectedOptions.length >= selectionLimit) {
                        return; // Don't add more if limit is reached
                    }
                    newSelectedOptions = [...selectedOptions, option];
                }
                setSelectedOptions(newSelectedOptions);
                onChange?.(newSelectedOptions.map(opt => opt.value));
            } else {
                newSelectedOptions = [option];
                setSelectedOptions(newSelectedOptions);
                onChange?.(option.value);
                setIsOpen(false);
            }

            setSearchValue("");
            setActiveIndex(-1);
        };

        const handleDeleteOption = (e: React.MouseEvent<HTMLElement>, valueToRemove: string) => {
            e.stopPropagation();
            const newSelectedOptions = selectedOptions.filter(opt => opt.value !== valueToRemove);
            setSelectedOptions(newSelectedOptions);
            onChange?.(newSelectedOptions.map(opt => opt.value));
        };

        const handleCustomEntry = () => {
            if (!searchValue.trim() || !allowCustomEntries) return;

            const customOption: OptionForSearchWithSelectProps = {
                value: searchValue.trim(),
                label: searchValue.trim(),
            };

            handleSelectOption(customOption);
            setSearchValue(""); // Clear search field
            setActiveIndex(-1); // Reset active index
        };

        const handleKeyDown = (event: KeyboardEvent) => {
            switch (event.key) {
                case "ArrowDown":
                    event.preventDefault();
                    if (!isOpen) {
                        setIsOpen(true);
                        setActiveIndex(0);
                    } else {
                        setActiveIndex(prev =>
                            prev < filteredOptions.length - 1 ? prev + 1 : prev,
                        );
                    }
                    break;

                case "ArrowUp":
                    event.preventDefault();
                    setActiveIndex(prev => prev > 0 ? prev - 1 : prev);
                    break;

                case "Enter":
                    event.preventDefault();
                    if (allowCustomEntries && searchValue.trim()) {
                        // First check if the search value exactly matches any option
                        const exactMatch = filteredOptions.find(opt =>
                            opt.label.toLowerCase() === searchValue.trim().toLowerCase()
                        );

                        if (exactMatch) {
                            handleSelectOption(exactMatch);
                        } else {
                            handleCustomEntry();
                        }
                    } else if (activeIndex >= 0 && filteredOptions[activeIndex]) {
                        handleSelectOption(filteredOptions[activeIndex]);
                    }
                    break;

                case "Escape":
                    event.preventDefault();
                    setIsOpen(false);
                    setActiveIndex(-1);
                    break;

                case " ": // Space key
                    if (!isOpen) {
                        event.preventDefault();
                        setIsOpen(true);
                        setActiveIndex(0);
                    }
                    break;

                case "Home":
                    if (isOpen) {
                        event.preventDefault();
                        setActiveIndex(0);
                    }
                    break;

                case "End":
                    if (isOpen) {
                        event.preventDefault();
                        setActiveIndex(filteredOptions.length - 1);
                    }
                    break;
            }
        };

        // Handle outside clicks
        useEffect(() => {
            const handleClickOutside = (event: MouseEvent) => {
                if (effectiveRef.current && !effectiveRef.current.contains(event.target as Node)) {
                    setIsOpen(false);
                    setActiveIndex(-1);
                }
            };

            document.addEventListener("mousedown", handleClickOutside);
            return () => document.removeEventListener("mousedown", handleClickOutside);
        }, []);

        // Focus management
        useEffect(() => {
            if (isOpen && searchInputRef.current) {
                searchInputRef.current.focus();
            }
        }, [ isOpen ]);

        // Scroll active option into view
        useEffect(() => {
            if (activeIndex >= 0) {
                const activeOption = document.querySelector(`[data-index="${activeIndex}"]`);
                activeOption?.scrollIntoView({ block : "nearest" });
            }
        }, [ activeIndex ]);

        return (
            <BaseInputComponent<SelectElementType>
                data-select-with-search
                className="sws-wrapper"
                ref={effectiveRef}
                {...props}
            >
                {label && (
                    <label
                        id={`${id}-label`}
                        htmlFor={`${id}-listbox`}
                        className="sws-label"
                    >
                        {label}
                    </label>
                )}

                <Div
                    className="sws-display"
                    onClick={() => !disabled && setIsOpen(!isOpen)}
                    onKeyDown={handleKeyDown}
                    aria-haspopup="listbox"
                    aria-expanded={isOpen}
                    aria-labelledby={label ? `${id}-label` : undefined}
                    aria-controls={isOpen ? `${id}-listbox` : undefined}
                >
                    {selectedOptions.length > 0 ? (
                        <Div className="badge-container">
                            {selectedOptions.map(option => (
                                <Badge
                                    key={option.value}
                                    withDelete={allowMultiSelect}
                                    onDelete={(e) => handleDeleteOption(e, option.value)}
                                    size="small"
                                    shape="rounded"
                                    bgColour={badgeBgColour || badgeBgColor }
                                    textColour={badgeTextColour || badgeTextColor}
                                >
                                    {option.label}
                                </Badge>
                            ))}
                            {selectionLimit && selectedOptions.length >= selectionLimit && (
                                <Text textColour="red" size="small">
                                    You can choose only {selectionLimit} options
                                </Text>
                            )}
                        </Div>
                    ) : (
                        <span className="placeholder">{placeholder}</span>
                    )}
                </Div>

                {isOpen && !disabled && (
                    <Div className="sws-dropdown" role="presentation">
                        <Div className="sws-input-wrapper">
                            <InputField
                                type="text"
                                ref={searchInputRef}
                                className="sws-input"
                                placeholder="Search"
                                value={searchValue}
                                onChange={(e) => {
                                    setSearchValue((e.target as HTMLInputElement).value);
                                }}
                                onKeyDown={handleKeyDown}
                                aria-controls={`${id}-listbox`}
                            />
                            {allowCustomEntries && searchValue.trim() && !selectedOptions.some(opt =>
                                opt.label.toLowerCase() === searchValue.trim().toLowerCase()) && (
                                <kbd className="sws-enter-key">↵</kbd>
                            )}
                        </Div>

                        <ul
                            id={`${id}-listbox`}
                            className="sws-options"
                            role="listbox"
                            aria-label={label || "Select options"}
                            tabIndex={-1}
                        >
                            {filteredOptions.length > 0 ? (
                                filteredOptions.map((option, index) => (
                                    <li
                                        key={option.value}
                                        id={`${id}-option-${option.value}`}
                                        className={`sws-option ${option.disabled ? "disabled" : ""} ${activeIndex === index ? "active" : ""}`}
                                        role="option"
                                        aria-selected={selectedOptions.some(opt => opt.value === option.value)}
                                        aria-disabled={option.disabled}
                                        onClick={() => handleSelectOption(option)}
                                        data-index={index}
                                    >
                                        {option.customLabel || option.label}
                                    </li>
                                ))
                            ) : (
                                <li className="sws-option disabled" role="alert">
                                    No matches found
                                </li>
                            )}
                        </ul>
                    </Div>
                )}
            </BaseInputComponent>
        );
    },
);

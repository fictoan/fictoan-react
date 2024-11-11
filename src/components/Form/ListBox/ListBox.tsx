import React, { useState, useRef, useEffect, MutableRefObject, KeyboardEvent } from "react";

import { Div, Span } from "../../Element/Tags";
import { InputField } from "../InputField/InputField";
import { Badge } from "../../Badge/Badge";
import { Text } from "../../Typography/Text";
import { BaseInputComponent } from "../BaseInputComponent/BaseInputComponent";

import {
    ListBoxProps,
    OptionForListBoxProps,
    SelectElementType,
    ListBoxElementType,
} from "./constants";

import { levenshteinDistance, isSubsequence, generateAcronym } from "./listBoxUtils";

import "./list-box.css";

// Custom search function that handles partial matches and common typos
const searchOptions = (options: OptionForListBoxProps[], searchTerm: string) => {
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

export const ListBox = React.forwardRef<ListBoxElementType, ListBoxProps>(
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
         ...props
     }, ref,
    ) => {
        const [ isOpen, setIsOpen ]                   = useState(false);
        // FOR NORMAL LISTBOX
        const [ selectedOption, setSelectedOption ]   = useState<OptionForListBoxProps | null>(null);
        // FOR MULTI-SELECT LISTBOX, JUST DON’T QUESTION IT PLEASE
        const [ selectedOptions, setSelectedOptions ] = useState<OptionForListBoxProps[]>([]);
        const [ searchValue, setSearchValue ]         = useState("");
        const [ activeIndex, setActiveIndex ]         = useState(-1);

        const dropdownRef    = useRef() as MutableRefObject<HTMLSelectElement>;
        const searchInputRef = useRef<HTMLInputElement>(null);
        const effectiveRef   = (ref || dropdownRef) as React.RefObject<HTMLSelectElement>;

        const filteredOptions = searchOptions(options, searchValue);

        const handleSelectOption = (option: OptionForListBoxProps) => {
            if (option.disabled) return;

            let newSelectedOptions: OptionForListBoxProps[];
            if (allowMultiSelect) {
                const isSelected = selectedOptions.some(opt => opt.value === option.value);
                if (isSelected) {
                    newSelectedOptions = selectedOptions.filter(opt => opt.value !== option.value);
                } else {
                    // Check for selection limit before adding new option
                    if (selectionLimit && selectedOptions.length >= selectionLimit) {
                        return; // Don't add more if limit is reached
                    }
                    newSelectedOptions = [ ...selectedOptions, option ];
                }
                setSelectedOptions(newSelectedOptions);
                onChange?.(newSelectedOptions.map(opt => opt.value));
                setSearchValue("");
                setActiveIndex(-1);
            } else {
                newSelectedOptions = [ option ];
                setSelectedOption(option);
                setSelectedOptions(newSelectedOptions);
                onChange?.(option.value);
                setIsOpen(false);
                setSearchValue("");
                setActiveIndex(-1);
            }
        };

        const handleDeleteOption = (e: React.MouseEvent<HTMLElement>, valueToRemove: string) => {
            e.stopPropagation();
            const newSelectedOptions = selectedOptions.filter(opt => opt.value !== valueToRemove);
            setSelectedOptions(newSelectedOptions);
            onChange?.(newSelectedOptions.map(opt => opt.value));
        };

        // ALLOW USER TO TYPE IN A CUSTOM OPTION =======================================================================
        const handleCustomEntry = () => {
            if (!searchValue.trim() || !allowCustomEntries) return;

            const customOption: OptionForListBoxProps = {
                value : searchValue.trim(),
                label : searchValue.trim(),
            };

            handleSelectOption(customOption);
            setSearchValue("");
            setActiveIndex(-1);
        };

        // REMOVE ALL CURRENTLY SELECTED OPTIONS =======================================================================
        const handleClearAll = (e: React.MouseEvent<HTMLElement>) => {
            e.stopPropagation();
            setSelectedOptions([]);
            onChange?.([]);
        };

        // KEYBOARD NAVIGATION OF THE OPTIONS DROPDOWN =================================================================
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
                            opt.label.toLowerCase() === searchValue.trim().toLowerCase(),
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

        // HANDLE OUTSIDE CLICKS =======================================================================================
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
                data-list-box
                className="list-box-wrapper"
                ref={effectiveRef}
                {...props}
            >
                {/* TOP LABEL ////////////////////////////////////////////////////////////////////////////////////// */}
                {label && (
                    <label
                        id={`${id}-label`}
                        htmlFor={`${id}-listbox`}
                        className="list-box-label"
                    >
                        {label}
                    </label>
                )}

                {/* MAIN CONTAINER ///////////////////////////////////////////////////////////////////////////////// */}
                {allowMultiSelect ? (
                    // FOR BADGE-ing SELECTED OPTIONS ==================================================================
                    <Div
                        className="list-box-display"
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
                                        bgColour={badgeBgColour || badgeBgColor}
                                        textColour={badgeTextColour || badgeTextColor}
                                    >
                                        {option.label}
                                    </Badge>
                                ))}
                                <Text
                                    className="clear-all-button"
                                    onClick={handleClearAll}
                                >
                                    &times;
                                </Text>

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
                ) : (
                    // FOR PLAIN TEXT SINGLE-SELECT OPTION =============================================================
                    <Div
                        className="list-box-input-wrapper"
                        onClick={() => setIsOpen(!isOpen)}
                        onKeyDown={handleKeyDown}
                        aria-haspopup="listbox"
                        aria-expanded={isOpen}
                        aria-labelledby={label ? `${id}-label` : undefined}
                        aria-controls={isOpen ? `${id}-listbox` : undefined}
                    >
                        {selectedOption ? selectedOption.label : "Select an option"}
                    </Div>
                )}

                {/* DROPDOWN /////////////////////////////////////////////////////////////////////////////////////// */}
                {isOpen && !disabled && (
                    <Div className="list-box-dropdown" role="presentation">
                        <Div className="list-box-input-wrapper">
                            <InputField
                                type="text"
                                ref={searchInputRef}
                                className="list-box-input"
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
                                <kbd className="list-box-enter-key">↵</kbd>
                            )}
                        </Div>

                        <ul
                            id={`${id}-listbox`}
                            className="list-box-options"
                            role="listbox"
                            aria-label={label || "Select options"}
                            tabIndex={-1}
                        >
                            {filteredOptions.length > 0 ? (
                                filteredOptions.map((option, index) => (
                                    <li
                                        key={option.value}
                                        id={`${id}-option-${option.value}`}
                                        className={`list-box-option ${option.disabled ? "disabled" : ""} ${activeIndex === index ? "active" : ""}`}
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
                                <li className="list-box-option disabled" role="alert">
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

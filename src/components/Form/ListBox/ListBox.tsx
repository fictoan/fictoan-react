import React, { useState, useRef, useEffect, MutableRefObject, KeyboardEvent } from "react";

import { Div } from "../../Element/Tags";
import { InputField } from "../InputField/InputField";
import { Badge } from "../../Badge/Badge";
import { Text } from "../../Typography/Text";
import { BaseInputComponent } from "../BaseInputComponent/BaseInputComponent";

import {
    ListBoxProps,
    OptionForListBoxProps,
    ListBoxElementType,
} from "./constants";

import { searchOptions } from "./listBoxUtils";

import "./list-box.css";

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

        // REMOVE SELECTED ENTRIES =====================================================================================
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
            <BaseInputComponent<ListBoxElementType>
                data-list-box
                className={`list-box-wrapper ${disabled ? "disabled" : ""}`}
                aria-disabled={disabled}
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
                <Div
                    className="list-box-input-wrapper"
                    onClick={() => !disabled && allowMultiSelect ? setIsOpen(!isOpen) : setIsOpen(!isOpen)}
                    onKeyDown={handleKeyDown}
                    aria-haspopup="listbox"
                    aria-expanded={isOpen}
                    aria-labelledby={label ? `${id}-label` : undefined}
                    aria-controls={isOpen ? `${id}-listbox` : undefined}
                >
                    {allowMultiSelect ? (
                        <>
                            {/* FOR BADGE-ing SELECTED OPTIONS ===================================================== */}
                            {selectedOptions.length > 0 ? (
                                <Div className="options-wrapper">
                                    <Div className="options-list">
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
                                    </Div>

                                    {/* LIMIT WARNING */}
                                    {selectionLimit && selectedOptions.length >= selectionLimit && (
                                        <Text className="options-limit-warning" textColour="red" size="small">
                                            You can choose only {selectionLimit} option{selectionLimit === 1 ? "" : "s"}
                                        </Text>
                                    )}
                                </Div>
                            ) : (
                                <span className="placeholder">{placeholder}</span>
                            )}

                            {selectedOptions.length > 0 && (
                                <Div
                                    className="icon-wrapper clear-all"
                                    title="Clear all options"
                                    onClick={handleClearAll}
                                >
                                    <svg viewBox="0 0 24 24">
                                        <line x1="5" y1="5" x2="19" y2="19" />
                                        <line x1="5" y1="19" x2="19" y2="5" />
                                    </svg>
                                </Div>
                            )}
                        </>
                    ) : (
                        // FOR PLAIN TEXT SINGLE-SELECT OPTION =========================================================
                        selectedOption
                            ? <Text className="selected-option">{selectedOption.label}</Text>
                            : <span className="placeholder">{placeholder}</span>
                    )}

                    <Div className="icon-wrapper chevrons">
                        <svg viewBox="0 0 24 24">
                            <polyline points="6 9 12 4 18 9"></polyline>
                            <polyline points="6 15 12 20 18 15"></polyline>
                        </svg>
                    </Div>
                </Div>

                {/* DROPDOWN /////////////////////////////////////////////////////////////////////////////////////// */}
                {isOpen && !disabled && (
                    <Div className="list-box-dropdown" role="presentation">
                        <Div className="list-box-search-wrapper">
                            <InputField
                                type="text"
                                ref={searchInputRef}
                                className="list-box-search"
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

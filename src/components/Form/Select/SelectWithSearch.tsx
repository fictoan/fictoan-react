import React, { useState, useRef, useEffect, MutableRefObject, KeyboardEvent } from "react";

import { Div } from "../../Element/Tags";
import { InputField } from "../InputField/InputField";
import { BaseInputComponent } from "../BaseInputComponent/BaseInputComponent";

import {
    SelectWithSearchProps,
    OptionProps,
    SelectElementType,
    SelectWithSearchElementType,
    OptionForSearchWithSelectProps,
} from "./constants";

import "./select-with-search.css";

// Custom search function that handles partial matches and common typos
const searchOptions = (options: OptionForSearchWithSelectProps[], searchTerm: string) => {
    if (!searchTerm) return options;

    const normalizedSearch = searchTerm.toLowerCase().trim();

    return options.filter(option => {
        const normalizedLabel = option.label.toLowerCase();

        // Exact match
        if (normalizedLabel === normalizedSearch) return true;

        // Contains search term
        if (normalizedLabel.includes(normalizedSearch)) return true;

        // Word boundary match (e.g., "new y" matches "New York")
        const words       = normalizedLabel.split(" ");
        const searchWords = normalizedSearch.split(" ");
        return searchWords.every(searchWord =>
            words.some(word => word.startsWith(searchWord)),
        );
    });
};

export const SelectWithSearch = React.forwardRef<SelectWithSearchElementType, SelectWithSearchProps>((
        {
            options,
            label,
            placeholder = "Select an option",
            id,
            ...props
        }, ref) => {
        const [ isOpen, setIsOpen ]                 = useState(false);
        const [ selectedOption, setSelectedOption ] = useState<OptionProps | null>(null);
        const [ searchValue, setSearchValue ]       = useState("");
        const [ activeIndex, setActiveIndex ]       = useState(-1);

        const dropdownRef    = useRef() as MutableRefObject<HTMLSelectElement>;
        const searchInputRef = useRef<HTMLInputElement>(null);
        const effectiveRef   = (ref || dropdownRef) as React.RefObject<HTMLSelectElement>;

        const filteredOptions = searchOptions(options, searchValue);

        const handleSelectOption = (option: OptionProps) => {
            if (option.disabled) return;

            setSelectedOption(option);
            simulateInputChange(option);
            setIsOpen(false);
            setSearchValue("");
            setActiveIndex(-1);

            // Focus back on the main button after selection
            const mainButton = document.getElementById(`${id}-button`);
            mainButton?.focus();
        };

        const simulateInputChange = (value: OptionProps) => {
            const input = document.getElementById(value.value) as HTMLInputElement;
            if (!input) return;

            input.type   = "text";
            input.hidden = true;

            const desc = Object.getOwnPropertyDescriptor(HTMLInputElement.prototype, "value");
            desc?.set?.call(input, value.value);

            const event = new Event("input", { bubbles : true });
            input.dispatchEvent(event);
            input.type   = "hidden";
            input.hidden = false;
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
                    if (activeIndex >= 0 && filteredOptions[activeIndex]) {
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
                        htmlFor={`${id}-button`}
                        className="sws-label"
                    >
                        {label}
                    </label>
                )}

                <button
                    id={`${id}-button`}
                    className="sws-display"
                    onClick={() => setIsOpen(!isOpen)}
                    onKeyDown={handleKeyDown}
                    aria-haspopup="listbox"
                    aria-expanded={isOpen}
                    aria-labelledby={label ? `${id}-label` : undefined}
                    aria-controls={isOpen ? `${id}-listbox` : undefined}
                >
                    {selectedOption ? selectedOption.label : placeholder}
                    <span className="sws-arrow" aria-hidden="true">
                        ▼
                    </span>
                </button>

                {isOpen && (
                    <div
                        className="sws-dropdown"
                        role="presentation"
                    >
                        <InputField
                            ref={searchInputRef}
                            type="text"
                            className="sws-input"
                            placeholder="Search"
                            value={searchValue}
                            onChange={(e) => {
                                setSearchValue((e.target as HTMLInputElement).value);
                                setActiveIndex(0);
                            }}
                            onKeyDown={handleKeyDown}
                            aria-controls={`${id}-listbox`}
                        />

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
                                        className={`sws-option ${
                                            option.disabled ? "disabled" : ""
                                        } ${activeIndex === index ? "active" : ""}`}
                                        role="option"
                                        aria-selected={selectedOption?.value === option.value}
                                        aria-disabled={option.disabled}
                                        onClick={() => handleSelectOption(option)}
                                        data-index={index}
                                    >
                                        {option.customLabel || option.label}
                                        <input type="hidden" id={option.value} />
                                    </li>
                                ))
                            ) : (
                                <li
                                    className="sws-option disabled"
                                    role="alert"
                                >
                                    No matches found
                                </li>
                            )}
                        </ul>
                    </div>
                )}
            </BaseInputComponent>
        );
    },
);

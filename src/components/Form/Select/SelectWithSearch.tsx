import React, { useState, useRef, useEffect, MutableRefObject } from "react";

import { Div } from "../../Element/Tags";
import { InputField } from "../InputField/InputField";
import { BaseInputComponent } from "../BaseInputComponent/BaseInputComponent";

import { SelectWithSearchProps, OptionProps, SelectElementType, SelectWithSearchElementType } from "./constants";

import "./select-with-search.css";

export const SelectWithSearch = React.forwardRef<SelectWithSearchElementType, SelectWithSearchProps>(
    ({ options, ...props }, ref) => {
        const [ isOpen, setIsOpen ]                 = useState(false);
        const [ selectedOption, setSelectedOption ] = useState<OptionProps | null>(null);
        const [ searchValue, setSearchValue ]       = useState("");

        const dropdownRef  = useRef() as MutableRefObject<HTMLSelectElement>;
        const effectiveRef = (ref || dropdownRef) as React.RefObject<HTMLSelectElement>; // Fallback to external ref if provided, otherwise use local ref

        const optionsWithSearchKey = options.map((option) => ({
            ...option,
            searchKey : option.label.toLowerCase(),
        }));

        const filteredOptions = optionsWithSearchKey.filter((option) =>
            option.searchKey.toLowerCase().includes(searchValue.toLowerCase()),
        );

        const handleSelectOption = (value: OptionProps) => {
            setSelectedOption(value);

            // Hacky input change simulation
            const input  = document.getElementById(value.value) as HTMLInputElement;
            input.type   = "text";
            input.hidden = true;

            // Override React's input onChange event
            const desc = Object.getOwnPropertyDescriptor(HTMLInputElement.prototype, "value");
            desc?.set?.call(input, value.value);

            const event = new Event("input", { bubbles : true });
            input.dispatchEvent(event);
            input.type   = "hidden";
            input.hidden = false;

            setIsOpen(false);
        };

        useEffect(() => {
            const handleClickOutside = (event: { target: any }) => {
                if (effectiveRef.current && !effectiveRef.current.contains(event.target)) {
                    setIsOpen(false);
                }
            };

            document.addEventListener("mousedown", handleClickOutside);

            return () => {
                document.removeEventListener("mousedown", handleClickOutside);
            };
        }, []);

        return (
            <BaseInputComponent<SelectElementType>
                data-select-with-search
                className="sws-wrapper"
                ref={effectiveRef}
                {...props}
            >
                <Div className="sws-display" onClick={() => setIsOpen(!isOpen)}>
                    {selectedOption ? selectedOption.label : "Select an option"}
                </Div>

                {isOpen && (
                    <Div className="sws-dropdown">
                        <InputField
                            type="text"
                            className="sws-input"
                            placeholder="Search"
                            value={searchValue}
                            onChange={(e) => setSearchValue((e.target as HTMLInputElement).value)}
                        />
                        <Div className="sws-options">
                            {filteredOptions.length > 0 ? (
                                filteredOptions.map((option) => {
                                    if ("value" in option && "label" in option) {
                                        return (
                                            <React.Fragment key={option.value}>
                                                <Div
                                                    key={option.value}
                                                    value={option.value}
                                                    disabled={option.disabled}
                                                    className={`sws-option ${option.disabled ? "disabled" : ""}`}
                                                    onClick={() => !option.disabled && handleSelectOption(option)}
                                                >
                                                    {option.customLabel ? option.customLabel : option.label}
                                                </Div>
                                                <InputField type="hidden" id={option.value} />
                                            </React.Fragment>
                                        );
                                    }
                                })
                            ) : (
                                <li className="sws-option disabled">No matches found</li>
                            )}
                        </Div>
                    </Div>
                )}
            </BaseInputComponent>
        );
    },
);

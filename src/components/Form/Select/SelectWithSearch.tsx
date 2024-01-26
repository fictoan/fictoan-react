import React, { useState, useRef, useEffect } from "react";

import { Element } from "../../Element/Element";
import { Div } from "../../Element/Tags";
import { InputField } from "../InputField/InputField";
import { BaseInputComponent } from "../BaseInputComponent/BaseInputComponent";

import {
    SelectWithSearchProps,
    OptGroupProps,
    OptionElementType,
    OptionProps,
    SelectElementType,
    SelectWithSearchElementType,
} from "./constants";

import "./select-with-search.css";

export const SelectWithSearch = React.forwardRef<SelectWithSearchElementType, SelectWithSearchProps>(
    ({ options, ...props }, ref) => {
        const [ isOpen, setIsOpen ]                 = useState(false);
        const [ selectedOption, setSelectedOption ] = useState<OptionProps | OptGroupProps | string | null>("");
        const [ searchValue, setSearchValue ]       = useState("");

        const dropdownRef = useRef(null);

        const filteredOptions = options.filter((option: { label: string; }) =>
            option.label.toLowerCase().includes(searchValue.toLowerCase()),
        );

        const handleSelectOption = (value: OptionProps | OptGroupProps) => {
            setSelectedOption(value);
            setIsOpen(false);
        };

        useEffect(() => {
            const handleClickOutside = (event: { target: any; }) => {
                // @ts-ignore
                if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
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
                ref={dropdownRef}
                {...props}
            >
                <Div className="sws-display" onClick={() => setIsOpen(!isOpen)}>
                    {/* @ts-ignore */}
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
                                            <Element<OptionElementType>
                                                as="option"
                                                key={option.value}
                                                value={option.value}
                                                disabled={option.disabled}
                                                className={`sws-option ${option.disabled ? "disabled" : ""}`}
                                                onClick={() => !option.disabled && handleSelectOption(option)}
                                            >
                                                {option.label}
                                            </Element>
                                        );
                                    }
                                })
                            ) : (
                                <li className="sws-option disabled">
                                    No matches found
                                </li>
                            )}
                        </Div>
                    </Div>
                )}
            </BaseInputComponent>
        );
    },
);

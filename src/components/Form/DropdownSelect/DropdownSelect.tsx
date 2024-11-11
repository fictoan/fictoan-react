import React, { useState, useRef, useEffect, MutableRefObject } from "react";
import { Element } from "../../Element/Element";
import { BaseInputComponent } from "../BaseInputComponent/BaseInputComponent";
import { Badge } from "../../Badge/Badge";
import { Div } from "../../Element/Tags";

import "./dropdown-select.css";

export interface DropdownOption {
    value: string;
    label: string;
    disabled?: boolean;
}

export interface DropdownSelectProps {
    options: DropdownOption[];
    value?: string[];
    onChange?: (values: string[]) => void;
    placeholder?: string;
    isMulti?: boolean;
    label?: string;
    id?: string;
    disabled?: boolean;
    className?: string;
}

export type DropdownSelectElementType = HTMLDivElement;

export const DropdownSelect = React.forwardRef(
    ({
         options,
         value = [],
         onChange,
         placeholder = "Select options...",
         isMulti = false,
         label,
         id,
         disabled,
         className,
         ...props
     }: DropdownSelectProps,
     ref: React.Ref<DropdownSelectElementType>
    ) => {
        const [isOpen, setIsOpen] = useState(false);
        const [selectedValues, setSelectedValues] = useState<string[]>(value);
        const dropdownRef = useRef() as MutableRefObject<HTMLDivElement>;
        const effectiveRef = (ref || dropdownRef) as React.RefObject<HTMLDivElement>;

        // Handle selection of an option
        const handleSelect = (option: DropdownOption) => {
            if (option.disabled) return;

            let newValues: string[];
            if (isMulti) {
                newValues = selectedValues.includes(option.value)
                    ? selectedValues.filter(v => v !== option.value)
                    : [...selectedValues, option.value];
            } else {
                newValues = [option.value];
                setIsOpen(false);
            }

            setSelectedValues(newValues);
            onChange?.(newValues);
        };

        // Handle removal of a selected option
        const handleDelete = (e: React.MouseEvent<HTMLElement>, valueToRemove: string) => {
            e.stopPropagation(); // Prevent opening the dropdown when removing a badge
            const newValues = selectedValues.filter(v => v !== valueToRemove);
            setSelectedValues(newValues);
            onChange?.(newValues);
        };

        // Handle outside clicks
        useEffect(() => {
            const handleClickOutside = (event: MouseEvent) => {
                if (effectiveRef.current && !effectiveRef.current.contains(event.target as Node)) {
                    setIsOpen(false);
                }
            };

            document.addEventListener("mousedown", handleClickOutside);
            return () => document.removeEventListener("mousedown", handleClickOutside);
        }, []);

        // Get selected option objects
        const selectedOptions = options.filter(opt =>
            selectedValues.includes(opt.value)
        );

        return (
            <BaseInputComponent<DropdownSelectElementType>
                as={Div}
                ref={effectiveRef}
                data-dropdown-select
                data-disabled={disabled}
                data-open={isOpen}
                className={className}
                label={label}
                {...props}
            >
                <Div
                    className="selected-options"
                    onClick={() => !disabled && setIsOpen(!isOpen)}
                    tabIndex={disabled ? -1 : 0}
                >
                    {selectedOptions.length > 0 ? (
                        <Div className="badge-container">
                            {selectedOptions.map(option => (
                                <Badge
                                    key={option.value}
                                    withDelete={isMulti}
                                    onDelete={(e) => handleDelete(e, option.value)}
                                    size="small"
                                    shape="rounded"
                                >
                                    {option.label}
                                </Badge>
                            ))}
                        </Div>
                    ) : (
                        <Div className="placeholder">{placeholder}</Div>
                    )}
                </Div>

                {isOpen && !disabled && (
                    <Div className="options-container">
                        {options.map(option => (
                            <Div
                                key={option.value}
                                className={`option ${
                                    option.disabled ? "disabled" : ""
                                } ${
                                    selectedValues.includes(option.value) ? "selected" : ""
                                }`}
                                onClick={() => handleSelect(option)}
                            >
                                {option.label}
                            </Div>
                        ))}
                    </Div>
                )}
            </BaseInputComponent>
        );
    }
);

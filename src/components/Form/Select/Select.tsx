// FRAMEWORK ===========================================================================================================
import React, { useMemo } from "react";

// FICTOAN =============================================================================================================
import { Element } from "../../Element/Element";
import { Div } from "../../Element/Tags";
import { BaseInputComponent } from "../BaseInputComponent/BaseInputComponent";

// STYLES ==============================================================================================================
import "./select.css";

// TYPES ===============================================================================================================
import {
    OptionProps,
    OptGroupProps,
    SelectProps,
    OptionElementType,
    SelectElementType,
} from "./constants";

// COMPONENT ///////////////////////////////////////////////////////////////////////////////////////////////////////////
const SelectWithOptions = ({ id, name, options, className, onChange, ...props }: SelectProps) => {
    // Use ID as default for name if it’s not provided
    const derivedName = useMemo(() => name || id, [name, id]);

    const renderOption = (option: OptionProps) => (
        <Element<OptionElementType>
            as="option"
            key={option.value}
            value={option.value}
            disabled={option.disabled}
        >
            {option.label}
        </Element>
    );

    const renderOptGroup = (group: OptGroupProps) => (
        <Element<HTMLOptGroupElement>
            as="optgroup"
            key={group.label}
            label={group.label}
        >
            {group.options.map(renderOption)}
        </Element>
    );

    const handleChange = (value: string) => {
        if (onChange) {
            onChange(value);
        }
    };

    return (
        <Div data-select className={className} disabled={props.disabled}>
            <Element<SelectElementType>
                as="select"
                id={id}
                name={derivedName}
                onChange={(value: string) => handleChange(value)}
                {...props}
            >
                {options.map((option) =>
                    "options" in option ? renderOptGroup(option) : renderOption(option)
                )}
            </Element>
        </Div>
    );
};

export const Select = React.forwardRef((props: SelectProps, ref: React.Ref<SelectElementType>) => {
    return (
        <BaseInputComponent<SelectElementType>
            as={SelectWithOptions}
            ref={ref}
            {...props}
        />
    );
});

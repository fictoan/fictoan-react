// FRAMEWORK ===========================================================================================================
import React, { useMemo } from "react";

// FICTOAN =============================================================================================================
import { Element } from "../../Element/Element";
import { BaseInputComponent } from "../BaseInputComponent/BaseInputComponent";

// STYLES ==============================================================================================================
import "./checkbox.css";

// TYPES ===============================================================================================================
import { BaseInputComponentProps } from "../BaseInputComponent/constants";

export type CheckboxElementType = HTMLInputElement;
export type CheckboxProps = Omit<BaseInputComponentProps<CheckboxElementType>, "as" | "onChange" | "value"> & {
    value          ? : string;
    defaultChecked ? : boolean;
    checked        ? : boolean;
    onChange       ? : (checked: boolean) => void;
};

// COMPONENT ///////////////////////////////////////////////////////////////////////////////////////////////////////////
export const Checkbox = React.forwardRef(
    ({ id, name, value, onChange, checked, defaultChecked, ...props }: CheckboxProps, ref: React.Ref<CheckboxElementType>) => {
        // Use ID as default for name and value if they’re not provided
        const derivedName = useMemo(() => name || id, [name, id]);

        // Handle the change event to return boolean instead of event
        const handleChange = (value: string) => {
            // Since we're dealing with a checkbox, the value parameter isn't relevant
            // Instead, we need to check the current checked state
            const isChecked = !checked;
            onChange?.(isChecked);
        };

        return (
            <Element<CheckboxElementType> as="div" data-checkbox ref={ref}>
                <BaseInputComponent
                    as="input"
                    type="checkbox"
                    id={id}
                    name={derivedName}
                    value={value}
                    checked={checked}
                    defaultChecked={defaultChecked}
                    onChange={handleChange}
                    {...props}
                />
            </Element>
        );
    }
);

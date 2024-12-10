// FRAMEWORK ===========================================================================================================
import React, { useMemo } from "react";

// FICTOAN =============================================================================================================
import { Element } from "../../Element/Element";
import { BaseInputComponent } from "../BaseInputComponent/BaseInputComponent";

// STYLES ==============================================================================================================
import "./switch.css";

// TYPES ===============================================================================================================
import { BaseInputComponentProps } from "../BaseInputComponent/constants";

export interface SwitchCustomProps {
    size ? : "small" | "medium" | "large";
}

export type SwitchElementType = HTMLInputElement;
export type SwitchProps = Omit<BaseInputComponentProps<SwitchElementType>,
    keyof SwitchCustomProps | "as" | "onChange" | "value"> & SwitchCustomProps & {
    onChange       ? : (checked: boolean) => void;
    checked        ? : boolean;
    defaultChecked ? : boolean;
};

// COMPONENT ///////////////////////////////////////////////////////////////////////////////////////////////////////////
export const Switch = React.forwardRef(
    (
        {
            id,
            name,
            onChange,
            checked,
            defaultChecked,
            size = "medium",
            ...props
        }: SwitchProps, ref: React.Ref<SwitchElementType>) => {
        // Use ID as default for name and value if they’re not provided
        const derivedName  = useMemo(() => name || id, [ name, id ]);

        // Handle the change event to return boolean instead of event
        const handleChange = (value: string) => {
            // Since we're dealing with a switch, the value parameter isn't relevant
            // Instead, we need to check the current checked state
            const isChecked = !checked;
            onChange?.(isChecked);
        };

        return (
            <Element<SwitchElementType>
                as="div"
                data-switch
                ref={ref}
                className={`size-${size}`}
            >
                <BaseInputComponent
                    as="input"
                    type="checkbox"
                    id={id}
                    name={derivedName}
                    checked={checked}
                    defaultChecked={defaultChecked}
                    onChange={handleChange}
                    {...props}
                />
            </Element>
        );
    },
);

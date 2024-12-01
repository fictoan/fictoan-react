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
export type SwitchProps = Omit<BaseInputComponentProps<SwitchElementType>, keyof SwitchCustomProps | "as"> &
    SwitchCustomProps;

// COMPONENT ///////////////////////////////////////////////////////////////////////////////////////////////////////////
export const Switch = React.forwardRef(
    ({ id, name, value, size = "medium", ...props }: SwitchProps, ref: React.Ref<SwitchElementType>) => {
        // Use ID as default for name and value if they’re not provided
        const derivedName = useMemo(() => name || id, [name, id]);
        const derivedValue = useMemo(() => value || id, [value, id]);

        return (
            <Element<SwitchElementType> as="div" data-switch ref={ref} className={`size-${size}`}>
                <BaseInputComponent
                    as="input"
                    type="checkbox"
                    id={id}
                    name={derivedName}
                    value={derivedValue}
                    {...props}
                />
            </Element>
        );
    }
);

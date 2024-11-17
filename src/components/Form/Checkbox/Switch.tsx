// FRAMEWORK ===========================================================================================================
import React from "react";

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
    ({ size = "medium", ...props }: SwitchProps, ref: React.Ref<SwitchElementType>) => {
        return (
            <Element<SwitchElementType> as="div" data-switch ref={ref} className={`size-${size}`}>
                <BaseInputComponent as="input" type="checkbox" {...props} />
            </Element>
        );
    }
);

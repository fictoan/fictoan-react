// FRAMEWORK ===========================================================================================================
import React from "react";

// FICTOAN =============================================================================================================
import { BaseInputComponent } from "../BaseInputComponent/BaseInputComponent";

// STYLES ==============================================================================================================
import "./input-field.css";

// TYPES ===============================================================================================================
import { CommonAndHTMLProps } from "../../Element/constants";
import { InputCommonProps, InputIconProps } from "../BaseInputComponent/constants";
import { InputLabelCustomProps } from "../InputLabel/InputLabel";

export type InputFieldElementType = HTMLInputElement;
export type InputFieldProps = CommonAndHTMLProps<InputFieldElementType> &
    InputLabelCustomProps &
    InputCommonProps &
    InputIconProps;

// COMPONENT ///////////////////////////////////////////////////////////////////////////////////////////////////////////
export const InputField = React.forwardRef(
    (
        {
            "aria-label"   : ariaLabel,
            "aria-invalid" : ariaInvalid,
            ...props
        }: InputFieldProps, ref: React.Ref<InputFieldElementType>) => {
        return (
            <BaseInputComponent<InputFieldElementType>
                as="input"
                data-input-field
                ref={ref}
                aria-label={ariaLabel || props.label}
                aria-invalid={ariaInvalid || props.invalid || undefined}
                aria-required={props.required}
                placeholder=" "
                {...props}
            />
        );
    }
);

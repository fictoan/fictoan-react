// FRAMEWORK ===========================================================================================================
import React from "react";

// FICTOAN =============================================================================================================
import { Element } from "../../Element/Element";
import { BaseInputComponent } from "../BaseInputComponent/BaseInputComponent";

// STYLES ==============================================================================================================
import "./checkbox.css";

// TYPES ===============================================================================================================
import { BaseInputComponentProps } from "../BaseInputComponent/constants";

export type CheckboxElementType = HTMLInputElement;
export type CheckboxProps = Omit<BaseInputComponentProps<CheckboxElementType>, "as">;

// COMPONENT ///////////////////////////////////////////////////////////////////////////////////////////////////////////
export const Checkbox = React.forwardRef(({ ...props }: CheckboxProps, ref: React.Ref<CheckboxElementType>) => {
    return (
        <Element<CheckboxElementType> as="div" data-checkbox ref={ref}>
            <BaseInputComponent as="input" type="checkbox" {...props} />
        </Element>
    );
});

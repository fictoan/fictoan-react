// FRAMEWORK ===========================================================================================================
import React from "react";

// FICTOAN =============================================================================================================
import { Element } from "../../Element/Element";

// TYPES ===============================================================================================================
import { CommonAndHTMLProps } from "../../Element/constants";

// prettier-ignore
export interface InputLabelCustomProps {
    label     ? : string;
    htmlFor   ? : string;
    hideLabel ? : boolean;
}

export type InputLabelElementType = HTMLLabelElement;
export type InputLabelProps = Omit<CommonAndHTMLProps<InputLabelElementType>, keyof InputLabelCustomProps> &
    InputLabelCustomProps;

// COMPONENT ///////////////////////////////////////////////////////////////////////////////////////////////////////////
export const InputLabel = React.forwardRef(
    (
        {
            label,
            hideLabel,
            htmlFor,
            ...props
        }: InputLabelProps,
        ref: React.Ref<InputLabelElementType>
    ) => {
        let classNames = [];

        if (hideLabel) {
            classNames.push("visually-hidden");
        }

        return (
            <Element<InputLabelElementType>
                as="label"
                ref={ref}
                htmlFor={htmlFor}
                classNames={classNames}
                {...props}
            >
                {label}
            </Element>
        );
    }
);

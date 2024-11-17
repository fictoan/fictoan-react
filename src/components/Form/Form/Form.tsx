// FRAMEWORK ===========================================================================================================
import React from "react";

// FICTOAN =============================================================================================================
import { Element } from "../../Element/Element";
import { Callout } from "../../Callout/Callout";

import { FormFieldsConfig, generateFormThroughConfig } from "./FormGenerator";

// STYLES ==============================================================================================================
import "./form.css";

// TYPES ===============================================================================================================
import { CommonAndHTMLProps, SpacingTypes } from "../../Element/constants";

// prettier-ignore
export interface FormCustomProps {
    spacing        ? : SpacingTypes;
    fields         ? : FormFieldsConfig[];
    onFieldsChange ? : React.FormEventHandler;
    errorText      ? : string;
}

export type FormElementType = HTMLFormElement;
export type FormProps = Omit<CommonAndHTMLProps<FormElementType>, keyof FormCustomProps> &
    FormCustomProps;

// COMPONENT ///////////////////////////////////////////////////////////////////////////////////////////////////////////
export const Form = React.forwardRef(
    (
        { spacing = "small", fields, onFieldsChange, children, errorText, ...props }: FormProps,
        ref: React.Ref<FormElementType>
    ) => {
        let classNames = [];
        if (spacing) {
            classNames.push(`spacing-${spacing}`);
        }

        if (fields && fields.length > 0) {
            children = [generateFormThroughConfig(fields, onFieldsChange, spacing), children];
        }

        return (
            <Element<FormElementType>
                as="form"
                data-form
                ref={ref}
                classNames={classNames}
                {...props}
            >
                {children}

                {errorText && <Callout kind="error">{errorText}</Callout>}
            </Element>
        );
    }
);

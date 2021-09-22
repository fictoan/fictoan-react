import React from "react";

import { Element } from "../../Element/Element";
import { CommonAndHTMLProps, SpacingTypes } from "../../Element/constants";
import { Callout } from "../../Callout/Callout";

import { FormWrapperStyled } from "./FormWrapper.styled";
import { FormFieldsConfig, generateFormThroughConfig } from "./FormGenerator";

// prettier-ignore
export interface FormWrapperCustomProps {
    spacing        ? : SpacingTypes;
    fields         ? : FormFieldsConfig[];
    onFieldsChange ? : React.FormEventHandler;
    errorText      ? : string;
}

export type FormWrapperElementType = HTMLFormElement;
export type FormWrapperProps = Omit<CommonAndHTMLProps<FormWrapperElementType>, keyof FormWrapperCustomProps> &
    FormWrapperCustomProps;

export const FormWrapper = React.forwardRef(
    ({ spacing = "small", fields, onFieldsChange, children, errorText, ...props }: FormWrapperProps, ref: React.Ref<FormWrapperElementType>) => {
        let classNames = [];

        if (spacing) {
            classNames.push(`spacing-${spacing}`);
        }

        if (fields && fields.length > 0) {
            children = [generateFormThroughConfig(fields, onFieldsChange, spacing), children];
        }

        return (
            <Element<FormWrapperElementType>
                as={FormWrapperStyled}
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

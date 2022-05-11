import React from "react";

import { Element } from "../../Element/Element";
import { CommonAndHTMLProps } from "../../Element/constants";

import { FormItemGroupStyled } from "./FormItemGroup.styled";

// prettier-ignore
export interface FormItemGroupCustomProps {
    isJoint      ? : boolean;
    retainLayout ? : boolean;
    spacing      ? : string;
}

export type FormItemGroupElementType = HTMLDivElement;
export type FormItemGroupProps =
    Omit<CommonAndHTMLProps<FormItemGroupElementType>, keyof FormItemGroupCustomProps>
    & FormItemGroupCustomProps;

export const FormItemGroup = React.forwardRef(
    ({ isJoint, retainLayout, spacing = "medium", children, ...props } : FormItemGroupProps, ref : React.Ref<FormItemGroupElementType>) => {
        let classNames = [];

        if (isJoint) {
            classNames.push("is-joint");
        }

        if (retainLayout) {
            classNames.push("retain-layout");
        }

        if (spacing) {
            classNames.push(`spacing-${spacing}`);
        }

        return (
            <Element<FormItemGroupElementType>
                as={FormItemGroupStyled} ref={ref}
                classNames={classNames} {...props}
            >
                {children}
            </Element>
        );
    }
);

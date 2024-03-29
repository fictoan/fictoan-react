import React from "react";

import { Element } from "../../Element/Element";
import { CommonAndHTMLProps, SpacingTypes } from "../../Element/constants";

import "./form-item-group.css";

// prettier-ignore
export interface FormItemGroupCustomProps {
    isJoint      ? : boolean;
    retainLayout ? : boolean;
    // spacing      ? : SpacingTypes;
}

export type FormItemGroupElementType = HTMLDivElement;
export type FormItemGroupProps = Omit<CommonAndHTMLProps<FormItemGroupElementType>, keyof FormItemGroupCustomProps> &
    FormItemGroupCustomProps;

export const FormItemGroup = React.forwardRef(
    (
        { isJoint, retainLayout, children, ...props }: FormItemGroupProps,
        ref: React.Ref<FormItemGroupElementType>
    ) => {
        let classNames = [];

        if (isJoint) {
            classNames.push("is-joint");
        }

        if (retainLayout) {
            classNames.push("retain-layout");
        }

        // if (spacing) {
        //     classNames.push(`spacing-${spacing}`);
        // }

        return (
            <Element<FormItemGroupElementType> as="div" data-form-item-group ref={ref} classNames={classNames} {...props}>
                {children}
            </Element>
        );
    }
);

import React from "react";

import { Element } from "../../Element/Element";
import { CommonAndHTMLProps } from "../../Element/constants";

import { FormItemGroupStyled } from "./FormItemGroup.styled";

// prettier-ignore
export interface FormItemGroupCustomProps {
    isJoint ? : boolean;
}

export type FormItemGroupElementType = HTMLDivElement;
export type FormItemGroupProps = Omit<CommonAndHTMLProps<FormItemGroupElementType>, keyof FormItemGroupCustomProps> & FormItemGroupCustomProps;

export const FormItemGroup = React.forwardRef(
    ({ isJoint, ...props }: FormItemGroupProps, ref: React.Ref<FormItemGroupElementType>) => {
        let classNames = [];

        if (isJoint) {
            classNames.push("is-joint");
        }

        return <Element<FormItemGroupElementType> as={FormItemGroupStyled} ref={ref} classNames={classNames} {...props} />;
    }
);

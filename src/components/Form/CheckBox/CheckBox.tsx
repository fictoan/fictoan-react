import React from "react";

import { Element } from "../../Element/Element";
import { BaseInputComponent } from "../BaseInputComponent/BaseInputComponent";
import { BaseInputComponentProps } from "../BaseInputComponent/constants";

import { CheckBoxStyled } from "./CheckBox.styled";

export type CheckboxElementType = HTMLInputElement;
export type CheckboxProps = Omit<BaseInputComponentProps<CheckboxElementType>, "as">;

export const CheckBox = React.forwardRef(({ ...props }: CheckboxProps, ref: React.Ref<CheckboxElementType>) => {
    return (
        <Element<CheckboxElementType> as={CheckBoxStyled} ref={ref}>
            <BaseInputComponent as="input" type="checkbox" {...props} />
        </Element>
    );
});

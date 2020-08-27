import React from "react";

import { Element } from "../../Element/Element";

import { BaseInputComponent } from "../BaseInputComponent/BaseInputComponent";
import { BaseInputComponentProps } from "../BaseInputComponent/constants";

import { SwitchStyled } from "./CheckBox.styled";

export type SwitchElementType = HTMLInputElement;
export type SwitchProps = BaseInputComponentProps<SwitchElementType>;

export const Switch = React.forwardRef(({ ...props }: SwitchProps, ref: React.Ref<SwitchElementType>) => {
    return (
        <Element<SwitchElementType> as={SwitchStyled} ref={ref}>
            <BaseInputComponent as="input" type="checkbox" {...props} />
        </Element>
    );
});

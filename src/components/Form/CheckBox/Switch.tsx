import React from "react";

import { Element } from "../../Element/Element";

import { BaseInputComponent } from "../BaseInputComponent/BaseInputComponent";
import { BaseInputComponentProps } from "../BaseInputComponent/constants";

import { SwitchStyled } from "./CheckBox.styled";


export type SwitchElementType = HTMLInputElement;
export type SwitchProps       = BaseInputComponentProps<SwitchElementType>;

export const Switch = ({...props}: SwitchProps) => {
    return (
        <Element<SwitchElementType>
            as={SwitchStyled}
        >
            <BaseInputComponent
                as="input"
                type="checkbox"
                {...props}
            />
        </Element>
    );
}

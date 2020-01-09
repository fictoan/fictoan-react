import React from "react";

import { Element } from "../../Element/Element";
import { BaseInputComponent } from "../BaseInputComponent/BaseInputComponent";

import { SwitchStyled } from "./CheckBox.styled";
import { SwitchProps, SwitchElementType } from "./constants";

export const Switch = (props: SwitchProps) => {
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

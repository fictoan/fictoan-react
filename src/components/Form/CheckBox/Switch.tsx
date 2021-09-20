import React from "react";

import { Element } from "../../Element/Element";

import { BaseInputComponent } from "../BaseInputComponent/BaseInputComponent";
import { BaseInputComponentProps } from "../BaseInputComponent/constants";

import { SwitchStyled } from "./CheckBox.styled";

export interface SwitchCustomProps {
    size ?: "small" | "medium" | "large";
}

export type SwitchElementType = HTMLInputElement;
export type SwitchProps = Omit<BaseInputComponentProps<SwitchElementType>, keyof SwitchCustomProps> & SwitchCustomProps;


export const Switch = React.forwardRef(({ size = "medium", ...props }: SwitchProps, ref: React.Ref<SwitchElementType>) => {
    return (
        <Element<SwitchElementType> as={SwitchStyled} ref={ref} className={`size-${size}`}>
            <BaseInputComponent as="input" type="checkbox" {...props} />
        </Element>
    );
});

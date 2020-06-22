import React from "react";

import { BaseInputComponent } from "../BaseInputComponent/BaseInputComponent";
import { CommonAndHTMLProps } from "../../Element/constants";
import { InputCommonProps } from "../BaseInputComponent/constants";
import { InputLabelProps } from "../InputLabel/InputLabel";
import { TextareaStyled } from "./Textarea.styled";


export type TextareaElementType = HTMLTextAreaElement;
export type TextareaProps       = CommonAndHTMLProps<TextareaElementType> & InputLabelProps & InputCommonProps;

export const Textarea = (props: TextareaProps) => {
    return (
        <BaseInputComponent<TextareaElementType>
            as={TextareaStyled}
            placeholder=" "
            {...props}
        />
    );
}

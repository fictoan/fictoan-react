import React from "react";

import { BaseInputComponent } from "../BaseInputComponent/BaseInputComponent";

import { TextareaStyled } from "./Textarea.styled";
import { TextareaProps, TextareaElementType } from "./constants";

export const Textarea = (props: TextareaProps) => {
    return (
        <BaseInputComponent<TextareaElementType>
            as={TextareaStyled}
            {...props}
        />
    );
};

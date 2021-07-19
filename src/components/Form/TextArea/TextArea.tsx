import React from "react";

import { BaseInputComponent } from "../BaseInputComponent/BaseInputComponent";
import { CommonAndHTMLProps } from "../../Element/constants";
import { InputCommonProps } from "../BaseInputComponent/constants";
import { InputLabelProps } from "../InputLabel/InputLabel";
import { TextAreaStyled } from "./TextArea.styled";

export type TextareaElementType = HTMLInputElement;
export type TextareaProps = CommonAndHTMLProps<TextareaElementType> & InputLabelProps & InputCommonProps;

export const TextArea = React.forwardRef((props: TextareaProps, ref: React.Ref<TextareaElementType>) => {
    return <BaseInputComponent<TextareaElementType> as={TextAreaStyled} ref={ref} placeholder=" " {...props} />;
});

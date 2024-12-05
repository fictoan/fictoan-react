import React from "react";

import { BaseInputComponent } from "../BaseInputComponent/BaseInputComponent";
import { CommonAndHTMLProps } from "../../Element/constants";
import { InputCommonProps } from "../BaseInputComponent/constants";
import { InputLabelProps } from "../InputLabel/InputLabel";

import "./textarea.css";

export type TextareaElementType = HTMLTextAreaElement;
export type TextareaProps = CommonAndHTMLProps<TextareaElementType> &
    InputLabelProps &
    InputCommonProps & {
    onChange?: (value: string) => void;  // Updated to handle direct value
    value?: string;
    rows?: number;
    cols?: number;
    minLength?: number;
    maxLength?: number;
    placeholder?: string;
    readOnly?: boolean;
    required?: boolean;
    autoComplete?: string;
};

export const TextArea = React.forwardRef((
    props: TextareaProps,
    ref: React.Ref<TextareaElementType>
) => {
    return (
        <BaseInputComponent<TextareaElementType>
            as="textarea"
            data-textarea
            ref={ref}
            placeholder=" "
            {...props}
        />
    );
});

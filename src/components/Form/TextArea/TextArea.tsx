import React from "react";

import { BaseInputComponent } from "../BaseInputComponent/BaseInputComponent";

import { TextAreaProps } from "./typings";

const TextArea = (props: TextAreaProps) => {
    return (
        <BaseInputComponent<HTMLTextAreaElement>
            Element="textarea"
            baseClassName="ff-input"
            {...props}
        />
    );
};

export default TextArea;

import React from "react";

import { BaseInputComponent } from "../BaseInputComponent/BaseInputComponent";

import { TextAreaProps } from "./constants";

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

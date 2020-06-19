import React from "react";

import { InputField } from "./InputField";
import { InputFieldProps } from "./InputField";


export const FileUpload = ({...props}: InputFieldProps) => {
    return (
        <InputField
            type="file"
            {...props}
        />
    );
}

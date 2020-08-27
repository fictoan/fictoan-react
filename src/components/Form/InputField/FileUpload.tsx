import React from "react";

import { InputField } from "./InputField";
import { InputFieldProps } from "./InputField";

export const FileUpload = React.forwardRef(({ ...props }: InputFieldProps, ref: React.Ref<HTMLInputElement>) => {
    return <InputField type="file" ref={ref} {...props} />;
});

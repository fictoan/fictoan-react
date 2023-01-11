import React from "react";

import { InputField } from "./InputField";
import { InputFieldProps } from "./InputField";

export type FileUploadProps = InputFieldProps;
export const FileUpload = React.forwardRef(({ ...props }: FileUploadProps, ref: React.Ref<HTMLInputElement>) => {
    return <InputField type="file" ref={ref} {...props} />;
});

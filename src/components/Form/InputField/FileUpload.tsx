// FRAMEWORK ===========================================================================================================
import React from "react";

// FICTOAN =============================================================================================================
import { InputField } from "./InputField";

// TYPES ===============================================================================================================
import { InputFieldProps } from "./InputField";

export type FileUploadProps = Omit<InputFieldProps, "type"> & {
    accept   ? : string;
    multiple ? : boolean;
    capture  ? : "user" | "environment";
};

// COMPONENT ///////////////////////////////////////////////////////////////////////////////////////////////////////////
export const FileUpload = React.forwardRef(
    (
        {
            accept,
            multiple,
            capture,
            "aria-label" : ariaLabel,
            label,
            ...props
        }: FileUploadProps, ref: React.Ref<HTMLInputElement>) => {
        return (
            <InputField
                type="file"
                ref={ref}
                accept={accept}
                multiple={multiple}
                capture={capture}
                aria-label={ariaLabel || label || "File upload"}
                {...props}
            />
        );
    }
);

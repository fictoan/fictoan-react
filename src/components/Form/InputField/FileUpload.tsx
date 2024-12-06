// FRAMEWORK ===========================================================================================================
import React from "react";

// FICTOAN =============================================================================================================
import { InputField } from "./InputField";

// TYPES ===============================================================================================================
import { InputFieldProps } from "./InputField";
import { InputSideElementProps, NoSideElements } from "../BaseInputComponent/constants";

export type FileUploadProps = Omit<InputFieldProps, "type" | keyof InputSideElementProps> & {
    accept   ? : string;
    multiple ? : boolean;
    capture  ? : "user" | "environment";
} & NoSideElements;

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

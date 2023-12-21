import React from "react";
import { CommonAndHTMLProps, SpacingTypes } from "../../Element/constants";
import { FormFieldsConfig } from "./FormGenerator";
export interface FormWrapperCustomProps {
    spacing?: SpacingTypes;
    fields?: FormFieldsConfig[];
    onFieldsChange?: React.FormEventHandler;
    errorText?: string;
}
export declare type FormWrapperElementType = HTMLFormElement;
export declare type FormWrapperProps = Omit<CommonAndHTMLProps<FormWrapperElementType>, keyof FormWrapperCustomProps> & FormWrapperCustomProps;
export declare const FormWrapper: React.ForwardRefExoticComponent<Omit<CommonAndHTMLProps<HTMLFormElement>, keyof FormWrapperCustomProps> & FormWrapperCustomProps & React.RefAttributes<HTMLFormElement>>;

import React, { ElementType, ReactNode } from "react";
import { ElementProps, SpacingTypes } from "../../Element/constants";
import { PortionProps } from "../../Portion/Portion";
import { InputLabelCustomProps } from "../InputLabel/InputLabel";
import { InputCommonProps } from "../BaseInputComponent/constants";
import { RadioGroupOption } from "../RadioButton/constants";
export declare type FormFieldsType = ElementProps<HTMLInputElement> & ElementProps<HTMLSelectElement> & ElementProps<HTMLTextAreaElement> & InputLabelCustomProps & InputCommonProps;
export declare type FormFieldsConfigBase = PortionProps & FormFieldsType;
interface FormFieldOptionsType extends RadioGroupOption {
    id: string;
    label: string;
    value: string;
}
export interface FormFieldsConfig extends FormFieldsConfigBase {
    as: ElementType;
    options?: FormFieldOptionsType[];
}
export declare const generateFormThroughConfig: (fields: FormFieldsConfig[], onFieldsChange: React.FormEventHandler | null, spacing: SpacingTypes) => ReactNode;
export {};

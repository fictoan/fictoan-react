import React from "react";
import { CommonAndHTMLProps } from "../../Element/constants";
import { InputCommonProps } from "../BaseInputComponent/constants";
import { InputLabelProps } from "../InputLabel/InputLabel";
export declare type TextareaElementType = HTMLInputElement;
export declare type TextareaProps = CommonAndHTMLProps<TextareaElementType> & InputLabelProps & InputCommonProps;
export declare const TextArea: React.ForwardRefExoticComponent<CommonAndHTMLProps<HTMLInputElement> & Omit<CommonAndHTMLProps<HTMLLabelElement>, keyof import("../InputLabel/InputLabel").InputLabelCustomProps> & import("../InputLabel/InputLabel").InputLabelCustomProps & InputCommonProps & React.RefAttributes<HTMLInputElement>>;

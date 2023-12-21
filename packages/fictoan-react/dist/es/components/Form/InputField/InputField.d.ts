import React from "react";
import { CommonAndHTMLProps } from "../../Element/constants";
import { InputCommonProps, InputIconProps } from "../BaseInputComponent/constants";
import { InputLabelCustomProps } from "../InputLabel/InputLabel";
export declare type InputFieldElementType = HTMLInputElement;
export declare type InputFieldProps = CommonAndHTMLProps<InputFieldElementType> & InputLabelCustomProps & InputCommonProps & InputIconProps;
export declare const InputField: React.ForwardRefExoticComponent<CommonAndHTMLProps<HTMLInputElement> & InputLabelCustomProps & InputCommonProps & InputIconProps & React.RefAttributes<HTMLInputElement>>;

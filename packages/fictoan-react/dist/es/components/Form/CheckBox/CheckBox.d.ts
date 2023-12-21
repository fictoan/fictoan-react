import React from "react";
import { BaseInputComponentProps } from "../BaseInputComponent/constants";
export declare type CheckboxElementType = HTMLInputElement;
export declare type CheckboxProps = Omit<BaseInputComponentProps<CheckboxElementType>, "as">;
export declare const CheckBox: React.ForwardRefExoticComponent<CheckboxProps & React.RefAttributes<HTMLInputElement>>;

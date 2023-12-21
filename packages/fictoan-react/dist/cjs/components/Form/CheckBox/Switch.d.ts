import React from "react";
import { BaseInputComponentProps } from "../BaseInputComponent/constants";
export interface SwitchCustomProps {
    size?: "small" | "medium" | "large";
}
export declare type SwitchElementType = HTMLInputElement;
export declare type SwitchProps = Omit<BaseInputComponentProps<SwitchElementType>, keyof SwitchCustomProps | "as"> & SwitchCustomProps;
export declare const Switch: React.ForwardRefExoticComponent<Omit<BaseInputComponentProps<HTMLInputElement>, "size" | "as"> & SwitchCustomProps & React.RefAttributes<HTMLInputElement>>;

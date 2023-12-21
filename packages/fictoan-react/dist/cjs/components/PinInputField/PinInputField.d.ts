import React from "react";
import { CommonAndHTMLProps, SpacingTypes } from "../Element/constants";
declare type PinInputFieldCustomProps = {
    numberOfFields: number;
    onChange?: (value: string) => void;
    type?: "alphanumeric" | "number";
    mask?: boolean;
    otp?: boolean;
    autoFocus?: boolean;
    spacing?: SpacingTypes;
};
export declare type PinInputFieldElementType = HTMLDivElement;
export declare type PinInputFieldProps = Omit<CommonAndHTMLProps<PinInputFieldElementType>, keyof PinInputFieldCustomProps> & PinInputFieldCustomProps;
export declare const PinInputField: React.ForwardRefExoticComponent<Omit<CommonAndHTMLProps<HTMLDivElement>, keyof PinInputFieldCustomProps> & PinInputFieldCustomProps & React.RefAttributes<HTMLDivElement>>;
export {};

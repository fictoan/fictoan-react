import React from "react";
import { CommonAndHTMLProps } from "../Element/constants";
export interface SpinnerCustomProps {
    size?: "tiny" | "small" | "medium" | "large" | "huge";
}
export declare type SpinnerElementType = HTMLDivElement;
export declare type SpinnerProps = Omit<CommonAndHTMLProps<SpinnerElementType>, keyof SpinnerCustomProps> & SpinnerCustomProps;
export declare const Spinner: React.ForwardRefExoticComponent<Omit<CommonAndHTMLProps<HTMLDivElement>, "size"> & SpinnerCustomProps & React.RefAttributes<HTMLDivElement>>;

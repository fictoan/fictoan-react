import React from "react";
import { CommonAndHTMLProps } from "../Element/constants";
export declare type CardElementType = HTMLDivElement;
export declare type CardProps = CommonAndHTMLProps<CardElementType>;
export declare const Card: React.ForwardRefExoticComponent<CardProps & React.RefAttributes<HTMLDivElement>>;

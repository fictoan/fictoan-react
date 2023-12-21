import React from "react";
import { CommonAndHTMLProps } from "../Element/constants";
export interface InfoPanelCustomProps {
    width?: "tiny" | "small" | "medium" | "large" | "huge";
    isOpen?: boolean;
    onCloseCallback?: () => void;
    closeOnClickOutside?: boolean;
}
export declare type InfoPanelElementType = HTMLDivElement;
export declare type InfoPanelProps = Omit<CommonAndHTMLProps<InfoPanelElementType>, keyof InfoPanelCustomProps> & InfoPanelCustomProps;
export declare const InfoPanel: React.ForwardRefExoticComponent<Omit<CommonAndHTMLProps<HTMLDivElement>, keyof InfoPanelCustomProps> & InfoPanelCustomProps & React.RefAttributes<HTMLDivElement>>;

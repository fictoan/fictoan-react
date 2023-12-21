import React from "react";
import { ColourPropTypes, CommonAndHTMLProps } from "../Element/constants";
export interface BottomDrawerCustomProps {
    isOpen?: boolean;
    onCloseCallback?: () => void;
    overlayOpacity?: number;
    overlayColour?: ColourPropTypes;
    overlayColor?: ColourPropTypes;
    closeOnClickOutside?: boolean;
}
export declare type BottomDrawerElementType = HTMLDivElement;
export declare type BottomDrawerProps = Omit<CommonAndHTMLProps<BottomDrawerElementType>, keyof BottomDrawerCustomProps> & BottomDrawerCustomProps;
export declare const BottomDrawer: React.ForwardRefExoticComponent<Omit<CommonAndHTMLProps<HTMLDivElement>, keyof BottomDrawerCustomProps> & BottomDrawerCustomProps & React.RefAttributes<HTMLDivElement>>;

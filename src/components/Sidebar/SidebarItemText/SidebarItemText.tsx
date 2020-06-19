import React from "react";

import { Element } from "../../Element/Element";
import { CommonAndHTMLProps } from "../../Element/constants";

import { SidebarItemTextStyled } from "../SidebarItemText/SidebarItemText.styled";


export interface SidebarItemTextCustomProps {
    linkText  : string;
    weight  ? : "100" | "200" | "300" | "400" | "500" | "600" | "700" | "800" | "900";
    size    ? : "tiny" | "small" | "medium" | "large" | "huge";
}

export type SidebarItemTextElementType = HTMLParagraphElement;
export type SidebarItemTextProps       = CommonAndHTMLProps<SidebarItemTextElementType> & SidebarItemTextCustomProps;

export const SidebarItemText = ({
    linkText,
    weight,
    size,
    ...props
}: SidebarItemTextProps) => {
    let classNames = [];

    if (weight) {
        classNames.push(`weight-${weight}`);
    }

    if (size) {
        classNames.push(`text-${size}`);
    }

    return (
        <Element<SidebarItemTextElementType>
            as={SidebarItemTextStyled}
            classNames={classNames}
            {...props}
        >
            {linkText}
        </Element>
    );
}

import React from "react";

import { Element } from "../../Element/Element";

import { SidebarItemTextStyled } from "../SidebarItemText/SidebarItemText.styled";
import { SidebarItemTextProps, SidebarItemTextElementType } from "../constants";

export const SidebarItemText = ({ linkText, weight, size, className, ...props }: SidebarItemTextProps) => {
    const classNames = [ className ];

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

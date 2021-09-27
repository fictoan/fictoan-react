import React from "react";

import { Element } from "../../Element/Element";
import { CommonAndHTMLProps } from "../../Element/constants";

import { SidebarItemTextStyled } from "../SidebarItemText/SidebarItemText.styled";

// prettier-ignore
export interface SidebarItemTextCustomProps {
    linkText  : string;
    weight  ? : "100" | "200" | "300" | "400" | "500" | "600" | "700" | "800" | "900";
    size    ? : "tiny" | "small" | "medium" | "large" | "huge";
}

export type SidebarItemTextElementType = HTMLParagraphElement;
export type SidebarItemTextProps = Omit<CommonAndHTMLProps<SidebarItemTextElementType>, keyof SidebarItemTextCustomProps> & SidebarItemTextCustomProps;

export const SidebarItemText = React.forwardRef(
    ({ linkText, weight, size, ...props }: SidebarItemTextProps, ref: React.Ref<SidebarItemTextElementType>) => {
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
                ref={ref}
                classNames={classNames}
                {...props}
            >
                {linkText}
            </Element>
        );
    }
);

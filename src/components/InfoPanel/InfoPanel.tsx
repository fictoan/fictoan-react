import React from "react";

import { createClassName } from "src/utils/classNames";
import { Element } from "../Element/Element";

import { InfoPanelStyled } from "./InfoPanel.styled"
import { InfoPanelProps, InfoPanelElementType } from "./constants";

export const InfoPanel = ({ open, width, className, ...props }: InfoPanelProps) => {
    const classNames = [ className ];

    if (open) {
        classNames.push("open");
    }

    if (width) {
        classNames.push(width);
    }

    return (
        <Element<InfoPanelElementType>
            as={InfoPanelStyled}
            className={createClassName(classNames)}
            {...props}
        />
    );
}

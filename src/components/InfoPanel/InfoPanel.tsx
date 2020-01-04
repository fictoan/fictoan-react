import React from "react";

import { createClassName } from "src/utils/classNames";
import { BaseComponent } from "../BaseComponent/BaseComponent";

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

    return <BaseComponent<InfoPanelElementType>
        Element={InfoPanelStyled}
        baseClassName="info-panel"
        className={createClassName(classNames)}
        {...props}
    />
};

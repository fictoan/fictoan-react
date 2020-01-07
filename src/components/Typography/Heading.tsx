import React from "react";

import { createClassName } from "src/utils/classNames";
import { BaseComponent } from "../BaseComponent/BaseComponent";

import { HeadingStyled } from "./TypographyStyled";
import { HeadingProps, HeadingElementType } from "./constants";

export const Heading = ({ as, weight, className, ...props }: HeadingProps) => {
    const classNames = [ className ];

    if (weight) {
        classNames.push(`weight-${weight}`);
    }

    return <BaseComponent<HeadingElementType>
        Element={as}
        className={createClassName(classNames)}
        {...props}
    />
};

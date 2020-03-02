import React from "react";

import { createClassName } from "./../../utils/classNames";
import { Element } from "../Element/Element";

import { HeadingProps, HeadingElementType } from "./constants";

export const Heading = ({ as, weight, isSans, isSerif, isMono, align, className, ...props }: HeadingProps) => {
    const classNames = [ className ];

    if (weight) {
        classNames.push(`weight-${weight}`);
    }

    if (isSans) {
        classNames.push("font-sans");
    }

    if (isSerif) {
        classNames.push("font-serif");
    }

    if (isMono) {
        classNames.push("font-mono");
    }

    if (align) {
        classNames.push(`text-${align}`);
    }

    return (
        <Element<HeadingElementType>
            as={as}
            className={createClassName(classNames)}
            {...props}
        />
    );
}

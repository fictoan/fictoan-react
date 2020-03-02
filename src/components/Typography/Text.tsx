import React from "react";

import { createClassName } from "../../utils/classNames";
import { Element }   from "../Element/Element";

import { TextProps, TextElementType } from "./constants";

export const Text = ({ weight, size, isSans, isSerif, isMono, align, className, ...props }: TextProps) => {
    const classNames = [ className ];

    if (weight) {
        classNames.push(`weight-${weight}`);
    }

    if (size) {
        classNames.push(`text-${size}`);
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
        classNames.push(`text${align}`);
    }

    return (
        <Element<TextElementType>
            as="p"
            className={createClassName(classNames)}
            {...props}
        />
    );
}

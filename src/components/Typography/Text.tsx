import React from "react";

import { createClassName } from "src/utils/classNames";
import { Element }   from "../Element/Element";

import { TextProps, TextElementType } from "./constants";

export const Text = ({ weight, size, isSans, isSerif, isMono, isCentered, className, ...props }: TextProps) => {
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

    if (isCentered) {
        classNames.push("text-centre");
    }

    return (
        <Element<TextElementType>
            as="p"
            className={createClassName(classNames)}
            {...props}
        />
    );
}

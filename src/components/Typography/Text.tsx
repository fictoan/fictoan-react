import React from "react";

import { createClassName } from "src/utils/classNames";
import { BaseComponent }   from "../BaseComponent/BaseComponent";

import { TextProps, TextElementType } from "./constants";

export const Text = ({ weight, size, className, ...props }: TextProps) => {
    const classNames = [ className ];

    if (weight) {
        classNames.push(`weight-${weight}`);
    }

    if (size) {
        classNames.push(`text-${size}`)
    }

    return (
        <BaseComponent<TextElementType>
            Element="p"
            className={createClassName(classNames)}
            {...props}
        />
    );
};

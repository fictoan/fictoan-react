import React from "react";

import { Element } from "../Element/Element";
import { CommonAndHTMLProps } from "../Element/constants";


export interface TextCustomProps {
    isSans  ? : boolean;
    isSerif ? : boolean;
    isMono  ? : boolean;
    weight  ? : "100" | "200" | "300" | "400" | "500" | "600" | "700" | "800" | "900";
    size    ? : "tiny" | "small" | "medium" | "large" | "huge";
    align   ? : "left" | "centre" | "center" | "right";
}

export type TextElementType = HTMLParagraphElement;
export type TextProps       = CommonAndHTMLProps<TextElementType> & TextCustomProps;

export const Text = ({
    weight,
    size,
    isSans,
    isSerif,
    isMono,
    align,
    className,
    ...props
}: TextProps) => {
    let classNames = [];

    if (className) {
        classNames.push(className);
    }

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
        classNames.push(`text-${align}`);
    }

    return (
        <Element<TextElementType>
            as="p"
            classNames={classNames}
            {...props}
        />
    );
}

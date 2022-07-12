import React from "react";

import { Element } from "../Element/Element";
import { CommonAndHTMLProps, WeightTypes } from "../Element/constants";

// prettier-ignore
export interface TextCustomProps {
    isSans    ? : boolean;
    isSerif   ? : boolean;
    isMono    ? : boolean;
    isSubtext ? : boolean;
    weight    ? : WeightTypes;
    size      ? : "nano" | "micro" | "tiny" | "small" | "medium" | "large" | "huge";
    align     ? : "left" | "centre" | "center" | "right";
}

export type TextElementType = HTMLParagraphElement;
export type TextProps = Omit<CommonAndHTMLProps<TextElementType>, keyof TextCustomProps> & TextCustomProps;

export const Text = React.forwardRef(
    ({ weight, size, isSans, isSerif, isMono, align, ...props }: TextProps, ref: React.Ref<TextElementType>) => {
        let classNames = [];

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

        return <Element<TextElementType> as="p" ref={ref} classNames={classNames} {...props} />;
    }
);

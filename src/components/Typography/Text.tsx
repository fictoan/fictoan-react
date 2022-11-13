import React from "react";

import { Element } from "../Element";
import { CommonAndHTMLProps, SpacingTypes, WeightTypes } from "../Element/constants";

// prettier-ignore
export interface TextCustomProps {
    fontStyle ? : "sans-serif" | "serif" | "monospace";
    weight    ? : WeightTypes;
    isSubtext ? : boolean;
    size      ? : SpacingTypes;
    align     ? : "left" | "centre" | "center" | "right";
}

export type TextElementType = HTMLParagraphElement;
export type TextProps = Omit<CommonAndHTMLProps<TextElementType>, keyof TextCustomProps> & TextCustomProps;

export const Text = React.forwardRef(
    (
        { weight, size, fontStyle = "sans-serif", align, isSubtext, ...props }: TextProps,
        ref: React.Ref<TextElementType>
    ) => {
        let classNames = [];

        if (weight) {
            classNames.push(`weight-${weight}`);
        }

        if (size) {
            classNames.push(`text-${size}`);
        }

        if (fontStyle) {
            classNames.push(`font-${fontStyle}`);
        }

        if (isSubtext) {
            classNames.push("sub-text");
        }

        if (align) {
            classNames.push(`text-${align}`);
        }

        return <Element<TextElementType> as="p" ref={ref} classNames={classNames} {...props} />;
    }
);

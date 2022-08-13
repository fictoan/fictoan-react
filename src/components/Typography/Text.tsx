import React from "react";

import { Element } from "../Element/Element";
import { CommonAndHTMLProps, SpacingTypes, WeightTypes } from "../Element/constants";

// prettier-ignore
export interface TextCustomProps {
    style     ? : "sans-serif" | "serif" | "mono";
    weight    ? : WeightTypes;
    isSubtext ? : boolean;
    size      ? : SpacingTypes;
    align     ? : "left" | "centre" | "center" | "right";
}

export type TextElementType = HTMLParagraphElement;
export type TextProps = Omit<CommonAndHTMLProps<TextElementType>, keyof TextCustomProps> & TextCustomProps;

export const Text = React.forwardRef(
    ({ weight, size, style = "sans-serif", align, isSubtext, ...props }: TextProps, ref: React.Ref<TextElementType>) => {
        let classNames = [];

        if (weight) {
            classNames.push(`weight-${weight}`);
        }

        if (size) {
            classNames.push(`text-${size}`);
        }

        if (style) {
            classNames.push(style);
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

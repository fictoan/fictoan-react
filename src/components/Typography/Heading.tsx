import React from "react";

import { Element } from "../Element";
import { CommonAndHTMLProps, WeightTypes } from "../Element/constants";

// prettier-ignore
export interface HeadingCustomProps {
    as          : "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
    fontStyle ? : "sans-serif" | "serif" | "monospace";
    weight    ? : WeightTypes;
    align     ? : "left" | "centre" | "center" | "right";
}

export type HeadingElementType = HTMLHeadingElement;
export type HeadingProps = Omit<CommonAndHTMLProps<HeadingElementType>, keyof HeadingCustomProps> & HeadingCustomProps;

export const Heading = React.forwardRef(
    ({ as, weight, fontStyle = "sans-serif", align, ...props }: HeadingProps, ref: React.Ref<HeadingElementType>) => {
        let classNames = [];

        if (weight) {
            classNames.push(`weight-${weight}`);
        }

        if (fontStyle) {
            classNames.push(`font-${fontStyle}`);
        }

        if (align) {
            classNames.push(`text-${align}`);
        }

        return <Element<HeadingElementType> as={as} ref={ref} classNames={classNames} {...props} />;
    }
);

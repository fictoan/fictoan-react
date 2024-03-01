import React from "react";

import { Element } from "../Element";
import { CommonAndHTMLProps, WeightTypes } from "../Element/constants";

// prettier-ignore
interface HeadingBaseProps {
    as        ? : "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
    fontStyle ? : "sans-serif" | "serif" | "monospace";
    weight    ? : WeightTypes;
    align     ? : "left" | "centre" | "center" | "right";
}

export type HeadingElementType = HTMLHeadingElement;
export type HeadingProps = Omit<CommonAndHTMLProps<HeadingElementType>, keyof HeadingBaseProps> & HeadingBaseProps;

const Heading = React.forwardRef(
    ({ fontStyle = "sans-serif", weight, align, ...props }: HeadingProps, ref: React.Ref<HeadingElementType>) => {
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

        return <Element<HeadingElementType> ref={ref} classNames={classNames} {...props} />;
    }
);

export const Heading1 = React.forwardRef((props: HeadingProps, ref: React.Ref<HeadingElementType>) => (
    <Heading as="h1" ref={ref} {...props} />
));

export const Heading2 = React.forwardRef((props: HeadingProps, ref: React.Ref<HeadingElementType>) => (
    <Heading as="h2" ref={ref} {...props} />
));

export const Heading3 = React.forwardRef((props: HeadingProps, ref: React.Ref<HeadingElementType>) => (
    <Heading as="h3" ref={ref} {...props} />
));

export const Heading4 = React.forwardRef((props: HeadingProps, ref: React.Ref<HeadingElementType>) => (
    <Heading as="h4" ref={ref} {...props} />
));

export const Heading5 = React.forwardRef((props: HeadingProps, ref: React.Ref<HeadingElementType>) => (
    <Heading as="h5" ref={ref} {...props} />
));

export const Heading6 = React.forwardRef((props: HeadingProps, ref: React.Ref<HeadingElementType>) => (
    <Heading as="h6" ref={ref} {...props} />
));

import React from "react";

import { Element } from "../Element/Element";
import { CommonAndHTMLProps } from "../Element/constants";

// prettier-ignore
export interface HeadingCustomProps {
    as        : "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
    isSans  ? : boolean;
    isSerif ? : boolean;
    isMono  ? : boolean;
    weight  ? : "100" | "200" | "300" | "400" | "500" | "600" | "700" | "800" | "900";
    align   ? : "left" | "centre" | "center" | "right";
}

export type HeadingElementType = HTMLHeadingElement;
export type HeadingProps = Omit<CommonAndHTMLProps<HeadingElementType>, keyof HeadingCustomProps> & HeadingCustomProps;

export const Heading = React.forwardRef(
    ({ as, weight, isSans, isSerif, isMono, align, ...props }: HeadingProps, ref: React.Ref<HeadingElementType>) => {
        let classNames = [];

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

        return <Element<HeadingElementType> as={as} ref={ref} classNames={classNames} {...props} />;
    }
);

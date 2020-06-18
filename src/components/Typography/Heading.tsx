import React from "react";

import { Element } from "../Element/Element";
import { CommonAndHTMLProps } from "../Element/constants";

export interface HeadingCustomProps {
    as        : "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
    isSans  ? : boolean;
    isSerif ? : boolean;
    isMono  ? : boolean;
    weight  ? : "100" | "200" | "300" | "400" | "500" | "600" | "700" | "800" | "900";
    align   ? : "left" | "centre" | "center" | "right";
}

export type HeadingElementType = HTMLHeadingElement;
export type HeadingProps       = CommonAndHTMLProps<HeadingElementType> & HeadingCustomProps;

export const Heading = ({
    as,
    weight,
    isSans,
    isSerif,
    isMono,
    align,
    className,
    ...props
}: HeadingProps) => {
    let classNames = [];

    if (className) {
        classNames.push(className);
    }

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

    return (
        <Element<HeadingElementType>
            as={as}
            classNames={classNames}
            {...props}
        />
    );
}

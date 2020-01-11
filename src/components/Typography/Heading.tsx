import React from "react";

import { createClassName } from "src/utils/classNames";
import { Element } from "../Element/Element";

import { HeadingProps, HeadingElementType } from "./constants";

export const Heading = ({ as, weight, className, ...props }: HeadingProps) => {
    const classNames = [ className ];

    if (weight) {
        classNames.push(`weight-${weight}`);
    }

    return (
        <Element<HeadingElementType>
            as={as}
            className={createClassName(classNames)}
            {...props}
        />
    );
}

import React from "react";

import { createClassName } from "src/utils/classNames";

import { BaseComponent } from "../BaseComponent/BaseComponent";
import { BaseAndHTMLProps } from "../BaseComponent/typings";

interface HeadingProps extends BaseAndHTMLProps<HTMLDivElement> {
    type: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
    weight?: "100" | "200" | "300" | "400" | "500" | "600" | "700" | "800" | "900";
}

const Heading = ({ type, weight, className, ...props }: HeadingProps) => {
    const classNames = [className];

    if (weight) {
        classNames.push(`weight-${weight}`);
    }

    return <BaseComponent<HTMLHeadingElement>
        Element={type}
        className={createClassName(classNames)}
        {...props}
    />
};

export default Heading;

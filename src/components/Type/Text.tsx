import React from "react";

import { createClassName } from "src/utils/classNames";

import { BaseComponent } from "../BaseComponent/BaseComponent";
import { BaseAndHTMLProps } from "../BaseComponent/typings";

interface TextProps extends BaseAndHTMLProps<HTMLDivElement> {
    weight?: "100" | "200" | "300" | "400" | "500" | "600" | "700" | "800" | "900";
    size?: "tiny" | "small" | "medium" | "large" | "huge";
}

const Text = ({ weight, size, className, ...props }: TextProps) => {
    const classNames = [className];

    if (weight) {
        classNames.push(`weight-${weight}`);
    }

    if (size) {
        classNames.push(`text-${size}`)
    }

    return (
        <BaseComponent<HTMLDivElement>
            Element="p"
            className={createClassName(classNames)}
            {...props}
        />
    );
};

export default Text;

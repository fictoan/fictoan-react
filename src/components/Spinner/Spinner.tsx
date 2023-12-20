import React from "react";

import { Element } from "../Element/Element";
import { CommonAndHTMLProps } from "../Element/constants";

import "./spinner.css";

// prettier-ignore
export interface SpinnerCustomProps {
    size ? : "tiny" | "small" | "medium" | "large" | "huge";
}

export type SpinnerElementType = HTMLDivElement;
export type SpinnerProps = Omit<CommonAndHTMLProps<SpinnerElementType>, keyof SpinnerCustomProps> & SpinnerCustomProps;

export const Spinner = React.forwardRef(
    ({ size = "medium", ...props }: SpinnerProps, ref: React.Ref<SpinnerElementType>) => {
        let classNames = [];

        if (size) {
            classNames.push(`size-${size}`);
        }

        return <Element<SpinnerElementType> as="div" data-spinner ref={ref} classNames={classNames} {...props} />;
    }
);

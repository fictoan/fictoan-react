import React from "react";

import { Element } from "../Element/Element";
import { CommonAndHTMLProps } from "../Element/constants";

import { ButtonStyled } from "./Button.styled";

// prettier-ignore
export interface ButtonCustomProps {
    kind      ? : "primary" | "secondary" | "tertiary" | "custom";
    size      ? : "tiny" | "small" | "medium" | "large" | "huge";
    shape     ? : "rounded" | "curved";
    shadow    ? : "mild" | "soft" | "hard";
    border    ? : string;
    isLoading ? : boolean;
    hasDelete ? : boolean;
}

export type ButtonElementType = HTMLButtonElement;
export type ButtonProps = CommonAndHTMLProps<ButtonElementType> & ButtonCustomProps;

export const Button = React.forwardRef(
    (
        { size, shape, shadow, border, kind, isLoading, hasDelete, ...props }: ButtonProps,
        ref: React.Ref<ButtonElementType>
    ) => {
        let classNames = [];

        if (kind) {
            classNames.push(kind);
        }

        if (size) {
            classNames.push(`size-${size}`);
        }

        if (shape) {
            classNames.push(`shape-${shape}`);
        }

        if (shadow) {
            classNames.push(`shadow-${shadow}`);
        }

        if (border) {
            classNames.push(`border-${border}`);
        }

        if (isLoading) {
            classNames.push("with-loader");
        }

        if (hasDelete) {
            classNames.push("with-delete");
        }

        return <Element<ButtonElementType> as={ButtonStyled} ref={ref} classNames={classNames} paddingTop="nano" paddingBottom="nano" paddingLeft="micro" paddingRight="micro" {...props} />;
    }
);

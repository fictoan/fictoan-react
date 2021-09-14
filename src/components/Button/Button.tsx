import React from "react";

import { Element } from "../Element/Element";
import { CommonAndHTMLProps } from "../Element/constants";

import { ButtonStyled } from "./Button.styled";

// prettier-ignore
export interface ButtonCustomProps {
    kind          ? : "primary" | "secondary" | "tertiary" | "custom";
    size          ? : "tiny" | "small" | "medium" | "large" | "huge";
    shape         ? : "rounded" | "curved" | "circular";
    shadow        ? : "mild" | "soft" | "hard";
    isLoading     ? : boolean;
    hasDelete     ? : boolean;
}

export type ButtonElementType = HTMLButtonElement;
export type ButtonProps = Omit<CommonAndHTMLProps<ButtonElementType>, keyof ButtonCustomProps> & ButtonCustomProps;

export const Button = React.forwardRef(
    ({ size, shape, shadow, kind, isLoading, hasDelete, ...props }: ButtonProps, ref: React.Ref<ButtonElementType>) => {
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

        if (isLoading) {
            classNames.push("is-loading");
        }

        if (hasDelete) {
            classNames.push("has-delete");
        }

        return <Element<ButtonElementType> as={ButtonStyled} ref={ref} classNames={classNames} {...props} />;
    }
);

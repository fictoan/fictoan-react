import React from "react";

import { Element } from "../Element/Element";
import { CommonAndHTMLProps } from "../Element/constants";

import { ButtonStyled } from "./Button.styled";


export interface ButtonCustomProps {
    kind      ? : "primary" | "secondary" | "custom";
    size      ? : "tiny" | "small" | "medium" | "large" | "huge";
    shape     ? : "rounded" | "curved";
    shadow    ? : "mild" | "soft" | "hard";
    border    ? : string;
    isLoading ? : boolean;
    hasDelete ? : boolean;
}

export type ButtonElementType = HTMLButtonElement;
export type ButtonProps       = CommonAndHTMLProps<ButtonElementType> & ButtonCustomProps;

export const Button = ({
   size,
   shape,
   shadow,
   border,
   kind,
   isLoading,
   hasDelete,
   className,
   ...props
}: ButtonProps) => {
    let classNames = [];

    if (className) {
        classNames.push(className);
    }

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

    return (
        <Element<ButtonElementType>
            as={ButtonStyled}
            classNames={classNames}
            {...props}
        />
    );
}

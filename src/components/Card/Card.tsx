import React from "react";

import { Element } from "../Element/Element";
import { CommonAndHTMLProps } from "../Element/constants";

import { CardStyled } from "./Card.styled";

// prettier-ignore
export interface CardCustomProps {
    shape  ? : "rounded" | "curved";
    shadow ? : "mild" | "soft" | "hard";
}

export type CardElementType = HTMLDivElement;
export type CardProps = CommonAndHTMLProps<CardElementType> & CardCustomProps;

export const Card = React.forwardRef(({ shadow, shape, ...props }: CardProps, ref: React.Ref<CardElementType>) => {
    let classNames = [];

    if (shape) {
        classNames.push(`shape-${shape}`);
    }

    if (shadow) {
        classNames.push(`shadow-${shadow}`);
    }

    return <Element<CardElementType> as={CardStyled} ref={ref} classNames={classNames} {...props} />;
});

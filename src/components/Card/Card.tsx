import React from "react";

import { Element } from "../Element/Element";
import { CommonAndHTMLProps } from "../Element/constants";

import { CardStyled } from "./Card.styled";

// prettier-ignore
export interface CardCustomProps {
    shape  ? : "rounded" | "curved";
}

export type CardElementType = HTMLDivElement;
export type CardProps = Omit<CommonAndHTMLProps<CardElementType>, keyof CardCustomProps> & CardCustomProps;

export const Card = React.forwardRef(({ shape, ...props }: CardProps, ref: React.Ref<CardElementType>) => {
    let classNames = [];

    if (shape) {
        classNames.push(`shape-${shape}`);
    }

    return <Element<CardElementType> as={CardStyled} ref={ref} classNames={classNames} {...props} />;
});

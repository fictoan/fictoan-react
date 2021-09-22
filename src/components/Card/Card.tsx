import React from "react";

import { Element } from "../Element/Element";
import { CommonAndHTMLProps } from "../Element/constants";

import { CardStyled } from "./Card.styled";

export type CardElementType = HTMLDivElement;
export type CardProps = CommonAndHTMLProps<CardElementType>;

export const Card = React.forwardRef(({ shape, ...props }: CardProps, ref: React.Ref<CardElementType>) => {
    let classNames = [];

    if (shape) {
        classNames.push(`shape-${shape}`);
    }

    return <Element<CardElementType> as={CardStyled} ref={ref} classNames={classNames} {...props} />;
});

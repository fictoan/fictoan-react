import React from "react";

import { Element } from "../Element/Element";
import { CommonAndHTMLProps } from "../Element/constants";

import { CardStyled } from "./Card.styled";


export interface CardCustomProps {
    shape  ? : "rounded" | "curved";
    shadow ? : "mild" | "soft" | "hard";
}

export type CardElementType = HTMLDivElement;
export type CardProps       = CommonAndHTMLProps<CardElementType> & CardCustomProps;

export const Card = ({
     shadow,
     shape,
     className,
     ...props
}: CardProps) => {
    const classNames = [ className ];

    if (shape) {
        classNames.push(`shape-${shape}`);
    }

    if (shadow) {
        classNames.push(`shadow-${shadow}`);
    }

    return (
        <Element<CardElementType>
            as={CardStyled}
            classNames={classNames}
            {...props}
        />
    );
}

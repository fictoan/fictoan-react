import React from "react";

import { Element }   from "../Element/Element";
import { CommonAndHTMLProps } from "../Element/constants";

import { TableStyled } from "./Table.styled";


export interface TableCustomProps {
    bordersFor  ? : "rows" | "columns" | "both";
    isStriped   ? : boolean;
    isHoverable ? : boolean;
    isFullWidth ? : boolean;
}

export type TableElementType = HTMLTableElement;
export type TableProps       = CommonAndHTMLProps<TableElementType> & TableCustomProps;

export const Table = ({
    bordersFor,
    isStriped,
    isHoverable,
    isFullWidth,
    className,
    ...props
}: TableProps) => {
    let classNames = [];

    if (className) {
        classNames.push(className);
    }

    if (bordersFor) {
        classNames.push(`bordered-${bordersFor}`);
    }

    if (isStriped) {
        classNames.push("striped");
    }

    if (isHoverable) {
        classNames.push("hoverable");
    }

    if (isFullWidth) {
        classNames.push("full-width");
    }

    return (
        <Element<TableElementType>
            as={TableStyled}
            classNames={classNames}
            {...props}
        />
    );
}

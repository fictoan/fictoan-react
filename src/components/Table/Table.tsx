import React from "react";

import { createClassName } from "../../utils/classNames";
import { Element }   from "../Element/Element";

import { TableStyled } from "./Table.styled";
import { TableProps, TableElementType } from "./constants"

export const Table = ({ bordersFor, isStriped, isHoverable, isFullWidth, className, ...props }: TableProps) => {
    const classNames = [ className ];

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
            className={createClassName(classNames)}
            {...props}
        />
    );
}

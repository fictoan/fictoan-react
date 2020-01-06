import React, { HTMLProps } from "react";

import { createClassName } from "src/utils/classNames";
import { BaseComponent }   from "../BaseComponent/BaseComponent";

import { TableStyled } from "./Table.styled";
import { TableProps, TableElementType } from "./constants"

const Table = ({ bordersFor, isStriped, isHoverable, isFullWidth, className, ...props }: TableProps) => {
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

    return <BaseComponent<TableElementType>
        Element={TableStyled}
        className={createClassName(classNames)}
        {...props}
    />
}

export default Table;

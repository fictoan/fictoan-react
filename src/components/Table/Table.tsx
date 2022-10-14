import React from "react";

import { Element } from "../Element";
import { CommonAndHTMLProps } from "../Element/constants";

import { TableStyled } from "./Table.styled";

// prettier-ignore
export interface TableCustomProps {
    bordersFor  ? : "rows" | "columns" | "both";
    isStriped   ? : boolean;
    isHoverable ? : boolean;
    isFullWidth ? : boolean;
    alignText   ? : "left" | "right" | "centre" | "center";
}

export type TableElementType = HTMLTableElement;
export type TableProps = Omit<CommonAndHTMLProps<TableElementType>, keyof TableCustomProps> & TableCustomProps;

export const Table = React.forwardRef(
    (
        { bordersFor, isStriped, isHoverable, isFullWidth, alignText, ...props }: TableProps,
        ref: React.Ref<TableElementType>
    ) => {
        let classNames = [];

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

        if (alignText) {
            classNames.push(`align-text-${alignText}`);
        }

        return <Element<TableElementType> as={TableStyled} classNames={classNames} {...props} />;
    }
);

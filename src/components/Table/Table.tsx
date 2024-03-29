import React from "react";

import { Element } from "../Element";
import { CommonAndHTMLProps } from "../Element/constants";

import "./table.css";

// prettier-ignore
export interface TableCustomProps {
    bordersFor          ? : "rows" | "columns" | "both";
    alignText           ? : "left" | "right" | "centre" | "center";
    isStriped           ? : boolean;
    highlightRowOnHover ? : boolean;
    isFullWidth         ? : boolean;
}

export type TableElementType = HTMLTableElement;
export type TableProps = Omit<CommonAndHTMLProps<TableElementType>, keyof TableCustomProps> & TableCustomProps;

export const Table = React.forwardRef(
    (
        { bordersFor, isStriped, highlightRowOnHover, isFullWidth, alignText, ...props }: TableProps,
        ref: React.Ref<TableElementType>
    ) => {
        let classNames = [];

        if (bordersFor) {
            classNames.push(`bordered-${bordersFor}`);
        }

        if (isStriped) {
            classNames.push("striped");
        }

        if (highlightRowOnHover) {
            classNames.push("hoverable");
        }

        if (isFullWidth) {
            classNames.push("full-width");
        }

        if (alignText) {
            classNames.push(`align-text-${alignText}`);
        }

        return <Element<TableElementType> as="table" classNames={classNames} {...props} />;
    }
);

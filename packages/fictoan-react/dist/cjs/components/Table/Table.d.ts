import React from "react";
import { CommonAndHTMLProps } from "../Element/constants";
export interface TableCustomProps {
    bordersFor?: "rows" | "columns" | "both";
    isStriped?: boolean;
    isHoverable?: boolean;
    isFullWidth?: boolean;
    alignText?: "left" | "right" | "centre" | "center";
}
export declare type TableElementType = HTMLTableElement;
export declare type TableProps = Omit<CommonAndHTMLProps<TableElementType>, keyof TableCustomProps> & TableCustomProps;
export declare const Table: React.ForwardRefExoticComponent<Omit<CommonAndHTMLProps<HTMLTableElement>, keyof TableCustomProps> & TableCustomProps & React.RefAttributes<HTMLTableElement>>;

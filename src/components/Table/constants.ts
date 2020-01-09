import { CommonAndHTMLProps } from "../Element/constants";

export type TableElementType = HTMLTableElement;

export interface TableCustomProps {
    bordersFor  ? : "rows" | "columns" | "both";
    isStriped   ? : boolean;
    isHoverable ? : boolean;
    isFullWidth ? : boolean;
}

export type TableProps = CommonAndHTMLProps<TableElementType> & TableCustomProps;

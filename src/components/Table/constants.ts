import { BaseAndHTMLProps } from "../BaseComponent/typings";

export type TableElementType = HTMLTableElement;

export interface TableCustomProps {
    bordersFor  ? : "rows" | "columns" | "both";
    isStriped   ? : boolean;
    isHoverable ? : boolean;
    isFullWidth ? : boolean;
}

export type TableProps = BaseAndHTMLProps<TableElementType> & TableCustomProps;
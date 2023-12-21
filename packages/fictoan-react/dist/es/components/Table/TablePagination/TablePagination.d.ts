import React from "react";
import { CommonAndHTMLProps } from "../../Element/constants";
export interface TablePaginationCustomProps {
    pageIndex: number;
    rangeStart: number;
    rangeEnd: number;
    hasPreviousPage: boolean;
    hasNextPage: boolean;
    totalRecords?: number;
    isLoading?: boolean;
    loadingText?: string;
    emptyText?: string;
    onPageChange: (page: number) => void;
}
export declare type TablePaginationElementType = HTMLElement;
export declare type TablePaginationProps = Omit<CommonAndHTMLProps<TablePaginationElementType>, keyof TablePaginationCustomProps> & TablePaginationCustomProps;
export declare const TablePagination: React.ForwardRefExoticComponent<Omit<CommonAndHTMLProps<HTMLElement>, keyof TablePaginationCustomProps> & TablePaginationCustomProps & React.RefAttributes<HTMLElement>>;

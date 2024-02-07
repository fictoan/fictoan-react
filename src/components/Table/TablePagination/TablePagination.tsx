/// <reference types="vite-plugin-svgr/client" />
import React from "react";

import { CommonAndHTMLProps } from "../../Element/constants";
import { Div, Element } from "../../Element";
import { Heading } from "../../Typography";
import { Text } from "../../Typography";

import "./table-pagination.css";

import PreviousButton from "../../../assets/icons/left.svg?react";
import NextButton from "../../../assets/icons/right.svg?react";
import FirstPageButton from "../../../assets/icons/left.svg?react";

import { Spinner } from "../../Spinner";

// prettier-ignore
export interface TablePaginationCustomProps {
    pageIndex         : number;
    rangeStart        : number;
    rangeEnd          : number;
    hasPreviousPage   : boolean;
    hasNextPage       : boolean;
    totalRecords    ? : number;
    isLoading       ? : boolean;
    loadingText     ? : string;
    emptyText       ? : string;
    onPageChange      : (page: number) => void;
}

export type TablePaginationElementType = HTMLElement;
export type TablePaginationProps =
    Omit<CommonAndHTMLProps<TablePaginationElementType>, keyof TablePaginationCustomProps>
    & TablePaginationCustomProps;

export const TablePagination = React.forwardRef(
    (
        {
            pageIndex,
            rangeStart,
            rangeEnd,
            hasPreviousPage,
            hasNextPage,
            totalRecords,
            isLoading,
            loadingText,
            emptyText,
            onPageChange : handlePageChange,
            ...props
        }: TablePaginationProps,
        ref: React.Ref<TablePaginationElementType>,
    ) => {
        return (
            <Element<TablePaginationElementType> as="div" data-table-pagination ref={ref} {...props}>
                <Div className="vertically-centre-items" marginBottom="none">
                    {totalRecords === 0 ? (
                        <Heading as="h6" marginRight="nano">
                            {emptyText ? emptyText : "No records"}
                        </Heading>
                    ) : (
                        <Heading as="h6" marginRight="nano">
                            {rangeStart} &ndash; {rangeEnd}
                            {totalRecords ? ` of ${totalRecords}` : ``}
                        </Heading>
                    )}

                    <Div classNames={[ "nav-icon", `${pageIndex === 0 && `is-inactive`}` ]}>
                        <FirstPageButton onClick={() => pageIndex !== 0 && handlePageChange(0)} />
                        <span>First page</span>
                    </Div>

                    <Div classNames={[ "nav-icon", `${!hasPreviousPage && `is-inactive`}` ]}>
                        <PreviousButton onClick={() => hasPreviousPage && handlePageChange(pageIndex - 1)} />
                        <span>Previous</span>
                    </Div>

                    <Text marginLeft="nano" marginRight="nano">
                        {pageIndex + 1}
                    </Text>

                    <Div classNames={[ "nav-icon", `${!hasNextPage && `is-inactive`}` ]}>
                        <NextButton onClick={() => hasNextPage && handlePageChange(pageIndex + 1)} />
                        <span>Next</span>
                    </Div>

                    {isLoading && (
                        <Div marginLeft="nano" className="vertically-centre-items">
                            <Spinner />
                            {loadingText && (
                                <Text size="small" marginLeft="nano">
                                    {loadingText}
                                </Text>
                            )}
                        </Div>
                    )}
                </Div>
            </Element>
        );
    },
);

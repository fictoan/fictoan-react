import React from "react";

import { ReactComponent as PreviousButton } from "../../../assets/icons/left.svg";
import { ReactComponent as NextButton } from "../../../assets/icons/right.svg";
import { ReactComponent as FirstPageButton } from "../../../assets/icons/left.svg";

import { CommonAndHTMLProps } from "../../Element/constants";
import { Element } from "../../Element";
import { Heading } from "../../Typography";
import { Text } from "../../Typography";
import { TablePaginationStyled } from "./TablePagination.styled";
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
export type TablePaginationProps = Omit<
    CommonAndHTMLProps<TablePaginationElementType>,
    keyof TablePaginationCustomProps
> &
    TablePaginationCustomProps;

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
            onPageChange: handlePageChange,
            ...props
        }: TablePaginationProps,
        ref: React.Ref<TablePaginationElementType>
    ) => {
        return (
            <Element<TablePaginationElementType> as={TablePaginationStyled} ref={ref} {...props}>
                <Element as="div" className="vertically-centre-items" marginBottom="none">
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

                    <Element as="div" classNames={["nav-icon", `${pageIndex === 0 && `is-inactive`}`]}>
                        <FirstPageButton onClick={() => pageIndex !== 0 && handlePageChange(0)} />
                        <span>First page</span>
                    </Element>

                    <Element as="div" classNames={["nav-icon", `${!hasPreviousPage && `is-inactive`}`]}>
                        <PreviousButton onClick={() => hasPreviousPage && handlePageChange(pageIndex - 1)} />
                        <span>Previous</span>
                    </Element>

                    <Text marginLeft="nano" marginRight="nano">
                        {pageIndex + 1}
                    </Text>

                    <Element as="div" classNames={["nav-icon", `${!hasNextPage && `is-inactive`}`]}>
                        <NextButton onClick={() => hasNextPage && handlePageChange(pageIndex + 1)} />
                        <span>Next</span>
                    </Element>

                    {isLoading && (
                        <Element as="div" marginLeft="nano" className="vertically-centre-items">
                            <Spinner />
                            {loadingText && (
                                <Text size="small" marginLeft="nano">
                                    {loadingText}
                                </Text>
                            )}
                        </Element>
                    )}
                </Element>
            </Element>
        );
    }
);

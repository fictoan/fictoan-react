import React from "react";

import { ReactComponent as PreviousButton } from "../../../assets/icons/left.svg";
import { ReactComponent as NextButton } from "../../../assets/icons/right.svg";
import { ReactComponent as FirstPageButton } from "../../../assets/icons/left.svg";

import { Button } from "../../Button/Button";
import { CommonAndHTMLProps } from "../../Element/constants";
import { Element } from "../../Element/Element";
import { Heading } from "../../Typography/Heading";
import { Text } from "../../Typography/Text";
import { TablePaginationStyled } from "./TablePagination.styled";

// prettier-ignore
export interface TablePaginationCustomProps {
    pageIndex      : number;
    pageCount      : number;
    pageSize       : number;
    isFirstPage  ? : boolean;
    isLastPage   ? : boolean;
    totalRecords ? : number;
    isFetching   ? : boolean;
    onPageChange   : (page: number) => void;
}

export type TablePaginationElementType = HTMLElement;
export type TablePaginationProps = CommonAndHTMLProps<TablePaginationElementType> & TablePaginationCustomProps;

export const TablePagination = React.forwardRef(
    (
        {
            pageIndex,
            pageCount,
            pageSize,
            isFirstPage,
            isLastPage,
            totalRecords,
            isFetching,
            onPageChange: handlePageChange,
            ...props
        }: TablePaginationProps,
        ref: React.Ref<TablePaginationElementType>
    ) => {
        return (
            <Element<TablePaginationElementType> as={TablePaginationStyled} ref={ref} {...props}>
                <Element as="div" className="vertically-centre-items" marginBottom="none">
                    {pageCount > 0 ? (
                        <Heading as="h6" marginRight="nano">
                            {pageSize * pageIndex + 1} &ndash; {pageSize * pageIndex + Math.min(pageSize, pageSize)}
                            {totalRecords ? ` of ${totalRecords}` : ``}
                        </Heading>
                    ) : (
                        <Heading as="h6" marginRight="nano">
                            No records
                        </Heading>
                    )}

                    <Element as="div" classNames={["nav-icon", `${pageIndex === 0 && `is-inactive`}`]}>
                        <FirstPageButton onClick={() => pageIndex !== 0 && handlePageChange(0)} />
                        <span>First page</span>
                    </Element>

                    <Element as="div" classNames={["nav-icon", `${isFirstPage && `is-inactive`}`]}>
                        <PreviousButton onClick={() => !isFirstPage && handlePageChange(pageIndex - 1)} />
                        <span>Previous</span>
                    </Element>

                    <Text marginLeft="nano" marginRight="nano">
                        {pageIndex + 1}
                    </Text>

                    <Element as="div" classNames={["nav-icon", `${isLastPage && `is-inactive`}`]}>
                        <NextButton onClick={() => !isLastPage && handlePageChange(pageIndex + 1)} />
                        <span>Next</span>
                    </Element>

                    {isFetching && (
                        <Element as="div" marginLeft="nano" className="loading-icon vertically-centre-items">
                            <Button kind="secondary" shape="rounded" padding="none" marginRight="micro" isLoading>
                                L
                            </Button>
                            <Text size="small">Fetching records...</Text>
                        </Element>
                    )}
                </Element>
            </Element>
        );
    }
);

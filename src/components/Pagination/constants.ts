import React from "react";
import { CommonAndHTMLProps } from "../Element/constants";

export type PaginationElementType = HTMLElement;

export interface RenderItemProps {
    type             : "page" | "next" | "previous" | "first" | "last" | "ellipsis";
    page           ? : number;
    selected         : boolean;
    disabled         : boolean;
    "aria-current" ? : "page" | undefined;
    onClick        ? : () => void;
    key            ? : React.Key;
}

export interface PaginationCustomProps {
    totalItems                : number;
    currentPage               : number;
    onPageChange              : (newPage: number) => void;
    itemsToShowEachSide       : number;
    kind                    ? : "plain" | "outlined" | "filled";
    showGoToFirstItemButton ? : boolean;
    showGoToLastItemButton  ? : boolean;
    showPreviousButton      ? : boolean;
    showNextButton          ? : boolean;
    showGoToInput           ? : boolean;
    disabled                ? : boolean;
    hideDisabledButtons     ? : boolean;
    renderItem              ? : (props: RenderItemProps) => React.ReactNode;
    isLoading               ? : boolean;
    loadingText             ? : string;
    emptyText               ? : string;
    itemDisplayText         ? : string;
 }

export type PaginationProps = Omit<CommonAndHTMLProps<PaginationElementType>, keyof PaginationCustomProps> &
    PaginationCustomProps;

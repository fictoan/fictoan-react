import styled from "styled-components";

import { TableProps } from "./Table";


export const TableStyled = styled.table`
    background-color : ${(props: TableProps) => props.theme.table.bg};
    color            : ${(props: TableProps) => props.theme.table.text};

    &.bordered-rows td,
    &.bordered-rows th {
        border              : 0 solid ${(props: TableProps) => props.theme.table.border};
        border-bottom-width : 1px;
    }

    &.bordered-columns td,
    &.bordered-columns th {
        border              : 0 solid ${(props: TableProps) => props.theme.table.border};
        border-right-width : 1px;
    }

    &.bordered-both td,
    &.bordered-both th { border : 1px solid ${(props: TableProps) => props.theme.table.border}; }


    &.padding-all-tiny  th,
    &.padding-all-tiny  td  { padding : 4px 8px; }

    &.padding-all-small th,
    &.padding-all-small td  { padding : 8px 16px; }

    &.padding-all-medium th,
    &.padding-all-medium td { padding : 16px 24px; }

    &.padding-all-large th,
    &.padding-all-large td  { padding : 24px 32px; }

    &.padding-all-huge  th,
    &.padding-all-huge  td  { padding : 32px 40px; }


    &.striped thead tr { background-color : ${(props: TableProps) => props.theme.table.striped.header.bg}; }

    &.striped tbody tr:not(.is-selected):nth-child(even) { background-color : ${(props: TableProps) => props.theme.table.striped.cell.bg}; }

    &.hoverable tbody tr:hover {
        background-color : ${(props: TableProps) => props.theme.table.onHover.bg} !important;
        color            : ${(props: TableProps) => props.theme.table.onHover.text};
        transition       : all 0.2s;
        cursor           : pointer;
    }
`;

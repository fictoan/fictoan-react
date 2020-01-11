import styled from "styled-components";

export const TableStyled = styled.table`
    background-color : $tableBG;
    color            : $tableTextColor;

    &.bordered-rows td,
    &.bordered-rows th {
        border              : 0 solid $tableBorderColor;
        border-bottom-width : 1px;
    }

    &.bordered-columns td,
    &.bordered-columns th {
        border             : 0 solid $tableBorderColor;
        border-right-width : 1px;
    }

    &.bordered-all td,
    &.bordered-all th { border : 1px solid $tableBorderColor; }


    &.padding-all-tiny  th,
    &.padding-all-tiny  td  { padding : 4px 8px; }

    &.padding-all-small th,
    &.padding-all-small td  { padding : 8px 16px; }

    &.padding-all-small th,
    &.padding-all-small td  { padding : 16px 24px; }

    &.padding-all-large th,
    &.padding-all-large td  { padding : 24px 32px; }

    &.padding-all-huge  th,
    &.padding-all-huge  td  { padding : 32px 40px; }


    &.striped thead tr { background-color : $tableStripedHeaderBG; }

    &.striped tbody tr:not(.is-selected):nth-child(even) { background-color : $tableStripedCellBG; }

    &.hoverable tbody tr:hover {
        background-color : $tableHoverableBG !important;
        color            : $tableHoverableTextColor;
        transition       : all 0.2s;
        cursor           : pointer;
    }
`
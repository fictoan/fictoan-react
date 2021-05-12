import styled from "styled-components";

import { TablePaginationProps } from "./TablePagination";

export const TablePaginationStyled = styled.div`
    .nav-icon {
        width   : 32px;
        height  : 32px;
        cursor  : pointer;
        z-index : 1000;

        svg {
            width  : 24px;
            margin : 4px;
        }

        span {
            opacity          : 0;
            visibility       : hidden;
            position         : relative;
            align-self       : center;
            white-space      : nowrap;
            background-color : ${(props: TablePaginationProps) => props.theme.tablePagination.bg};
            color            : ${(props: TablePaginationProps) => props.theme.tablePagination.text};
            padding          : 2px 8px;
            font-size        : 14px;
            border-radius    : 4px;
            transition       : all 0.2s;
            box-shadow       : 0 1px 1px -4px rgba(0, 0, 0, 0.04), 0 8px 12px -4px rgba(0, 0, 0, 0.08);
        }

        &:hover {
            svg { stroke: ${(props: TablePaginationProps) => props.theme.tablePagination.svg.onHover.stroke}; }

            span {
                opacity    : 1;
                visibility : visible;
            }
        }
    }

    .loading-icon .with-loader {
        background-color : transparent;
        border-color     : transparent;
    }

    .loading-icon .with-loader::after {
        border             : 3px solid ${(props: TablePaginationProps) => props.theme.table.border};
        border-top-color   : transparent;
        border-right-color : transparent;
    }
`;

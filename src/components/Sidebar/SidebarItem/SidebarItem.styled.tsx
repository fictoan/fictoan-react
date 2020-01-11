import styled from "styled-components";

export const SidebarItemStyled = styled.div`
    display               : grid;
    align-items           : center;
    grid-template-columns : 48px 1fr;
    grid-template-rows    : 40px;
    margin                : 4px 0;

    &.sidebar-sublink { font-weight : 400 !important; }

    &.has-alert {
        position : relative;
        width    : fit-content;
    }

    &.has-alert::after {
        display          : block;
        content          : "";
        position         : absolute;
        top              : calc(50% - 3px);
        right            : -12px;
        height           : 8px;
        width            : 8px;
        border-radius    : 50%;
        background-color : $colorRed-70;
    }

    &.bottom-section {
        display          : grid;
        align-self       : end;
        position         : fixed;
        bottom           : 0;
        width            : 240px;
        border-top       : 1px solid rgba($colorSlate-10, 1);
        background-color : white;
        margin           : 0;
        padding          : 4px;
    }
`
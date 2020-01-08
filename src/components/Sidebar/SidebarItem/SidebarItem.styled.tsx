import styled from "styled-components";

export const SidebarItemStyled = styled.div`
    display               : grid;
    align-items           : center;
    grid-template-columns : 48px 1fr;
    grid-template-rows    : 40px;
    margin                : 4px 0;

    .sidebar-sublink { font-weight : 400 !important; }

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

    .sidebar-wrapper.collapsed {
        &:not(.bottom-section) {
            margin-left : 0;
            position    : relative;
        }

        &:hover .sidebar-icon + .sidebar-text {
            display          : flex;
            position         : fixed;
            background-color : $colorHue;
            left             : 40px;
            align-self       : center;
            border-radius    : 4px;
            margin-top       : 8px;
            padding          : 4px 8px;
            color            : $colorWhite;
            font-size        : 88%;
            box-shadow: 0 4px 16px -2px rgba(0, 0, 0, 0.24);
        }

        details > summary::after { display : none; }

        .bottom-section {
            width        : 48px;
            padding-left : 0;
        }
    }
`
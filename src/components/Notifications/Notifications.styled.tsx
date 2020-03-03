import styled from "styled-components";

//  NOTIFICATIONS WRAPPER  ====================================================
export const NotificationsWrapperStyled = styled.div`
    position   : fixed;
    top        : 0;
    display    : flex;
    width      : 400px;
    height     : 100%;
    z-index    : 50000;
    padding    : 4vh 2vw;
    overflow-y : scroll;

    &.left  { left : 0; }
    &.right { right : 0; }

    &.top    { flex-direction: column; }
    &.bottom { flex-direction: column-reverse; }
`

//  NOTIFICATIONS ITEM  =======================================================
export const NotificationsItemStyled = styled.div`
    position         : relative;
    display          : flex;
    width            : 100%;
    height           : auto;
    padding          : 16px;
    background-color : $colorGrey-10;
    box-shadow       : 0 8px 24px -8px rgba(0, 0, 0, 0.32);
    border-radius    : 4px;
    border           : 1px solid hsla(0, 0%, 0%, 0.04);
    transition       : all 0.4s;
    margin           : 8px 0;

    &::before {
        position      : absolute;
        left          : 0;
        top           : 0;
        width         : 8px;
        height        : 100%;
        content       : "";
        border-radius : 4px 0 0 4px;
    }

    &.info::before    { background-color : $colorBlue-60; }
    &.warning::before { background-color : $colorAmber; }
    &.error::before   { background-color : $colorRed-90; }
    &.success::before { background-color : $colorGreen-90; }

    & .notification-content {
        color       : $colorShade;
        font-size   : 14px;
        line-height : 1.1;
        word-break  : break-word;
        margin      : 0 8px;
    }

    &.dismissible .notification-content {
        margin   : 0 24px 0 8px;
        overflow : scroll;
    }

    & .dismiss-button {
        position : absolute;
        top      : 6px;
        right    : 8px;
        width    : 16px;
        height   : 16px;
        opacity  : 0.24;
        cursor   : pointer;
    }

    & .dismiss-button:hover { opacity: 1; }

    & .dismiss-button:before {
        content     : "\d7";
        font-size   : 24px;
        line-height : 0;
    }

    & p { margin-bottom : 0; }

    ${NotificationsWrapperStyled}.top {
        &:first-child { margin-top : 0; }
        &:last-child  { margin-bottom : 0; }
    }

    ${NotificationsWrapperStyled}.bottom {
        &:first-child { margin-bottom: 0; }
        &:last-child  { margin-top: 0; }
    }
`

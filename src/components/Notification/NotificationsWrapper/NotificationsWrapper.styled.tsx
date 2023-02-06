import styled from "styled-components";

import { NotificationItemStyled } from "../NotificationItem/NotificationItem.styled";


export const NotificationsWrapperStyled = styled.div`
    position   : fixed;
    width      : 400px;
    z-index    : 5000000;
    padding    : 2vw;
    overflow-y : auto;
    overflow-x : hidden;

    &.show { display    : flex; }
    &.hide { display    : none; }

    &.left  { left : 0; }
    
    &.right { right : 0; }

    &.top { top : 0; }

    &.bottom { bottom : 0; }

    &.top.new-on-top {
        flex-direction : column-reverse;

        ${NotificationItemStyled}:first-of-type { margin-bottom : 0; }
        ${NotificationItemStyled}:last-of-type  { margin-top : 0; }
    }

    &.top.new-on-bottom {
        flex-direction : column;

        ${NotificationItemStyled}:first-of-type { margin-top : 0; }
        ${NotificationItemStyled}:last-of-type  { margin-bottom : 0; }
    }

    &.bottom.new-on-top {
        flex-direction : column-reverse;

        ${NotificationItemStyled}:first-of-type { margin-bottom : 0; }
        ${NotificationItemStyled}:last-of-type  { margin-top : 0; }
    }

    &.bottom.new-on-bottom {
        flex-direction : column;

        ${NotificationItemStyled}:first-of-type { margin-top : 0; }
        ${NotificationItemStyled}:last-of-type  { margin-bottom : 0; }
    }
`;

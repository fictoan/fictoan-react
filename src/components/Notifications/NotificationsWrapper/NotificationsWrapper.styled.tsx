import styled from "styled-components";

import { NotificationsItemStyled } from "../NotificationsItem/NotificationItem.styled";


export const NotificationsWrapperStyled = styled.div`
    position   : fixed;
    display    : flex;
    width      : 400px;
    z-index    : 5000000;
    padding    : 2vw;
    overflow-y : auto;
    overflow-x : hidden;

    &.left  { left : 0; }
    
    &.right { right : 0; }

    &.top { top : 0; }

    &.bottom { bottom : 0; }

    &.top.new-on-top {
        flex-direction : column-reverse;

        ${NotificationsItemStyled}:first-of-type { margin-bottom : 0; }
        ${NotificationsItemStyled}:last-of-type  { margin-top : 0; }
    }

    &.top.new-on-bottom {
        flex-direction : column;

        ${NotificationsItemStyled}:first-of-type { margin-top : 0; }
        ${NotificationsItemStyled}:last-of-type  { margin-bottom : 0; }
    }

    &.bottom.new-on-top {
        flex-direction : column-reverse;

        ${NotificationsItemStyled}:first-of-type { margin-bottom : 0; }
        ${NotificationsItemStyled}:last-of-type  { margin-top : 0; }
    }

    &.bottom.new-on-bottom {
        flex-direction : column;

        ${NotificationsItemStyled}:first-of-type { margin-top : 0; }
        ${NotificationsItemStyled}:last-of-type  { margin-bottom : 0; }
    }
`;

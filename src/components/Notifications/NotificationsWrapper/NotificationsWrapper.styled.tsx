import styled from "styled-components";

import { NotificationsItemStyled } from "../NotificationsItem/NotificationItem.styled";


export const NotificationsWrapperStyled = styled.div`
    position   : fixed;
    display    : flex;
    width      : 400px;
    z-index    : 5000000;
    padding    : 4vh 2vw;
    overflow-y : scroll;
    overflow-x : hidden;

    &.left  { left : 0; }
    &.right { right : 0; }

    &.top    {
        flex-direction : column;
        top            : 0;
    }
    &.bottom {
        flex-direction : column-reverse;
        bottom         : 0;
    }

    &.top {
        ${NotificationsItemStyled}:first-of-type { margin-top : 0; }
        ${NotificationsItemStyled}:last-of-type  { margin-bottom : 0; }
    }

    &.bottom {
        ${NotificationsItemStyled}:first-of-type { margin-bottom : 0; }
        ${NotificationsItemStyled}:last-of-type  { margin-top : 0; }
    }
`;

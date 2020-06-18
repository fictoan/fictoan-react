import styled from "styled-components";

import { NotificationsItemStyled } from "../NotificationsItem/Notifications.styled";


export const NotificationsWrapperStyled = styled.div`
    position   : fixed;
    top        : 0;
    display    : flex;
    width      : 400px;
    height     : 100%;
    z-index    : 5000000;
    padding    : 4vh 2vw;
    overflow-y : scroll;

    &.left  { left : 0; }
    &.right { right : 0; }

    &.top    { flex-direction : column; }
    &.bottom { flex-direction : column-reverse; }

    &.top {
        ${NotificationsItemStyled}:first-of-type { margin-top : 0; }
        ${NotificationsItemStyled}:last-of-type  { margin-bottom : 0; }
    }

    &.bottom {
        ${NotificationsItemStyled}:first-of-type { margin-bottom : 0; }
        ${NotificationsItemStyled}:last-of-type  { margin-top : 0; }
    }
`;

import styled from "styled-components";

import { ToastProps } from "./Toast";
import { ToastsWrapperStyled } from "../ToastsWrapper/ToastsWrapper.styled";


export const ToastStyled = styled.div`
    position         : relative;
    display          : flex;
    width            : fit-content;
    height           : fit-content;
    border-radius    : ${(props : ToastProps) => props.theme.inputField.default.borderRadius};
    background-color : ${(props : ToastProps) => props.theme.toast.bg};
    transition       : all 0.4s;
    padding          : 8px 16px;

    p {
        color : ${(props : ToastProps) => props.theme.toast.text};
    }

    //  TOP TOAST  ////////////////////////////////////////////////////////////
    ${ToastsWrapperStyled}.top & {
        transform : translateY(-8vh);
    }

    ${ToastsWrapperStyled}.top &.visible {
        transform : translateY(8vh);
    }

    //  BOTTOM TOAST  /////////////////////////////////////////////////////////
    ${ToastsWrapperStyled}.bottom & {
        transform : translateY(8vh);
    }

    ${ToastsWrapperStyled}.bottom &.visible {
        transform : translateY(-8vh);
    }
`;

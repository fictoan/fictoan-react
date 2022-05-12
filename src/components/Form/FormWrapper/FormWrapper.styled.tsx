import styled from "styled-components";

import { FormItemStyled } from "../FormItem/FormItem.styled";
import { FormItemGroupStyled } from "../FormItemGroup/FormItemGroup.styled";

export const FormWrapperStyled = styled.form`
    display        : flex;
    position       : relative;
    width          : 100%;
    flex-direction : column;

    &.spacing-none   ${FormItemStyled}:not(:last-child) { margin-bottom :    0; }
    &.spacing-nano   ${FormItemStyled}:not(:last-child) { margin-bottom :  8px; }
    &.spacing-micro  ${FormItemStyled}:not(:last-child) { margin-bottom : 12px; }
    &.spacing-tiny   ${FormItemStyled}:not(:last-child) { margin-bottom : 16px; }
    &.spacing-small  ${FormItemStyled}:not(:last-child) { margin-bottom : 24px; }
    &.spacing-medium ${FormItemStyled}:not(:last-child) { margin-bottom : 32px; }
    &.spacing-large  ${FormItemStyled}:not(:last-child) { margin-bottom : 40px; }
    &.spacing-huge   ${FormItemStyled}:not(:last-child) { margin-bottom : 48px; }
/* 
    &.spacing-none   ${FormItemGroupStyled} ${FormItemStyled}:last-child { margin-bottom :    0; }
    &.spacing-nano   ${FormItemGroupStyled} ${FormItemStyled}:last-child { margin-bottom :  8px; }
    &.spacing-micro  ${FormItemGroupStyled} ${FormItemStyled}:last-child { margin-bottom : 12px; }
    &.spacing-tiny   ${FormItemGroupStyled} ${FormItemStyled}:last-child { margin-bottom : 16px; }
    &.spacing-small  ${FormItemGroupStyled} ${FormItemStyled}:last-child { margin-bottom : 24px; }
    &.spacing-medium ${FormItemGroupStyled} ${FormItemStyled}:last-child { margin-bottom : 32px; }
    &.spacing-large  ${FormItemGroupStyled} ${FormItemStyled}:last-child { margin-bottom : 40px; }
    &.spacing-huge   ${FormItemGroupStyled} ${FormItemStyled}:last-child { margin-bottom : 48px; } */
`;

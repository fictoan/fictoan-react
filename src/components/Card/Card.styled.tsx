import styled from "styled-components";
import { BaseComponent } from "../BaseComponent/BaseComponent";
// import { CardProps } from "./typings";

export const CardStyled = styled(BaseComponent)`
    position : relative;
    width    : 100%;
    height   : auto;
    border   : 1px solid hsla(0, 0%, 0%, 0.04);

    &.padding-all-tiny   { padding : 8px; }
    &.padding-all-small  { padding : 16px; }
    &.padding-all-medium { padding : 24px; }
    &.padding-all-large  { padding : 32px; }
    &.padding-all-huge   { padding : 48px; }
`
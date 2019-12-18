import styled from "styled-components";

import { CardElement, CardProps } from "./constants";

export const CardStyled = styled[CardElement]`
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

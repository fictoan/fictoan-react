import styled from "styled-components";

import { FormItemStyled } from "../FormItem/FormItem.styled";


export const FormItemGroupStyled = styled.div`
    display        : flex;
    flex-wrap      : wrap;
    width          : 100%;

    input { align-self : flex-end; }

    & > ${FormItemStyled} {
        flex           : 1 1 0;
        flex-direction : column;
        margin-bottom  : 24px;
    }

    & > label {
        flex  : 1 1 100%;
        order : -1;
    }

    & > ${FormItemStyled}:not(:last-of-type) { margin-right : 24px; }

    &.is-joint {
        & > ${FormItemStyled} {
            margin-right: 0;

            &:first-of-type input, select, textarea {
                border-top-right-radius    : 0;
                border-bottom-right-radius : 0;
            }
            &:not(:first-of-type):not(:last-of-type) input, select, textarea {
                border-radius : 0;
            }
            &:last-of-type input, select, textarea {
                border-top-left-radius    : 0;
                border-bottom-left-radius : 0;
            }
        }
    }

    @media screen and (max-width: 520px) {
        &:not(.retain-layout) > ${FormItemStyled} {
            flex         : 1 1 auto;
            margin-right : 0 !important;
        }

        &:not(.retain-layout) > ${FormItemStyled}:not(:last-child) { margin-bottom : 16px; }
    }
`;

import styled from "styled-components";

import { FormItemStyled } from "../FormItem/FormItem.styled";

export const FormItemGroupStyled = styled.div`
    display        : flex;
    flex-direction : row;
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

    @media screen and (max-width: 520px) {
        &:not(.retain-layout) > ${FormItemStyled} {
            flex         : 1 1 auto;
            margin-right : 0 !important;
        }

        &:not(.retain-layout) > ${FormItemStyled}:not(:last-child) { margin-bottom : 16px; }
    }

    & > .ff-form-question {
        flex       : 1 0 0;
        align-self : flex-start;
    }

    & > .ff-form-answers { flex : 3 1 0; }

    /* .ff-form .ff-form-unit, */
    /* .ff-form .ff-input-group { margin-bottom : 40px; } */

    /* .ff-input-group > .ff-form-unit, */
    /* .ff-form > .ff-input-group:last-of-type:not(:only-of-type) { margin-bottom : 0; } */
`

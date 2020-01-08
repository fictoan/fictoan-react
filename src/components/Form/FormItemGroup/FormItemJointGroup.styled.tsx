import styled from "styled-components";

export const FormItemJointGroupStyled = styled.div`
    display        : flex;
    flex-direction : row;
    flex-wrap      : wrap;
    width          : 100%;

    & > input {
        flex           : 1 1 0;
        flex-direction : row;
        margin-bottom  : 24px;
    }

    & .unit-prefix,
    & .unit-prefix select {
        border-top-right-radius    : 0;
        border-bottom-right-radius : 0;
    }

    & .unit-suffix,
    & .unit-suffix select {
        border-top-left-radius    : 0;
        border-bottom-left-radius : 0;
    }

    & *:not(.unit-prefix):not(.unit-suffix) { border-radius: 0 !important; }
`
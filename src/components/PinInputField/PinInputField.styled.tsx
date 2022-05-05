import styled from "styled-components";

export const PinInputStyled = styled.div`
    display        : flex;
    flex-direction : row;
    gap            : 12px;

    input {
        font-weight : bold;
    }

    & > div {
        margin-bottom : 0 !important;
        align-items   : center;
    }

    .pin-input-field {
        text-align : center;
    }
`;

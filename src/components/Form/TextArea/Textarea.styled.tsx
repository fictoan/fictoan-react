import styled from "styled-components";

import { InputStyles } from "../InputField/InputField.styled";

export const TextareaStyled = styled.textarea`
    ${InputStyles}
    max-width : 100%;
    min-width : 100%;
    resize    : vertical;
`;

import styled from "styled-components";

import { InputFieldStyled } from "../InputField/InputField.styled";


export const TextareaStyled = styled.textarea`
    ${InputFieldStyled};
    max-width : 100%;
    min-width : 100%;
    resize    : vertical;
`;

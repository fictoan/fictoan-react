import { createGlobalStyle } from "styled-components";

import { CustomColorClassesStyled } from "./CustomColorClasses.styled";
import { TypographyStyled } from "../Typography/Typography.styled";
import { CodeStyled } from "../CodeBlock/Code.styled";

export const GlobalStyled = createGlobalStyle`
    ${ CustomColorClassesStyled }
    ${ TypographyStyled }
    ${ CodeStyled }
`;

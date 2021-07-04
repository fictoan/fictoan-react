import { createGlobalStyle } from "styled-components";

import { CustomColorClassesStyled } from "./CustomColorClasses.styled";
import { TypographyStyled } from "../Typography/Typography.styled";

export const GlobalStyled = createGlobalStyle`
    ${ CustomColorClassesStyled }
    ${ TypographyStyled }
`;

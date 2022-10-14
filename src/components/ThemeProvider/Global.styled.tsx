import { createGlobalStyle } from "styled-components";

import { CustomColorClassesStyled } from "./CustomColorClasses.styled";
import { TypographyStyled } from "../Typography";
import { UtilityStyled } from "../../styles/Utility";

export const GlobalStyled = createGlobalStyle`
    ${ CustomColorClassesStyled }
    ${ TypographyStyled }
    ${ UtilityStyled }
`;

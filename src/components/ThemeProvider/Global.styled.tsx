import { createGlobalStyle } from "styled-components";

import { ColorsStyled } from "./Colors.styled";
import { TextStyled } from "../Typography/Typography.styled";
import { CodeStyled } from "../CodeBlock/Code.styled";

export const GlobalStyled = createGlobalStyle`
    ${ ColorsStyled}
    //TODO: Why do we need to include the below?. Won't they be initialized when their associated component is mounted? 
    ${ TextStyled }
    ${ CodeStyled }
`;

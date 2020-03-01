import React from "react";
import { ThemeProvider as TP } from "styled-components";
import merge from "lodash/merge";

import { RFTheme } from "../../constants/Theme";
import { Element } from "../Element/Element";

import { ThemeProviderProps, ThemeProviderElementType } from "./constants";
import { GlobalStyled } from "./Global.styled";

export const ThemeProvider = ({ theme, children, ...props }: ThemeProviderProps) => {
    return (
        <Element<ThemeProviderElementType>
            as={TP}
            theme={merge(RFTheme, theme)}
            {...props}
        >
            <GlobalStyled />
            {children}
        </Element>
    );
}

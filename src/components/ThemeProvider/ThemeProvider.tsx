import React from "react";
import { ThemeProvider as TP, createGlobalStyle } from "styled-components";
import { merge } from "lodash-es";

import { RFTheme } from "src/constants/Theme";
import { BaseComponent } from "../BaseComponent/BaseComponent";

import { ThemeProviderProps, ThemeProviderElementType } from "./constants";
import { GlobalStyled } from "./Global.styled";

export const ThemeProvider = ({ theme, children, ...props }: ThemeProviderProps) => {
    return (
        <BaseComponent<ThemeProviderElementType>
            Element={TP}
            theme={merge(RFTheme, theme)}
            {...props}
        >
            <GlobalStyled />
            {children}
        </BaseComponent>
    )
}

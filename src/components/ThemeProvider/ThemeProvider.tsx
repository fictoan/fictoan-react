import React from "react";
import { ThemeProvider as TP } from "styled-components";
import merge from "lodash/merge";

import { Element } from "../Element/Element";
import { CommonAndHTMLProps, ThemeProps } from "../Element/constants";

import { RFTheme } from "../../styles/theme";
import { GlobalStyled } from "./Global.styled";


export type ThemeProviderElementType = HTMLDivElement;
export interface GlobalStyledProps extends ThemeProps { }
export interface ThemeProviderProps extends CommonAndHTMLProps<ThemeProviderElementType> { }

export const ThemeProvider = ({
    theme,
    children,
    ...props
}: ThemeProviderProps) => {
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

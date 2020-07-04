import React from "react";
import { ThemeProvider as TP } from "styled-components";
import merge from "lodash/merge";

import { Element } from "../Element/Element";
import { CommonAndHTMLProps, ThemeProps } from "../Element/constants";

import { RFTheme } from "../../styles/theme";
import { GlobalStyled as DynamicGlobalStyled } from "./Global.styled";
import { GlobalStaticStyled as StaticGlobalStyled } from "../../styles/GlobalStatic.styled";


export type ThemeProviderElementType = HTMLDivElement;
export type ThemeLabel               = "light" | "dark";
export type Theme                    = typeof RFTheme;
export type LabelledThemes           = Record<ThemeLabel, Theme>;

export interface GlobalStyledProps extends ThemeProps { }
export interface ThemeProviderProps extends Omit<CommonAndHTMLProps<ThemeProviderElementType>, "theme"> {
    theme : ThemeLabel
}

export const CreateThemeProvider = (themes: LabelledThemes) => {
    themes["light"] = merge({}, RFTheme, themes["light"]);
    themes["dark"] = merge({}, RFTheme, themes["dark"]);
    return ({
        theme,
        children,
        ...props
    }: ThemeProviderProps) => {
        return (
            <>
                {/* Styles that don't need to be computed */}
                <StaticGlobalStyled />

                <Element<ThemeProviderElementType>
                    as={TP}
                    theme={themes[theme]}
                    {...props}
                >
                    <DynamicGlobalStyled />
                    {children}
                </Element>
            </>
        );
    }
}

// For backward compatibility
export const ThemeProvider = CreateThemeProvider({
    light : RFTheme,
    dark  : RFTheme
});

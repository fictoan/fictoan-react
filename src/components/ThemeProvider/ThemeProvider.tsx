import React from "react";
import { ThemeProvider as TP } from "styled-components";
import merge from "lodash/merge";

import { Element } from "../Element/Element";
import { CommonAndHTMLProps, ThemeProps } from "../Element/constants";

import { RFTheme } from "../../styles/theme";
import { GlobalStyled as DynamicGlobalStyled } from "./Global.styled";
import { GlobalStyled as StaticGlobalStyled } from "../../styles/Global.styled";


export type ThemeProviderElementType = HTMLDivElement;
export type ThemeLabel               = "light" | "dark";
export type Theme                    = typeof RFTheme;
export type LabelledThemes           = Record<ThemeLabel, Theme>;

export interface GlobalStyledProps extends ThemeProps { }
export interface ThemeProviderProps extends CommonAndHTMLProps<ThemeProviderElementType> {
    themeLabel : ThemeLabel
}

export const CreateThemeProvider = (themes: LabelledThemes) => {
    themes["light"] = merge({}, RFTheme, themes["light"]);
    themes["dark"] = merge({}, RFTheme, themes["dark"]);
return ({
    themeLabel,
    children,
    ...props
}: ThemeProviderProps) => {
        return (
            <>
                {/* Styles that don't need to be computed */}
                <StaticGlobalStyled />

                <Element<any>
                    as={TP}
                    theme={themes[themeLabel]}
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

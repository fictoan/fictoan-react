import React, { useEffect } from "react";

import { Element } from "../Element/Element";
import { CommonAndHTMLProps } from "../Element/constants";

export type ThemeProviderElementType = HTMLDivElement;
export type RenderProps = () => JSX.Element;

type Theme = {
    [key: string]: string;
};

export interface ThemeProviderProps extends CommonAndHTMLProps<ThemeProviderElementType> {
    theme?: Theme;
    currentTheme?: string;
    onThemeInjection?: () => void;
}

export const ThemeProvider = React.forwardRef(
    (
        { theme, currentTheme, onThemeInjection, children }: ThemeProviderProps,
        ref: React.Ref<ThemeProviderElementType>
    ) => {
        useEffect(() => {
            if (theme) {
                Object.entries(theme).forEach(([variableName, variableValue]) => {
                    document.documentElement.style.setProperty(`--${variableName}`, variableValue);
                });
            }
            onThemeInjection && onThemeInjection();

            return () => {
                document.documentElement.removeAttribute("style");
            };
        }, [theme]);

        return (
            <Element<ThemeProviderElementType> as="div" className={currentTheme} ref={ref}>
                {children}
            </Element>
        );
    }
);

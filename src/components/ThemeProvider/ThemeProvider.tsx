import React, { useCallback, useEffect, useState } from "react";

import { Element } from "../Element/Element";
import type { UseThemeProps } from "./types";
import { CommonAndHTMLProps } from "../Element/constants";

export type ThemeProviderElementType = HTMLDivElement;
export type RenderProps = () => JSX.Element;

const storageKey = "fictoan-theme";
const themes = ["light", "dark"];

const ThemeContext = React.createContext<UseThemeProps | undefined>(undefined);
const defaultContext: UseThemeProps = { setTheme: (_) => {} };

export const useTheme = () => React.useContext(ThemeContext) ?? defaultContext;

export interface ThemeProviderProps extends CommonAndHTMLProps<ThemeProviderElementType> {
    currentTheme?: string;
}

const getTheme = (key: string, fallback?: string) => {
    let theme;
    try {
        theme = localStorage.getItem(key) || undefined;
    } catch (e) {
        // Unsupported
    }
    return theme || fallback;
};

export const ThemeProvider = React.forwardRef(
    ({ currentTheme, children, ...props }: ThemeProviderProps, ref: React.Ref<ThemeProviderElementType>) => {
        const [shouldRender, setShouldRender] = useState<boolean>(false);
        const [themeState, setThemeState] = React.useState(() => getTheme(storageKey, "theme-light"));

        const setTheme = useCallback(
            (newTheme: any) => {
                if (!themes.includes(newTheme)) {
                    newTheme = "light";
                }
                document.documentElement.className = "";
                setThemeState(`theme-${newTheme}`);
                document.documentElement.classList.add(`theme-${newTheme}`);
                if (!shouldRender) {
                    setShouldRender(true);
                }
                // Save to storage
                try {
                    localStorage.setItem(storageKey, `theme-${newTheme}`);
                } catch (e) {
                    // Unsupported
                }
            },
            [themeState]
        );

        useEffect(() => {
            if (currentTheme) {
                setTheme(currentTheme);
            }
        }, [currentTheme]);

        return (
            <ThemeContext.Provider value={{ theme: themeState, setTheme }}>
                <Element<ThemeProviderElementType> as="div" data-theme-provider ref={ref} {...props}>
                    {shouldRender && children}
                </Element>
            </ThemeContext.Provider>
        );
    }
);

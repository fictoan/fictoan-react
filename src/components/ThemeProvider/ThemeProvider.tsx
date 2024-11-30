// FRAMEWORK ===========================================================================================================
import React, { useCallback, useEffect, useState } from "react";

// FICTOAN =============================================================================================================
import { Element } from "../Element/Element";

export type ThemeProviderElementType = HTMLDivElement;
export type RenderProps = () => JSX.Element;

const storageKey = "fictoan-theme";
const themes = ["theme-light", "theme-dark"];

const ThemeContext = React.createContext<UseThemeProps | undefined>(undefined);
const defaultContext: UseThemeProps = { setTheme: (_) => {} };

export const useTheme = () => React.useContext(ThemeContext) ?? defaultContext;

// TYPES ===============================================================================================================
import type { UseThemeProps } from "./types";
import { CommonAndHTMLProps } from "../Element/constants";

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

// COMPONENT ///////////////////////////////////////////////////////////////////////////////////////////////////////////
export const ThemeProvider = React.forwardRef(
    ({ currentTheme, children, ...props }: ThemeProviderProps, ref: React.Ref<ThemeProviderElementType>) => {
        const [shouldRender, setShouldRender] = useState<boolean>(false);
        const [themeState, setThemeState] = React.useState(() => getTheme(storageKey, "theme-light"));

        const setTheme = useCallback(
            (newTheme: any) => {
                if (!themes.includes(newTheme)) {
                    newTheme = "theme-light";
                }
                document.documentElement.className = "";
                setThemeState(`${newTheme}`);
                document.documentElement.classList.add(`${newTheme}`);
                if (!shouldRender) {
                    setShouldRender(true);
                }
                // Save to storage
                try {
                    localStorage.setItem(storageKey, `${newTheme}`);
                } catch (e) {
                    // Unsupported
                }
            },
            [themeState]
        );

        useEffect(() => {
            let theme = getTheme(storageKey, "NA");
            theme === "NA" ? setTheme(currentTheme) : setTheme(theme);
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

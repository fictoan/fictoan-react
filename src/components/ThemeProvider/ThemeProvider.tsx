// FRAMEWORK ===========================================================================================================
import React, { useCallback, useEffect, useState } from "react";

// FICTOAN =============================================================================================================
import { Element } from "../Element/Element";

// TYPES ===============================================================================================================
import type { UseThemeProps } from "./types";
import { CommonAndHTMLProps } from "../Element/constants";

const storageKey = "fictoan-theme";

const defaultContext: UseThemeProps = { setTheme : (_) => {}, };
const ThemeContext = React.createContext<UseThemeProps | undefined>(undefined);

export const useTheme = () => React.useContext(ThemeContext) ?? defaultContext;

export type ThemeProviderElementType = HTMLDivElement;
export interface ThemeProviderProps extends CommonAndHTMLProps<ThemeProviderElementType> {
    themeList    : string[];
    currentTheme : string;
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
    ({ currentTheme, themeList, children, ...props }: ThemeProviderProps, ref: React.Ref<ThemeProviderElementType>) => {
        const [shouldRender, setShouldRender] = useState<boolean>(false);
        const [themeState, setThemeState] = useState<string>(() =>
            getTheme(storageKey) || currentTheme);

        const setTheme = useCallback(
            (value: React.SetStateAction<string>) => {
                // Handle both direct values and updater functions
                const newTheme = typeof value === "function"
                    ? value(themeState)
                    : value;

                if (!themeList.includes(newTheme)) {
                    // Fall back to first available theme
                    const fallbackTheme = themeList[0];
                    setThemeState(fallbackTheme);
                    document.documentElement.className = "";
                    document.documentElement.classList.add(fallbackTheme);
                    try {
                        localStorage.setItem(storageKey, fallbackTheme);
                    } catch (e) {
                        // Unsupported
                    }
                    return;
                }

                setThemeState(newTheme);
                document.documentElement.className = "";
                document.documentElement.classList.add(newTheme);
                if (!shouldRender) {
                    setShouldRender(true);
                }
                try {
                    localStorage.setItem(storageKey, newTheme);
                } catch (e) {
                    // Unsupported
                }
            },
            [themeState, themeList]
        );

        useEffect(() => {
            const theme = getTheme(storageKey);
            setTheme(theme || currentTheme);
        }, [currentTheme, setTheme]);

        return (
            <ThemeContext.Provider value={{ theme: themeState, setTheme }}>
                <Element<ThemeProviderElementType> as="div" data-theme-provider ref={ref} {...props}>
                    {shouldRender && children}
                </Element>
            </ThemeContext.Provider>
        );
    }
);

import React, { useEffect } from "react";

import { Element } from "../Element/Element";
import { CommonAndHTMLProps } from "../Element/constants";

export type ThemeProviderElementType = HTMLDivElement;
export type RenderProps = () => JSX.Element;

export interface ThemeProviderProps extends CommonAndHTMLProps<ThemeProviderElementType> {
    theme?: {
        [key: string]: string;
    };
    customColors?: {
        [key: string]: string;
    };
    currentTheme?: string;
    onThemeInjection?: () => void;
}

export const ThemeProvider = React.forwardRef(
    (
        { theme, customColors, currentTheme, onThemeInjection, children, ...props }: ThemeProviderProps,
        ref: React.Ref<ThemeProviderElementType>
    ) => {
        useEffect(() => {
            if (theme) {
                const styleTag = getStyleTag("fictoan-theme");
                addCssVariables(styleTag, theme);
                onThemeInjection && onThemeInjection();
            }

            return () => {
                const styleTag = getStyleTag("fictoan-theme");
                styleTag.innerHTML = "";
            };
        }, [theme]);

        useEffect(() => {
            if (customColors) {
                const styleTag = getStyleTag("fictoan-custom-colors");
                addCssVariables(styleTag, customColors);
                const styles = Object.keys(customColors).map(
                    (colorName) => `
.bg-${colorName} {background-color: var(--${colorName});}
.text-${colorName} {color: var(--${colorName}); }
.fill-${colorName} {fill: var(--${colorName});}
.stroke-${colorName} {stroke: var(--${colorName});}
.border-${colorName} {border-color: var(--${colorName});}`
                );
                styleTag.appendChild(document.createTextNode(styles.join("\n")));
                onThemeInjection && onThemeInjection();
                console.log(styleTag);
            }

            return () => {
                const styleTag = getStyleTag("fictoan-custom-colors");
                styleTag.innerHTML = "";
            };
        }, [customColors]);

        const getStyleTag = (id: string): HTMLElement => {
            let styleTag = document.getElementById(id);
            if (!styleTag) {
                styleTag = document.createElement("style");
                styleTag.id = id;
                document.head.appendChild(styleTag);
            }
            return styleTag;
        };

        const addCssVariables = (element: HTMLElement, variables: { [key: string]: string }) => {
            let cssVariables: string | string[] = Object.entries(variables).map(
                ([variableName, variableValue]) => `--${variableName}: ${variableValue};`
            );
            cssVariables = ":root {\n" + cssVariables.join("\n") + "\n}";
            element.appendChild(document.createTextNode(cssVariables));
        };

        return (
            <Element<ThemeProviderElementType> as="div" className={currentTheme} ref={ref} {...props}>
                {children}
            </Element>
        );
    }
);

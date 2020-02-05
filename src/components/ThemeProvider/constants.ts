import { css } from "styled-components";

import { CommonAndHTMLProps, ThemeProps } from "../Element/constants";

export type ThemeProviderElementType = HTMLDivElement;

export interface ThemeProviderProps extends CommonAndHTMLProps<ThemeProviderElementType> {
    globalCSS?: typeof css;
};

export interface GlobalStyledProps extends ThemeProps {
    globalCSS?: typeof css;
}

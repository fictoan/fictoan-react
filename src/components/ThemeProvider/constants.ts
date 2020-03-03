import { css } from "styled-components";

import { CommonAndHTMLProps, ThemeProps } from "../Element/constants";

export type ThemeProviderElementType = HTMLDivElement;

export interface ThemeProviderProps extends CommonAndHTMLProps<ThemeProviderElementType> {
};

export interface GlobalStyledProps extends ThemeProps {
}

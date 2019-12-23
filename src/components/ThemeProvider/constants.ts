import { BaseAndHTMLProps } from "../BaseComponent/typings";

export type  ThemeProviderElementType = HTMLDivElement;

export interface ThemeProviderCustomProps {}

export type ThemeProviderProps = BaseAndHTMLProps<ThemeProviderElementType> & ThemeProviderCustomProps;

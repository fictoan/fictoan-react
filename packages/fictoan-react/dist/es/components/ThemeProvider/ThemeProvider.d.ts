/// <reference types="react" />
import { CommonAndHTMLProps, ThemeProps } from "../Element/constants";
import "../../styles/Normalize.css";
import "../../styles/Reset.css";
import "../../styles/Colours.css";
export declare type ThemeProviderElementType = HTMLDivElement;
export declare type RenderProps = () => JSX.Element;
export interface GlobalStyledProps extends ThemeProps {
}
export interface ThemeProviderProps extends CommonAndHTMLProps<ThemeProviderElementType> {
    localStyled?: RenderProps;
}
export declare const ThemeProvider: ({ theme, localStyled, children, ...props }: ThemeProviderProps) => JSX.Element;

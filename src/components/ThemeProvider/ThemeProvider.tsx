import React from "react";
import { ThemeProvider as TP } from "styled-components";
import { merge } from "lodash-es";

import { Element } from "../Element/Element";
import { CommonAndHTMLProps, ThemeProps } from "../Element/constants";

import { GlobalStyled as DynamicGlobalStyled } from "./Global.styled";

import { FictoanTheme } from "../../styles/theme";

// CSS files to be injected to head section
import "../../styles/Normalize.css";
import "../../styles/Reset.css";
import "../../styles/Utility.css";
import "../../styles/Colours.css";


export type ThemeProviderElementType = HTMLDivElement;
export type RenderProps = () => JSX.Element;

export interface GlobalStyledProps extends ThemeProps {}
export interface ThemeProviderProps extends CommonAndHTMLProps<ThemeProviderElementType> {
    localStyled?: RenderProps;
}

export const ThemeProvider = ({ theme, localStyled, children, ...props }: ThemeProviderProps) => {
    const [mergedTheme, setMergedTheme] = React.useState(merge({}, FictoanTheme, theme));
    React.useEffect(() => {
        setMergedTheme(merge({}, FictoanTheme, theme));
    }, [theme]);

    return (
        <Element<ThemeProviderElementType> as={TP} theme={mergedTheme} {...props}>
            <DynamicGlobalStyled />
            {localStyled && localStyled()}
            {children}
        </Element>
    );
};

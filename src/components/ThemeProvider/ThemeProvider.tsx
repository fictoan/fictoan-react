import React from "react";
import { ThemeProvider as TP } from "styled-components";
import { merge } from "lodash";

import { Element } from "../Element/Element";
import { CommonAndHTMLProps, ThemeProps } from "../Element/constants";

import { GlobalStyled as DynamicGlobalStyled } from "./Global.styled";
import { GlobalStaticStyled as StaticGlobalStyled } from "../../styles/GlobalStatic.styled";

import { RFTheme } from "../../styles/theme";

export type ThemeProviderElementType = HTMLDivElement;
export type RenderProps = () => JSX.Element;

export interface GlobalStyledProps extends ThemeProps {}
export interface ThemeProviderProps extends CommonAndHTMLProps<ThemeProviderElementType> {
    localStyled?: RenderProps;
}

export const ThemeProvider = ({ theme, localStyled, children, ...props }: ThemeProviderProps) => {
    const [mergedTheme, setMergedTheme] = React.useState(merge({}, RFTheme, theme));
    React.useEffect(() => {
        setMergedTheme(merge({}, RFTheme, theme));
    }, [theme]);

    return (
        <>
            {/* Styles that don't need to be computed */}
            <StaticGlobalStyled />

            <Element<ThemeProviderElementType> as={TP} theme={mergedTheme} {...props}>
                <DynamicGlobalStyled />
                {localStyled && localStyled()}
                {children}
            </Element>
        </>
    );
};

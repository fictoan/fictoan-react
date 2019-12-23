import React from "react";
import { ThemeProvider as TP } from "styled-components";
import { merge } from "lodash-es";

import { RFTheme } from "src/constants/Theme";
import { BaseComponent } from "../BaseComponent/BaseComponent";

import { ThemeProviderProps, ThemeProviderElementType } from "./constants";

export const ThemeProvider = ({ theme, ...props }: ThemeProviderProps) => {
    return (
        <BaseComponent<ThemeProviderElementType>
            Element={TP}
            theme={merge(RFTheme, theme)}
            {...props}
        />
    )
}

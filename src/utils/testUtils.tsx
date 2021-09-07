import React, { ComponentType, ReactElement } from "react";
import { render, RenderOptions } from "@testing-library/react";
import { ThemeProvider } from "../components/ThemeProvider/ThemeProvider";
import { FictoanTheme } from "../styles/theme";

export const renderWithWrapper = (component: ReactElement, options?: RenderOptions) => {
    const Wrapper = ({ children }: { children: ComponentType }) => (
        <ThemeProvider theme={FictoanTheme}>{children}</ThemeProvider>
    );

    return render(component, { wrapper: Wrapper, ...options });
};

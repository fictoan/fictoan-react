import * as React from "react";

export interface UseThemeProps {
    /** Update the theme */
    setTheme: React.Dispatch<React.SetStateAction<string>>;
    /** Active theme name */
    theme?: string | undefined;
}

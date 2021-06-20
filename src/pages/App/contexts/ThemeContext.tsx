import React, { createContext } from "react";
import useTheme from "../hooks/useTheme";

export const ThemeContext = createContext({} as any);

const ThemeProvider = (props: any) => {
    const {children, startingTheme} = props;
    const { theme, setTheme } = useTheme(startingTheme);

    return (
        <ThemeContext.Provider value={{ setTheme, theme }}>
            {children}
        </ThemeContext.Provider>
    );
}

export default ThemeProvider;
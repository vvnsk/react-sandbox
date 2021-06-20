import { useContext } from "react";
import { ThemeContext, ThemeProvider } from "../contexts/ThemeContext";

const Layout  = (props: any) => {
  const {children, startingTheme} = props;

  return (
    <ThemeProvider startingTheme={startingTheme}>
      <LayoutNoThemeProvider>
        {children}
      </LayoutNoThemeProvider>
    </ThemeProvider>
  );
}

const LayoutNoThemeProvider = (props: any) => {
  const {children} = props;
  const {theme} = useContext(ThemeContext)

  return (
      <div
        className={
          theme === "light" 
            ? "container-fluid light" 
            : "container-fluid dark"
        }
      >
        {children}
      </div>
  );
}

export default Layout;
import { createContext, useState, useContext, useCallback,useEffect } from "react";
import { lightTheme, darkTheme } from "../them/them";
import { ThemeProvider as StyledProvider } from "styled-components";

const ThemeContext = createContext({});

const ThemeProvider = ({ children }) => {
  const defalutTheme = localStorage.getItem('theme')||'light';
  const [ThemeMode, setThemeMode] = useState(defalutTheme);
  const themeObject = ThemeMode === "light" ? lightTheme : darkTheme;
  return (
    <ThemeContext.Provider value={{ ThemeMode, setThemeMode }}>
      <StyledProvider theme={themeObject}>{children}</StyledProvider>
    </ThemeContext.Provider>
  );
};

function useTheme() {
  const context = useContext(ThemeContext);
  const { ThemeMode, setThemeMode } = context;
  const toggleTheme = useCallback(() => {
    if(ThemeMode==='light'){
      setThemeMode("dark");
      localStorage.setItem('theme', 'dark');
    } else {
      setThemeMode("light");
      localStorage.setItem('theme', 'light');
    }
  }, [ThemeMode]);

  return [ThemeMode, toggleTheme];
}
export { ThemeProvider, useTheme };

import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { THEME_STORAGE_KEY, themes, type ThemeMode } from "../constants/theme";

type ThemeContextValue = {
  theme: ThemeMode;
  toggleTheme: () => void;
};

const ThemeContext = createContext<ThemeContextValue | undefined>(undefined);

function resolveInitialTheme(): ThemeMode {
  if (typeof window === "undefined") {
    return themes.dark;
  }

  const savedTheme = window.localStorage.getItem(THEME_STORAGE_KEY) as ThemeMode | null;

  if (savedTheme === themes.dark || savedTheme === themes.light) {
    return savedTheme;
  }

  return window.matchMedia("(prefers-color-scheme: light)").matches
    ? themes.light
    : themes.dark;
}

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<ThemeMode>(resolveInitialTheme);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    window.localStorage.setItem(THEME_STORAGE_KEY, theme);
  }, [theme]);

  const value = useMemo(
    () => ({
      theme,
      toggleTheme: () =>
        setTheme((current) => (current === themes.dark ? themes.light : themes.dark)),
    }),
    [theme],
  );

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

export function useTheme() {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error("useTheme must be used within ThemeProvider");
  }

  return context;
}

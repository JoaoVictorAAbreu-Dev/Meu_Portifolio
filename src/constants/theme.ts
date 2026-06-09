export const THEME_STORAGE_KEY = "portfolio-theme";

export const themes = {
  dark: "dark",
  light: "light",
} as const;

export type ThemeMode = (typeof themes)[keyof typeof themes];

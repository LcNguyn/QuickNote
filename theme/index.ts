// src/theme/index.ts
import borderRadius from "./borderRadius";
import { palette } from "./colors/colors";

const lightTheme = {
  colors: {
    background: palette.white,
    text: palette.slate900,
    primary: palette.blue500,
    card: palette.slate100,
    error: palette.red500,
  },
  spacing: { s: 8, m: 16, l: 24 },
  borderRadius,
};

const darkTheme = {
  colors: {
    background: palette.slate900,
    text: palette.slate100,
    primary: palette.blue600,
    card: palette.slate800,
    error: palette.red500,
  },
  spacing: { s: 8, m: 16, l: 24 },
  borderRadius,
};

export type Theme = typeof lightTheme;
export { lightTheme, darkTheme };

// src/hooks/useTheme.ts
import { useColorScheme } from "react-native";
import { darkTheme, lightTheme } from "../../theme";
import { Theme } from "../types/theme";

export const useTheme = (): Theme => {
  const scheme = useColorScheme(); // 'light' or 'dark'
  return scheme === "dark" ? darkTheme : lightTheme;
};

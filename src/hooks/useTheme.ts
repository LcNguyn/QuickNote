// src/hooks/useTheme.ts
import { useColorScheme } from "react-native";
import { lightTheme, darkTheme, Theme } from "../theme";

export const useTheme = (): Theme => {
  const scheme = useColorScheme(); // 'light' or 'dark'
  return scheme === "dark" ? darkTheme : lightTheme;
};

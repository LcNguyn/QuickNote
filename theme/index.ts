import { Theme } from "../src/types/theme";
import borderRadius from "./borderRadius";
import { palette } from "./colors";
import { textVariants } from "./typography";

const bottomTabBarHeight = 130;

const lightTheme: Theme = {
  colors: {
    text: palette.white,
    headerTitle: palette.white,
    icon: palette.white,
    border: palette.whiteBlur100,
    containerBg: palette.whiteBlur200,
    dropdownContainerBg: palette.purpleBlur300,
    tabBarActive: palette.pink100,
    tabBarInactive: palette.grey,
  },
  gradient: {
    screenHeaderBg: [palette.purple100, palette.purple200],
    modalBg: [palette.purpleBlur100, palette.purpleBlur200],
    screenBg: [
      palette.blue100,
      palette.purple300,
      palette.purple400,
      palette.purple500,
    ],
    tabBarBg: [palette.blue200, palette.purple400],
    primaryBtn: [palette.pink100, palette.pink200],
    toast: [palette.purple600, palette.purple700],
  },
  spacing: { s: 8, m: 16, l: 24 },
  borderRadius,
  tabBarHeight: bottomTabBarHeight,
  font: textVariants,
};

const darkTheme: Theme = {
  colors: {
    text: palette.white,
    headerTitle: palette.white,
    icon: palette.white,
    border: palette.whiteBlur100,
    containerBg: palette.whiteBlur200,
    dropdownContainerBg: palette.purpleBlur300,
    tabBarActive: palette.pink100,
    tabBarInactive: palette.grey,
  },
  gradient: {
    screenHeaderBg: [palette.purple100, palette.purple200],
    modalBg: [palette.purpleBlur100, palette.purpleBlur200],
    screenBg: [
      palette.blue100,
      palette.purple300,
      palette.purple400,
      palette.purple500,
    ],
    tabBarBg: [palette.blue200, palette.purple400],
    primaryBtn: [palette.pink100, palette.pink200],
    toast: [palette.purple600, palette.purple700],
  },
  spacing: { s: 8, m: 16, l: 24 },
  borderRadius,
  tabBarHeight: bottomTabBarHeight,
  font: textVariants,
};

export { darkTheme, lightTheme };

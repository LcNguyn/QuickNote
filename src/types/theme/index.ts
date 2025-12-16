import { ColorValue } from "react-native";
import { Font } from "./font";

type BorderRadius = {
  sm: number;
  md: number;
  lg: number;
  xl: number;
};

type Spacing = {
  s: number;
  m: number;
  l: number;
};

type GradientColors = readonly [ColorValue, ColorValue, ...ColorValue[]];

export type Theme = {
  colors: {
    text: ColorValue;
    headerTitle: ColorValue;
    icon: ColorValue;
    border: ColorValue;
    containerBg: ColorValue;
    dropdownContainerBg: ColorValue;
    tabBarActive: ColorValue;
    tabBarInactive: ColorValue;
  };
  gradient: {
    screenHeaderBg: GradientColors;
    modalBg: GradientColors;
    screenBg: GradientColors;
    tabBarBg: GradientColors;
    primaryBtn: GradientColors;
    toast: GradientColors;
  };

  spacing: Spacing;
  borderRadius: BorderRadius;
  tabBarHeight: number;
  font: Font;
};

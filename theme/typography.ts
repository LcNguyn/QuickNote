import { Font } from "../src/types/theme/font";

export const fontConfig = {
  extraLight: "PF ExtraLight",
  light: "PF Light",
  regular: "PF Regular",
  medium: "PF Medium",
  bold: "PF Bold",
  heavy: "PF Heavy",
};

export const textVariants: Font = {
  screenTitle: {
    fontFamily: fontConfig.bold,
    fontSize: 24,
  },
  categoryHeader: {
    fontFamily: fontConfig.regular,
    fontSize: 16,
  },
  body: {
    fontFamily: fontConfig.regular,
    fontSize: 14,
  },
  modalTitle: {
    fontFamily: fontConfig.medium,
    fontSize: 20,
  },
};

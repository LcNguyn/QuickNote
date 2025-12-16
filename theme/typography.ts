export type FontWeight =
  | "extraLight"
  | "light"
  | "regular"
  | "medium"
  | "bold"
  | "heavy";

export const fontConfig = {
  extraLight: "PF ExtraLight",
  light: "PF Light",
  regular: "PF Regular",
  medium: "PF Medium",
  bold: "PF Bold",
  heavy: "PF Heavy",
};

export type TextVariant =
  | "screenTitle"
  | "categoryHeader"
  | "body"
  | "modalTitle";

export const textVariants = {
  screenTitle: {
    fontFamily: fontConfig.bold,
    fontSize: 24,
    // lineHeight: 32,
    color: "#fff",
  },
  categoryHeader: {
    fontFamily: fontConfig.regular,
    fontSize: 16,
    // lineHeight: 24,
    color: "#fff",
  },
  body: {
    fontFamily: fontConfig.regular,
    fontSize: 14,
    // lineHeight: 16,
    color: "#fff",
  },
  modalTitle: {
    fontFamily: fontConfig.medium,
    fontSize: 20,
    color: "#fff",
  },
};

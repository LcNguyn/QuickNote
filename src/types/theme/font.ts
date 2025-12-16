import { fontConfig } from "../../../theme/typography";

export type FontConfig = typeof fontConfig;

export type TextVariant =
  | "screenTitle"
  | "categoryHeader"
  | "body"
  | "modalTitle";

export type Font = Record<
  TextVariant,
  {
    fontFamily: string;
    fontSize: number;
  }
>;

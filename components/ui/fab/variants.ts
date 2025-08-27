import { FabSize, variant } from "./types";

export const SIZES: Record<FabSize, string> = {
  sm: "w-12 h-12",
  md: "w-14 h-14",
  lg: "w-16 h-16",
};

export const VARIANTS: Record<variant, string> = {
  primary: "bg-primary-100",
  secondary: "bg-secondary-100",
  negative: "bg-red-500",
  positive: "bg-green-500",
};

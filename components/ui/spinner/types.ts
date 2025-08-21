import { ViewProps } from "react-native";

export type Size = "xs" | "sm" | "md" | "lg";
export type Color = "primary" | "secondary" | "positive" | "error" | "neutral";

export interface SpinnerProps extends ViewProps {
  size?: Size;
  color?: Color;
  className?: string;
}

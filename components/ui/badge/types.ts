import { ViewProps } from "react-native";

export type BadgeSize = "xs" | "sm" | "md" | "lg";
export type BadgeColor = "primary" | "secondary" | "success" | "warning" | "danger" | "neutral";

export interface BadgeProps extends ViewProps {
  size?: BadgeSize;
  color?: BadgeColor;
  className?: string;
  icon?: React.ReactNode;
  children?: React.ReactNode;
}

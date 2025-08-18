import { PressableProps } from "react-native";

export type ButtonSize = "xs" | "sm" | "md" | "lg";
export type ButtonVariant = "solid" | "outline" | "link";
export type ButtonAction = "primary" | "secondary" | "negative" | "positive";

export interface ButtonProps extends PressableProps {
  onPress?: () => void;
  disabled?: boolean;
  className?: string;
  children?: React.ReactNode;
  size?: ButtonSize;
  variant?: ButtonVariant;
  action?: ButtonAction;
}

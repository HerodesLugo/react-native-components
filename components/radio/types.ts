import { PressableProps } from "react-native";

export type RadioButtonSize = "xs" | "sm" | "md" | "lg";
export type RadioButtonVariant = "solid" | "outline";
export type RadioButtonAction = "primary" | "secondary" | "negative" | "positive";

export interface RadioButtonProps extends PressableProps {
  selected?: boolean;
  onPress?: () => void;
  disabled?: boolean;
  className?: string;
  label?: string;
  size?: RadioButtonSize;
  variant?: RadioButtonVariant;
  action?: RadioButtonAction;
}

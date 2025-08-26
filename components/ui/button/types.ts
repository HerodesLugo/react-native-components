import { GestureResponderEvent, PressableProps } from "react-native";

export type ButtonSize = "xs" | "sm" | "md" | "lg";
export type ButtonVariant = "solid" | "outline" | "link";
export type ButtonAction = "primary" | "secondary" | "negative" | "positive";

// `as` permite elegir el tipo concreto de componente que se renderiza
export type ButtonAs = "pressable" | "touchableOpacity" | "touchableHighlight" | "nativeButton";

export interface ButtonProps extends PressableProps {
  onPress?: (e?: GestureResponderEvent) => void;
  disabled?: boolean;
  className?: string;
  children?: React.ReactNode;
  size?: ButtonSize;
  variant?: ButtonVariant;
  action?: ButtonAction;
  as?: ButtonAs;
}

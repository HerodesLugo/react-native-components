import { TextInputProps } from "react-native";

export type InputSize = "xs" | "sm" | "md" | "lg";
export type InputVariant = "rounded" | "outline" | "underlined" | "error";
export type InputType = "text" | "number";
export type InputColor =
  | "primary"
  | "success"
  | "warning"
  | "error"
  | "transparent";

export interface InputProps extends TextInputProps {
  label?: string;
  size?: InputSize;
  variant?: InputVariant;
  color?: InputColor;
  /** Texto de error a mostrar debajo del input. */
  errorMessage?: string;
  className?: string;
  invalid?: boolean;
  disabled?: boolean;
  type?: InputType;
}

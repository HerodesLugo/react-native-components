import { TextInputProps } from "react-native";

export type InputSize = "xs" | "sm" | "md" | "lg";
export type InputVariant = "rounded" | "outline" | "underlined" | "error";
export type InputType = "text" | "number";

export interface InputProps extends TextInputProps {
  label?: string;
  size?: InputSize;
  variant?: InputVariant;
  className?: string;
}
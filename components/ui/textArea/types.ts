import { TextInputProps } from "react-native";

export type TextAreaSize = "sm" | "md" | "lg";

export interface TextAreaProps extends TextInputProps {
  label?: string;
  size?: TextAreaSize;
  isInvalid?: boolean;
  isDisabled?: boolean;
  
}
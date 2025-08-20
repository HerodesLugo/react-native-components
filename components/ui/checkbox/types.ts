export type CheckboxSize = "sm" | "md" | "lg";

export interface CheckboxProps {
  label: string;
  value: boolean;
  onValueChange: (newValue: boolean) => void;
  size?: CheckboxSize;
  invalid?: boolean;
  disabled?: boolean;
}
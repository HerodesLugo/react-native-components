
export type RadioButtonSize = "sm" | "md" | "lg";

export interface RadioButtonProps {
  label: string;
  value: any; 
  selectedValue: any; 
  onSelect: (value: any) => void;
  size?: RadioButtonSize;
  invalid?: boolean;
  disabled?: boolean;
}

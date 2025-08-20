import { TextStyle, ViewStyle } from "react-native";

export interface SelectOption {
  label: string;
  value: string | number;
}

export interface SelectProps {
  options: SelectOption[];
  value: string | number;
  onChange: (value: string | number) => void;
  placeholder?: string;
  style?: ViewStyle;
  dropdownStyle?: ViewStyle;
  optionStyle?: ViewStyle ;
  selectedOptionStyle?: ViewStyle;
  labelStyle?: TextStyle;
}

export interface SelectContentProps {
  visible: boolean;
  setVisible: (visible: boolean) => void;
  options: SelectOption[];
  onChange: (value: SelectOption["value"]) => void;
  dropdownStyle?: ViewStyle ;
  optionStyle?: ViewStyle ;
}

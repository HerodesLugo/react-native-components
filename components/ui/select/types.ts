export interface SelectOption {
  label: string;
  value: string | number;
}

export interface SelectProps {
  options: SelectOption[];
  value: string | number | undefined;
  onChange: (value: string | number) => void;
  placeholder?: string;
  // Tailwind classNames (NativeWind) to style elements
  className?: string; // container
  selectClassName?: string; // touchable select
  dropdownClassName?: string;
  optionClassName?: string;
  selectedOptionClassName?: string;
  labelClassName?: string;
}

export interface SelectContentProps {
  visible: boolean;
  setVisible: (visible: boolean) => void;
  options: SelectOption[];
  onChange: (value: SelectOption["value"]) => void;
  dropdownClassName?: string;
  optionClassName?: string;
}

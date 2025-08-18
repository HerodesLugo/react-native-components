export type SwitchSize = 'sm' | 'md' | 'lg';

export interface SwitchProps {
  value: boolean;
  disabled?: boolean;
  label?: string;
  size?: SwitchSize;
  activeTrackColor?: string;
  inactiveTrackColor?: string;
  thumbColor?: string;
  onValueChange: (newValue: boolean) => void;
}
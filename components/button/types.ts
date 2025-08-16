export interface ButtonProps {
  onPress?: () => void;
  disabled?: boolean;
  className?: string;
  children?: React.ReactNode;
}

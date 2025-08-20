import { GestureResponderEvent } from "react-native";

export type NavAction = {
  icon?: React.ReactNode;
  label?: string;
  onPress?: (e: GestureResponderEvent) => void;
  accessibilityLabel?: string;
  testID?: string;
  disabled?: boolean;
  className?: string; // nativewind className for the action
  render?: () => React.ReactNode; // if provided, takes precedence
};

export type NavbarProps = {
  // Content
  title?: React.ReactNode | string;
  subtitle?: string;
  children?: React.ReactNode; // allows full custom center content

  // Actions
  left?: NavAction;
  right?: NavAction[];

  // Appearance
  backgroundClassName?: string;
  borderBottom?: boolean;
  height?: number; // optional override, otherwise insets.top + 56
  className?: string; // if using nativewind
  containerClassName?: string; // nativewind class for outer container
  titleClassName?: string;
  subtitleClassName?: string;

  // Testing / accessibility
  testID?: string;
};

export type CenterProps = {
  title?: React.ReactNode | string;
  subtitle?: string;
  children?: React.ReactNode;
  titleClassName?: string;
  subtitleClassName?: string;
  pointerEvents?: "auto" | "none" | "box-none" | "box-only";
};

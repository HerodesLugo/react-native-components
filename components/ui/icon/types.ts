// types for Icon component

export type IconSize = "xs" | "sm" | "md" | "lg" | number;
export type IconColor = string; // tailwind class or hex

export interface IconProps {
  // name from vector icon library (e.g., 'menu', 'check')
  name?: string;
  // optional custom SVG/JSX element
  svg?: React.ReactNode;
  size?: IconSize;
  color?: IconColor;
  style?: any;
  // choose icon library (expo/vector-icons)
  library?: "Feather" | "Ionicons" | "MaterialIcons" | "EvilIcons" | "FontAwesome" | string;
}

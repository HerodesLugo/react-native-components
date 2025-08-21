import { Color, Size } from "./types";

export const sizeClasses: Record<Size, string> = {
  xs: "w-4 h-4 border-2",
  sm: "w-6 h-6 border-2",
  md: "w-8 h-8 border-2",
  lg: "w-12 h-12 border-4",
};

// colorClasses produce the base border color and the top border highlight to create the spinner effect
export const colorClasses: Record<Color, string> = {
  primary: "border-gray-300 border-t-primary-100",
  secondary: "border-gray-300 border-t-secondary-100",
  positive: "border-gray-300 border-t-green-600",
  error: "border-gray-300 border-t-red-600",
  neutral: "border-gray-300 border-t-gray-700",
};

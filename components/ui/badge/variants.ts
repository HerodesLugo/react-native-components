import { BadgeColor, BadgeSize } from "./types";

export const sizeClasses: Record<BadgeSize, { container: string; text: string }> = {
  xs: { container: "px-2 py-0.5", text: "text-xs" },
  sm: { container: "px-2.5 py-1", text: "text-sm" },
  md: { container: "px-3 py-1.5", text: "text-base" },
  lg: { container: "px-4 py-2", text: "text-lg" },
};

export const colorClasses: Record<BadgeColor, { container: string; text: string }> = {
  primary: { container: "bg-primary-600", text: "text-white" },
  secondary: { container: "bg-secondary-600", text: "text-white" },
  success: { container: "bg-green-600", text: "text-white" },
  warning: { container: "bg-yellow-500", text: "text-white" },
  danger: { container: "bg-red-600", text: "text-white" },
  neutral: { container: "bg-gray-200", text: "text-gray-800" },
};

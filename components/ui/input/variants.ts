export const sizeClasses: Record<string, string> = {
  xs: "px-2 py-1 text-xs",
  sm: "px-3 py-1.5 text-sm",
  md: "px-4 py-2 text-base",
  lg: "px-6 py-3 text-lg",
};

export const variantClasses: Record<string, string> = {
  rounded: "bg-transparent border border-gray-300 rounded-full",
  outline: "bg-transparent border border-gray-300",
  underlined: "bg-transparent border-b border-gray-300",
  error: "bg-transparent border border-red-500",
};

export const colorClasses: Record<string, string> = {
  primary: "border-primary-100",
  success: "border-green-500",
  warning: "border-yellow-500",
  error: "border-red-500",
  transparent: "border-transparent",
};

export const disabledClass = "bg-gray-100 border-gray-200 text-gray-400";
export const invalidClass = "border-red-500  text-red-500";
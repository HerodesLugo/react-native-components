const radioActionColors: Record<string, { border: string; fill?: string }> = {
  primary: { border: "border-gray-500", fill: "bg-gray-500" },
  secondary: { border: "border-gray-200", fill: "bg-gray-200" },
  negative: { border: "border-red-600", fill: "bg-red-600" },
  positive: { border: "border-green-600", fill: "bg-green-600" },
};

export const radioSizeClasses: Record<string, string> = {
  xs: "w-4 h-4",
  sm: "w-5 h-5",
  md: "w-6 h-6",
  lg: "w-8 h-8",
};

export const radioVariantClasses: Record<string, (action: string) => string> = {
  solid: (action: string) => `${radioActionColors[action].border} ${radioActionColors[action].fill || ""}`,
  outline: (action: string) => `${radioActionColors[action].border} bg-transparent`,
};

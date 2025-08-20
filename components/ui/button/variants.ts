const actionColors: Record<string, { bg: string; border: string; text?: string }> = {
  primary: { bg: "bg-primary-100", border: "border-primary-100", text: "text-primary-100" },
  secondary: { bg: "bg-secondary-100", border: "border-secondary-100", text: "text-secondary-100" },
  negative: { bg: "bg-red-600", border: "border-red-600", text: "text-white" },
  positive: { bg: "bg-green-600", border: "border-green-600", text: "text-white" },
};

export const sizeClasses: Record<string, string> = {
  xs: "px-2 py-1 text-xs",
  sm: "px-3 py-1.5 text-sm",
  md: "px-4 py-2 text-base",
  lg: "px-6 py-3 text-lg",
};

export const variantClasses: Record<string, (action: string) => string> = {
  solid: (action) => `${actionColors[action].bg} border-0 ${actionColors[action].text || ""}`,
  outline: (action) => `bg-transparent ${actionColors[action].border} border ${actionColors[action].text || ""}`,
  link: () => "bg-transparent underline p-0",
};
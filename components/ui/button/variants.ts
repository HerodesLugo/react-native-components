export const actionColors: Record<string, { bg: string; border: string; text?: string }> = {
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

// variantClasses contains only the container classes (no text color)
export const variantClasses: Record<string, (action: string) => string> = {
  solid: (action) => `${actionColors[action].bg} border-0`,
  outline: (action) => `bg-transparent ${actionColors[action].border} border`,
  link: () => "bg-transparent underline p-0",
};

export const getTextClass = (action: string, variant?: string) => {
  // Prefer explicit text class defined in actionColors
  if (actionColors[action] && actionColors[action].text) return actionColors[action].text;
  // Fallbacks: link use primary color, otherwise leave empty to let consumer decide
  if (variant === "link") return "text-primary-100";
  return "";
};
import { AccordionSize } from "./types";

export const sizeClasses: Record<AccordionSize, { title: string; content: string }> = {
  sm: { title: "px-2 py-2 text-sm", content: "px-2 py-2 text-sm" },
  md: { title: "px-4 py-3 text-base", content: "px-4 py-3 text-base" },
  lg: { title: "px-6 py-4 text-lg", content: "px-6 py-4 text-lg" },
};


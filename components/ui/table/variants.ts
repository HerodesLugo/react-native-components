import { TableSize } from "./types";

export const sizeClasses: Record<TableSize, { header: string; row: string; cell: string }> = {
  sm: { header: "px-2 py-2 text-sm", row: "px-2 py-2 text-sm", cell: "text-sm" },
  md: { header: "px-4 py-3 text-base", row: "px-4 py-3 text-base", cell: "text-base" },
  lg: { header: "px-6 py-4 text-lg", row: "px-6 py-4 text-lg", cell: "text-lg" },
};

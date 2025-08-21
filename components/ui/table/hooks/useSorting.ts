import { useMemo, useState } from "react";

export function useSorting<T>(data: T[], sortable?: boolean, initialSortKey: string | null = null) {
  const [sortKey, setSortKey] = useState<string | null>(initialSortKey);
  const [sortDir, setSortDir] = useState<"asc" | "desc">("asc");

  const onSortChange = (key: string) => {
    if (!sortable) return;
    if (sortKey === key) setSortDir((d) => (d === "asc" ? "desc" : "asc"));
    else {
      setSortKey(key);
      setSortDir("asc");
    }
  };

  const sortedData = useMemo(() => {
    if (!sortable || !sortKey) return data;
    const sorted = [...data].sort((a: any, b: any) => {
      const va = a[sortKey];
      const vb = b[sortKey];
      if (va == null && vb == null) return 0;
      if (va == null) return -1;
      if (vb == null) return 1;
      if (typeof va === "number" && typeof vb === "number") return va - vb;
      return String(va).localeCompare(String(vb));
    });
    return sortDir === "asc" ? sorted : sorted.reverse();
  }, [data, sortable, sortKey, sortDir]);

  return { sortedData, sortKey, sortDir, onSortChange, setSortKey, setSortDir };
}

export default useSorting;

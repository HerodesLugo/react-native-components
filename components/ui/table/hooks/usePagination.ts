import { useEffect, useMemo, useState } from "react";

export function usePagination<T>(data: T[], pageSize?: number) {
  const [page, setPage] = useState(0);

  const totalPages = useMemo(() => {
    if (!pageSize || pageSize <= 0) return 1;
    return Math.max(1, Math.ceil(data.length / pageSize));
  }, [data.length, pageSize]);

  // clamp page when data or pageSize changes
  useEffect(() => {
    if (!pageSize || pageSize <= 0) {
      setPage(0);
      return;
    }
    setPage((p) => Math.min(Math.max(0, p), Math.max(0, Math.ceil(data.length / pageSize) - 1)));
  }, [data.length, pageSize]);

  const pagedData = useMemo(() => {
    if (!pageSize || pageSize <= 0) return data;
    const start = page * pageSize;
    return data.slice(start, start + pageSize);
  }, [data, page, pageSize]);

  const goNext = () => setPage((p) => Math.min(totalPages - 1, p + 1));
  const goPrev = () => setPage((p) => Math.max(0, p - 1));

  return {
    page,
    setPage,
    pagedData,
    totalPages,
    goNext,
    goPrev,
  };
}

export default usePagination;

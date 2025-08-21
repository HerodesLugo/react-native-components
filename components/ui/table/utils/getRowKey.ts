
export const getRowKey = <T>(row: T, index: number, rowKey?: string | ((row: T) => string)) => {
    if (typeof rowKey === "function") return rowKey(row);
    if (typeof rowKey === "string")
      return (row as any)[rowKey] ?? String(index);
    return (row as any).id ?? String(index);
};
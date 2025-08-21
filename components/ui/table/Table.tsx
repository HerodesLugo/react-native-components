import React, { useState } from "react";
import { FlatList, ScrollView, View } from "react-native";
import Header from "./Header";
import { Pagination } from "./Pagination";
import Row from "./Row";
import { usePagination } from "./hooks/usePagination";
import { useSorting } from "./hooks/useSorting";
import { TableProps } from "./types";
import { sizeClasses } from "./variants";

const Table = <T,>({
  columns,
  data,
  size = "md",
  className,
  rowKey,
  selectable = false,
  selectedIds: controlledSelectedIds,
  onSelectionChange,
  sortable = false,
  onRowPress,
  pagination,
  ...props
}: TableProps<T>) => {
  const sc = sizeClasses[size];

  // selection state (controlled or uncontrolled)
  const [internalSelected, setInternalSelected] = useState<string[]>([]);
  const selectedIds = controlledSelectedIds ?? internalSelected;

  const setSelected = (ids: string[]) => {
    if (controlledSelectedIds) onSelectionChange?.(ids);
    else setInternalSelected(ids);
  };

  const getRowKey = (row: T, index: number) => {
    if (typeof rowKey === "function") return rowKey(row);
    if (typeof rowKey === "string")
      return (row as any)[rowKey] ?? String(index);
    return (row as any).id ?? String(index);
  };

  const { sortedData, sortKey, sortDir, onSortChange } = useSorting(data, sortable);

  const pageSize = pagination?.pageSize ?? 0;
  const { page, pagedData, totalPages, goNext, goPrev } = usePagination(
    sortedData,
    pageSize
  );

  const toggleSelect = (id: string) => {
    const exists = selectedIds.includes(id);
    const next = exists
      ? selectedIds.filter((x) => x !== id)
      : [...selectedIds, id];
    setSelected(next);
  };

  const handleToggleAll = (v: boolean) => {
    if (v) setSelected(data.map((_, i) => getRowKey(data[i], i)));
    else setSelected([]);
  };

  const renderRow = ({ item, index }: { item: T; index: number }) => (
    <Row
      item={item}
      index={index}
      columns={columns}
      selectable={selectable}
      isSelected={selectedIds.includes(getRowKey(item, index))}
      onToggleSelect={toggleSelect}
      getRowKey={getRowKey}
      sizeClasses={sc}
      onRowPress={onRowPress}
    />
  );

  return (
    <View className={className || ""} {...props}>
      <ScrollView horizontal>
        <View style={{ minWidth: 600 }}>
          <Header
            columns={columns}
            selectable={selectable}
            allSelected={selectedIds.length === data.length}
            onToggleAll={handleToggleAll}
            sortable={sortable}
            sortKey={sortKey}
            sortDir={sortDir}
            onSortChange={onSortChange}
            sizeClasses={sc}
          />
          <FlatList
            data={pagedData}
            renderItem={renderRow}
            keyExtractor={(item, idx) => getRowKey(item, idx)}
          />
        </View>
      </ScrollView>

      {pageSize ? (
        <Pagination
          page={page}
          totalPages={totalPages}
          onPrev={goPrev}
          onNext={goNext}
        />
      ) : null}
    </View>
  );
};

export default Table as typeof Table & {
  /* placeholder for possible subcomponents */
};

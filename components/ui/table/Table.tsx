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
  const sizeClassesMap = sizeClasses[size];

  // selection state (controlled or uncontrolled)
  const [internalSelectedIds, setInternalSelectedIds] = useState<string[]>([]);
  const selectedIds = controlledSelectedIds ?? internalSelectedIds;

  const updateSelectedIds = (ids: string[]) => {
    if (controlledSelectedIds) onSelectionChange?.(ids);
    else setInternalSelectedIds(ids);
  };

  const getRowKey = (row: T, index: number) => {
    if (typeof rowKey === "function") return rowKey(row);
    if (typeof rowKey === "string")
      return (row as any)[rowKey] ?? String(index);
    return (row as any).id ?? String(index);
  };

  const { sortedData, sortKey, sortDir, onSortChange } = useSorting(data, sortable);

  const pageSize = pagination?.pageSize ?? 0;
  const {
    page: currentPage,
    pagedData: currentPageData,
    totalPages,
    goNext: goToNextPage,
    goPrev: goToPrevPage,
  } = usePagination(sortedData, pageSize);

  const toggleSelect = (id: string) => {
    const exists = selectedIds.includes(id);
  const next = exists ? selectedIds.filter((x) => x !== id) : [...selectedIds, id];
  updateSelectedIds(next);
  };

  const handleToggleAll = (shouldSelectAll: boolean) => {
    if (shouldSelectAll) updateSelectedIds(data.map((_, i) => getRowKey(data[i], i)));
    else updateSelectedIds([]);
  };

  const renderTableRow = ({ item: row, index: rowIndex }: { item: T; index: number }) => (
    <Row
      item={row}
      index={rowIndex}
      columns={columns}
      selectable={selectable}
      isSelected={selectedIds.includes(getRowKey(row, rowIndex))}
      onToggleSelect={toggleSelect}
      getRowKey={getRowKey}
      sizeClasses={sizeClassesMap}
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
            sizeClasses={sizeClassesMap}
          />
          <FlatList
            data={currentPageData}
            renderItem={renderTableRow}
            keyExtractor={(row, rowIndex) => getRowKey(row, rowIndex)}
          />
        </View>
      </ScrollView>

      {pageSize ? (
        <Pagination
          page={currentPage}
          totalPages={totalPages}
          onPrev={goToPrevPage}
          onNext={goToNextPage}
        />
      ) : null}
    </View>
  );
};

export default Table as typeof Table & {
  /* placeholder for possible subcomponents */
};

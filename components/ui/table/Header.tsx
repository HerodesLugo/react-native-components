import React from "react";
import { Pressable, Text, View } from "react-native";
import Checkbox from "../checkbox/Checkbox";
import { HeaderProps } from "./types";

export default function Header<T>({
  columns,
  selectable,
  allSelected,
  onToggleAll,
  sortable,
  sortKey,
  sortDir,
  onSortChange,
  sizeClasses,
}: HeaderProps<T>) {
  return (
    <View className={`flex-row items-center bg-gray-100 ${sizeClasses.header}`}>
      {selectable ? (
        <View className="px-2">
          <Checkbox label="" value={allSelected} onValueChange={onToggleAll} />
        </View>
      ) : null}

      {columns.map((col) => (
        <Pressable
          key={col.key}
          onPress={() => {
            if (!sortable || !col.sortable) return;
            onSortChange(col.key);
          }}
          className={`flex-1 ${col.className || ""}`}
        >
          <Text
            className={`${col.align === "center" ? "text-center" : col.align === "right" ? "text-right" : "text-left"} ${sizeClasses.cell}`}
          >
            {col.title}{" "}
            {sortable && col.sortable
              ? sortKey === col.key
                ? sortDir === "asc"
                  ? "↑"
                  : "↓"
                : "⇅"
              : null}
          </Text>
        </Pressable>
      ))}
    </View>
  );
}

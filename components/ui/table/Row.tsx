import React from "react";
import { Pressable, Text, View } from "react-native";
import Checkbox from "../checkbox/Checkbox";
import { RowProps } from "./types";

export default function Row<T>({
  item,
  index,
  columns,
  selectable,
  isSelected,
  onToggleSelect,
  getRowKey,
  sizeClasses,
  onRowPress,
}: RowProps<T>) {
  const id = getRowKey(item, index);

  return (
    <Pressable
      onPress={() => onRowPress?.(item)}
      className={`flex-row items-center border-b border-gray-200 ${sizeClasses.row}`}
    >
      {selectable ? (
        <View className="px-2">
          <Checkbox
            label=""
            value={isSelected}
            onValueChange={() => onToggleSelect(id)}
          />
        </View>
      ) : null}

      {columns.map((col) => (
        <View key={col.key} className={`flex-1 ${col.className || ""}`}>
          <Text
            className={`${col.align === "center" ? "text-center" : col.align === "right" ? "text-right" : "text-left"} ${sizeClasses.cell}`}
          >
            {col.render
              ? col.render(item)
              : String((item as any)[col.key] ?? "")}
          </Text>
        </View>
      ))}
    </Pressable>
  );
}

import React from "react";
import { Pressable, Text, View } from "react-native";
import { PaginationProps } from "./types";

export function Pagination({
  page,
  totalPages,
  onPrev,
  onNext,
}: PaginationProps) {
  return (
    <View className="flex-row justify-between items-center mt-2">
      <Pressable onPress={onPrev} className="px-3 py-2 bg-gray-200 rounded">
        <Text>Prev</Text>
      </Pressable>
      <Text>
        Page {page + 1} of {totalPages}
      </Text>
      <Pressable onPress={onNext} className="px-3 py-2 bg-gray-200 rounded">
        <Text>Next</Text>
      </Pressable>
    </View>
  );
}

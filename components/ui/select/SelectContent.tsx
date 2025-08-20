import React from "react";
import { FlatList, Modal, Text, TouchableOpacity, View } from "react-native";
import { SelectContentProps } from "./types";

export default function SelectContent({
  visible,
  setVisible,
  options,
  onChange,
  dropdownClassName = "",
  optionClassName = "",
}: SelectContentProps) {
  return (
    <Modal
      visible={visible}
      transparent
      animationType="fade"
      onRequestClose={() => setVisible(false)}
    >
      <TouchableOpacity
        className="flex-1 justify-center items-center bg-black/20"
        onPress={() => setVisible(false)}
      >
        <View className={`w-4/5 bg-white rounded-lg py-2 shadow ${dropdownClassName}`}>
          <FlatList
            data={options}
            keyExtractor={(item) => item.value.toString()}
            renderItem={({ item }) => (
              <TouchableOpacity
                className={`px-4 py-3 border-b border-gray-100 ${optionClassName}`}
                onPress={() => {
                  onChange(item.value);
                  setVisible(false);
                }}
              >
                <Text className="text-gray-700">{item.label}</Text>
              </TouchableOpacity>
            )}
          />
        </View>
      </TouchableOpacity>
    </Modal>
  );
}

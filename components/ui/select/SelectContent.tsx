import React from "react";
import { FlatList, Modal, Text, TouchableOpacity, View } from "react-native";
import { stylesSelect } from "./styles";
import { SelectContentProps } from "./types";

export default function SelectContent({
  visible,
  setVisible,
  options,
  onChange,
  dropdownStyle,
  optionStyle,
}: SelectContentProps) {
  return (
    <Modal
      visible={visible}
      transparent
      animationType="fade"
      onRequestClose={() => setVisible(false)}
    >
      <TouchableOpacity
        style={stylesSelect.overlay}
        onPress={() => setVisible(false)}
      >
        <View style={[stylesSelect.dropdown, dropdownStyle]}>
          <FlatList
            data={options}
            keyExtractor={(item) => item.value.toString()}
            renderItem={({ item }) => (
              <TouchableOpacity
                style={[stylesSelect.option, optionStyle]}
                onPress={() => {
                  onChange(item.value);
                  setVisible(false);
                }}
              >
                <Text>{item.label}</Text>
              </TouchableOpacity>
            )}
          />
        </View>
      </TouchableOpacity>
    </Modal>
  );
}

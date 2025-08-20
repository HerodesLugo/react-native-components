import { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import SelectContent from "./SelectContent";
import { SelectProps } from "./types";

const Select: React.FC<SelectProps> = ({
  options,
  value,
  onChange,
  placeholder = "choose an option",
  className = "",
  selectClassName = "",
  dropdownClassName = "",
  optionClassName = "",
  selectedOptionClassName = "",
  labelClassName = "",
}) => {
  const [visible, setVisible] = useState(false);
  const selected = options.find((opt) => opt.value === value);

  return (
    <View className={`flex-1 ${className}`}>
      <TouchableOpacity
        className={`px-3 py-2 border border-gray-300 rounded-md bg-white ${selectClassName} ${selectedOptionClassName}`}
        onPress={() => setVisible(true)}
      >
        <Text className={`text-gray-700 ${labelClassName}`}>
          {selected ? selected.label : placeholder}
        </Text>
      </TouchableOpacity>

      <SelectContent
        onChange={onChange}
        visible={visible}
        setVisible={setVisible}
        options={options}
        dropdownClassName={dropdownClassName}
        optionClassName={optionClassName}
      />
    </View>
  );
};

export default Select;

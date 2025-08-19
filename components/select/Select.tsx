import { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import SelectContent from "./SelectContent";
import { stylesSelect } from "./styles";
import { SelectProps } from "./types";

const Select: React.FC<SelectProps> = ({
  options,
  value,
  onChange,
  placeholder = "choose an option",
  style = {},
  dropdownStyle = {},
  optionStyle = {},
  selectedOptionStyle = {},
  labelStyle = {},
}) => {
  const [visible, setVisible] = useState(false);
  const selected = options.find((opt) => opt.value === value);

  return (
    <View style={[stylesSelect.container, style]}>
      <TouchableOpacity
        style={[stylesSelect.select, selectedOptionStyle]}
        onPress={() => setVisible(true)}
      >
        <Text style={[stylesSelect.label, labelStyle]}>
          {selected ? selected.label : placeholder}
        </Text>
      </TouchableOpacity>

      <SelectContent
        onChange={onChange}
        visible={visible}
        setVisible={setVisible}
        options={options}
        dropdownStyle={dropdownStyle}
        optionStyle={optionStyle}
      />
    </View>
  );
};

export default Select;

import { useState } from "react";
import { Text, TextInput, View } from "react-native";
import { TextAreaProps } from "./types";
import { SIZES } from "./variants";

const TextArea: React.FC<TextAreaProps> = ({
  label,
  size = "md",
  isInvalid = false,
  isDisabled = false,
  ...props
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const { inputClass, labelClass } = SIZES[size];

  const getContainerClasses = () => {
    const baseClasses = "bg-white border-2 rounded-lg w-full";
    
    if (isDisabled) {
      return `${baseClasses} bg-gray-100 border-gray-200`;
    }
    if (isInvalid) {
      return `${baseClasses} border-red-500`;
    }
    if (isFocused) {
      return `${baseClasses} border-blue-500`;
    }
    if (props.readOnly) {
        return `${baseClasses} bg-gray-50 border-gray-200`;
    }
    return `${baseClasses} border-gray-300`;
  };

  return (
    <View className="w-full">
      {label && (
        <Text
          className={`mb-1 font-medium ${labelClass} ${
            isInvalid ? "text-red-500" : "text-gray-700"
          } ${isDisabled ? "opacity-50" : ""}`}
        >
          {label}
        </Text>
      )}
      <TextInput
        multiline={true}
        textAlignVertical="top"
        className={`${getContainerClasses()} ${inputClass}`}
        placeholderTextColor="#9CA3AF"
        editable={!isDisabled && !props.readOnly}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        {...props}
        style={[
          { minHeight: 120 },
          props.style,
          isDisabled && { color: '#6B7280' } 
        ]}
      />
    </View>
  );
};

export default TextArea;

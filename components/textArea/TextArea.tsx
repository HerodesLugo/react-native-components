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
  const { inputClass, labelClass } = SIZES[size];

  const baseContainerClasses = "bg-white border-2 rounded-lg w-full";

  const stateContainerClasses = [
    isInvalid ? "border-red-500" : "border-gray-300 focus:border-blue-500",
    isDisabled ? "bg-gray-100" : "",
  ].join(" ");

  return (
    <View className="w-full">
      {label && (
        <Text className={`mb-1 font-medium ${labelClass} ${isInvalid ? "text-red-500" : "text-gray-700"}`}>
          {label}
        </Text>
      )}
      <TextInput
        multiline={true}
        textAlignVertical="top"
        className={`${baseContainerClasses} ${stateContainerClasses} ${inputClass}`}
        placeholderTextColor="#9CA3AF" 
        editable={!isDisabled && !props.readOnly}
        {...props}
        style={{
          minHeight: 120,
        }}
      />
    </View>
  );
};

export default TextArea;

import React, { FC } from "react";
import { Text, TextInput, View } from "react-native";
import { InputProps } from "./types";
import { disabledClass, invalidClass, sizeClasses, variantClasses } from "./variants";

const Input: FC<
  InputProps & {  }
> = ({
  label,
  size = "md",
  variant = "outline",
  
  className = "",
  invalid = false,
  disabled = false,
  type = "text",
  ...props
}) => {
  
  let inputClass = `${sizeClasses[size]} ${variantClasses[variant]} rounded  ${className}`;
  if (invalid) inputClass += ` ${invalidClass}`;
  if (disabled) inputClass += ` ${disabledClass}`;

  const keyboardType = type === "number" ? "numeric" : "default";

  return (
    <View className="flex-1">
      {label && <Text className="mb-2">{label}</Text>}
      <TextInput
        className={inputClass}
        editable={!disabled}
        keyboardType={keyboardType}
        {...props}
      />
    </View>
  );
};

export default Input;

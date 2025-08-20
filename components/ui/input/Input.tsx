import React, { FC } from "react";
import { Text, TextInput, View } from "react-native";
import { InputProps } from "./types";
import {
  colorClasses,
  disabledClass,
  invalidClass,
  sizeClasses,
  variantClasses,
} from "./variants";

const Input: FC<InputProps & {}> = ({
  label,
  size = "md",
  variant = "outline",
  color = "primary",
  errorMessage,
  className = "",
  invalid = false,
  disabled = false,
  type = "text",
  ...props
}) => {
  const colorClass = colorClasses[color] ?? colorClasses.gray;

  let inputClass = `${sizeClasses[size]} ${variantClasses[variant]} ${colorClass} rounded  ${className}`;
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
      {/* Mensaje de error opcional */}
      {errorMessage ? (
        <Text className="mt-1 text-sm text-red-500">{errorMessage}</Text>
      ) : null}
    </View>
  );
};

export default Input;

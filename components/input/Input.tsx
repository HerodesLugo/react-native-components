import React, { FC } from "react";
import { Text, TextInput, View } from "react-native";
import { InputProps, InputType } from "./types";

const sizeClasses: Record<string, string> = {
  xs: "px-2 py-1 text-xs",
  sm: "px-3 py-1.5 text-sm",
  md: "px-4 py-2 text-base",
  lg: "px-6 py-3 text-lg",
};

const variantClasses: Record<string, string> = {
  rounded: "bg-transparent border border-gray-300 rounded-full",
  outline: "bg-transparent border border-gray-300",
  underlined: "bg-transparent border-b border-gray-300",
  error: "bg-transparent border border-red-500",
};

const disabledClass = "bg-gray-100 border-gray-200 text-gray-400";
const invalidClass = "border-red-500  text-red-500";

const Input: FC<
  InputProps & { invalid?: boolean; disabled?: boolean; type?: InputType }
> = ({
  label,
  size = "md",
  variant = "solid",
  className = "",
  invalid = false,
  disabled = false,
  type = "text",
  ...props
}) => {
  let inputClass = `${sizeClasses[size]} ${variantClasses[variant]} rounded text-gray-500 ${className}`;
  if (invalid) inputClass += ` ${invalidClass}`;
  if (disabled) inputClass += ` ${disabledClass}`;

  const keyboardType = type === "number" ? "numeric" : "default";

  return (
    <View>
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

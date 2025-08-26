import React from "react";
import {
  Button as NativeButton,
  Pressable,
  TouchableHighlight,
  TouchableOpacity,
  View,
} from "react-native";
import { ButtonProps } from "./types";
import { sizeClasses, variantClasses } from "./variants";

const Button = ({
  onPress,
  disabled,
  className,
  children,
  size = "md",
  variant = "solid",
  action = "primary",
  as = "pressable",
  ...Props
}: ButtonProps) => {
  const disabledClass = disabled ? "opacity-50" : "";
  const buttonClass = `rounded ${sizeClasses[size]} ${variantClasses[variant](action)} ${disabledClass} ${className || ""}`.trim();

  const content = children;

  // Render variants of touchable components
  if (as === "nativeButton") {
    // native Button doesn't accept className; we try to map disabled and title
    const title = typeof children === "string" ? children : Array.isArray(children) ? children.join("") : "";
    return (
      <View className={buttonClass}>
        <NativeButton onPress={onPress} disabled={disabled} title={title as string} {...(Props as any)} />
      </View>
    );
  }

  const commonProps = {
    onPress,
    disabled,
    className: buttonClass,
    ...Props,
  } as any;

  if (as === "touchableOpacity") {
    return <TouchableOpacity {...commonProps}>{content}</TouchableOpacity>;
  }

  if (as === "touchableHighlight") {
    return <TouchableHighlight {...commonProps}>{content}</TouchableHighlight>;
  }

  // default: Pressable
  return (
    <Pressable {...commonProps}>
      {content}
    </Pressable>
  );
};

export default Button;

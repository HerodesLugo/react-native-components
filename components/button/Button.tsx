import { Pressable } from "react-native";
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
  ...Props
}: ButtonProps) => {
  const disabledClass = disabled ? "opacity-50" : "";
  const buttonClass = `rounded ${sizeClasses[size]} ${variantClasses[variant](action)} ${disabledClass} ${className || ""}`;

  return (
    <Pressable
      onPress={onPress}
      disabled={disabled}
      className={buttonClass}
      {...Props}
    >
      {children}
    </Pressable>
  );
};

export default Button;

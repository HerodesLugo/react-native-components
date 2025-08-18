import { Pressable, TouchableOpacity } from "react-native";
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
  const buttonClass = `rounded ${sizeClasses[size]} ${variantClasses[variant](action)} ${className || ""}`;

  return (
    <TouchableOpacity>
      <Pressable
        onPress={onPress}
        disabled={disabled}
        className={buttonClass}
        {...Props}
      >
        {children}
      </Pressable>
    </TouchableOpacity>
  );
};

export default Button;

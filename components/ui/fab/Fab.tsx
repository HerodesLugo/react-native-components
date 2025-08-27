import { TouchableOpacity } from "react-native";
import { FabProps } from "./types";
import { SIZES, VARIANTS } from "./variants";

export default function Fab({
  icon,
  size,
  variant,
  className,
  onPress,
}: FabProps) {
  const sizeClasses = SIZES[size];
  const variantClasses = VARIANTS[variant];

  return (
    <TouchableOpacity
      onPress={onPress}
      className={`absolute bottom-12 right-6 rounded-full  shadow-black/30 justify-center items-center ${sizeClasses}
        ${variantClasses}
        ${className} `}
      activeOpacity={0.8}
    >
      {icon}
    </TouchableOpacity>
  );
}

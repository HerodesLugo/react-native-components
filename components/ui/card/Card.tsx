import { View } from "react-native";
import { CardProps } from "./types";
import { sizes, variants } from "./variants";

export default function Card({
  size,
  variant,
  children,
  className,
}: CardProps) {
  const sizeClasses = sizes[size];
  const variantClasses = variants[variant];

  return (
    <View className={`${className} ${sizeClasses} ${variantClasses} rounded  `}>
      {children}
    </View>
  );
}

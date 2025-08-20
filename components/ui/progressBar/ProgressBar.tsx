import React from "react";
import { View } from "react-native";
import { ProgressBarProps } from "./type";
import { colorMap, sizeMap } from "./variants";

const ProgressBar: React.FC<ProgressBarProps> = ({
  progress = 0,
  size = "md",
  color = "primary",
  className = "",
}) => {
  const clamped = Math.max(0, Math.min(progress, 1));

  const containerClasses = `w-full overflow-hidden rounded ${sizeMap[size] ?? sizeMap.md} ${className} bg-gray-200`;
  const fillClasses = `${colorMap[color] ?? colorMap.primary} h-full`;

  return (
    <View className={containerClasses}>
      <View className={fillClasses} style={{ width: `${clamped * 100}%` }} />
    </View>
  );
};

export default ProgressBar;

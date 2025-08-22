import React from "react";
import { Text, View } from "react-native";

interface Props {
  count?: number;
  className?: string;
  colorName?: string; // Optional prop to specify color
  textClassName?: string;
}

const TabBarBadge: React.FC<Props> = ({ count = 0, className = "absolute top-0 right-2 rounded-full w-5 h-5 justify-center items-center", textClassName = "text-white text-xs font-bold", colorName = "bg-green-700" }) => {
  if (!count) return null;
  return (
    <View className={`${className} ${colorName}`}>
      <Text className={textClassName}>{count}</Text>
    </View>
  );
};

export default TabBarBadge;

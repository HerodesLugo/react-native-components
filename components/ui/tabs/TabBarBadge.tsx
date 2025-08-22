import React from "react";
import { Text, View } from "react-native";

interface Props {
  count?: number;
  className?: string;
  textClassName?: string;
}

const TabBarBadge: React.FC<Props> = ({ count = 0, className = "absolute top-0 right-2 bg-red-500 rounded-full w-5 h-5 justify-center items-center", textClassName = "text-white text-xs font-bold" }) => {
  if (!count) return null;
  return (
    <View className={className}>
      <Text className={textClassName}>{count}</Text>
    </View>
  );
};

export default TabBarBadge;

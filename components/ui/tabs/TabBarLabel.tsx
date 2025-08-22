import React from "react";
import { Text } from "react-native";
import { useTabBar } from "./context";

interface Props {
  children: React.ReactNode;
  className?: string;
}

const TabBarLabel: React.FC<Props> = ({ children, className = "mt-1 text-xs" }) => {
  const { isFocused } = useTabBar();
  return (
    <Text className={`${className} ${isFocused ? "text-gray-400" : "text-indigo-200"}`}>
      {children}
    </Text>
  );
};

export default TabBarLabel;

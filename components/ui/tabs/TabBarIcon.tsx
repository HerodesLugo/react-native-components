import React from "react";
import { View } from "react-native";
import { useTabBar } from "./context";

interface Props {
  children: React.ReactNode;
  className?: string;
}

const TabBarIcon: React.FC<Props> = ({ children, className = "p-2 rounded-full" }) => {
  const { isFocused } = useTabBar();
  return <View className={`${className} ${isFocused ? "" : ""}`}>{children}</View>;
};

export default TabBarIcon;

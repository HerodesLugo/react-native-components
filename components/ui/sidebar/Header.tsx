import React from "react";
import { View } from "react-native";

const Header: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className = "" }) => (
  <View className={`p-5 border-b border-gray-700 ${className}`}>
    {children}
  </View>
);

export default Header;

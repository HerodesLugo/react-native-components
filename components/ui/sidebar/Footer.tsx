import React from "react";
import { View } from "react-native";

const Footer: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className = "" }) => (
  <View className={`p-5 border-t border-gray-700 mt-auto ${className}`}>
    {children}
  </View>
);

export default Footer;

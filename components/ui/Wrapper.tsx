import React, { ReactNode } from "react";
import { Text, View } from "react-native";

interface WrapperProps {
  children: ReactNode;
  className?: string;
  label?: string;
  
}

const Wrapper: React.FC<WrapperProps> = ({ children, className, label }) => {
  return (
    <View
      className={`border border-indigo-300 rounded-lg p-4 bg-white shadow ${className}`}
    >
      {label && (
        <Text className="text-indigo-600 font-semibold text-lg mb-3">{label}</Text>
      )}
      {children}
    </View>
  );
};

export default Wrapper;

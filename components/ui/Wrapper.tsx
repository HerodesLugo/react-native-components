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
      className={`border-2 border-indigo-600 rounded-lg  p-2.5 justify-between ${className}`}
    >
      {label && <Text className="text-center text-indigo-400 font-bold text-2xl">{label}</Text>}
      {children}
    </View>
  );
};

export default Wrapper;

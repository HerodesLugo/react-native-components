import React from "react";
import { Text, View } from "react-native";
import { BadgeProps } from "./types";
import { colorClasses, sizeClasses } from "./variants";

const Badge = ({ size = "md", color = "primary", className, icon, children, ...props }: BadgeProps) => {
  const sc = sizeClasses[size];
  const cc = colorClasses[color];

  const containerClass = `rounded-full flex-row items-center ${sc.container} ${cc.container} ${className || ""}`;
  const textClass = `${sc.text} ${cc.text}`;

  return (
    <View accessibilityRole="text" className={containerClass} {...props}>
      {icon ? <View className="mr-2">{icon}</View> : null}
      {children ? <Text className={textClass}>{children}</Text> : null}
    </View>
  );
};

export default Badge;

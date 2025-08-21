import React from "react";
import { View } from "react-native";
import { SpinnerProps } from "./types";
import { colorClasses, sizeClasses } from "./variants";

const Spinner = ({ size = "md", color = "primary", className, ...props }: SpinnerProps) => {
  const classes = `rounded-full animate-spin ${sizeClasses[size]} ${colorClasses[color]} ${className || ""}`;

  return <View accessibilityRole="progressbar" className={classes} {...props} />;
};

export default Spinner;

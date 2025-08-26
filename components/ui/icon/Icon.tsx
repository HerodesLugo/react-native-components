import * as Icons from "@expo/vector-icons";
import React from "react";
import { View } from "react-native";
import { IconProps } from "./types";
import { sizeMap } from "./variants";

export default function Icon({
  name,
  svg,
  size = "md",
  color = "#374151",
  style,
  library = "Feather",
}: IconProps) {
  const resolvedSize = typeof size === "number" ? size : sizeMap[size] || 20;
  const Lib = (Icons as any)[library];

  return (
    <View style={style} accessible accessibilityLabel={name || undefined}>
      {svg ? (
        svg
      ) : Lib && name ? (
        <Lib name={name} size={resolvedSize} color={color} style={style} />
      ) : null}
    </View>
  );
}

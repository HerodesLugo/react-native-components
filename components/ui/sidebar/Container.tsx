import React from "react";
import { View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { DrawerContainerProps } from "./types";

const Container: React.FC<DrawerContainerProps> = ({
  children,
  containerClassName = "bg-gray-800",
  orientation = "vertical",
}) => {
  const { top, bottom } = useSafeAreaInsets();
  const direction = orientation === "vertical" ? "flex-col" : "flex-row";

  return (
    <View
      className={`flex-1 ${direction} ${containerClassName}`}
      style={{ paddingTop: top, paddingBottom: bottom }}
    >
      {children}
    </View>
  );
};

export default Container;

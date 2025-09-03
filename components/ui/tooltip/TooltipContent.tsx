import React, { useState } from "react";
import {
  Modal,
  Pressable,
  Text,
  View,
  type LayoutChangeEvent,
} from "react-native";
import type { TooltipContentProps } from "./types";

function TooltipContent({
  text,
  isVisible,
  position,
  onClose,
}: TooltipContentProps) {
  const [tooltipWidth, setTooltipWidth] = useState(0);
  const tooltipY = position.y - 50;
  const tooltipX = position.x + position.width / 2;

  const handleLayout = (event: LayoutChangeEvent) => {
    const { width } = event.nativeEvent.layout;
    setTooltipWidth(width);
  };

  const containerClasses =
    "absolute bg-gray-800 rounded-md py-2 px-3 shadow-lg";
  const textClasses = "text-white text-sm text-center";
  const triangleClasses =
    "absolute w-0 h-0 border-l-8 border-l-transparent border-r-8 border-r-transparent border-t-8 border-t-gray-800";

  return (
    <Modal
      visible={isVisible}
      transparent
      animationType="fade"
      onRequestClose={onClose}
    >
      <Pressable className="flex-1" onPress={onClose}>
        <View
          onLayout={handleLayout}
          style={{
            top: tooltipY,
            left: tooltipX,
            transform: [{ translateX: -tooltipWidth / 2 }],
            opacity: tooltipWidth ? 1 : 0,
            maxWidth: "80%",
          }}
          className={containerClasses}>
          <Text className={textClasses}>{text}</Text>
          <View
            style={{
              top: "100%",
              left: "50%",
              transform: [{ translateX: -8 }],
            }}
            className={triangleClasses}/>
        </View>
      </Pressable>
    </Modal>
  );
}

export default TooltipContent;

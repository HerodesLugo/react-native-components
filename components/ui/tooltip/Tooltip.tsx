import React, { useRef, useState } from "react";
import { Pressable, View } from "react-native";
import TooltipContent from "./TooltipContent";
import { TooltipProps } from "./types";

export function Tooltip({ children, text, containerStyle }: TooltipProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0, width: 0, height: 0 });
  const triggerRef = useRef<View>(null);

  const handlePress = () => {
    triggerRef.current?.measure((_fx, _fy, width, height, px, py) => {
      setPosition({ x: px, y: py, width, height });
      setIsVisible(true);
    });
  };

  return (
    <>
      <View ref={triggerRef} style={containerStyle}>
        <Pressable onPress={handlePress}>{children}</Pressable>
      </View>

      <TooltipContent
        text={text}
        isVisible={isVisible}    
        position={position}
        onClose={() => setIsVisible(false)}
      />
    </>
  );
}

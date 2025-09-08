import React, { useEffect } from "react";
import { View } from "react-native";
import Animated, { useAnimatedStyle, useSharedValue, withRepeat, withTiming, } from "react-native-reanimated";
import { LinearProgressProps } from "./type";

export default function LinearProgress(props: LinearProgressProps) {
  
  const { height = 6, color = "#6D28D9", backgroundColor = "#E5E7EB", borderRadius = 100, duration = 1500, origin = "left", progress = 100  } = props;
  const progressAnimation = useSharedValue(0);

  useEffect(() => {
    progressAnimation.value = withRepeat(withTiming(1, { duration }), -1, false);
  }, [progressAnimation, duration]);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ scaleX: progressAnimation.value }],
  }));

  return (
    <View
      className="w-full overflow-hidden"
      style={[{ height, backgroundColor, borderRadius }]}
    >
      <Animated.View        
        style={[
          {
            height,
            backgroundColor: color,
            borderRadius,
            transformOrigin: origin,
            width: `${progress}%`
          },
          animatedStyle,
        ]}
      />
    </View>
  );
}

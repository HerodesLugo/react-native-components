import { LinearGradient } from "expo-linear-gradient";
import { useEffect } from "react";
import { StyleSheet, View } from "react-native";
import Animated, { useAnimatedStyle, useSharedValue, withRepeat, withTiming, } from "react-native-reanimated";
import { SkeletonProps } from "./types";


const Skeleton: React.FC<SkeletonProps> = ({
  width = "100%",
  height = 20,
  borderRadius = 8,
  style,
}) => {
  const translateX = useSharedValue(-200);
  useEffect(() => {
    translateX.value = withRepeat(
      withTiming(200, { duration: 1200 }),
      -1,
      false
    );
  }, [translateX]);

  const animatedStyle = useAnimatedStyle(() => ({ 
    transform: [{ translateX: translateX.value }],
  }));

  return (
    <View style={[styles.container, { width, height, borderRadius }, style]}>      
      <View style={[styles.background, { borderRadius }]} />
      <Animated.View style={[styles.gradientWrapper, animatedStyle]}>
        <LinearGradient
          colors={["transparent", "rgba(255,255,255,0.4)", "transparent"]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          style={[StyleSheet.absoluteFill, { borderRadius }]}
        />
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    overflow: "hidden",
    backgroundColor: "#E0E0E0",
  },
  background: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "#E0E0E0",
  },
  gradientWrapper: {
    ...StyleSheet.absoluteFillObject,
    width: "100%",
  },
});

export default Skeleton;

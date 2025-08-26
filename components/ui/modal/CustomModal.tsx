import React, { useEffect } from "react";
import { Modal, Pressable } from "react-native";
import Animated, {
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
import { SafeAreaView } from "react-native-safe-area-context";
import { CustomModalProps } from "./types";
import { variantContainerClasses, variantModalClasses } from "./variants";

const CustomModal: React.FC<CustomModalProps> = ({
  visible,
  onClose,
  children,
  variant = "center",
  className = "bg-white",
}) => {
  const progress = useSharedValue(0);

  useEffect(() => {
    progress.value = withTiming(visible ? 1 : 0, { duration: 300 });
  }, [visible, progress]);

  const backdropStyle = useAnimatedStyle(() => ({
    opacity: progress.value,
  }));

  const centerStyle = useAnimatedStyle(() => ({
    opacity: progress.value,
    transform: [{ scale: interpolate(progress.value, [0, 1], [0.95, 1]) }],
  }));

  const bottomStyle = useAnimatedStyle(() => ({
    transform: [{ translateY: interpolate(progress.value, [0, 1], [400, 0]) }],
  }));

  const modalStyle = variant === "center" ? centerStyle : bottomStyle;

  return (
    <Modal
      visible={visible}
      transparent
      animationType="none"
      onRequestClose={onClose}
    >
      <Animated.View className="flex-1 bg-black/40" style={[backdropStyle]}>
        <Pressable className="flex-1" onPress={onClose} />
      </Animated.View>

      <SafeAreaView
        edges={variant === "full" ? ["top"] : ["left", "right"]}
        className={`absolute top-0 left-0 right-0 bottom-0  ${variantContainerClasses[variant]}`}
        pointerEvents="box-none"
      >
        <Animated.View
          className={`${variantModalClasses[variant]} ${className}`}
          style={[modalStyle]}
        >
          {children}
        </Animated.View>
      </SafeAreaView>
    </Modal>
  );
};

export default CustomModal;

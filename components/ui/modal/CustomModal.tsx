import React, { useEffect, useRef } from "react";
import {
  Animated,
  Dimensions,
  Easing,
  Modal,
  Pressable,
  View,
} from "react-native";
import { CustomModalProps } from "./types";

const windowHeight = Dimensions.get("window").height;

const CustomModal: React.FC<CustomModalProps> = ({
  visible,
  onClose,
  children,
  variant = "center",
  className = "bg-white p-5",
}) => {
  const animatedValue = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    if (visible) {
      Animated.timing(animatedValue, {
        toValue: 1,
        duration: 300,
        easing: Easing.inOut(Easing.ease),
        useNativeDriver: true,
      }).start();
    } else {
      Animated.timing(animatedValue, {
        toValue: 0,
        duration: 300,
        easing: Easing.inOut(Easing.ease),
        useNativeDriver: true,
      }).start();
    }
  }, [visible]);

  const backdropAnimation = {
    opacity: animatedValue,
  };

  const centerAnimation = {
    opacity: animatedValue,
    transform: [
      {
        scale: animatedValue.interpolate({
          inputRange: [0, 1],
          outputRange: [0.9, 1],
        }),
      },
    ],
  };

  const bottomAnimation = {
    transform: [
      {
        translateY: animatedValue.interpolate({
          inputRange: [0, 1],
          outputRange: [windowHeight, 0],
        }),
      },
    ],
  };

  const fullAnimation = bottomAnimation; 

  const variantContainerClasses = {
    center: "justify-center items-center",
    bottom: "justify-end",
    full: "justify-end",
  };

  const variantModalClasses = {
    center: "rounded-xl  min-w-[80%] shadow-lg",
    bottom: "rounded-t-2xl  w-full max-h-[80%] shadow-lg",
    full: "w-full h-full shadow-lg",
  };

  const getModalAnimation = () => {
    switch (variant) {
      case "center":
        return centerAnimation;
      case "bottom":
        return bottomAnimation;
      case "full":
        return fullAnimation;
      default:
        return centerAnimation;
    }
  };

  return (
    <Modal
      visible={visible}
      transparent
      animationType="none"
      onRequestClose={onClose}
    >
      <Animated.View className="flex-1 bg-black/40" style={backdropAnimation}>
        <Pressable className="flex-1" onPress={onClose} />
      </Animated.View>

      <View
        className={`absolute top-0 left-0 right-0 bottom-0 ${variantContainerClasses[variant]}`}
        pointerEvents="box-none" 
      >
        <Animated.View
          className={`${variantModalClasses[variant]} ${className}`}
          style={getModalAnimation()}
        >
          {children}
        </Animated.View>
      </View>
    </Modal>
  );
};

export default CustomModal;

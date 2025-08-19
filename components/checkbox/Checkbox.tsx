import React, { useEffect, useRef } from "react";
import { Animated, Easing, Text, TouchableOpacity, View } from "react-native";
import { CheckboxProps } from "./types";
import { SIZES } from "./variants";

const Checkbox: React.FC<CheckboxProps> = ({
  label,
  value,
  onValueChange,
  size = "md",
  invalid = false,
  disabled = false,
}) => {
  const animatedValue = useRef(new Animated.Value(value ? 1 : 0)).current;
  const { box, textClass } = SIZES[size];

  // Animación para el checkmark
  useEffect(() => {
    Animated.timing(animatedValue, {
      toValue: value ? 1 : 0,
      duration: 150,
      easing: Easing.inOut(Easing.ease),
      useNativeDriver: true, // Scale es compatible
    }).start();
  }, [value, animatedValue]);

  const handlePress = () => {
    if (!disabled) {
      onValueChange(!value);
    }
  };

  // Clases condicionales para el contenedor del checkbox
  const boxClasses = [
    "justify-center items-center border-2 rounded-md",
    value && !invalid && "bg-blue-500 border-blue-500",
    !value && !invalid && "border-gray-400 bg-white",
    invalid && "border-red-500",
    value && invalid && "bg-red-500",
  ].join(" ");

  const labelClasses = [
    textClass,
    !invalid && "text-black",
    invalid && "text-red-500",
  ].join(" ");

  return (
    <TouchableOpacity
      onPress={handlePress}
      disabled={disabled}
      className={`flex-row items-center p-2 ${disabled ? "opacity-50" : ""}`}
      accessibilityRole="checkbox"
      accessibilityState={{ checked: value, disabled }}
    >
      <View className={boxClasses} style={{ width: box, height: box }}>
        
        <Animated.View style={{ transform: [{ scale: animatedValue }] }}>
          <View
            style={{
              width: box * 0.4,
              height: box * 0.7,
              borderBottomWidth: box / 8, 
              borderRightWidth: box / 8, 
              borderColor: "white",
              transform: [{ rotate: "45deg" }],
              marginBottom: box / 5, 
            }}
          />
        </Animated.View>
      </View>
      <Text className={`ml-3 ${labelClasses}`}>{label}</Text>
    </TouchableOpacity>
  );
};

export default Checkbox;

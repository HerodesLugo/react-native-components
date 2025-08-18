import React, { useEffect, useRef } from 'react';
import { Animated, Easing, Text, TouchableOpacity, View } from 'react-native';
import { SwitchProps } from './types';
import { SIZES } from './variants';

const Switch: React.FC<SwitchProps> = ({
  value,
  onValueChange,
  disabled = false,
  label,
  size = 'md',
  activeTrackColor = '#34C759',
  inactiveTrackColor = '#E9E9EA',
  thumbColor = '#FFFFFF',
}) => {
  const animatedValue = useRef(new Animated.Value(value ? 1 : 0)).current;
  const { trackWidth, trackHeight, thumbSize, padding } = SIZES[size];

  useEffect(() => {
    Animated.timing(animatedValue, {
      toValue: value ? 1 : 0,
      duration: 200,
      easing: Easing.inOut(Easing.ease),
      useNativeDriver: false,
    }).start();
  }, [value, animatedValue]);

  const thumbTranslateX = animatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: [padding, trackWidth - thumbSize - padding],
  });

  const trackBackgroundColor = animatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: [inactiveTrackColor, activeTrackColor],
  });

  const handlePress = () => {
    if (!disabled) {
      onValueChange(!value);
    }
  };

  return (
    <View className="flex-row items-center">
      {label && <Text className="mr-2 text-base">{label}</Text>}
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={handlePress}
        disabled={disabled}
        accessibilityRole="switch"
        accessibilityState={{ checked: value, disabled }}
      >
        <Animated.View
          className={`justify-center rounded-full ${disabled ? 'opacity-50' : ''}`}
          style={{
            width: trackWidth,
            height: trackHeight,
            backgroundColor: trackBackgroundColor,
          }}
        >
          <Animated.View
            className="rounded-full shadow-md"
            style={{
              width: thumbSize,
              height: thumbSize,
              backgroundColor: thumbColor,
              transform: [{ translateX: thumbTranslateX }],
            }}
          />
        </Animated.View>
      </TouchableOpacity>
    </View>
  );
};

export default Switch;

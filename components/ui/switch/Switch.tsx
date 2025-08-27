import { Text, TouchableOpacity, View } from "react-native";
import Animated, { useAnimatedStyle, useSharedValue, withSpring, } from "react-native-reanimated";
import { SwitchProps } from "./types";
import { SIZES } from "./variants";

const Switch: React.FC<SwitchProps> = ({
  value,
  onValueChange,
  disabled = false,
  label,
  size = "md",
  activeTrackColor = "#34C759",
  inactiveTrackColor = "#E9E9EA",
  thumbColor = "#FFFFFF",
}) => {
  const thumbTranslateX = useSharedValue(1);
  const trackColor = useSharedValue(inactiveTrackColor);

  const { trackWidth, trackHeight, thumbSize, padding } = SIZES[size];

  const thumbStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateX: thumbTranslateX.value }],
    };
  });

  const backgroundColorStyle = useAnimatedStyle(() => {
    return {
      backgroundColor: trackColor.value,
    };
  });

  const handlePress = () => {
    if (!disabled) {
      onValueChange(!value);
      thumbTranslateX.value = value ? withSpring(padding) : withSpring(trackWidth - thumbSize - padding);
      trackColor.value = value ? withSpring(inactiveTrackColor) : withSpring(activeTrackColor);
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
          className={`justify-center rounded-full ${disabled ? "opacity-50" : ""}`}
          style={[
            {
              width: trackWidth,
              height: trackHeight,
            },
            backgroundColorStyle,
          ]}
        >
          <Animated.View
            className="rounded-full shadow-md"
            style={[
              {
                width: thumbSize,
                height: thumbSize,
                backgroundColor: thumbColor,
              },
              thumbStyle,
            ]}
          />
        </Animated.View>
      </TouchableOpacity>
    </View>
  );
};

export default Switch;

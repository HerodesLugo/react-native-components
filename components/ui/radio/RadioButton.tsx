import { Text, TouchableOpacity, View } from "react-native";
import Animated, { useAnimatedStyle, useSharedValue } from "react-native-reanimated";
import { getClass } from "./getClass";
import { RadioButtonProps } from "./types";
import { SIZES } from "./variants";

const RadioButton: React.FC<RadioButtonProps> = ({
  label,
  value,
  selectedValue,
  onSelect,
  size = "md",
  invalid = false,
  disabled = false,
}) => {
  const isSelected = value === selectedValue;
  const { outer, inner, textClass } = SIZES[size];
  const { innerDot, labelClasses, outerRing } = getClass({isSelected, invalid, textClass});

  //hooks
  const animatedValue = useSharedValue(1);
  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ scale: animatedValue.value }],
    };
  });

  //handles
  const handlePress = () => {
    if (!disabled) {
      onSelect(value);
    }
  };

  return (
    <TouchableOpacity
      onPress={handlePress}
      disabled={disabled}
      className={`flex-row items-center p-2 ${disabled ? "opacity-50" : ""}`}
      accessibilityRole="radio"
      accessibilityState={{ checked: isSelected, disabled }}
    >
      <View className={outerRing} style={{ width: outer, height: outer }}>
        <Animated.View
          className={innerDot}
          style={[
            animatedStyle,
            {
              width: inner,
              height: inner,
            },
          ]}
        />
      </View>
      <Text className={`ml-3 ${labelClasses}`}>{label}</Text>
    </TouchableOpacity>
  );
};

export default RadioButton;

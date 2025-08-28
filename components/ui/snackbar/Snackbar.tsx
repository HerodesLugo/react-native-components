import { useEffect } from "react";
import { Text, TouchableOpacity } from "react-native";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
import { SnackbarConfig } from "./types";

const SnackbarComponent = ({
  config,
  onDismiss,
}: {
  config: SnackbarConfig;
  onDismiss: () => void;
}) => {
  const opacity = useSharedValue(0);

  const animatedStyle = useAnimatedStyle(() => ({
    opacity: opacity.value,
    transform: [{ translateY: (1 - opacity.value) * 100 }],
    pointerEvents: opacity.value === 0 ? "none" : "auto",
  }));

  useEffect(() => {
    opacity.value = withTiming(1, { duration: config.duration });

    const timer = setTimeout(() => {
      opacity.value = withTiming(0, { duration: config.duration  });
    }, config.duration);

    return () => clearTimeout(timer);
  }, [config]);

  const handleActionPress = () => {
    config.onActionPress?.();
    onDismiss();
    withTiming(0);
  };

  return (
    <Animated.View
      style={animatedStyle}
      className="bg-gray-800 p-4 rounded-lg shadow-lg items-center m-4"
    >
      <Text className="text-white flex-1 text-base">{config.message}</Text>
      {config.actionText && (
        <TouchableOpacity onPress={handleActionPress}>
          <Text className="text-blue-400 font-bold ml-4 text-base">
            {config.actionText.toUpperCase()}
          </Text>
        </TouchableOpacity>
      )}
    </Animated.View>
  );
};

export default SnackbarComponent;

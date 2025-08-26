import { useEffect } from "react";
import { Text, View } from "react-native";
import Animated, {
  runOnJS,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
import Icon from "../icon/Icon";
import { NOTIFICATION_CONFIG } from "./config";
import { NotificationProps } from "./types";

export const Notification: React.FC<NotificationProps> = ({
  config,
  onDismiss,
}) => {
  const progress = useSharedValue(0);

  useEffect(() => {
    // animate in
    progress.value = withTiming(1, { duration: 300 });

    const timer = setTimeout(() => {
      // animate out and call onDismiss when finished
      progress.value = withTiming(0, { duration: 300 }, (isFinished) => {
        if (isFinished) {
          runOnJS(onDismiss)(config.id);
        }
      });
    }, config.duration || 3000);

    return () => {
      clearTimeout(timer);
      // ensure value reset
      progress.value = 0;
    };
  }, [config.duration, config.id, onDismiss, progress]);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ translateY: -100 * (1 - progress.value) }],
  }));

  const { icon, color } = NOTIFICATION_CONFIG[config.type];

  return (
    <Animated.View
      className={`w-11/12 max-w-sm p-4 rounded-xl shadow-lg flex-row items-center my-2 ${color}`}
      style={animatedStyle}
    >
      <Icon name={icon} size={28} color="white"  />
      <View className="ml-3 flex-1">
        <Text className="text-white font-bold text-base">{config.title}</Text>
        {config.message && (
          <Text className="text-white mt-1">{config.message}</Text>
        )}
      </View>
    </Animated.View>
  );
};

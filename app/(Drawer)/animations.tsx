import { Text, TouchableOpacity, View } from "react-native";
import Animated, {
  useAnimatedProps,
  useSharedValue,
  withSpring,
  withTiming,
} from "react-native-reanimated";
import { Circle } from "react-native-svg";

export default function AnimationsScreen() {
  //   const fadeAnim = React.useRef(new Animated.Value(0)).current;

  //   const fadeIn = () => {
  //     Animated.timing(fadeAnim, {
  //       toValue: 1,
  //       duration: 1000,
  //       useNativeDriver: true,
  //     }).start();
  //   };

  //   const fadeOut = () => {
  //     Animated.timing(fadeAnim, {
  //       toValue: 0,
  //       duration: 1000,
  //       useNativeDriver: true,
  //     }).start();
  //   };
  const width = useSharedValue(100);
  const translateX = useSharedValue(0);
  const AnimatedCircle = Animated.createAnimatedComponent(Circle);
  const r = useSharedValue<number>(10);

  const handleIncreaseRing = () => {
    r.value += 10;
  };

  const animateProps = useAnimatedProps(() => ({
    r: withTiming(r.value),
  }));

  const handleTranslate = () => {
    translateX.value = withSpring(translateX.value + 50);
  };

  const handleTranslateToLeft = () => {
    translateX.value = withSpring(translateX.value - 50);
  };

  const handleIncrease = () => {
    width.value = withSpring(width.value + 50);
  };

  const handleDecrease = () => {
    width.value = withSpring(width.value - 50);
  };

  return (
    <View className="flex-1 p-10 gap-5">
      {/*  */}
      <View className="gap-2">
        <Text>Increase Width</Text>
        <Animated.View
          style={{
            width,
            height: 100,
            maxWidth: "100%",
            backgroundColor: "violet",
          }}
        />

        <View className="flex-row justify-between">
          <TouchableOpacity
            className="border p-3 rounded-3xl"
            onPress={handleIncrease}
          >
            <Text>Press me to increase width</Text>
          </TouchableOpacity>
          <TouchableOpacity
            className="border p-3 rounded-3xl"
            onPress={handleDecrease}
          >
            <Text>Press me to decrease width</Text>
          </TouchableOpacity>
        </View>
      </View>
      {/*  */}
      <View className="gap-2">
        <Text>Translate Box</Text>
        <Animated.View
          style={{
            width: 100,
            height: 100,
            transform: [{ translateX }],
            backgroundColor: "purple",
          }}
        />
        <View className="flex-row justify-between">
          <TouchableOpacity
            className="border p-3 rounded-3xl"
            onPress={handleTranslate}
          >
            <Text>Press me to translate to right</Text>
          </TouchableOpacity>
          <TouchableOpacity
            className="border p-3 rounded-3xl"
            onPress={handleTranslateToLeft}
          >
            <Text>Press me to translate to left</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View className="gap-2">
        <Text>Increase Ring</Text>
        <AnimatedCircle
          cx={50}
          cy={50}
          fill="#b58df1"
          animatedProps={animateProps}
        />
        <View className="flex-row justify-between">
          <TouchableOpacity
            className="border p-3 rounded-3xl"
            onPress={handleIncreaseRing}
          >
            <Text>Press me to increase ring</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

import Button from "@/components/ui/button/Button";
import { useEffect } from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import Animated, {
  Easing,
  useAnimatedProps,
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withSpring,
  withTiming,
} from "react-native-reanimated";
import Svg, { Circle } from "react-native-svg";

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

  const duration = 2000;
  const defaultAnim = useSharedValue(100 / 2 - 160);
  const linearAnim = useSharedValue(100 / 2 - 160);

  const animatedDefault = useAnimatedStyle(() => ({
    transform: [{ translateX: withSpring(defaultAnim.value) }],
  }));

  const animatedChanged = useAnimatedStyle(() => ({
    transform: [{ translateX: linearAnim.value }],
  }));

  useEffect(() => {
    linearAnim.value = withRepeat(
      withTiming(-linearAnim.value, {
        duration,
        easing: Easing.linear,
      }),
      -1,
      true
    );

    defaultAnim.value = withRepeat(
      withTiming(-defaultAnim.value, {
        duration,
      }),
      -1,
      true
    );
  }, []);

  return (
    <ScrollView>
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

          <View className="flex-row gap-10 justify-between">
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

        <View className="gap-10 items-center">
          <Text>Increase Ring</Text>

          <Svg width={400} height={400} viewBox="0 0 100 100">
            <AnimatedCircle
              cx={50}
              cy={50}
              fill="#b58df1"
              animatedProps={animateProps}
            />
          </Svg>

        
          <Button
            variant="outline"
            onPress={handleIncreaseRing}
          >
            <Text>Press me to increase ring</Text>
          </Button>
        </View>

        <View className="gap-2 my-10 justify-center items-center">
          <Animated.View
            style={animatedDefault}
            className="h-40 w-40 bg-indigo-800 rounded justify-center"
          >
            <Text className="text-white font-bold text-center text-2xl">
              Inout
            </Text>
          </Animated.View>

          <Animated.View
            style={animatedChanged}
            className="h-40 w-40 bg-indigo-800 rounded justify-center"
          >
            <Text className="text-white font-bold text-center text-2xl">
              Inout
            </Text>
          </Animated.View>
        </View>
      </View>
    </ScrollView>
  );
}

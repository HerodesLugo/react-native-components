import { useHeaderHeight } from "@react-navigation/elements";
import { StyleSheet, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function Navbar() {
  const headerHeight = useHeaderHeight();
  const insets = useSafeAreaInsets();

  const height = headerHeight && headerHeight > 0 ? headerHeight : 56;

  return (
    <View
      className="bg-slate-700  flex p-5"
      style={{
        height,
        paddingTop: insets.top,
        borderBottomWidth: StyleSheet.hairlineWidth,
        borderBottomColor: "#e0e0e0",
      }}
    >
      <Text className="text-white font-medium text-xl">Welcome</Text>
    </View>
  );
}

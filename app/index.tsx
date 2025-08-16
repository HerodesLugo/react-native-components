import Button from "@/components/button/Button";
import { Text, View } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Button onPress={() => alert("Button pressed!")}>
        <Text>Press Me</Text>
      </Button>

      
    </View>
  );
}

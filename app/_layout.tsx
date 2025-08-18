import { Stack } from "expo-router";
import "../global.css";

export default function RootLayout() {
  return (
    <Stack
    
      screenOptions={{
        headerTitle: "Components",
        headerStyle: { backgroundColor: "#C9C4C1" },
      }}
    >
      
      <Stack.Screen name="home" />
    </Stack>
  );
}

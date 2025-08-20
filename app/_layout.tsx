import Navbar from "@/components/navbar/navbar";
import { Stack } from "expo-router";
import "../global.css";

export default function RootLayout() {
  return (
    <Stack
      screenOptions={{
        header: () => <Navbar />,
      }}
    >
      <Stack.Screen name="home" />
    </Stack>
  );
}

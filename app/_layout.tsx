import { NotificationProvider } from "@/components/ui/notification";
import { Stack } from "expo-router";
import "../global.css";

export default function RootLayout() {
  return (
    <NotificationProvider>
      <Stack
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="home" />
      </Stack>
    </NotificationProvider>
  );
}

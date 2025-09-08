import { NotificationProvider } from "@/components/ui/notification";
import { SnackbarProvider } from "@/components/ui/snackbar/Context";
import { Stack } from "expo-router";
import "../global.css";

export default function RootLayout() {
  return (
    <SnackbarProvider>
      <NotificationProvider>
        <Stack
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen name="index" />
        </Stack>
      </NotificationProvider>
    </SnackbarProvider>
  );
}

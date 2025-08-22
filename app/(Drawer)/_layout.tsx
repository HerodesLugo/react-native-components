import Avatar from "@/components/ui/avatar/Avatar";
import Navbar from "@/components/ui/navbar/Navbar";
import { Drawer } from "@/components/ui/sidebar/SIdebar";
import { Ionicons } from "@expo/vector-icons";
import { Drawer as ExpoDrawer } from "expo-router/drawer";
import { Text, TouchableOpacity } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";

export default function Layout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <ExpoDrawer
        drawerContent={(props) => (
          <Drawer.Container containerClassName="bg-indigo-800" {...props}>
            <Drawer.Header>
              <Avatar
                size={80}
                source={{
                  uri: "https://placehold.co/100x100/EFEFEF/333?text=Logo",
                }}
              />

              <Text className="text-white text-lg font-bold">Jane Doe</Text>
              <Text className="text-gray-400 text-sm">
                jane.doe@example.com
              </Text>
            </Drawer.Header>

            <Drawer.Content>
              <Drawer.Item
                href="/(tabs)"
                icon={
                  <Ionicons name="home-outline" size={22} color="#D1D5DB" />
                }
              >
                <Text className="text-gray-200 text-base">Inicio</Text>
              </Drawer.Item>
              <Drawer.Item
                href="/user/jane"
                icon={
                  <Ionicons name="person-outline" size={22} color="#D1D5DB" />
                }
              >
                <Text className="text-gray-200 text-base">Perfil</Text>
              </Drawer.Item>
            </Drawer.Content>

            <Drawer.Footer>
              <Drawer.Item
                href="/settings"
                icon={
                  <Ionicons name="settings-outline" size={22} color="#9CA3AF" />
                }
              >
                <Text className="text-gray-300">Configuración</Text>
              </Drawer.Item>
            </Drawer.Footer>
          </Drawer.Container>
        )}
        screenOptions={({ navigation }) => {
          return {
            headerShown: true,
            drawerPosition: "right",
            header: () => (
              <Navbar
                backgroundClassName="bg-white border-none"
                titleClassName="text-sm text-white"
              />
            ),
            headerRight: () => (
              <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
                <Ionicons name="settings-outline" size={24} color="#000" />
              </TouchableOpacity>
            ),
          };
        }}
      >
        {/* Las pantallas se definen aquí, pero su renderizado en el drawer es manual */}
        <ExpoDrawer.Screen name="(tabs)" options={{ title: "Mi App" }} />
        <ExpoDrawer.Screen name="user/[id]" options={{ title: "Perfil" }} />
      </ExpoDrawer>
    </GestureHandlerRootView>
  );
}

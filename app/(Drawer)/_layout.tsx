import Fernando from "@/assets/fernando.png";
import Avatar from "@/components/ui/avatar/Avatar";
import Navbar from "@/components/ui/navbar/Navbar";
import Drawer from "@/components/ui/sidebar";
import { Entypo, Ionicons, MaterialIcons } from "@expo/vector-icons";
// import { Drawer as ExpoDrawer } from "expo-router/drawer";
import { Drawer as ExpoDrawer } from "expo-router/drawer";
import { Pressable, Text, TouchableOpacity, View } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";

export default function Layout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <ExpoDrawer
        drawerContent={(props) => (
          <Drawer.Container containerClassName="bg-white" {...props}>
            <Drawer.Header className="border-b-white">
              <Avatar size={120} source={Fernando} />

              <Text className="text-gray-700 text-lg font-bold">
                Sennior Developer
              </Text>
              <Text className="text-gray-500 text-sm">
                jane.doe@example.com
              </Text>
            </Drawer.Header>

            <Drawer.Content>
              <Drawer.Item
                href="/"
                icon={<Ionicons name="home-outline" size={22} color="black" />}
              >
                <Text className="text-gray-700 text-base">Inicio</Text>
              </Drawer.Item>
              <Drawer.Item
                href="/user/jane"
                icon={
                  <Ionicons name="person-outline" size={22} color="black" />
                }
              >
                <Text className="text-gray-700 text-base">Perfil</Text>
              </Drawer.Item>
              <Drawer.Item
                href="/main"
                icon={
                  <Ionicons name="person-outline" size={22} color="black" />
                }
              >
                <Text className="text-gray-700 text-base">Components</Text>
              </Drawer.Item>
              <Drawer.Item
                href="/animations"
                icon={
                  <Ionicons name="person-outline" size={22} color="black" />
                }
              >
                <Text className="text-gray-700 text-base">Animations</Text>
              </Drawer.Item>
            </Drawer.Content>

            <Drawer.Footer className="border-t-white">
              <Drawer.Item
                href="/settings"
                icon={
                  <Ionicons name="settings-outline" size={22} color="black" />
                }
              >
                <Text className="text-gray-700">Configuración</Text>
              </Drawer.Item>
            </Drawer.Footer>
          </Drawer.Container>
        )}
        screenOptions={({ navigation }) => {
          return {
            headerShown: true,
            drawerPosition: "left",
            header: () => (
              <Navbar
                left={{
                  render() {
                    return (
                      <Pressable
                        onPress={() => navigation.toggleDrawer()}
                        className="flex-row gap-1 bg-gray-200  h-10 w-10 rounded-full items-center justify-center"
                      >
                        <View className="bg-black p-0.5  rounded-full"></View>
                        <View className="bg-black p-0.5 rounded-full"></View>
                        <View className="bg-black p-0.5 rounded-full"></View>
                      </Pressable>
                    );
                  },
                }}
                backgroundClassName="bg-white border-none"
                className="border border-transparent p-1"
                titleClassName="text-sm text-white"
                right={[
                  {
                    render() {
                      return (
                        <View className="bg-gray-200 p-2 rounded-full">
                          <Entypo name="camera" size={16} color="black" />
                        </View>
                      );
                    },
                  },
                  {
                    render() {
                      return (
                        <View>
                          <MaterialIcons
                            name="add-circle"
                            size={32}
                            color="green"
                          />
                        </View>
                      );
                    },
                  },
                ]}
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

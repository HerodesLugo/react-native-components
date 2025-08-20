import {
    TabBarBadge,
    TabBarContainer,
    TabBarIcon,
    TabBarLabel,
} from "@/components/ui/tabs/TabBar";
import { Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";
import { View } from "react-native";
export default function TabsLayout() {
  return (
    <Tabs
        
      tabBar={(props) => (
        <TabBarContainer
          {...props}
          containerClassName="flex flex-row bg-indigo-700 pb-4"
        >
          {({ descriptor, isFocused }) => {
            const { options } = descriptor;
            const iconColor = isFocused ? "white" : "#C7D2FE"; // indigo-200
            console.log(options, 'options');
            return (
              <View className={`flex-row items-center  p-3 ${isFocused ? "border-t-2 border-t-white " : ""}`}>
                <TabBarIcon>
                  {options.tabBarIcon &&
                    options.tabBarIcon({
                      color: iconColor,
                      size: 24,
                      focused: isFocused,
                    })}
                </TabBarIcon>
                <TabBarLabel>
                  {typeof options.tabBarLabel === "string"
                    ? options.tabBarLabel
                    : options.title}
                </TabBarLabel>
                <TabBarBadge   count={options.tabBarBadge as number} />
              </View>
            );
          }}
        </TabBarContainer>
      )}
      screenOptions={{ headerShown: false }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarLabel: "Home",
          tabBarIcon: ({ color, size, focused }) => (
            <Ionicons name={focused ? "home" : "home-outline"} size={size} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="about"
        options={{
          title: "Mensajes",
          tabBarLabel: "Mensajes",
          tabBarBadge: 2,

          tabBarIcon: ({ color, size, focused }) => (
            <Ionicons name={focused ? "chatbubble" : "chatbubble-outline"} size={size} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}

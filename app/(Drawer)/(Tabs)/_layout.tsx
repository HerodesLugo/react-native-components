import {
  TabBarBadge,
  TabBarContainer,
  TabBarIcon,
  TabBarLabel,
} from "@/components/ui/tabs/TabBar";
import { Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";
export default function TabsLayout() {
  return (
    <Tabs
      tabBar={(props) => (
        <TabBarContainer
          {...props}
          containerClassName="flex flex-row justify-between  bg-[#FOFEFE] pb-6 px-4 pt-2"
        >
          {({ descriptor, isFocused }) => {
            const { options } = descriptor;
            const iconColor = isFocused ? "black" : "#C7D2FE"; // indigo-200
            return (
              <>
                <TabBarIcon>
                  {options.tabBarIcon &&
                    options.tabBarIcon({
                      color: iconColor,
                      size:24,
                      focused: isFocused,
                    })}
                </TabBarIcon>
                <TabBarLabel>
                  {typeof options.tabBarLabel === "string"
                    ? options.tabBarLabel
                    : options.title}
                </TabBarLabel>
                <TabBarBadge count={options.tabBarBadge as number} />
              </>
            );
          }}
        </TabBarContainer>
      )}
      screenOptions={{ headerShown: false }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Chats",
          tabBarLabel: "Chats",
          tabBarIcon: ({ color, size, focused }) => (
            <Ionicons
              name={focused ? "home" : "home-outline"}
              size={size}
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="updates"
        options={{
          title: "Updates",
          tabBarLabel: "Updates",
          tabBarIcon: ({ color, size, focused }) => (
            <Ionicons
              name={focused ? "home" : "home-outline"}
              size={size}
              color={color}
            />
          ),
        }}
      />

      <Tabs.Screen
        name="calls"
        options={{
          title: "Calls",
          tabBarLabel: "Calls",
          tabBarIcon: ({ color, size, focused }) => (
            <Ionicons
              name={focused ? "home" : "home-outline"}
              size={size}
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          title: "Settings",
          tabBarLabel: "Settings",
          tabBarIcon: ({ color, size, focused }) => (
            <Ionicons
              name={focused ? "settings" : "settings-outline"}
              size={size}
              color={color}
            />
          ),
        }}
      />
    </Tabs>
  );
}

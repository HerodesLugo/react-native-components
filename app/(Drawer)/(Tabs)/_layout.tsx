import {
  TabBarBadge,
  TabBarContainer,
  TabBarIcon,
  TabBarLabel,
} from "@/components/ui/tabs/TabBar";
import { Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";
import { View } from "react-native";

type IoniconName =
  | "home"
  | "home-outline"
  | "chatbubbles-sharp"
  | "chatbubbles-outline"
  | "settings"
  | "settings-outline"
  | "call"
  | "call-outline"
  | "people"
  | "people-outline"
  | "add-circle"
  | "add-circle-outline"
  ;

type TabConfigItem = {
  name: string;
  title: string;
  tabBarLabel: string;
  icon: { active: IoniconName; inactive: IoniconName };
};

const tabConfig: TabConfigItem[] = [
  {
    name: "updates",
    title: "Updates",
    tabBarLabel: "Updates",
    icon: { active: "add-circle", inactive: "add-circle-outline" },
  },
  {
    name: "calls",
    title: "Calls",
    tabBarLabel: "Calls",
    icon: { active: "call", inactive: "call-outline" },
  },
  {
    name: "communities",
    title: "Communities",
    tabBarLabel: "Communities",
    icon: { active: "people", inactive: "people-outline" },
  },
  {
    name: "index",
    title: "Chats",
    tabBarLabel: "Chats",
    icon: { active: "chatbubbles-sharp", inactive: "chatbubbles-outline" },
  },

  {
    name: "settings",
    title: "Settings",
    tabBarLabel: "Settings",
    icon: { active: "settings", inactive: "settings-outline" },
  },
];

export default function TabsLayout() {
  return (
    <Tabs
      tabBar={(props) => (
        <TabBarContainer
          {...props}
          containerClassName="flex flex-row !justify-between !border-white border !backdrop-blur-sm pb-6 px-4 pt-2"
        >
          {({ descriptor, isFocused }) => {
            const { options } = descriptor;
            const iconColor = isFocused ? "black" : "gray";
            return (
              <View className="items-center">
                <TabBarIcon>
                  {options.tabBarIcon &&
                    options.tabBarIcon({
                      color: iconColor,
                      size: 24,
                      focused: isFocused,
                    })}
                </TabBarIcon>
                <TabBarLabel
                  className={` ${isFocused ? "!text-black" : "!text-gray-300"} font-medium`}
                >
                  {typeof options.tabBarLabel === "string"
                    ? options.tabBarLabel
                    : options.title}
                </TabBarLabel>
                <TabBarBadge count={options.tabBarBadge as number}  />
              </View>
            );
          }}
        </TabBarContainer>
      )}
      screenOptions={{ headerShown: false }}
    >
      {tabConfig.map(({ name, title, tabBarLabel, icon }) => (
        <Tabs.Screen
          key={name}
          name={name}
          options={{
            title,
            tabBarLabel,
            tabBarBadge: name === "index" ? 3 : undefined,
            tabBarIcon: ({ color, size, focused }) => (
              <Ionicons
                name={focused ? icon.active : icon.inactive}
                size={size}
                color={color}
              />
            ),
          }}
        />
      ))}
    </Tabs>
  );
}

import {
    TabBarBadge,
    TabBarContainer,
    TabBarIcon,
    TabBarLabel,
} from "@/components/tabs/TabBar";
import { Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";
export default function TabsLayout() {
  return (
    <Tabs
      tabBar={(props) => (
        <TabBarContainer
          {...props}
          containerClassName="flex-row items-center justify-between p-3 bg-indigo-600 border-t border-indigo-700"
        >
          {({ descriptor, isFocused }) => {
            const { options } = descriptor;
            const iconColor = isFocused ? "white" : "#C7D2FE"; // indigo-200
            console.log(options, 'options');
            return (
              <>
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
                <TabBarBadge  count={options.tabBarBadge as number} />
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

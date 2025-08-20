import React, { createContext, useContext } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import {
    TabBarContainerProps,
    TabBarContextProps,
    TabBarItemProps,
} from "./types";

const TabBarContext = createContext<TabBarContextProps | null>(null);

export const useTabBar = () => {
  const context = useContext(TabBarContext);
  if (!context) {
    throw new Error("useTabBar debe ser usado dentro de un TabBarItem");
  }
  return context;
};


export const TabBarItem: React.FC<TabBarItemProps> = ({
  route,
  descriptor,
  navigation,
  isFocused,
  children,
}) => {
  const { options } = descriptor;

  const onPress = () => {
    const event = navigation.emit({
      type: "tabPress",
      target: route.key,
      canPreventDefault: true,
    });
    if (!isFocused && !event.defaultPrevented) {
      navigation.navigate(route.name, route.params);
    }
  };

  return (
    <TabBarContext.Provider value={{ isFocused }}>
      <TouchableOpacity
        onPress={onPress}
        className="flex-1 items-center justify-center p-2"
        accessibilityRole="button"
        accessibilityState={isFocused ? { selected: true } : {}}
      >
        {children}
      </TouchableOpacity>
    </TabBarContext.Provider>
  );
};

export const TabBarContainer: React.FC<TabBarContainerProps> = ({
  state,
  descriptors,
  navigation,
  children,
  containerClassName = "flex-row bg-white border-t border-gray-200",
}) => {
  return (
    <View className={containerClassName}>
      {state.routes.map((route, index) => {
        const isFocused = state.index === index;
        const descriptor = descriptors[route.key];
        return (
          <TabBarItem
            key={route.key}
            route={route}
            descriptor={descriptor}
            navigation={navigation}
            isFocused={isFocused}
          >
            {children({ route, descriptor, isFocused })}
          </TabBarItem>
        );
      })}
    </View>
  );
};



export const TabBarLabel = ({ children }: { children: React.ReactNode }) => {
  const { isFocused } = useTabBar();
  return (
    <Text
      className={`mt-1 text-xs ${isFocused ? "text-white" : "text-indigo-200"}`}
    >
      {children}
    </Text>
  );
};

export const TabBarBadge = ({ count }: { count: number }) => {
  if (!count) return null;
  return (
    <View className="absolute top-0 right-2 bg-red-500 rounded-full w-5 h-5 justify-center items-center">
      <Text className="text-white text-xs font-bold">{count}</Text>
    </View>
  );
};


export const TabBarIcon = ({ children }: { children: React.ReactNode }) => {
  const { isFocused } = useTabBar();
  return (
    <View className={`p-2 rounded-full ${isFocused ? "bg-indigo-700" : ""}`}>
      {children}
    </View>
  );
};
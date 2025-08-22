import React from "react";
import { View } from "react-native";
import TabBarItem from "./TabBarItem";
import { TabBarContainerProps } from "./types";

const TabBarContainer: React.FC<TabBarContainerProps> = ({
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

export default TabBarContainer;

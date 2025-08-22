import React from "react";
import { TouchableOpacity } from "react-native";
import { TabBarContext } from "./context";
import { TabBarItemProps } from "./types";

interface Props extends TabBarItemProps {
  touchableClassName?: string;
  containerClassName?: string;
}

const TabBarItem: React.FC<Props> = ({
  route,
  descriptor,
  navigation,
  isFocused,
  children,
  touchableClassName = "flex-1 items-center justify-center",
}) => {
  // descriptor.options intentionally unused here; kept for compatibility

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
        className={touchableClassName}
        accessibilityRole="button"
        accessibilityState={isFocused ? { selected: true } : {}}
      >
        {children}
      </TouchableOpacity>
    </TabBarContext.Provider>
  );
};

export default TabBarItem;

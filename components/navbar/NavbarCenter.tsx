import React, { memo } from "react";
import { Text, View } from "react-native";
import { CenterProps } from "./types";

function NavbarCenter({
  title,
  subtitle,
  children,
  titleClassName,
  subtitleClassName,
  pointerEvents,
}: CenterProps) {
  return (
    <View
      className="flex-1 items-center justify-center px-2"
      pointerEvents={pointerEvents}
    >
      {children ? (
        children
      ) : (
        <View className="items-center">
          {typeof title === "string" ? (
            <Text
              className={titleClassName ?? "text-white text-lg font-semibold"}
              numberOfLines={1}
            >
              {title}
            </Text>
          ) : (
            title
          )}
          {subtitle ? (
            <Text
              className={subtitleClassName ?? "text-gray-200 text-xs"}
              numberOfLines={1}
            >
              {subtitle}
            </Text>
          ) : null}
        </View>
      )}
    </View>
  );
}

export default memo(NavbarCenter);

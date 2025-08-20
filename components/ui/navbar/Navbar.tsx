import React, { memo } from "react";
import { View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import NavbarCenter from "./NavbarCenter";
import NavButton from "./NavButton";
import { NavbarProps } from "./types";

function NavbarInner(props: NavbarProps) {
  const insets = useSafeAreaInsets();
  const {
    title,
    subtitle,
    children,
    left,
    right = [],
    backgroundClassName,
    borderBottom = true,
    height,
    className,
    containerClassName,
    titleClassName,
    subtitleClassName,
    testID,
  } = props;

  const computedHeight =
    typeof height === "number" && height > 0 ? height : insets.top + 56;

  const outerClass = containerClassName ?? className ?? "w-full justify-end";
  const bgClass = backgroundClassName ?? "bg-slate-700";

  return (
    <View
      testID={testID}
      className={`${outerClass} ${bgClass} ${borderBottom ? "border-b border-gray-200" : ""}`}
      style={{ height: computedHeight, paddingTop: insets.top }}
    >
      <View className="flex-row items-center px-3 pb-2">
        <View className="w-12 items-start justify-center">
          {left ? <NavButton action={left} /> : null}
        </View>

        <NavbarCenter
          title={title}
          subtitle={subtitle}
          titleClassName={titleClassName}
          subtitleClassName={subtitleClassName}
          pointerEvents={children ? "box-none" : "auto"}
        >
          {children}
        </NavbarCenter>

        <View className="min-w-[48px] items-end justify-center flex-row">
          {right.map((rightAction, i) => (
            <View key={i} className={i === 0 ? undefined : "ml-2"}>
              <NavButton action={rightAction} />
            </View>
          ))}
        </View>
      </View>
    </View>
  );
}

export default memo(NavbarInner);

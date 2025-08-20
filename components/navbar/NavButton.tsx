import { Pressable, Text } from "react-native";
import { NavAction } from "./types";

export default function NavButton({ action }: { action: NavAction }) {
  const { render, icon, label, onPress, accessibilityLabel, testID, disabled } =
    action;

  if (render) return <>{render()}</>;

  return (
    <Pressable
      accessibilityLabel={accessibilityLabel}
      testID={testID}
      onPress={onPress}
      disabled={disabled}
      className={
        action.className ?? "p-2 min-w-[32] items-center justify-center"
      }
    >
      {icon ? (
        icon
      ) : (
        <Text
          className="text-white text-sm"
          numberOfLines={1}
          ellipsizeMode="tail"
        >
          {label}
        </Text>
      )}
    </Pressable>
  );
}
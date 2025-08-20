import { GestureResponderEvent, ImageSourcePropType } from "react-native";

export type AvatarProps = {
  source?: ImageSourcePropType; // native image source
  uri?: string; // convenience for remote images
  name?: string; // user full name, used to derive initials if initials not provided
  initials?: string; // explicit initials override
  size?: number | "sm" | "md" | "lg"; // px or preset
  onPress?: (e: GestureResponderEvent) => void;
  accessibilityLabel?: string;
  className?: string; // container className (nativewind)
  containerClassName?: string; // alias
  imageClassName?: string;
  fallbackClassName?: string;
  testID?: string;
};
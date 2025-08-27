import { TouchableOpacityProps } from "react-native";

export type FabSize = "sm" | "md" | "lg";
export type variant = "primary" | "secondary" | "negative" | "positive";

export interface FabProps extends TouchableOpacityProps {
  icon: React.ReactNode;
  size: FabSize;
  variant: variant;
  className?: string;
  onPress?: () => void;
}




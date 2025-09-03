import { PropsWithChildren } from "react";
import { ViewStyle } from "react-native";

export interface TooltipProps extends PropsWithChildren {
  text: string;
  containerStyle?: ViewStyle;
}

export interface TooltipContentProps {
  text: string;
  isVisible: boolean;
  position: { x: number; y: number; width: number; height: number };
  onClose: () => void;
}
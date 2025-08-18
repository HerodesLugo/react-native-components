import { ViewStyle } from "react-native";

export interface CustomModalProps {
  visible: boolean;
  onClose: () => void;
  children?: React.ReactNode;
  overlayStyle?: ViewStyle;
  contentStyle?: ViewStyle;
}

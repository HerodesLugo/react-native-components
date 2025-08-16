import { Pressable } from "react-native";
import { ButtonProps } from "./types";

const Button = ({ onPress, disabled, className, children }: ButtonProps) => (
  <Pressable onPress={onPress} disabled={disabled} className={className}>
    {children}
  </Pressable>
);

export default Button;

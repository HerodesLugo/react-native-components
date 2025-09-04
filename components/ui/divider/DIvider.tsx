import { View } from "react-native";
import { DividerProps } from "./types";

export default function Divider({
  orientation = "horizontal",
  className,
  rounded,
}: DividerProps) {
  const baseClasses = orientation === "vertical" ? "h-full w-px" : "w-full h-px";
  const defaultClasses = "bg-gray-200";
  const roundedClass = rounded && "rounded-full";

  return (
    <View
      className={`${baseClasses} ${defaultClasses} ${className}  ${roundedClass}`}
    />
  );
}

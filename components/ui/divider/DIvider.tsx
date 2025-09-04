import { View } from "react-native";

export interface DividerProps {
  orientation: "vertical" | "horizontal";
  color: string;
  className: string;
}

export default function Divider({ ...props }: DividerProps) {
  const { orientation, className, color = 'black' } = props;


  return (
    <View
      className={`${orientation === 'vertical' ? 'h-full flex-1 w-0.5' : 'w-full h-0.5'}  ${className}`}
      style={{
        backgroundColor: color,
      }}
    >

    </View>
  );
}

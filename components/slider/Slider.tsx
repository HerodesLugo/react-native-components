import Slider from "@react-native-community/slider";
import { CustomSliderProps } from "./types";

const CustomSlider = ({
  maximumTrackTintColor,
  maximumValue,
  minimumTrackTintColor,
  minimumValue,
  width,
  height,
  ...props
}: CustomSliderProps) => {
  return (
    <Slider
      style={{ width, height }}
      minimumValue={minimumValue}
      maximumValue={maximumValue}
      minimumTrackTintColor={minimumTrackTintColor}
      maximumTrackTintColor={maximumTrackTintColor}
      {...props}
    />
  );
};

export default CustomSlider;

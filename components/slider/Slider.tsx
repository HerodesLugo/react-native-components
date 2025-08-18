import Slider, { SliderProps } from "@react-native-community/slider";

const CustomSlider = ({ ...props }: SliderProps) => {
  return <Slider {...props} />;
};

export default CustomSlider;

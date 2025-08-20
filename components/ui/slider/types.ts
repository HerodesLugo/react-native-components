import { SliderProps } from "@react-native-community/slider";

export interface CustomSliderProps extends SliderProps {
  minimumValue?: number;
  maximumValue?: number;
  minimumTrackTintColor?: string;
  maximumTrackTintColor?: string;
  height?: number;
  width?: number;
}
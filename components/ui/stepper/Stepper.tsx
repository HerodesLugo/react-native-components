import { Pressable, Text, View } from "react-native";
import { ThemeDefault } from "./theme";
import { StepperProps } from "./types";

const Stepper: React.FC<StepperProps> = ({
  steps,
  currentStep,
  onStepPress,
  orientation = "horizontal",
  circleSize = 50,
  lineThickness = 2,
  theme = ThemeDefault,
}) => {
  const isHorizontal = orientation === "horizontal";
  return (
    <View className={`px-4 py-2 ${isHorizontal ? "flex-row items-center justify-between" : "flex-col"}`}>      
      {steps.map((step, index) => {
        
        const isActive = index === currentStep;
        const isCompleted = index < currentStep;
        const state = isActive ? theme.active : isCompleted ? theme.completed : theme.pending;

        return (
          <View
            key={index}
            className={`items-center ${isHorizontal ? "flex-1" : "mb-6"}`}>            
            <Pressable
              onPress={() => onStepPress?.(index)}
              style={{ width: circleSize, height: circleSize }}
              className={`rounded-full items-center justify-center border-2 ${state.circle}`}>              
              <Text className="text-white font-bold">{index + 1}</Text>
            </Pressable>
            <Text className={`mt-1 text-xs font-medium ${state.text}`}>
              {step}
            </Text>
            {index < steps.length - 1 && (
              <View
                style={{
                  [isHorizontal ? "width" : "height"]: "100%",
                  [isHorizontal ? "height" : "width"]: lineThickness,
                }}
                className={`absolute -z-10 ${isHorizontal ? "top-[40%] left-1/2" : "top-full"} ${state.line}`}
              />
            )}
          </View>
        );
      })}
    </View>
  );
};
export default Stepper;

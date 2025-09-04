export interface StepperProps {
  steps: string[];
  currentStep: number;
  onStepPress?: (index: number) => void;
  orientation?: "horizontal" | "vertical";
  circleSize?: number;
  lineThickness?: number;

  theme?: {
    active: { circle: string; text: string; line: string };
    completed: { circle: string; text: string; line: string };
    pending: { circle: string; text: string; line: string };
  };
}

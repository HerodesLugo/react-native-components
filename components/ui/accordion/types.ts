import { ViewProps } from "react-native";

export type AccordionSize = "sm" | "md" | "lg";
export type AccordionType = "single" | "multiple";

export interface AccordionProps extends ViewProps {
  type?: AccordionType;
  size?: AccordionSize;
  className?: string;
  defaultValue?: string | string[];
  onChange?: (openIds: string[]) => void;
  children?: React.ReactNode;
}

export interface AccordionItemProps extends ViewProps {
  id: string;
  title: React.ReactNode;
  className?: string;
  disabled?: boolean;
  children?: React.ReactNode;
}


export type ContextValue = {
  openIds: string[];
  toggle: (id: string) => void;
  size: NonNullable<AccordionProps['size']>;
};
export interface CardProps {
  
  variant: "filled" | "outline" | "transparent";
  size: "lg" | "sm" | "md";
  children: React.ReactNode;
  className?: string;
}

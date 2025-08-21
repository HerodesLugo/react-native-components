import { DrawerContentComponentProps } from "@react-navigation/drawer";

export interface DrawerContainerProps extends DrawerContentComponentProps {
  children: React.ReactNode;
  containerClassName?: string;
  orientation?: "vertical" | "horizontal";
}

// --- Item del Menú ---
export interface DrawerItemProps {
  href: string;
  children: React.ReactNode;
  icon?: React.ReactNode;
  className?: string;
  activeClassName?: string;
}

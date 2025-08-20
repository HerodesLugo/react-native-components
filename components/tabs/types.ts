import { BottomTabBarProps } from "@react-navigation/bottom-tabs";

// --- Componente TabBarItem ---
export interface TabBarItemProps {
  route: any; // Tipos de expo-router
  descriptor: any;
  navigation: any;
  isFocused: boolean;
  children: React.ReactNode;
}


// --- Componente TabBarContainer ---
export interface TabBarContainerProps extends BottomTabBarProps {
  children: (props: {
    route: any;
    descriptor: any;
    isFocused: boolean;
  }) => React.ReactNode;
  containerClassName?: string;
}

export interface TabBarContextProps {
  isFocused: boolean;
}
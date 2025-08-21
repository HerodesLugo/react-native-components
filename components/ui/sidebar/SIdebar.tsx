// components/drawer/Drawer.tsx

import { Link, usePathname } from "expo-router";
import React from "react";
import { ScrollView, TouchableOpacity, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { DrawerContainerProps, DrawerItemProps } from "./types";

// --- Contenedor Principal ---

const Container: React.FC<DrawerContainerProps> = ({
  children,
  containerClassName = "bg-gray-800",
  orientation = "vertical",
}) => {
  const { top, bottom } = useSafeAreaInsets();
  const direction = orientation === "vertical" ? "flex-col" : "flex-row";

  return (
    <View
      className={`flex-1 ${direction} ${containerClassName}`}
      style={{ paddingTop: top, paddingBottom: bottom }}
    >
      {children}
    </View>
  );
};

// --- Encabezado ---
const Header = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => (
  <View className={`p-5 border-b border-gray-700 ${className}`}>
    {children}
  </View>
);

// --- Contenido (para el Scroll) ---
const Content = ({ children }: { children: React.ReactNode }) => (
  <ScrollView>{children}</ScrollView>
);

// --- Pie de Página ---
const Footer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => (
  <View className={`p-5 border-t border-gray-700 mt-auto ${className}`}>
    {children}
  </View>
);


const Item: React.FC<DrawerItemProps> = ({
  href,
  children,
  icon,
  className = "p-3 rounded-lg",
  activeClassName = "bg-blue-500/20",
}) => {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link href={href as any} asChild>
      <TouchableOpacity
        className={`flex-row items-center m-2 ${className} ${isActive ? activeClassName : ""}`}
      >
        {icon && <View className="w-8">{icon}</View>}
        <View>{children}</View>
      </TouchableOpacity>
    </Link>
  );
};

// Exportamos todos los componentes bajo un mismo objeto
export const Drawer = {
  Container,
  Header,
  Content,
  Footer,
  Item,
};

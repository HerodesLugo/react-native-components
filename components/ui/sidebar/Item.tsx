import { Link, usePathname } from "expo-router";
import React from "react";
import { TouchableOpacity, View } from "react-native";
import { DrawerItemProps } from "./types";

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

export default Item;

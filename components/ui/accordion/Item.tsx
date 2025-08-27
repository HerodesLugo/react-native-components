import { useContext } from "react";
import { Pressable, Text, View } from "react-native";
import { AccordionContext } from "./Accordion";
import { AccordionItemProps } from "./types";
import { sizeClasses } from "./variants";

const AccordionItem = ({
  id,
  title,
  children,
  className,
  disabled,
}: AccordionItemProps) => {
  const accordionContext = useContext(AccordionContext);
  
  if (!accordionContext)
    throw new Error("Accordion.Item must be used within an Accordion");

  const { openIds, toggle, size } = accordionContext;

  const isItemOpen = openIds.includes(id);
  const sizeClass = sizeClasses[size];

  return (
    <View className={`border-b border-gray-200 ${className || ""}`}>
      <Pressable
        onPress={() => !disabled && toggle(id)}
        className={`flex-row justify-between items-center ${sizeClass.title}`}
      >
        {typeof title === "string" ? <Text>{title}</Text> : title}
        <Text>{isItemOpen ? "-" : "+"}</Text>
      </Pressable>

      {isItemOpen && (
        <View className={`${sizeClass.content} bg-white`}>{children}</View>
      )}
    </View>
  );
};

export default AccordionItem;

import React, { createContext, useCallback, useState } from "react";
import { View } from "react-native";
import AccordionItem from "./Item";
import { AccordionItemProps, AccordionProps, ContextValue } from "./types";

export const AccordionContext = createContext<ContextValue | null>(null);

const Accordion = ({
  type = "multiple",
  size = "md",
  defaultValue,
  onChange,
  children,
  className,
  ...props
}: AccordionProps) => {
  const initialOpenIds = defaultValue ? (Array.isArray(defaultValue) ? defaultValue : [defaultValue]) : [];
  const [openItemIds, setOpenItemIds] = useState<string[]>(initialOpenIds);

  const handleToggleItem = useCallback(
    (itemId: string) => {
      setOpenItemIds((prevOpenItemIds) => {
        let updatedOpenItemIds: string[];
        
        if (type === "single") {
          updatedOpenItemIds = prevOpenItemIds.includes(itemId) ? [] : [itemId];
        }

        updatedOpenItemIds = prevOpenItemIds.includes(itemId) ? prevOpenItemIds.filter((id) => id !== itemId) : [...prevOpenItemIds, itemId];
        onChange?.(updatedOpenItemIds);

        return updatedOpenItemIds;
      });
    },
    [type, onChange]
  );

  const contextValue = { openIds: openItemIds, toggle: handleToggleItem, size };

  return (
    <AccordionContext.Provider value={contextValue}>
      <View className={className || ""} {...props}>
        {children}
      </View>
    </AccordionContext.Provider>
  );
};

(Accordion as any).Item = AccordionItem;

export default Accordion as React.FC<AccordionProps> & {
  Item: React.FC<AccordionItemProps>;
};

import React, {
    createContext,
    useCallback,
    useContext,
    useMemo,
    useState,
} from "react";
import { Pressable, Text, View } from "react-native";
import { AccordionItemProps, AccordionProps, ContextValue } from "./types";
import { sizeClasses } from "./variants";

const AccordionContext = createContext<ContextValue | null>(null);

const Accordion = ({
  type = "multiple",
  size = "md",
  defaultValue,
  onChange,
  children,
  className,
  ...props
}: AccordionProps) => {
  const initialOpen = useMemo(() => {
    if (!defaultValue) return [] as string[];
    return Array.isArray(defaultValue) ? defaultValue : [defaultValue];
  }, [defaultValue]);

  const [openIds, setOpenIds] = useState<string[]>(initialOpen);

  const toggle = useCallback(
    (id: string) => {
      setOpenIds((prev) => {
        const exists = prev.includes(id);
        let next: string[] = [];
        if (type === "single") {
          next = exists ? [] : [id];
        } else {
          if (exists) next = prev.filter((x) => x !== id);
          else next = [...prev, id];
        }
        onChange?.(next);
        return next;
      });
    },
    [type, onChange]
  );

  const value = useMemo(
    () => ({ openIds, toggle, size }),
    [openIds, size, toggle]
  );

  return (
    <AccordionContext.Provider value={value}>
      <View className={className || ""} {...props}>
        {children}
      </View>
    </AccordionContext.Provider>
  );
};

const AccordionItem = ({
  id,
  title,
  children,
  className,
  disabled,
}: AccordionItemProps) => {
  const ctx = useContext(AccordionContext);
  if (!ctx) throw new Error("Accordion.Item must be used within an Accordion");
  const { openIds, toggle, size } = ctx;
  const isOpen = openIds.includes(id);
  const sc = sizeClasses[size];

  return (
    <View className={`border-b border-gray-200 ${className || ""}`}>
      <Pressable
        onPress={() => !disabled && toggle(id)}
        className={`flex-row justify-between items-center ${sc.title}`}
      >
        {typeof title === "string" ? <Text>{title}</Text> : title}
        <Text>{isOpen ? "-" : "+"}</Text>
      </Pressable>

      {isOpen ? (
        <View className={`${sc.content} bg-white`}>{children}</View>
      ) : null}
    </View>
  );
};

// attach Item to Accordion for pattern Accordion.Item
(Accordion as any).Item = AccordionItem;

export default Accordion as unknown as React.FC<AccordionProps> & {
  Item: React.FC<AccordionItemProps>;
};

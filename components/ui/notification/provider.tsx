import {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useState,
} from "react";
import { View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Notification } from "./Notification";
import {
  NotificationConfig,
  NotificationContextType,
  NotificationInput,
} from "./types";

const NotificationContext = createContext<NotificationContextType | undefined>(undefined);

export const useNotification = () => {
  const context = useContext(NotificationContext);
  if (!context)
    throw new Error(
      "useNotification must be used within a NotificationProvider"
    );
  return context;
};

export const NotificationProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [notifications, setNotifications] = useState<NotificationConfig[]>([]);
  const { top } = useSafeAreaInsets();

  const showNotification = useCallback((config: NotificationInput) => {
    const id = Math.random().toString(36).substr(2, 9);
    setNotifications((prev) => [...prev, { id, ...config }]);
  }, []);

  const dismissNotification = useCallback((id: string) => {
    setNotifications((prev) => prev.filter((n) => n.id !== id));
  }, []);

  return (
    <NotificationContext.Provider value={{ showNotification }}>
      {children}
      <View
        className="absolute top-0 left-0 right-0 items-center"
        style={{ paddingTop: top + 10 }}
        pointerEvents="box-none"
      >
        {notifications.map((config) => (
          <Notification
            key={config.id}
            config={config}
            onDismiss={dismissNotification}
          />
        ))}
      </View>
    </NotificationContext.Provider>
  );
};

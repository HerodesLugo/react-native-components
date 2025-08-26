export type NotificationType = "success" | "error" | "info";

export interface NotificationConfig {
  id: string;
  type: NotificationType;
  title: string;
  message?: string;
  duration?: number;
}

export interface NotificationInput {
  type: NotificationType;
  title: string;
  message?: string;
  duration?: number;
}

export interface NotificationProps {
  config: NotificationConfig;
  onDismiss: (id: string) => void;
}

export interface NotificationContextType {
  showNotification: (config: NotificationInput) => void;
}

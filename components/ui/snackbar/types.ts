export interface SnackbarConfig {
  message: string;
  actionText?: string;
  onActionPress?: () => void;
  duration?: number;
}

export interface SnackbarContextType {
  showSnackbar: (config: SnackbarConfig) => void;
}

export interface SnackbarProviderProps {
  children: React.ReactNode;
}
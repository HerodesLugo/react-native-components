import { createContext, useState } from "react";
import { View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import SnackbarComponent from "./Snackbar";
import { SnackbarConfig, SnackbarContextType, SnackbarProviderProps } from "./types";

export const SnackbarContext = createContext<SnackbarContextType | undefined>(undefined);

export const SnackbarProvider = ({children}: SnackbarProviderProps) => {
  const [config, setConfig] = useState<SnackbarConfig | null>(null);
  const { bottom } = useSafeAreaInsets();

  const showSnackbar = (newConfig: SnackbarConfig) => {
    setConfig(newConfig);
  };

  const dismissSnackbar = () => {
    setConfig(null);
  };

  return (
    <SnackbarContext.Provider value={{ showSnackbar }}>
      {children}
      <View
        style={{ marginBottom: bottom }}
        className="absolute bottom-0 left-0 right-0"
        pointerEvents="box-none"
      >
        {config && (
          <SnackbarComponent config={config} onDismiss={dismissSnackbar} />
        )}
      </View>
    </SnackbarContext.Provider>
  );
};

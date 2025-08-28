import { useContext } from "react";
import { SnackbarContext } from "../Context";

export const useSnackbar = () => {
  const context = useContext(SnackbarContext);
  if (!context) {
    throw new Error("failed provider");
  }
  return context;
};

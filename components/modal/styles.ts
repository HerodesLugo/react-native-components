import { StyleSheet } from "react-native";

export const styleModal = StyleSheet.create({
  overlay: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.3)",
  },
  content: {
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 20,
    minWidth: "70%",
    elevation: 5,
  },
  closeButton: {
    alignSelf: "flex-end",
    marginBottom: 10,
  },
  closeText: {
    color: "#007AFF",
    fontWeight: "bold",
    fontSize: 16,
  },
});
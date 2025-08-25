import React from "react";
import { ScrollView } from "react-native";

const Content: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <ScrollView>{children}</ScrollView>
);

export default Content;

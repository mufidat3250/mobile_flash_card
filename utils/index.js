import { Platform, TouchableNativeFeedback } from "react-native";

export const Touchable =
  Platform.OS === "android" ? TouchableNativeFeedback : Touchable;
export const generateId = () => Math.random().toString(36).substring(2, 6);

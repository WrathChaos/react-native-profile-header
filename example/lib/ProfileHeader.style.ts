import { ViewStyle, ImageStyle, TextStyle, StyleSheet } from "react-native";

interface Style {
  container: ViewStyle;
}

export const _container = (
  height: number | string,
  backgroundColor: string,
): ViewStyle => ({
  width: "100%",
  height,
  top: 0,
  paddingLeft: 16,
  paddingRight: 16,
  backgroundColor,
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "center",
});

export default StyleSheet.create<Style>({
  container: {},
});

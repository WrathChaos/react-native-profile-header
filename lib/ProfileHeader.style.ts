import { ViewStyle, ImageStyle, TextStyle, StyleSheet } from "react-native";

interface Style {
  container: ViewStyle;
  leftAlignedContainer: ViewStyle;
  leftAlignedButtonImageStyle: ImageStyle;
  titleContainer: ViewStyle;
  titleTextStyle: TextStyle;
  rightAlignedContainer: ViewStyle;
  iconButtonContainer: ViewStyle;
  iconImageStyle: ImageStyle;
  profileImageStyle: ImageStyle;
}

export const _container = (
  height: number | string,
  backgroundColor: string,
): ViewStyle => ({
  width: "100%",
  height,
  top: 0,
  paddingLeft: 24,
  paddingRight: 24,
  backgroundColor,
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "center",
});

export default StyleSheet.create<Style>({
  container: {},
  leftAlignedContainer: {
    marginRight: "auto",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  leftAlignedButtonImageStyle: {
    height: 25,
    width: 25,
  },
  titleContainer: {
    marginLeft: 16,
  },
  titleTextStyle: {
    fontSize: 18,
    fontWeight: "bold",
  },
  rightAlignedContainer: {
    marginLeft: "auto",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  iconButtonContainer: {
    marginRight: 24,
  },
  iconImageStyle: {
    width: 18,
    height: 18,
  },
  profileImageStyle: {
    width: 50,
    height: 50,
    borderRadius: 12,
  },
});

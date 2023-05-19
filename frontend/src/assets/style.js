import { StyleSheet } from "react-native";
import { normalize } from "../assets/responsiveFont";
const HEIGHT = Dimensions.get("window").height;
const WIDTH = Dimensions.get("window").width;
import { Dimensions } from "react-native";

const style = StyleSheet.create({
  headerTitle: {
    fontWeight: "bold",
    color: "white",
    fontSize: normalize(19),
    letterSpacing: 1,
  },
  headerContainer: {
    backgroundColor: "#4BAA4C",
    height: 0.09 * HEIGHT,
    borderBottomLeftRadius: 35,
    borderBottomRightRadius: 35,
  },
  centerText: {
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    margin: 0,
    padding: 0,
  },
  separatorBox: {
    height: "0.2%",
    marginTop: "10%",
  },
  separator: {
    flex: 1,
    height: 1,
    backgroundColor: "#4BAA4C",
  },
});

export { style };

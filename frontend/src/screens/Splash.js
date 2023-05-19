import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import { style } from "../assets/style";
import { normalize } from "../assets/responsiveFont";
import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  StatusBar,
  TouchableOpacity,
} from "react-native";

import imageSource from "../assets/images/ppi_logo_white.png";

const Splash = () => {
  const navigation = useNavigation();

  // setTimeout(redirect, 2500);
  function redirect() {
    navigation.push("login");
  }

  return (
    // Wrapper for the entire page
    <SafeAreaView
      style={{ flexDirection: "column", flex: 1, backgroundColor: "#4BAA4C" }}
    >
      <StatusBar backgroundColor="#4BAA4C" translucent={true} />
      <View style={[style.centerText, { paddingBottom: "15%" }]}>
        <View>
          <Image
            source={imageSource}
            style={{ height: normalize(150), width: normalize(102) }}
          ></Image>
        </View>
        <TouchableOpacity onPress={redirect}>
          <Text
            style={{
              fontSize: normalize(20),
              color: "white",
              fontWeight: "bold",
              paddingTop: "5%",
            }}
          >
            PRECISION PROFILES
          </Text>
        </TouchableOpacity>
        <Text
          style={{
            fontSize: normalize(20),
            color: "white",
            fontWeight: "bold",
          }}
        >
          INDIA
        </Text>
        <Text
          style={{
            fontSize: normalize(13),
            color: "white",
            fontWeight: "400",
            paddingTop: "3%",
          }}
        >
          ISO 9001:2008
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default Splash;

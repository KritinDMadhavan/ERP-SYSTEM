import { style } from "../assets/style";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  Dimensions,
  ScrollView,
  View,
  Text,
  StyleSheet,
  Image,
  StatusBar,
  ImageBackground,
  TextInput,
  TouchableOpacity,
  Button,
  Alert,
} from "react-native";

const HEIGHT = Dimensions.get("window").height;
const WIDTH = Dimensions.get("window").width;

import * as WebBrowser from "expo-web-browser";

export default function Header(props) {
    const { title } = props;
  
    return (
      <View>
        <View style={[style.centerText, style.headerContainer]}>
          <Text style={style.headerTitle}>{title}</Text>
        </View>
      </View>
    );
}

      

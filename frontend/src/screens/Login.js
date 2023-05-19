import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import Fontisto from "react-native-vector-icons/Fontisto";
import { style } from "../assets/style";
import { normalize } from "../assets/responsiveFont";
import React, { useState } from "react";
import {
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
  ActivityIndicator,
  ScrollView,
} from "react-native";

import loginBg from "../assets/images/loginBg.png";

import useAuth from "../utils/Auth";

const Login = () => {
  const navigation = useNavigation();

  const [phone, setPhone] = useState("0000000000");
  const [password, setPassword] = useState("erp-pass1word");

  const { loading, login } = useAuth();

  const gotohome = async () => {
    // TODO: When in production change to phone > 0

    if (phone >= 0 && phone.length == 10) {
      // Perform auth here

      const response = await login(phone, password);
      response["code"] = 200; //LOGIN BYPASS HEHEHE
      if (response["code"] === 200) {
        navigation.push("StackTabs");
      } else {
        Alert.alert("Login Error", JSON.stringify(response["data"]), [
          { text: "OK" },
        ]);
      }
    } else {
      Alert.alert(
        "Phone Number",
        "You may have not entered your phone number or entered an incorrect number. Please try again.",
        [{ text: "OK" }]
      );
    }
  };

  const LoginBypass = () => {
    navigation.push("StackTabs");
  };

  return (
    <SafeAreaView
      style={{ width: "100%", height: "100%", backgroundColor: "white" }}
    >
      <StatusBar
        backgroundColor="#fff"
        barStyle="dark-content"
        translucent={true}
      />
      <View style={styles.imageBox}>
        <ImageBackground
          source={loginBg}
          style={styles.loginBgImage}
          resizeMode="cover"
        >
          <View style={style.centerText}>
            <Text style={styles.imageText}>PRECISION PROFILES INDIA</Text>
          </View>
        </ImageBackground>
      </View>
      <View style={styles.sloganBox}>
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <Fontisto name="fire" size={30} color="#4BAA4C" />
          <Text style={styles.sloganText}>Passion</Text>
        </View>
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <FontAwesome5 name="award" size={30} color="#4BAA4C" />
          <Text style={styles.sloganText}>Quality</Text>
        </View>
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <FontAwesome5 name="handshake" size={30} color="#4BAA4C" />
          <Text style={styles.sloganText}>Trust</Text>
        </View>
      </View>

      <ScrollView>
        <View style={styles.loginTextBox}>
          <View style={style.separator} />
          <View>
            <Text style={styles.loginText}>Log In</Text>
          </View>
          <View style={style.separator} />
        </View>

        <View style={styles.inputBoxBox}>
          <View style={styles.inputBox}>
            <TextInput
              placeholder="Enter phone number"
              keyboardType="number-pad"
              clearTextOnFocus={true}
              onChangeText={setPhone}
              value={phone}
            />
          </View>
        </View>

        <View style={styles.passwordBoxBox}>
          <View style={styles.inputBox}>
            <TextInput
              placeholder="Enter password"
              secureTextEntry={true}
              clearTextOnFocus={true}
              onChangeText={setPassword}
              value={password}
            />
          </View>
        </View>

        <View style={styles.buttonBox}>
          <TouchableOpacity
            style={styles.button}
            disabled={loading}
            onPress={gotohome}
            // onPress={LoginBypass}
          >
            {loading === false ? (
              <Text style={styles.buttonText}>Continue</Text>
            ) : (
              <ActivityIndicator
                animating={true}
                size="small"
                color="#ffffff"
              />
            )}
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  buttonText: {
    color: "white",
  },
  button: {
    backgroundColor: "#4BAA4C",
    width: "70%",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    padding: "2.3%",
  },
  buttonBox: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: "2%",
  },
  inputBox: {
    borderWidth: 1,
    borderColor: "#4BAA4C",
    borderRadius: 10,
    width: "70%",
    padding: "1%",
    paddingLeft: "4%",
  },
  inputBoxBox: {
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    paddingTop: "6%",
  },
  passwordBoxBox: {
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    paddingTop: "3%",
    paddingBottom: "3%",
  },
  loginText: {
    paddingLeft: "3%",
    paddingRight: "3%",
    textAlign: "center",
    color: "#4BAA4C",
    fontWeight: "bold",
    fontSize: normalize(15),
  },
  loginTextBox: {
    flexDirection: "row",
    alignItems: "center",
    paddingTop: normalize(17),
  },
  imageBox: {
    width: "100%",
    height: "60%",
  },
  loginBgImage: {
    height: "100%",
    width: "100%",
  },
  sloganText: {
    paddingLeft: "3%",
    paddingRight: "3%",
    paddingTop: "10%",
    textAlign: "center",
    color: "#4BAA4C",
    fontWeight: "bold",
    fontSize: normalize(17),
  },
  sloganBox: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: normalize(20),
  },
  imageText: {
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    letterSpacing: 3.5,
    color: "#4BAA4C",
    paddingLeft: "6%",
    width: "100%",
    paddingTop: normalize(15),
    paddingBottom: normalize(15),
    fontSize: normalize(19),
    fontWeight: "bold",
  },
});

export default Login;

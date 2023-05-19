import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Icons from "react-native-vector-icons/MaterialCommunityIcons";
import { style } from "./src/assets/style";
import { normalize } from "./src/assets/responsiveFont";

import * as NavigationBar from "expo-navigation-bar";

import Splash from "./src/screens/Splash";
import login from "./src/screens/Login";
import Home from "./src/screens/Home";
import OpenPO from "./src/screens/OpenPO";
import ClosedPO from "./src/screens/ClosedPO";
import CostAnalytics from "./src/screens/CostAnalytics";
import PerfAnalytics from "./src/screens/PerfAnalytics";

import { useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

// Env var config
import { EXPO_BE_URL } from "@env";
import axiosInstance from "./src/API/axios";
import axios from "axios";

axiosInstance.defaults.baseURL = "http://192.168.1.4:8000";
axios.defaults.baseURL = "http://192.168.1.4:8000";

// ----------------------------------------------

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

export function StackTabs() {
  function MyTabBar({ state, descriptors, navigation }) {
    return (
      <View style={styles.tabBarContainer}>
        <View style={styles.tabBar}>
          {state.routes.map((route, index) => {
            const { options } = descriptors[route.key];
            const label =
              options.tabBarLabel !== undefined
                ? options.tabBarLabel
                : options.title !== undefined
                ? options.title
                : route.name;

            const isFocused = state.index === index;

            const onPress = () => {
              const event = navigation.emit({
                type: "tabPress",
                target: route.key,
              });

              if (!isFocused && !event.defaultPrevented) {
                navigation.navigate(route.name);
              }
            };

            const onLongPress = () => {
              navigation.emit({
                type: "tabLongPress",
                target: route.key,
              });
            };

            return (
              <TouchableOpacity
                accessibilityRole="button"
                accessibilityStates={isFocused ? ["selected"] : []}
                accessibilityLabel={options.tabBarAccessibilityLabel}
                testID={options.tabBarTestID}
                onPress={onPress}
                onLongPress={onLongPress}
                style={{ flex: 1, alignItems: "center" }}
              >
                <View
                  style={{
                    backgroundColor: isFocused ? "#4BAA4C" : "white",
                    borderRadius: 50,
                    padding: "12%",
                  }}
                >
                  <Icons
                    size={normalize(26)}
                    name={
                      label == "Home"
                        ? "home-variant"
                        : label == "OpenPO"
                        ? "folder-open"
                        : label == "ClosedPO"
                        ? "folder"
                        : label == "CostAnalytics"
                        ? "cash-multiple"
                        : label == "PerfAnalytics"
                        ? "chart-areaspline"
                        : "lock-check-outline"
                    }
                    style={{ color: isFocused ? "white" : "#4BAA4C" }}
                  />
                </View>
              </TouchableOpacity>
            );
          })}
        </View>
      </View>
    );
  }

  return (
    <Tab.Navigator
      screenOptions={{ headerShown: false, tabBarShowLabel: false }}
      initialRouteName="Home"
      tabBar={(props) => <MyTabBar {...props} />}
    >
      <Tab.Screen name="OpenPO" component={OpenPO} />
      <Tab.Screen name="ClosedPO" component={ClosedPO} />
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="CostAnalytics" component={CostAnalytics} />
      <Tab.Screen name="PerfAnalytics" component={PerfAnalytics} />
    </Tab.Navigator>
  );
}

export default function App() {
  useEffect(() => {
    async function clear() {
      await AsyncStorage.multiRemove(["access_token", "refresh_token"]);
    }

    clear();
  }, []);

  NavigationBar.setBackgroundColorAsync("black");

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Splash"
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Splash" component={Splash}></Stack.Screen>
        <Stack.Screen name="login" component={login}></Stack.Screen>
        <Stack.Screen name="StackTabs" component={StackTabs}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  tabBarContainer: {
    backgroundColor: "#4BAA4C",
    padding: "1%",
    paddingBottom: 0,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },
  tabBar: {
    flexDirection: "row",
    backgroundColor: "#fff",
    height: 60,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    paddingBottom: "1%",
    paddingTop: "1%",
  },
  container: {
    flex: 1,
    backgroundColor: "#EEEEEE",
    alignItems: "center",
    justifyContent: "center",
  },
});

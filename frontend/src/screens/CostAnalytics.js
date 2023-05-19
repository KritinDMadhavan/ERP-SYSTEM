import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import Fontisto from "react-native-vector-icons/Fontisto";
import { style } from "../assets/style";
import { normalize } from "../assets/responsiveFont";
import React, { useState } from "react";
import Modal from 'react-native-modal';
import BouncyCheckbox from "react-native-bouncy-checkbox";

import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart     
} from "react-native-chart-kit";

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
import compImg from "../assets/images/comp_ex.png";

import Header from "../components/Header.js";

const HEIGHT = Dimensions.get("window").height;
const WIDTH = Dimensions.get("window").width;

import * as WebBrowser from "expo-web-browser";

const productData = {
  labels: ["Bott Stea", "Bott Stea", "Bott Stea", "Bott Stea", "Bott Stea", "Bott Stea"],
            datasets: [
              {
                data: [
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100
                ]
              }
            ],
  legend: ["Rainy Days"] // optional
};

const departmentData = {
  labels: ["Profiling", "Fabrication", "Welding"],
            datasets: [
              {
                data: [
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100,
                ]
              }
            ],
  legend: ["Rainy Days"] // optional
};

const chartConfig = {
  backgroundGradientFrom: "#1E2923",
  backgroundGradientFromOpacity: 0,
  backgroundGradientTo: "#08130D",
  backgroundGradientToOpacity: 0.5,
  color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
  strokeWidth: 2, // optional, default 3
  barPercentage: 0.5,
  useShadowColorFromDataset: false // optional
};

const Auth = ({ navigation }) => {

  const [isProductModalVisible, setIsProductModalVisible] =
    React.useState(false);
  const handleProductModal = () =>
    setIsProductModalVisible(() => !isProductModalVisible);
  const [productModalSelection, setProductModalSelection] = React.useState([]);

  return (
    // Wrapper for the entire page
    <SafeAreaView style={{ margin: 0, padding: 0, backgroundColor:'white' }}>
      <ScrollView>
        <Header title="COST ANALYTICS" />

        {/* COST ANALYTICS */}
        <View>
          <LineChart
            data={{
              labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
              datasets: [
                {
                  data: [
                    Math.random() * 100,
                    Math.random() * 100,
                    Math.random() * 100,
                    Math.random() * 100,
                    Math.random() * 100,
                    Math.random() * 100,
                  ],
                },
                {
                  data: [
                    Math.floor(Math.random() * 25),
                    Math.floor(Math.random() * 25),
                    Math.floor(Math.random() * 25),
                    Math.floor(Math.random() * 25),
                    Math.floor(Math.random() * 25),
                    Math.floor(Math.random() * 25),
                  ],
                },
              ],
            }}
            width={Dimensions.get("window").width} // from react-native
            height={220}
            yAxisLabel="₹"
            yAxisSuffix="k"
            yAxisInterval={1} // optional, defaults to 1
            chartConfig={{
              backgroundColor: "#4baa4c",
              backgroundGradientFrom: "#4baa4c",
              backgroundGradientTo: "#4baa4c",
              decimalPlaces: 2, // optional, defaults to 2dp
              color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
              labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,propsForBackgroundLines: {
                stroke:'white',
                strokeWidth:'0.1',
                strokeDasharray: ""
              }
            }}
            style={{
              marginVertical: 8,
            }}
          />
        </View>

        <View style={[styles.separator, {marginTop:'1%'}]} />

        {/* OVERALL ANALYTICS */}
        <View style={{flexDirection: 'row', justifyContent: "center", alignItems: "center", marginTop:'5%', }}>
          <TouchableOpacity style={{marginRight:'5%'}}>
            <FontAwesome5 name='arrow-circle-left' size={25}></FontAwesome5>
          </TouchableOpacity>
          <Text style={{fontSize:normalize(16), fontWeight:'bold'}}>ALL PRODUCTS</Text>
          <TouchableOpacity style={{marginLeft:'5%'}}>
            <FontAwesome5 name='arrow-circle-right' size={25}></FontAwesome5>
          </TouchableOpacity>
        </View>
        <BarChart
          data={productData}
          width={Dimensions.get("window").width} // from react-native
          height={220}
          yAxisLabel="₹"
          yAxisSuffix="L"
          yAxisInterval={2} // optional, defaults to 1
          chartConfig={{
            backgroundGradientFrom: "#ffffff",
            backgroundGradientTo: "#ffffff",
            decimalPlaces: 2, // optional, defaults to 2dp
            color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
            labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
            style: {
              borderRadius: 16
            },
            propsForBackgroundLines: {
              stroke:'black',
              strokeWidth:'0'
            }
          }}
          style={{
            marginVertical: 8,
          }}
        />
        {/* REPORT CONTAINER HORIZONTAL SCROLL */}
        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          styles={{ backgroundColor: "white" }}
          >
          {/* NEW REPORT ELEMENT */}
          <View style={{
            height: 0.25 * HEIGHT,
            width: 0.88 * WIDTH,
            margin: 0.012 * HEIGHT,
            marginTop: 0.005*HEIGHT,
            paddingLeft: 0.01 * HEIGHT,
            paddingRight: 0.01 * HEIGHT,
            borderRadius: 25,
            backgroundColor: "#D9D9D9",
            flex:1, 
            flexDirection:'row'
            }}>
            <View style={{flex:1}}>
              <View style={styles.openPoElementImageContainer}>
                <Image
                  style={styles.openPoElementImage}
                  source={compImg}
                  resizeMethod="auto"
                />
              </View>
              <View style={{flex:1.5, flexDirection:'column'}}>
                <View style={{flex:1, flexDirection:'column'}}>
                  <Text style={[styles.reportTextDesc, {fontSize:normalize(11.3), flex:1}]}>
                    Units: 
                  </Text>
                  <Text style={[styles.reportTextNum,{fontSize:normalize(10), flex:2, fontWeight:'700', marginTop:'2%'}]}>
                    127
                  </Text>
                </View>
                <View style={{flex:1, flexDirection:'column'}}>
                  <Text style={[styles.reportTextDesc, {fontSize:normalize(11.3), flex:1}]}>
                    Profit/unit: 
                  </Text>
                  <Text style={[styles.reportTextNum,{fontSize:normalize(10), flex:2, fontWeight:'700', marginTop:'2%'}]}>
                    Rs.12,34,450
                  </Text>
                </View>
                <View style={{flex:1, flexDirection:'column'}}>
                  <Text style={[styles.reportTextDesc, {fontSize:normalize(11.3), flex:1}]}>
                     Expense/unit
                  </Text>
                  <Text style={[styles.reportTextNum,{fontSize:normalize(10), flex:2, fontWeight:'700', marginTop:'2%'}]}>
                    Rs.12,34,450
                  </Text>
                </View>
              </View>
            </View>
            <View style={styles.verticalSeparator}/>
            <View style={{flex:3}}>
              <View style={styles.reportTitleContainer}>
                <Text style={styles.reportTitle}>BOTTOM STEAM PLATTENA ASSY : XF-23193</Text>
              </View>
              <View style={{ flexDirection: "column", flex: 1, marginTop:'6%', marginLeft:'3%'}}>
                <View style={styles.reportTextContainer}>
                  <Text style={styles.reportTextDesc}>
                    Profit: 
                  </Text>
                  <Text style={styles.reportTextNum}>13.7%[Rs.12,34,450]</Text>
                </View>
              </View>
              <View style={{ flexDirection: "column", flex: 1,marginLeft:'3%' }}>
                <View style={styles.reportTextContainer}>
                  <Text style={[styles.reportTextDesc, {fontSize:normalize(11.3)}]}>
                    Expense: 
                  </Text>
                  <Text style={[styles.reportTextNum,{fontSize:normalize(12)}]}>Rs.12,34,450</Text>
                </View>
              </View>
              <View style={{ flexDirection: "column", flex: 1, marginLeft:'3%' }}>
                <View style={styles.reportTextContainer}>
                  <Text style={[styles.reportTextDesc, {fontSize:normalize(11.3)}]}>
                    Profiling: 
                  </Text>
                  <Text style={[styles.reportTextNum,{fontSize:normalize(12)}]}>
                    36% [Rs.12,34,450]
                  </Text>
                </View>
              </View>
              <View style={{ flexDirection: "column", flex: 1, marginLeft:'3%' }}>
                <View style={styles.reportTextContainer}>
                  <Text style={[styles.reportTextDesc, {fontSize:normalize(11.3)}]}>
                    Fabrication: 
                  </Text>
                  <Text style={[styles.reportTextNum,{fontSize:normalize(12)}]}>
                    36% [Rs.12,34,450]
                  </Text>
                </View>
              </View>
              <View style={{ flexDirection: "column", flex: 1, marginLeft:'3%' }}>
                <View style={styles.reportTextContainer}>
                  <Text style={[styles.reportTextDesc, {fontSize:normalize(11.3)}]}>
                    Machining: 
                  </Text>
                  <Text style={[styles.reportTextNum,{fontSize:normalize(12)}]}>
                    36% [Rs.12,34,450]
                  </Text>
                </View>
              </View>
            </View>
          </View>
          {/* NEW REPORT ELEMENT */}
          <View style={{
            height: 0.25 * HEIGHT,
            width: 0.88 * WIDTH,
            margin: 0.012 * HEIGHT,
            marginTop: 0.005*HEIGHT,
            paddingLeft: 0.01 * HEIGHT,
            paddingRight: 0.01 * HEIGHT,
            borderRadius: 25,
            backgroundColor: "#D9D9D9",
            flex:1, 
            flexDirection:'row'
            }}>
            <View style={{flex:1}}>
              <View style={styles.openPoElementImageContainer}>
                <Image
                  style={styles.openPoElementImage}
                  source={compImg}
                  resizeMethod="auto"
                />
              </View>
              <View style={{flex:1.5, flexDirection:'column'}}>
                <View style={{flex:1, flexDirection:'column'}}>
                  <Text style={[styles.reportTextDesc, {fontSize:normalize(11.3), flex:1}]}>
                    Units: 
                  </Text>
                  <Text style={[styles.reportTextNum,{fontSize:normalize(10), flex:2, fontWeight:'700', marginTop:'2%'}]}>
                    127
                  </Text>
                </View>
                <View style={{flex:1, flexDirection:'column'}}>
                  <Text style={[styles.reportTextDesc, {fontSize:normalize(11.3), flex:1}]}>
                    Profit/unit: 
                  </Text>
                  <Text style={[styles.reportTextNum,{fontSize:normalize(10), flex:2, fontWeight:'700', marginTop:'2%'}]}>
                    Rs.12,34,450
                  </Text>
                </View>
                <View style={{flex:1, flexDirection:'column'}}>
                  <Text style={[styles.reportTextDesc, {fontSize:normalize(11.3), flex:1}]}>
                     Expense/unit
                  </Text>
                  <Text style={[styles.reportTextNum,{fontSize:normalize(10), flex:2, fontWeight:'700', marginTop:'2%'}]}>
                    Rs.12,34,450
                  </Text>
                </View>
              </View>
            </View>
            <View style={styles.verticalSeparator}/>
            <View style={{flex:3}}>
              <View style={styles.reportTitleContainer}>
                <Text style={styles.reportTitle}>BOTTOM STEAM PLATTENA ASSY : XF-23193</Text>
              </View>
              <View style={{ flexDirection: "column", flex: 1, marginTop:'6%', marginLeft:'3%'}}>
                <View style={styles.reportTextContainer}>
                  <Text style={styles.reportTextDesc}>
                    Profit: 
                  </Text>
                  <Text style={styles.reportTextNum}>13.7%[Rs.12,34,450]</Text>
                </View>
              </View>
              <View style={{ flexDirection: "column", flex: 1,marginLeft:'3%' }}>
                <View style={styles.reportTextContainer}>
                  <Text style={[styles.reportTextDesc, {fontSize:normalize(11.3)}]}>
                    Expense: 
                  </Text>
                  <Text style={[styles.reportTextNum,{fontSize:normalize(12)}]}>Rs.12,34,450</Text>
                </View>
              </View>
              <View style={{ flexDirection: "column", flex: 1, marginLeft:'3%' }}>
                <View style={styles.reportTextContainer}>
                  <Text style={[styles.reportTextDesc, {fontSize:normalize(11.3)}]}>
                    Profiling: 
                  </Text>
                  <Text style={[styles.reportTextNum,{fontSize:normalize(12)}]}>
                    36% [Rs.12,34,450]
                  </Text>
                </View>
              </View>
              <View style={{ flexDirection: "column", flex: 1, marginLeft:'3%' }}>
                <View style={styles.reportTextContainer}>
                  <Text style={[styles.reportTextDesc, {fontSize:normalize(11.3)}]}>
                    Fabrication: 
                  </Text>
                  <Text style={[styles.reportTextNum,{fontSize:normalize(12)}]}>
                    36% [Rs.12,34,450]
                  </Text>
                </View>
              </View>
              <View style={{ flexDirection: "column", flex: 1, marginLeft:'3%' }}>
                <View style={styles.reportTextContainer}>
                  <Text style={[styles.reportTextDesc, {fontSize:normalize(11.3)}]}>
                    Machining: 
                  </Text>
                  <Text style={[styles.reportTextNum,{fontSize:normalize(12)}]}>
                    36% [Rs.12,34,450]
                  </Text>
                </View>
              </View>
            </View>
          </View>
          {/* NEW REPORT ELEMENT */}
          <View style={{
            height: 0.25 * HEIGHT,
            width: 0.88 * WIDTH,
            margin: 0.012 * HEIGHT,
            marginTop: 0.005*HEIGHT,
            paddingLeft: 0.01 * HEIGHT,
            paddingRight: 0.01 * HEIGHT,
            borderRadius: 25,
            backgroundColor: "#D9D9D9",
            flex:1, 
            flexDirection:'row'
            }}>
            <View style={{flex:1}}>
              <View style={styles.openPoElementImageContainer}>
                <Image
                  style={styles.openPoElementImage}
                  source={compImg}
                  resizeMethod="auto"
                />
              </View>
              <View style={{flex:1.5, flexDirection:'column'}}>
                <View style={{flex:1, flexDirection:'column'}}>
                  <Text style={[styles.reportTextDesc, {fontSize:normalize(11.3), flex:1}]}>
                    Units: 
                  </Text>
                  <Text style={[styles.reportTextNum,{fontSize:normalize(10), flex:2, fontWeight:'700', marginTop:'2%'}]}>
                    127
                  </Text>
                </View>
                <View style={{flex:1, flexDirection:'column'}}>
                  <Text style={[styles.reportTextDesc, {fontSize:normalize(11.3), flex:1}]}>
                    Profit/unit: 
                  </Text>
                  <Text style={[styles.reportTextNum,{fontSize:normalize(10), flex:2, fontWeight:'700', marginTop:'2%'}]}>
                    Rs.12,34,450
                  </Text>
                </View>
                <View style={{flex:1, flexDirection:'column'}}>
                  <Text style={[styles.reportTextDesc, {fontSize:normalize(11.3), flex:1}]}>
                     Expense/unit
                  </Text>
                  <Text style={[styles.reportTextNum,{fontSize:normalize(10), flex:2, fontWeight:'700', marginTop:'2%'}]}>
                    Rs.12,34,450
                  </Text>
                </View>
              </View>
            </View>
            <View style={styles.verticalSeparator}/>
            <View style={{flex:3}}>
              <View style={styles.reportTitleContainer}>
                <Text style={styles.reportTitle}>BOTTOM STEAM PLATTENA ASSY : XF-23193</Text>
              </View>
              <View style={{ flexDirection: "column", flex: 1, marginTop:'6%', marginLeft:'3%'}}>
                <View style={styles.reportTextContainer}>
                  <Text style={styles.reportTextDesc}>
                    Profit: 
                  </Text>
                  <Text style={styles.reportTextNum}>13.7%[Rs.12,34,450]</Text>
                </View>
              </View>
              <View style={{ flexDirection: "column", flex: 1,marginLeft:'3%' }}>
                <View style={styles.reportTextContainer}>
                  <Text style={[styles.reportTextDesc, {fontSize:normalize(11.3)}]}>
                    Expense: 
                  </Text>
                  <Text style={[styles.reportTextNum,{fontSize:normalize(12)}]}>Rs.12,34,450</Text>
                </View>
              </View>
              <View style={{ flexDirection: "column", flex: 1, marginLeft:'3%' }}>
                <View style={styles.reportTextContainer}>
                  <Text style={[styles.reportTextDesc, {fontSize:normalize(11.3)}]}>
                    Profiling: 
                  </Text>
                  <Text style={[styles.reportTextNum,{fontSize:normalize(12)}]}>
                    36% [Rs.12,34,450]
                  </Text>
                </View>
              </View>
              <View style={{ flexDirection: "column", flex: 1, marginLeft:'3%' }}>
                <View style={styles.reportTextContainer}>
                  <Text style={[styles.reportTextDesc, {fontSize:normalize(11.3)}]}>
                    Fabrication: 
                  </Text>
                  <Text style={[styles.reportTextNum,{fontSize:normalize(12)}]}>
                    36% [Rs.12,34,450]
                  </Text>
                </View>
              </View>
              <View style={{ flexDirection: "column", flex: 1, marginLeft:'3%' }}>
                <View style={styles.reportTextContainer}>
                  <Text style={[styles.reportTextDesc, {fontSize:normalize(11.3)}]}>
                    Machining: 
                  </Text>
                  <Text style={[styles.reportTextNum,{fontSize:normalize(12)}]}>
                    36% [Rs.12,34,450]
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </ScrollView>
        {/* END OF REPORT CONTAINER HORIZONTAL SCROLL */}
        {/* END OF OVERALL ANALYTICS */}

        <View style={styles.separator}/>

        {/* DEPARTMENT ANALYTICS */}
        <View style={{flexDirection: 'row', justifyContent: "center", alignItems: "center", marginTop:'5%', }}>
          <TouchableOpacity style={{marginRight:'5%'}}>
            <FontAwesome5 name='arrow-circle-left' size={25}></FontAwesome5>
          </TouchableOpacity>
          <Text style={{fontSize:normalize(16), fontWeight:'bold'}}>ALL DEPARTMENTS</Text>
          <TouchableOpacity style={{marginLeft:'5%'}}>
            <FontAwesome5 name='arrow-circle-right' size={25}></FontAwesome5>
          </TouchableOpacity>
        </View>
        <BarChart
          data={departmentData}
          width={Dimensions.get("window").width} // from react-native
          height={220}
          yAxisLabel="₹"
          yAxisSuffix="L"
          yAxisInterval={2} // optional, defaults to 1
          chartConfig={{
            backgroundGradientFrom: "#ffffff",
            backgroundGradientTo: "#ffffff",
            decimalPlaces: 2, // optional, defaults to 2dp
            color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
            labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
            style: {
              borderRadius: 16
            },
            propsForBackgroundLines: {
              stroke:'black',
              strokeWidth:'0'
            }
          }}
          style={{
            marginVertical: 8,
          }}
        />
        {/* REPORT CONTAINER HORIZONTAL SCROLL */}
        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          styles={{ backgroundColor: "white" }}
          >
          {/* NEW REPORT ELEMENT */}
          <View style={{
            height: 0.25 * HEIGHT,
            width: 0.88 * WIDTH,
            margin: 0.012 * HEIGHT,
            marginTop: 0.005*HEIGHT,
            paddingLeft: 0.01 * HEIGHT,
            paddingRight: 0.01 * HEIGHT,
            borderRadius: 25,
            backgroundColor: "#D9D9D9",
            flex:1, 
            flexDirection:'row'
            }}>
            <View style={{flex:3}}>
              <View style={styles.reportTitleContainer}>
                <Text style={styles.reportTitle}>PROFILING</Text>
              </View>
              <View style={{ flexDirection: "column", flex: 1, marginTop:'6%', marginLeft:'3%'}}>
                <View style={styles.reportTextContainer}>
                  <Text style={styles.reportTextDesc}>
                    Total Expense: 
                  </Text>
                  <Text style={styles.reportTextNum}>13.7%[Rs.12,34,450]</Text>
                </View>
              </View>
              <View style={{ flexDirection: "column", flex: 1,marginLeft:'3%' }}>
                <View style={styles.reportTextContainer}>
                  <Text style={[styles.reportTextDesc, {fontSize:normalize(12)}]}>
                    Material Cost: 
                  </Text>
                  <Text style={[styles.reportTextNum,{fontSize:normalize(12)}]}>Rs.12,34,450</Text>
                </View>
              </View>
              <View style={{ flexDirection: "column", flex: 1, marginLeft:'3%' }}>
                <View style={styles.reportTextContainer}>
                  <Text style={[styles.reportTextDesc, {fontSize:normalize(12)}]}>
                    Units moved: 
                  </Text>
                  <Text style={[styles.reportTextNum,{fontSize:normalize(12)}]}>
                    36% [Rs.12,34,450]
                  </Text>
                </View>
              </View>
              <View style={{ flexDirection: "column", flex: 1, marginLeft:'3%' }}>
                <View style={styles.reportTextContainer}>
                  <Text style={[styles.reportTextDesc, {fontSize:normalize(12)}]}>
                    Overheads: 
                  </Text>
                  <Text style={[styles.reportTextNum,{fontSize:normalize(12)}]}>
                    36% [Rs.12,34,450]
                  </Text>
                </View>
              </View>
            </View>
          </View>
          {/* NEW REPORT ELEMENT */}
          <View style={{
            height: 0.25 * HEIGHT,
            width: 0.88 * WIDTH,
            margin: 0.012 * HEIGHT,
            marginTop: 0.005*HEIGHT,
            paddingLeft: 0.01 * HEIGHT,
            paddingRight: 0.01 * HEIGHT,
            borderRadius: 25,
            backgroundColor: "#D9D9D9",
            flex:1, 
            flexDirection:'row'
            }}>
            <View style={{flex:3}}>
              <View style={styles.reportTitleContainer}>
                <Text style={styles.reportTitle}>FABRICATION</Text>
              </View>
              <View style={{ flexDirection: "column", flex: 1, marginTop:'6%', marginLeft:'3%'}}>
                <View style={styles.reportTextContainer}>
                  <Text style={styles.reportTextDesc}>
                    Total Expense: 
                  </Text>
                  <Text style={styles.reportTextNum}>13.7%[Rs.12,34,450]</Text>
                </View>
              </View>
              <View style={{ flexDirection: "column", flex: 1,marginLeft:'3%' }}>
                <View style={styles.reportTextContainer}>
                  <Text style={[styles.reportTextDesc, {fontSize:normalize(12)}]}>
                    Material Cost: 
                  </Text>
                  <Text style={[styles.reportTextNum,{fontSize:normalize(12)}]}>Rs.12,34,450</Text>
                </View>
              </View>
              <View style={{ flexDirection: "column", flex: 1, marginLeft:'3%' }}>
                <View style={styles.reportTextContainer}>
                  <Text style={[styles.reportTextDesc, {fontSize:normalize(12)}]}>
                    Units moved: 
                  </Text>
                  <Text style={[styles.reportTextNum,{fontSize:normalize(12)}]}>
                    36% [Rs.12,34,450]
                  </Text>
                </View>
              </View>
              <View style={{ flexDirection: "column", flex: 1, marginLeft:'3%' }}>
                <View style={styles.reportTextContainer}>
                  <Text style={[styles.reportTextDesc, {fontSize:normalize(12)}]}>
                    Overheads: 
                  </Text>
                  <Text style={[styles.reportTextNum,{fontSize:normalize(12)}]}>
                    36% [Rs.12,34,450]
                  </Text>
                </View>
              </View>
            </View>
          </View>
          {/* NEW REPORT ELEMENT */}
          <View style={{
            height: 0.25 * HEIGHT,
            width: 0.88 * WIDTH,
            margin: 0.012 * HEIGHT,
            marginTop: 0.005*HEIGHT,
            paddingLeft: 0.01 * HEIGHT,
            paddingRight: 0.01 * HEIGHT,
            borderRadius: 25,
            backgroundColor: "#D9D9D9",
            flex:1, 
            flexDirection:'row'
            }}>
            <View style={{flex:3}}>
              <View style={styles.reportTitleContainer}>
                <Text style={styles.reportTitle}>WELDING</Text>
              </View>
              <View style={{ flexDirection: "column", flex: 1, marginTop:'6%', marginLeft:'3%'}}>
                <View style={styles.reportTextContainer}>
                  <Text style={styles.reportTextDesc}>
                    Total Expense: 
                  </Text>
                  <Text style={styles.reportTextNum}>13.7%[Rs.12,34,450]</Text>
                </View>
              </View>
              <View style={{ flexDirection: "column", flex: 1,marginLeft:'3%' }}>
                <View style={styles.reportTextContainer}>
                  <Text style={[styles.reportTextDesc, {fontSize:normalize(12)}]}>
                    Material Cost: 
                  </Text>
                  <Text style={[styles.reportTextNum,{fontSize:normalize(12)}]}>Rs.12,34,450</Text>
                </View>
              </View>
              <View style={{ flexDirection: "column", flex: 1, marginLeft:'3%' }}>
                <View style={styles.reportTextContainer}>
                  <Text style={[styles.reportTextDesc, {fontSize:normalize(12)}]}>
                    Units moved: 
                  </Text>
                  <Text style={[styles.reportTextNum,{fontSize:normalize(12)}]}>
                    36% [Rs.12,34,450]
                  </Text>
                </View>
              </View>
              <View style={{ flexDirection: "column", flex: 1, marginLeft:'3%' }}>
                <View style={styles.reportTextContainer}>
                  <Text style={[styles.reportTextDesc, {fontSize:normalize(12)}]}>
                    Overheads: 
                  </Text>
                  <Text style={[styles.reportTextNum,{fontSize:normalize(12)}]}>
                    36% [Rs.12,34,450]
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </ScrollView>
        {/* END OF REPORT CONTAINER HORIZONTAL SCROLL */}
        {/* END OF DEPARTMENT ANALYTICS */}

        <View style={styles.separator}/>

        {/* PRODUCT ANALYTICS */}
        <View style={{flexDirection: 'row', justifyContent: "center", alignItems: "center", marginTop:'5%', }}>
          <Text style={{fontSize:normalize(16), fontWeight:'bold'}}>PRODUCT</Text>
          <TouchableOpacity style={{marginLeft:'5%'}}>
            <FontAwesome5 name='chevron-circle-down' size={25} onPress={handleProductModal}></FontAwesome5>
          </TouchableOpacity>
          {/* COMPANY MODAL */}
          <Modal isVisible={isProductModalVisible}>
              <View
                style={{
                  flex: 0.5,
                  backgroundColor: "white",
                  padding: 0.02 * HEIGHT,
                  borderRadius: 30,
                }}
              >
                <View style={{ alignItems: "center", marginBottom: "5%" }}>
                  <Text style={{ fontWeight: "bold", fontSize: normalize(15) }}>
                    PRODUCT
                  </Text>
                </View>
                {/* <View style={{height:'0.3%', backgroundColor:'black', marginBottom:'5%'}}/> */}
                <View
                  style={{
                    height: "0.3%",
                    backgroundColor: "#BEBEBE",
                    marginTop: "4%",
                    marginBottom: "4%",
                  }}
                />
                {/* CHK1 */}
                <BouncyCheckbox
                  size={25}
                  fillColor="#4BAA4C"
                  unfillColor="white"
                  text="Bottom Steam Platten Assy"
                  innerIconStyle={{ borderWidth: 2 }}
                  onPress={(isChecked) => {}}
                  textStyle={{ textDecorationLine: "none", color: "black" }}
                />
                <View
                  style={{
                    height: "0.3%",
                    backgroundColor: "#BEBEBE",
                    marginTop: "4%",
                    marginBottom: "4%",
                  }}
                />
                {/* CHK1 */}
                <BouncyCheckbox
                  size={25}
                  fillColor="#4BAA4C"
                  unfillColor="white"
                  text="Bottom Steam Platten Assy"
                  innerIconStyle={{ borderWidth: 2 }}
                  onPress={(isChecked) => {}}
                  textStyle={{ textDecorationLine: "none", color: "black" }}
                />
                <View
                  style={{
                    height: "0.3%",
                    backgroundColor: "#BEBEBE",
                    marginTop: "4%",
                    marginBottom: "4%",
                  }}
                />
                {/* CHK1 */}
                <BouncyCheckbox
                  size={25}
                  fillColor="#4BAA4C"
                  unfillColor="white"
                  text="Bottom Steam Platten Assy"
                  innerIconStyle={{ borderWidth: 2 }}
                  onPress={(isChecked) => {}}
                  textStyle={{ textDecorationLine: "none", color: "black" }}
                />
                <View
                  style={{
                    height: "0.3%",
                    backgroundColor: "#BEBEBE",
                    marginTop: "4%",
                    marginBottom: "4%",
                  }}
                />
                {/* CHK1 */}
                <BouncyCheckbox
                  size={25}
                  fillColor="#4BAA4C"
                  unfillColor="white"
                  text="Bottom Steam Platten Assy"
                  innerIconStyle={{ borderWidth: 2 }}
                  onPress={(isChecked) => {}}
                  textStyle={{ textDecorationLine: "none", color: "black" }}
                />
                <View
                  style={{
                    height: "0.3%",
                    backgroundColor: "#BEBEBE",
                    marginTop: "4%",
                    marginBottom: "4%",
                  }}
                />
                {/* CHK1 */}
                <BouncyCheckbox
                  size={25}
                  fillColor="#4BAA4C"
                  unfillColor="white"
                  text="Bottom Steam Platten Assy"
                  innerIconStyle={{ borderWidth: 2 }}
                  onPress={(isChecked) => {}}
                  textStyle={{ textDecorationLine: "none", color: "black" }}
                />
                <View
                  style={{
                    height: "0.3%",
                    backgroundColor: "#BEBEBE",
                    marginTop: "4%",
                    marginBottom: "4%",
                  }}
                />
                <View style={{ alignItems: "center" }}>
                  <TouchableOpacity
                    style={{
                      margin: "2%",
                      width: "50%",
                      alignItems: "center",
                      backgroundColor: "#4BAA4C",
                      padding: "2.5%",
                      borderRadius: 30,
                    }}
                    onPress={handleProductModal}
                  >
                    <Text style={{ color: "white" }}>Apply</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </Modal>
            {/* END OF COMPANY MODAL */}
        </View>
        <BarChart
          data={productData}
          width={Dimensions.get("window").width} // from react-native
          height={220}
          yAxisLabel="₹"
          yAxisSuffix="L"
          yAxisInterval={2} // optional, defaults to 1
          chartConfig={{
            backgroundGradientFrom: "#ffffff",
            backgroundGradientTo: "#ffffff",
            decimalPlaces: 2, // optional, defaults to 2dp
            color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
            // color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
            // labelColor: (opacity = 1) => `rgba(75, 170, 76, ${opacity})`,x
            // labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            style: {
              borderRadius: 16
            },
            propsForBackgroundLines: {
              stroke:'black',
              strokeWidth:'0'
            },
          }}
          style={{
            marginVertical: 8,
          }}
        />
        {/* REPORT CONTAINER HORIZONTAL SCROLL */}
        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          styles={{ backgroundColor: "white" }}
          >
          {/* NEW REPORT ELEMENT */}
          <View style={{
            height: 0.25 * HEIGHT,
            width: 0.88 * WIDTH,
            margin: 0.012 * HEIGHT,
            marginTop: 0.005*HEIGHT,
            paddingLeft: 0.01 * HEIGHT,
            paddingRight: 0.01 * HEIGHT,
            borderRadius: 25,
            backgroundColor: "#D9D9D9",
            flex:1, 
            flexDirection:'row'
            }}>
            <View style={{flex:1}}>
              <View style={styles.openPoElementImageContainer}>
                <Image
                  style={styles.openPoElementImage}
                  source={compImg}
                  resizeMethod="auto"
                />
              </View>
              <View style={{flex:1.5, flexDirection:'column'}}>
                <View style={{flex:1, flexDirection:'column'}}>
                  <Text style={[styles.reportTextDesc, {fontSize:normalize(11.3), flex:1}]}>
                    Units: 
                  </Text>
                  <Text style={[styles.reportTextNum,{fontSize:normalize(10), flex:2, fontWeight:'700', marginTop:'2%'}]}>
                    127
                  </Text>
                </View>
                <View style={{flex:1, flexDirection:'column'}}>
                  <Text style={[styles.reportTextDesc, {fontSize:normalize(11.3), flex:1}]}>
                    Profit/unit: 
                  </Text>
                  <Text style={[styles.reportTextNum,{fontSize:normalize(10), flex:2, fontWeight:'700', marginTop:'2%'}]}>
                    Rs.12,34,450
                  </Text>
                </View>
                <View style={{flex:1, flexDirection:'column'}}>
                  <Text style={[styles.reportTextDesc, {fontSize:normalize(11.3), flex:1}]}>
                     Expense/unit
                  </Text>
                  <Text style={[styles.reportTextNum,{fontSize:normalize(10), flex:2, fontWeight:'700', marginTop:'2%'}]}>
                    Rs.12,34,450
                  </Text>
                </View>
              </View>
            </View>
            <View style={styles.verticalSeparator}/>
            <View style={{flex:3}}>
              <View style={styles.reportTitleContainer}>
                <Text style={styles.reportTitle}>JANUARY</Text>
              </View>
              <View style={{ flexDirection: "column", flex: 1, marginTop:'6%', marginLeft:'3%'}}>
                <View style={styles.reportTextContainer}>
                  <Text style={styles.reportTextDesc}>
                    Profit: 
                  </Text>
                  <Text style={styles.reportTextNum}>13.7%[Rs.12,34,450]</Text>
                </View>
              </View>
              <View style={{ flexDirection: "column", flex: 1,marginLeft:'3%' }}>
                <View style={styles.reportTextContainer}>
                  <Text style={[styles.reportTextDesc, {fontSize:normalize(11.3)}]}>
                    Expense: 
                  </Text>
                  <Text style={[styles.reportTextNum,{fontSize:normalize(12)}]}>Rs.12,34,450</Text>
                </View>
              </View>
              <View style={{ flexDirection: "column", flex: 1, marginLeft:'3%' }}>
                <View style={styles.reportTextContainer}>
                  <Text style={[styles.reportTextDesc, {fontSize:normalize(11.3)}]}>
                    Profiling: 
                  </Text>
                  <Text style={[styles.reportTextNum,{fontSize:normalize(12)}]}>
                    36% [Rs.12,34,450]
                  </Text>
                </View>
              </View>
              <View style={{ flexDirection: "column", flex: 1, marginLeft:'3%' }}>
                <View style={styles.reportTextContainer}>
                  <Text style={[styles.reportTextDesc, {fontSize:normalize(11.3)}]}>
                    Fabrication: 
                  </Text>
                  <Text style={[styles.reportTextNum,{fontSize:normalize(12)}]}>
                    36% [Rs.12,34,450]
                  </Text>
                </View>
              </View>
              <View style={{ flexDirection: "column", flex: 1, marginLeft:'3%' }}>
                <View style={styles.reportTextContainer}>
                  <Text style={[styles.reportTextDesc, {fontSize:normalize(11.3)}]}>
                    Machining: 
                  </Text>
                  <Text style={[styles.reportTextNum,{fontSize:normalize(12)}]}>
                    36% [Rs.12,34,450]
                  </Text>
                </View>
              </View>
            </View>
          </View>
          {/* NEW REPORT ELEMENT */}
          <View style={{
            height: 0.25 * HEIGHT,
            width: 0.88 * WIDTH,
            margin: 0.012 * HEIGHT,
            marginTop: 0.005*HEIGHT,
            paddingLeft: 0.01 * HEIGHT,
            paddingRight: 0.01 * HEIGHT,
            borderRadius: 25,
            backgroundColor: "#D9D9D9",
            flex:1, 
            flexDirection:'row'
            }}>
            <View style={{flex:1}}>
              <View style={styles.openPoElementImageContainer}>
                <Image
                  style={styles.openPoElementImage}
                  source={compImg}
                  resizeMethod="auto"
                />
              </View>
              <View style={{flex:1.5, flexDirection:'column'}}>
                <View style={{flex:1, flexDirection:'column'}}>
                  <Text style={[styles.reportTextDesc, {fontSize:normalize(11.3), flex:1}]}>
                    Units: 
                  </Text>
                  <Text style={[styles.reportTextNum,{fontSize:normalize(10), flex:2, fontWeight:'700', marginTop:'2%'}]}>
                    127
                  </Text>
                </View>
                <View style={{flex:1, flexDirection:'column'}}>
                  <Text style={[styles.reportTextDesc, {fontSize:normalize(11.3), flex:1}]}>
                    Profit/unit: 
                  </Text>
                  <Text style={[styles.reportTextNum,{fontSize:normalize(10), flex:2, fontWeight:'700', marginTop:'2%'}]}>
                    Rs.12,34,450
                  </Text>
                </View>
                <View style={{flex:1, flexDirection:'column'}}>
                  <Text style={[styles.reportTextDesc, {fontSize:normalize(11.3), flex:1}]}>
                     Expense/unit
                  </Text>
                  <Text style={[styles.reportTextNum,{fontSize:normalize(10), flex:2, fontWeight:'700', marginTop:'2%'}]}>
                    Rs.12,34,450
                  </Text>
                </View>
              </View>
            </View>
            <View style={styles.verticalSeparator}/>
            <View style={{flex:3}}>
              <View style={styles.reportTitleContainer}>
                <Text style={styles.reportTitle}>FEBRUARY</Text>
              </View>
              <View style={{ flexDirection: "column", flex: 1, marginTop:'6%', marginLeft:'3%'}}>
                <View style={styles.reportTextContainer}>
                  <Text style={styles.reportTextDesc}>
                    Profit: 
                  </Text>
                  <Text style={styles.reportTextNum}>13.7%[Rs.12,34,450]</Text>
                </View>
              </View>
              <View style={{ flexDirection: "column", flex: 1,marginLeft:'3%' }}>
                <View style={styles.reportTextContainer}>
                  <Text style={[styles.reportTextDesc, {fontSize:normalize(11.3)}]}>
                    Expense: 
                  </Text>
                  <Text style={[styles.reportTextNum,{fontSize:normalize(12)}]}>Rs.12,34,450</Text>
                </View>
              </View>
              <View style={{ flexDirection: "column", flex: 1, marginLeft:'3%' }}>
                <View style={styles.reportTextContainer}>
                  <Text style={[styles.reportTextDesc, {fontSize:normalize(11.3)}]}>
                    Profiling: 
                  </Text>
                  <Text style={[styles.reportTextNum,{fontSize:normalize(12)}]}>
                    36% [Rs.12,34,450]
                  </Text>
                </View>
              </View>
              <View style={{ flexDirection: "column", flex: 1, marginLeft:'3%' }}>
                <View style={styles.reportTextContainer}>
                  <Text style={[styles.reportTextDesc, {fontSize:normalize(11.3)}]}>
                    Fabrication: 
                  </Text>
                  <Text style={[styles.reportTextNum,{fontSize:normalize(12)}]}>
                    36% [Rs.12,34,450]
                  </Text>
                </View>
              </View>
              <View style={{ flexDirection: "column", flex: 1, marginLeft:'3%' }}>
                <View style={styles.reportTextContainer}>
                  <Text style={[styles.reportTextDesc, {fontSize:normalize(11.3)}]}>
                    Machining: 
                  </Text>
                  <Text style={[styles.reportTextNum,{fontSize:normalize(12)}]}>
                    36% [Rs.12,34,450]
                  </Text>
                </View>
              </View>
            </View>
          </View>
          {/* NEW REPORT ELEMENT */}
          <View style={{
            height: 0.25 * HEIGHT,
            width: 0.88 * WIDTH,
            margin: 0.012 * HEIGHT,
            marginTop: 0.005*HEIGHT,
            paddingLeft: 0.01 * HEIGHT,
            paddingRight: 0.01 * HEIGHT,
            borderRadius: 25,
            backgroundColor: "#D9D9D9",
            flex:1, 
            flexDirection:'row'
            }}>
            <View style={{flex:1}}>
              <View style={styles.openPoElementImageContainer}>
                <Image
                  style={styles.openPoElementImage}
                  source={compImg}
                  resizeMethod="auto"
                />
              </View>
              <View style={{flex:1.5, flexDirection:'column'}}>
                <View style={{flex:1, flexDirection:'column'}}>
                  <Text style={[styles.reportTextDesc, {fontSize:normalize(11.3), flex:1}]}>
                    Units: 
                  </Text>
                  <Text style={[styles.reportTextNum,{fontSize:normalize(10), flex:2, fontWeight:'700', marginTop:'2%'}]}>
                    127
                  </Text>
                </View>
                <View style={{flex:1, flexDirection:'column'}}>
                  <Text style={[styles.reportTextDesc, {fontSize:normalize(11.3), flex:1}]}>
                    Profit/unit: 
                  </Text>
                  <Text style={[styles.reportTextNum,{fontSize:normalize(10), flex:2, fontWeight:'700', marginTop:'2%'}]}>
                    Rs.12,34,450
                  </Text>
                </View>
                <View style={{flex:1, flexDirection:'column'}}>
                  <Text style={[styles.reportTextDesc, {fontSize:normalize(11.3), flex:1}]}>
                     Expense/unit
                  </Text>
                  <Text style={[styles.reportTextNum,{fontSize:normalize(10), flex:2, fontWeight:'700', marginTop:'2%'}]}>
                    Rs.12,34,450
                  </Text>
                </View>
              </View>
            </View>
            <View style={styles.verticalSeparator}/>
            <View style={{flex:3}}>
              <View style={styles.reportTitleContainer}>
                <Text style={styles.reportTitle}>MARCH</Text>
              </View>
              <View style={{ flexDirection: "column", flex: 1, marginTop:'6%', marginLeft:'3%'}}>
                <View style={styles.reportTextContainer}>
                  <Text style={styles.reportTextDesc}>
                    Profit: 
                  </Text>
                  <Text style={styles.reportTextNum}>13.7%[Rs.12,34,450]</Text>
                </View>
              </View>
              <View style={{ flexDirection: "column", flex: 1,marginLeft:'3%' }}>
                <View style={styles.reportTextContainer}>
                  <Text style={[styles.reportTextDesc, {fontSize:normalize(11.3)}]}>
                    Expense: 
                  </Text>
                  <Text style={[styles.reportTextNum,{fontSize:normalize(12)}]}>Rs.12,34,450</Text>
                </View>
              </View>
              <View style={{ flexDirection: "column", flex: 1, marginLeft:'3%' }}>
                <View style={styles.reportTextContainer}>
                  <Text style={[styles.reportTextDesc, {fontSize:normalize(11.3)}]}>
                    Profiling: 
                  </Text>
                  <Text style={[styles.reportTextNum,{fontSize:normalize(12)}]}>
                    36% [Rs.12,34,450]
                  </Text>
                </View>
              </View>
              <View style={{ flexDirection: "column", flex: 1, marginLeft:'3%' }}>
                <View style={styles.reportTextContainer}>
                  <Text style={[styles.reportTextDesc, {fontSize:normalize(11.3)}]}>
                    Fabrication: 
                  </Text>
                  <Text style={[styles.reportTextNum,{fontSize:normalize(12)}]}>
                    36% [Rs.12,34,450]
                  </Text>
                </View>
              </View>
              <View style={{ flexDirection: "column", flex: 1, marginLeft:'3%' }}>
                <View style={styles.reportTextContainer}>
                  <Text style={[styles.reportTextDesc, {fontSize:normalize(11.3)}]}>
                    Machining: 
                  </Text>
                  <Text style={[styles.reportTextNum,{fontSize:normalize(12)}]}>
                    36% [Rs.12,34,450]
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </ScrollView>
        {/* END OF REPORT CONTAINER HORIZONTAL SCROLL */}
        {/* END OF PRODUCT ANALYTICS */}
        <View style={styles.separator}/>

      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  separator: {
    height: 0.003 * HEIGHT,
    backgroundColor: "#4baa4c",
    width: 1 * WIDTH,
    marginTop: 0.04 * HEIGHT,
    marginBottom: 0.01 * HEIGHT,
  },
  reportTextDesc: {
    flex:1,
    color: "black",
    fontSize: normalize(12),
    justifyContent:'flex-start'
  },
  reportTextNum: {
    flex:2.5,
    color: "black",
    fontSize: normalize(14.5),
    fontWeight: "500",
  },
  reportTextContainer: {
    flex: 1,
    flexDirection:'row',
    justifyContent: "flex-start",
  },
  reportTitle: {
    color: "black",
    fontSize: normalize(13),
    fontWeight: "bold",
  },
  reportTitleContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 0.01 * HEIGHT,
    paddingLeft: 0.01 * WIDTH,
    paddingRight: 0.01 * WIDTH,
  },
  reportContainer: {
    height: 0.2 * HEIGHT,
    width: 0.88 * WIDTH,
    margin: 0.012 * HEIGHT,
    marginTop: 0.005*HEIGHT,
    paddingLeft: 0.01 * HEIGHT,
    paddingRight: 0.01 * HEIGHT,
    borderRadius: 25,
    backgroundColor: "#D9D9D9",
    flex:1, 
    flexDirection:'column'
  },
  openPoElementDescText: {
    flex: 0.5,
    alignItems: "center",
  },
  openPoElementText: {
    fontSize: normalize(13),
    flex: 1,
  },
  openPoElementDeptText: {
    marginTop: "4%",
    fontWeight: "500",
    fontSize: normalize(12),
  },
  openPoElementTextContainer: {
    flex: 1,
    flexDirection: "row",
    height: "78%",
  },
  openPoElementDescContainer: {
    flex: 2.5,
    flexDirection: "column",
    padding: "2.5%",
  },
  openPoElementImage: {
    height: "75%",
    width: "75%",
    resizeMode: "contain",
  },
  openPoElementImageContainer: {
    flex: 1,
    paddingTop: "3%",
    alignItems: "center",
    justifyContent: 'flex-start',
  },
  openPoElement: {
    flexDirection: "row",
    height: 0.14 * HEIGHT,
    backgroundColor: "#D9D9D9",
    borderWidth: 1,
    borderRadius: 30,
    borderColor: "#D9D9D9",
    marginBottom: 0.007 * HEIGHT,
  },
  verticalSeparator: {
    height: 0.25 * HEIGHT,
    backgroundColor: "white",
    width: 0.002 * WIDTH,
  },
});

export default Auth;



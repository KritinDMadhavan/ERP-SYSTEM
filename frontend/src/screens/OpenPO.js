import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import Fontisto from "react-native-vector-icons/Fontisto";
import { style } from "../assets/style";
import { normalize } from "../assets/responsiveFont";
import React, { useState } from "react";
import Modal from "react-native-modal";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { Slider } from "@miblanchard/react-native-slider";
import { Calendar, CalendarList, Agenda } from "react-native-calendars";
import Header from "../components/Header.js";

import { LocaleConfig } from "react-native-calendars";

LocaleConfig.locales["fr"] = {
  monthNames: [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ],
  monthNamesShort: [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Déc",
  ],
  dayNames: [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ],
  dayNamesShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  today: "Aujourd'hui",
};
LocaleConfig.defaultLocale = "fr";

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
const data = {
  labels: ["40%"], // optional
  data: [0.4]
};
const data2 = [
  {
    schedule: 40,
    color: "#00FFCA",
  },
  {
    schedule: 60,
    color: "#05BFDB",
  },
];
const HEIGHT = Dimensions.get("window").height;
const WIDTH = Dimensions.get("window").width;

import compImg from "../assets/images/comp_ex.png";
import prodDraw from "../assets/images/prod_draw.jpg"
import * as WebBrowser from "expo-web-browser";

const Auth = ({ navigation }) => {
  const [isCompanyModalVisible, setIsCompanyModalVisible] =
    React.useState(false);
  const handleCompanyModal = () =>
    setIsCompanyModalVisible(() => !isCompanyModalVisible);
  const [companyModalSelection, setCompanyModalSelection] = React.useState([]);

  const [isValueModalVisible, setIsValueModalVisible] = React.useState(false);
  const handleValueModal = () =>
    setIsValueModalVisible(() => !isValueModalVisible);
  const [ValueModalSelection, setValueModalSelection] = React.useState();

  const [isDueDateModalVisible, setIsDueDateModalVisible] =
    React.useState(false);
  const handleDueDateModal = () => {
    setIsDueDateModalVisible(() => !isDueDateModalVisible);
    setDueDateModalAppliedSelection(DueDateModalSelection);
  };
  const [DueDateModalSelection, setDueDateModalSelection] = React.useState();
  const [DueDateModalAppliedSelection, setDueDateModalAppliedSelection] =
    React.useState();

  const [isPOModalVisible, setIsPOModalVisible] =
    React.useState(false);
  const handlePOModal = () =>
    setIsPOModalVisible(() => !isPOModalVisible);
  const [POModalSelection, setPOModalSelection] = React.useState([]);

  const [isImageModalvisible, setIsImageModalvisible] =
    React.useState(false);
  const handleImageModal = () =>
  setIsImageModalvisible(() => !isImageModalvisible);
  const [ImageModalSelection, setImageModalSelection] = React.useState([]);

  return (
    <SafeAreaView
      style={{ marginBottom: 20, backgroundColor: "white", height: "100%" }}
    >
      <ScrollView pagingEnabled="true">
        <StatusBar
          backgroundColor="#4BAA4C"
          barStyle="light-content"
          translucent={true}
        />

        {/* HEADER CONTAINER */}
        <Header title="OPEN PURCHASE ORDERS" />

        {/* SORT CONTAINER */}
        <View style={styles.sortContainer}>
          <View>
            <Text style={styles.sortText}>Sort by</Text>
          </View>

          <View style={styles.sortOptionsContainer}>
            <View style={styles.sortOptions}>
              <TouchableOpacity onPress={handleCompanyModal}>
                <Text style={styles.sortOptionsText}>Company</Text>
              </TouchableOpacity>
            </View>
            {/* COMPANY MODAL */}
            <Modal isVisible={isCompanyModalVisible}>
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
                    COMPANY
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
                  text="Larsen & Toubro"
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
                  text="Larsen & Toubro"
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
                  text="Larsen & Toubro"
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
                  text="Larsen & Toubro"
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
                  text="Larsen & Toubro"
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
                    onPress={handleCompanyModal}
                  >
                    <Text style={{ color: "white" }}>Apply</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </Modal>
            {/* END OF COMPANY MODAL */}
            <View style={styles.sortOptions}>
              <TouchableOpacity onPress={handleValueModal}>
                <Text style={styles.sortOptionsText}>Value</Text>
              </TouchableOpacity>
            </View>
            {/* VALUE MODAL */}
            <Modal isVisible={isValueModalVisible}>
              <View
                style={{
                  flex: 0.25,
                  backgroundColor: "white",
                  padding: 0.02 * HEIGHT,
                  borderRadius: 30,
                }}
              >
                <View style={{ alignItems: "center", marginBottom: "5%" }}>
                  <Text style={{ fontWeight: "bold", fontSize: normalize(15) }}>
                    VALUE
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
                <Slider
                  value={ValueModalSelection}
                  onValueChange={setValueModalSelection}
                  maximumTrackTintColor="#4BAA4C"
                  thumbTintColor="#4BAA4C"
                  trackClickable={true}
                  minimumValue={0}
                  maximumValue={100}
                  step={1}
                />
                <Text>Value: {ValueModalSelection}</Text>
                {/* <Slider
                  value={ValueModalSelection}
                  onValueChange={(value) => setValueModalSelection({ value })}
                />
                <Text>Value: {ValueModalSelection}</Text> */}
                <View style={{ alignItems: "center" }}>
                  <TouchableOpacity
                    style={{
                      margin: "7%",
                      width: "50%",
                      alignItems: "center",
                      backgroundColor: "#4BAA4C",
                      padding: "2.5%",
                      borderRadius: 30,
                    }}
                    onPress={handleValueModal}
                  >
                    <Text style={{ color: "white" }}>Apply</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </Modal>
            {/* END OF VALUE MODAL */}
            <View style={styles.sortOptions}>
              <TouchableOpacity onPress={handleDueDateModal}>
                <Text style={styles.sortOptionsText}>Due Date</Text>
              </TouchableOpacity>
            </View>
            {/* DUE DATE MODAL */}
            <Modal isVisible={isDueDateModalVisible}>
              <View
                style={{
                  flex: 0.6,
                  backgroundColor: "white",
                  padding: 0.02 * HEIGHT,
                  borderRadius: 30,
                }}
              >
                <View style={{ alignItems: "center", marginBottom: "5%" }}>
                  <Text style={{ fontWeight: "bold", fontSize: normalize(15) }}>
                    DUE DATE
                  </Text>
                </View>
                {/* <View style={{height:'0.3%', backgroundColor:'black', marginBottom:'5%'}}/> */}
                <View
                  style={{
                    height: "0.3%",
                    backgroundColor: "#BEBEBE",
                    marginTop: "3%",
                  }}
                />
                <Calendar
                  theme={{
                    selectedDayBackgroundColor: "green",
                    todayTextColor: "green",
                    arrowColor: "green",
                  }}
                  markedDates={{
                    [DueDateModalSelection]: {
                      selected: true,
                      marked: true,
                      selectedColor: "#4baa4c",
                    },
                  }}
                  // Initially visible month. Default = now
                  initialDate={"2023-04-02"}
                  // Minimum date that can be selected, dates before minDate will be grayed out. Default = undefined
                  minDate={"2023-03-01"}
                  // Maximum date that can be selected, dates after maxDate will be grayed out. Default = undefined
                  maxDate={"2024-04-02"}
                  // Handler which gets executed on day press. Default = undefined
                  onDayPress={(day) => {
                    setDueDateModalSelection(day["dateString"]);
                  }}
                  // Month format in calendar title. Formatting values: http://arshaw.com/xdate/#Formatting
                  monthFormat={"MMM yyyy"}
                  // Handler which gets executed when visible month changes in calendar. Default = undefined
                  onMonthChange={(month) => {
                    console.log("month changed", month);
                  }}
                  // If firstDay=1 week starts from Monday. Note that dayNames and dayNamesShort should still start from Sunday
                  firstDay={1}
                  // Hide day names. Default = false
                  hideDayNames={true}
                  // Handler which gets executed when press arrow icon left. It receive a callback can go back month
                  onPressArrowLeft={(subtractMonth) => subtractMonth()}
                  // Handler which gets executed when press arrow icon right. It receive a callback can go next month
                  onPressArrowRight={(addMonth) => addMonth()}
                  // Enable the option to swipe between months. Default = false
                  enableSwipeMonths={true}
                />
                <View style={{ alignItems: "center" }}>
                  <TouchableOpacity
                    style={{
                      margin: "7%",
                      width: "50%",
                      alignItems: "center",
                      backgroundColor: "#4BAA4C",
                      padding: "2.5%",
                      borderRadius: 30,
                    }}
                    onPress={handleDueDateModal}
                  >
                    <Text style={{ color: "white" }}>Apply</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </Modal>
            {/* END OF DUE DATE MODAL */}
          </View>
          <View style={styles.sortOptionsContainer}>
            <View style={styles.sortOptions}>
              <Text style={styles.sortOptionsText}>Product</Text>
            </View>
            <View style={styles.sortOptions}>
              <Text style={styles.sortOptionsText}>Quantity</Text>
            </View>
            <View style={styles.sortOptions}>
              <Text style={styles.sortOptionsText}>Shop</Text>
            </View>
          </View>
        </View>
        {/* END OF SORT CONTAINER */}

        {/* SEPARATOR */}
        <View style={[style.separator, { backgroundColor: "grey" }]} />

        {/* OPEN PO LIST */}
        <View style={styles.openPoContainer}>
          {/* OPEN PO ELEMENT */}
          {/* IMAGE MODAL */}
          <Modal isVisible={isImageModalvisible}>
              <View
                style={{
                  height:400,
                  backgroundColor: "white",
                  padding: 0.01 * HEIGHT,
                  borderRadius: 30
                }}
              >
                <View style={{flex:1, flexDirection:'column'}}>
                  <View style={{flex:10}}>
                    <Image
                      style={{height: "100%", width: "100%", resizeMode: "contain", margin:0, padding:0}}
                      source={prodDraw}
                      resizeMethod="auto"
                    />
                  </View>
                  <View style={{ alignItems: "center" }}>
                    <TouchableOpacity
                      style={{
                        margin: "7%",
                        width: "50%",
                        alignItems: "center",
                        backgroundColor: "#4BAA4C",
                        padding: "2.5%",
                        borderRadius: 30,
                      }}
                      onPress={handleImageModal}
                    >
                    <Text style={{ color: "white" }}>Close</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
                
          </Modal>
          {/* PRODUCT MODAL */}
          <Modal isVisible={isPOModalVisible}>
              <View
                style={{
                  height:550,
                  backgroundColor: "white",
                  padding: 0.02 * HEIGHT,
                  borderRadius: 30
                }}
              >
                <View style={{ alignItems: "center", marginBottom: "2%" }}>
                  <Text style={{fontSize: normalize(15) }}>
                      Bottom Steam Platten Assy.
                  </Text>
                </View>
                <View
                  style={{
                    height: "0.3%",
                    backgroundColor: "#BEBEBE",
                    marginTop: "4%",
                    marginBottom: "4%",
                  }}
                />
                <View style={{flex:1, flexDirection:'column'}}>
                  <View style={{flex:1, flexDirection:'row'}}>
                    <View style={{flex:1}}>
                      <Text style={{padding:10, paddingTop:5, paddingBottom:0, fontSize:normalize(12.8)}}>Larsen & Toubro</Text>
                      <Text style={{padding:10, paddingTop:5, paddingBottom:0, fontSize:normalize(12.8)}}>PPI123112984</Text>
                      <Text style={{padding:10, paddingTop:5, paddingBottom:0, fontSize:normalize(12.8)}}>2pcs</Text>
                      <Text style={{padding:10, paddingBottom:0, fontSize:normalize(12.5), marginTop:'5%', fontWeight:'500', fontSize:normalize(12)}}>Cost: ₹ 4,89,636</Text>
                    </View>
                    <View style={{flex:1}}>
                      <Text style={{padding:10, paddingTop:5, paddingBottom:0, fontSize:normalize(12.8), fontWeight:'bold'}}>12 h remaining</Text>
                      <Text style={{padding:10, paddingTop:5, paddingBottom:0, fontSize:normalize(12.8)}}>PO: 1100162794</Text>
                      <Text style={{padding:10, paddingTop:5, paddingBottom:0, fontSize:normalize(12.8)}}>2pcs</Text>
                      <Text style={{padding:10, paddingBottom:0, fontSize:normalize(12.5), marginTop:'5%', fontWeight:'500', fontSize:normalize(12)}}>Profit: ₹ 89,636</Text>
                    </View>
                  </View>
                </View>
                <View style={{flex:0.8, flexDirection:'row', justifyContent: 'center', alignItems:'center'}}>
                  <PieChart
                    data={data2}
                    width={0.5*WIDTH}
                    height={0.3*WIDTH}
                    chartConfig={{
                      backgroundColor: "#e26a00",
                      backgroundGradientFrom: "#fff",
                      backgroundGradientTo: "#fff",
                      decimalPlaces: 0, // optional, defaults to 2dp
                      color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
                      labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
                      style: {
                        borderRadius: 30,
                        flex:1
                      },
                    }}
                    paddingLeft={0.12*WIDTH}
                    padding={0}
                    margin={0}
                    accessor={"schedule"}
                    backgroundColor={"transparent"}
                    absolute
                    hasLegend={false}
                  />
                  <PieChart
                    data={data2}
                    width={0.5*WIDTH}
                    height={0.3*WIDTH}
                    chartConfig={{
                      backgroundColor: "#e26a00",
                      backgroundGradientFrom: "#fff",
                      backgroundGradientTo: "#fff",
                      decimalPlaces: 0, // optional, defaults to 2dp
                      color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
                      labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
                      style: {
                        borderRadius: 30,
                        flex:1
                      },
                    }}
                    paddingLeft={0.12*WIDTH}
                    padding={0}
                    margin={0}
                    accessor={"schedule"}
                    backgroundColor={"transparent"}
                    absolute
                    hasLegend={false}
                  />
                </View>
                <View style={{flex:0.3, flexDirection:'row', paddingBottom:0.03*WIDTH, margin:0, justifyContent:'space-between', alignItems:'center'}}>
                  <View style={{flex:1,justifyContent: 'center', alignItems: 'center',}}>
                    <Text>Schedule: 60%</Text>
                  </View>
                  <View style={{flex:1,justifyContent: 'center', alignItems: 'center',}}>
                    <Text>Profit: 60%</Text>
                  </View>
                </View>
                <View style={{flex:0.2, flexDirection:'row', justifyContent: 'space-between', alignItems:'center'}}>
                  <View style={{flex:1, justifyContent: 'center', alignItems:'center'}}>
                    <Text style={{color:'#4baa4c'}}>3hrs</Text>
                  </View>
                  <View style={{flex:1, justifyContent: 'center', alignItems:'center'}}>
                    <Text>2 h remaining</Text>
                  </View>
                  <View style={{flex:1, justifyContent: 'center', alignItems:'center'}}>
                    <Text>14:00</Text>
                  </View>
                </View>
                <View style={{flex:0.05, justifyContent:'center',alignItems:'center'}}>
                  <View style={{height:10, width:'100%', backgroundColor:'gray',flex:1, flexDirection:'row', borderRadius:30}}>
                    <View style={{height:10, width:'30%', backgroundColor:'#4baa4c', flex:1, borderTopLeftRadius:30, borderBottomLeftRadius:30}}/>
                    <View style={{height:20, width:'30%', backgroundColor:'#4baa4c', flex:0.03, borderRadius:90}}/>
                    <View style={{height:10, width:'30%', backgroundColor:'gray', flex:1}}/>
                    <View style={{height:20, width:'33%', backgroundColor:'gray', flex:0.03, borderRadius:90}}/>
                    <View style={{height:10, width:'30%', backgroundColor:'#e2e2e2', flex:1, borderTopRightRadius:30, borderBottomRightRadius:30}}/>
                  </View>
                </View>
                <View style={{flex:0.2, flexDirection:'row', justifyContent: 'space-between', alignItems:'center'}}>
                  <View style={{flex:1, justifyContent: 'center', alignItems:'center'}}>
                    <Text style={{color:'#4baa4c'}}>Profiling</Text>
                  </View>
                  <View style={{flex:1, justifyContent: 'center', alignItems:'center'}}>
                    <Text>Fabrication</Text>
                  </View>
                  <View style={{flex:1, justifyContent: 'center', alignItems:'center'}}>
                    <Text>Machining</Text>
                  </View>
                </View>
                <View style={{ alignItems: "center", justifyContent: 'center', flex:0.5, flexDirection:'row', marginTop:'2%'}}>
                    <TouchableOpacity
                      style={{
                        width: "30%",
                        alignItems: "center",
                        backgroundColor: "#4BAA4C",
                        padding: "2.5%",
                        borderRadius: 30,
                        flex:1,
                        margin:'2%'
                      }}
                      onPress={handlePOModal}
                    >
                    <Text style={{ color: "white", fontWeight:'bold' }}>Close</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                      style={{
                        alignItems: "center",
                        backgroundColor: "#ffffff",
                        borderWidth:1.5,
                        borderColor:'#4baa4c',
                        padding: "2.5%",
                        borderRadius: 30,
                        flex:1
                      }}
                      onPress={handleImageModal}
                    >
                    <Text style={{ color: "#4baa4c" }}>Drawing</Text>
                  </TouchableOpacity>
                    <TouchableOpacity
                      style={{
                        width: "30%",
                        alignItems: "center",
                        backgroundColor: "#4BAA4C",
                        padding: "2.5%",
                        borderRadius: 30,
                        flex:1,
                        margin:'2%'
                      }}
                      onPress={handlePOModal}
                    >
                    <Text style={{ color: "white", fontWeight:'bold' }}>Complete</Text>
                    </TouchableOpacity>
                  </View>
              </View>
            </Modal>
          <TouchableOpacity onPress={handlePOModal}>
            <View style={styles.openPoElement}>
              <View style={styles.openPoElementImageContainer}>
                <Image
                  style={styles.openPoElementImage}
                  source={compImg}
                  resizeMethod="auto"
                />
                <Text style={[styles.openPoElementDeptText, { color: "red" }]}>
                  PROFILE
                </Text>
              </View>
              <View style={styles.verticalSeparator} />
              <View style={styles.openPoElementDescContainer}>
                <View style={styles.openPoElementTextContainer}>
                  <Text style={styles.openPoElementText}>PPI12312984</Text>
                  <Text style={[styles.openPoElementText, { color: "red" }]}>
                    15/01 (yest.)
                  </Text>
                </View>
                <View style={styles.openPoElementTextContainer}>
                  <Text style={styles.openPoElementText}>2 pcs</Text>
                  <Text style={[styles.openPoElementText, { fontWeight: "500" }]}>
                    Rs. 4,89,636
                  </Text>
                </View>
                <View style={styles.openPoElementDescText}>
                  <Text>Bottom Steam Platten Assy.</Text>
                </View>
              </View>
            </View>
          </TouchableOpacity>

          {/* OPEN PO ELEMENT */}
          <View style={styles.openPoElement}>
            <View style={styles.openPoElementImageContainer}>
              <Image
                style={styles.openPoElementImage}
                source={compImg}
                resizeMethod="auto"
              />
              <Text
                style={[styles.openPoElementDeptText, { color: "#4AA94B" }]}
              >
                MACHINE
              </Text>
            </View>
            <View style={styles.verticalSeparator} />
            <View style={styles.openPoElementDescContainer}>
              <View style={styles.openPoElementTextContainer}>
                <Text style={styles.openPoElementText}>PPI12312984</Text>
                <Text style={[styles.openPoElementText, { color: "#6100FF" }]}>
                  16/01 (today)
                </Text>
              </View>
              <View style={styles.openPoElementTextContainer}>
                <Text style={styles.openPoElementText}>2 pcs</Text>
                <Text style={[styles.openPoElementText, { fontWeight: "500" }]}>
                  Rs. 4,89,636
                </Text>
              </View>
              <View style={styles.openPoElementDescText}>
                <Text>Bottom Steam Platten Assy.</Text>
              </View>
            </View>
          </View>

          {/* OPEN PO ELEMENT */}
          <View style={styles.openPoElement}>
            <View style={styles.openPoElementImageContainer}>
              <Image
                style={styles.openPoElementImage}
                source={compImg}
                resizeMethod="auto"
              />
              <Text
                style={[styles.openPoElementDeptText, { color: "#223BC9" }]}
              >
                WELDING
              </Text>
            </View>
            <View style={styles.verticalSeparator} />
            <View style={styles.openPoElementDescContainer}>
              <View style={styles.openPoElementTextContainer}>
                <Text style={styles.openPoElementText}>PPI12312984</Text>
                <Text style={[styles.openPoElementText, { color: "#FF6B00" }]}>
                  17/01 (tmrw.)
                </Text>
              </View>
              <View style={styles.openPoElementTextContainer}>
                <Text style={styles.openPoElementText}>2 pcs</Text>
                <Text style={[styles.openPoElementText, { fontWeight: "500" }]}>
                  Rs. 4,89,636
                </Text>
              </View>
              <View style={styles.openPoElementDescText}>
                <Text>Bottom Steam Platten Assy.</Text>
              </View>
            </View>
          </View>
          {/* OPEN PO ELEMENT */}
          <View style={styles.openPoElement}>
            <View style={styles.openPoElementImageContainer}>
              <Image
                style={styles.openPoElementImage}
                source={compImg}
                resizeMethod="auto"
              />
              <Text style={[styles.openPoElementDeptText, { color: "red" }]}>
                PROFILE
              </Text>
            </View>
            <View style={styles.verticalSeparator} />
            <View style={styles.openPoElementDescContainer}>
              <View style={styles.openPoElementTextContainer}>
                <Text style={styles.openPoElementText}>PPI12312984</Text>
                <Text style={[styles.openPoElementText, { color: "red" }]}>
                  15/01 (yest.)
                </Text>
              </View>
              <View style={styles.openPoElementTextContainer}>
                <Text style={styles.openPoElementText}>2 pcs</Text>
                <Text style={[styles.openPoElementText, { fontWeight: "500" }]}>
                  Rs. 4,89,636
                </Text>
              </View>
              <View style={styles.openPoElementDescText}>
                <Text>Bottom Steam Platten Assy.</Text>
              </View>
            </View>
          </View>

          {/* OPEN PO ELEMENT */}
          <View style={styles.openPoElement}>
            <View style={styles.openPoElementImageContainer}>
              <Image
                style={styles.openPoElementImage}
                source={compImg}
                resizeMethod="auto"
              />
              <Text
                style={[styles.openPoElementDeptText, { color: "#4AA94B" }]}
              >
                MACHINE
              </Text>
            </View>
            <View style={styles.verticalSeparator} />
            <View style={styles.openPoElementDescContainer}>
              <View style={styles.openPoElementTextContainer}>
                <Text style={styles.openPoElementText}>PPI12312984</Text>
                <Text style={[styles.openPoElementText, { color: "#6100FF" }]}>
                  16/01 (today)
                </Text>
              </View>
              <View style={styles.openPoElementTextContainer}>
                <Text style={styles.openPoElementText}>2 pcs</Text>
                <Text style={[styles.openPoElementText, { fontWeight: "500" }]}>
                  Rs. 4,89,636
                </Text>
              </View>
              <View style={styles.openPoElementDescText}>
                <Text>Bottom Steam Platten Assy.</Text>
              </View>
            </View>
          </View>

          {/* OPEN PO ELEMENT */}
          <View style={styles.openPoElement}>
            <View style={styles.openPoElementImageContainer}>
              <Image
                style={styles.openPoElementImage}
                source={compImg}
                resizeMethod="auto"
              />
              <Text
                style={[styles.openPoElementDeptText, { color: "#223BC9" }]}
              >
                WELDING
              </Text>
            </View>
            <View style={styles.verticalSeparator} />
            <View style={styles.openPoElementDescContainer}>
              <View style={styles.openPoElementTextContainer}>
                <Text style={styles.openPoElementText}>PPI12312984</Text>
                <Text style={[styles.openPoElementText, { color: "#FF6B00" }]}>
                  17/01 (tmrw.)
                </Text>
              </View>
              <View style={styles.openPoElementTextContainer}>
                <Text style={styles.openPoElementText}>2 pcs</Text>
                <Text style={[styles.openPoElementText, { fontWeight: "500" }]}>
                  Rs. 4,89,636
                </Text>
              </View>
              <View style={styles.openPoElementDescText}>
                <Text>Bottom Steam Platten Assy.</Text>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
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
    paddingTop: "1.5%",
    alignItems: "center",
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
  openPoContainer: {
    height: "100%",
    margin: 0.015 * HEIGHT,
  },
  sortOptionsText: {
    fontSize: normalize(11.5),
  },
  sortOptions: {
    padding: 0.007 * WIDTH,
    borderWidth: 2,
    borderRadius: 35,
    borderColor: "#BEBEBE",
    marginLeft: 0.03 * WIDTH,
    marginRight: 0.03 * WIDTH,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  sortOptionsContainer: {
    flexDirection: "row",
    margin: 0,
    padding: 0,
    flex: 1,
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  sortText: {
    marginBottom: 0.01 * HEIGHT,
    fontSize: normalize(18),
    color: "black",
    fontWeight: "bold",
  },
  sortContainer: {
    margin: 0.02 * HEIGHT,
    marginBottom: 0.01 * HEIGHT,
    height: 0.16 * HEIGHT,
  },
  verticalSeparator: {
    height: 0.16 * HEIGHT,
    backgroundColor: "white",
    width: 0.002 * WIDTH,
  },
});

export default Auth;

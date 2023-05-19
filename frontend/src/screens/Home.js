import { SafeAreaView } from "react-native-safe-area-context";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import { style } from "../assets/style";
import { normalize } from "../assets/responsiveFont";
import React, { useState } from "react";
import {
  Dimensions,
  ScrollView,
  View,
  Text,
  StyleSheet,
  StatusBar,
  Button,
  TouchableOpacity,
} from "react-native";

const HEIGHT = Dimensions.get("window").height;
const WIDTH = Dimensions.get("window").width;

import useOpenPO from "../utils/OpenPO";
import useIdentStore from "../storages/IdentStore";

import AnimatedLoader from "react-native-animated-loader";
import loadingAnim from "../assets/loading/loading.json";

import AsyncStorage from "@react-native-async-storage/async-storage";

const Auth = ({ navigation }) => {
  const { getOpenPO, loading } = useOpenPO();
  const { getGroup } = useIdentStore();

  const [data, setData] = useState([]);

  async function fetchData() {
    let response = await getOpenPO();
    // console.log(JSON.stringify(response))
    let group = await getGroup();
    // console.log(group)
    setData(JSON.stringify(response));
  }

  //useEffect(() => {
  //  fetchData();
  //}, []);

  return (
    // Wrapper for the entire page
    <SafeAreaView style={{ marginBottom: 7 }}>
      <ScrollView>
        <AnimatedLoader
          visible={false}
          source={loadingAnim}
          overlayColor="rgba(255,255,255,1)"
          animationStyle={styles.lottie}
          speed={1}
        >
          <Text>Fetching Data from Server...</Text>
        </AnimatedLoader>

        <StatusBar
          backgroundColor="#4BAA4C"
          barStyle="light-content"
          translucent={true}
        />

        {/* HEADER CONTAINER */}
        <View style={[style.centerText, styles.headerContainer]}>
          <Text style={styles.headerTitle}>Ashwin Jawahar</Text>
          <Text style={styles.headerBody}>Business Development</Text>
        </View>

        {/* PERCENTAGE CONTAINERS */}
        <View style={styles.percentageContainer}>
          <View style={styles.percentageElement}>
            <View style={styles.percentageInnerElement}>
              <Text style={styles.percentagePercentage}>94%</Text>
              <Text style={styles.percentageText}>
                Overall Schedule Efficiency
              </Text>
            </View>
          </View>
          <View style={styles.percentageElement}>
            <View style={styles.percentageInnerElement}>
              <Text style={styles.percentagePercentage}>11.3%</Text>
              <Text style={styles.percentageText}>
                Overall Profit {"\n"} Margin
              </Text>
            </View>
          </View>
        </View>

        {/* HOME ICON ELEMENTS */}
        <View style={styles.homeIconsContainer}>
          <View style={styles.homeIconElement}>
            <FontAwesome5
              name="boxes"
              size={0.08 * WIDTH}
              color="#4baa4c"
              style={styles.homeIconElementStyle}
            />
            <Text style={styles.homeIconElementText}>Inventory</Text>
          </View>
          <View style={styles.homeIconElement}>
            <FontAwesome5
              name="user-clock"
              size={0.08 * WIDTH}
              color="#4baa4c"
              style={styles.homeIconElementStyle}
            />
            <Text style={styles.homeIconElementText}>Attendance</Text>
          </View>
          <View style={styles.homeIconElement}>
            <FontAwesome5
              name="boxes"
              size={0.08 * WIDTH}
              color="#4baa4c"
              style={styles.homeIconElementStyle}
            />
            <Text style={styles.homeIconElementText}>Inventory</Text>
          </View>
        </View>

        {/* MONTHLY REPORT CONTAINER HORIZONTAL SCROLL */}
        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          styles={{ backgroundColor: "white" }}
          >
          {/* NEW REPORT ELEMENT */}
          <View style={styles.reportContainer}>
            <View style={styles.reportTitleContainer}>
              <Text style={styles.reportTitle}>JANUARY 2023</Text>
            </View>
            <View style={styles.reportInfoContainer}>
              <View style={styles.reportInfoBox}>
                <View style={styles.reportInfoElement}>
                  <View style={styles.reportTextNumContainer}>
                    <Text style={styles.reportTextNum}>65/124</Text>
                  </View>
                  <View style={styles.reportTextDescContainer}>
                    <Text style={styles.reportTextDesc}>Orders</Text>
                  </View>
                  <View style={styles.reportTextPercentageContainer}>
                    <View style={styles.reportTextPercentageBox}>
                      <Text style={[styles.reportTextPercentage,{color:'red'}]}>12%</Text>
                    </View>
                    <View style={styles.reportTextImageContainer}>
                      <FontAwesome5
                        name="caret-down"
                        size={0.06 * WIDTH}
                        color="red"
                        style={{paddingLeft:0.01*WIDTH}}
                      />
                    </View>
                  </View>
                </View>
                <View style={styles.reportInfoElement}>
                  <View style={styles.reportTextNumContainer}>
                    <Text style={styles.reportTextNum}>12</Text>
                  </View>
                  <View style={styles.reportTextDescContainer}>
                    <Text style={styles.reportTextDesc}>Delay</Text>
                  </View>
                  <View style={styles.reportTextPercentageContainer}>
                    <View style={styles.reportTextPercentageBox}>
                      <Text style={styles.reportTextPercentage}>8%</Text>
                    </View>
                    <View style={styles.reportTextImageContainer}>
                      <FontAwesome5
                        name="caret-up"
                        size={0.06 * WIDTH}
                        color="#14FF00"
                        style={{paddingLeft:0.01*WIDTH}}
                      />
                    </View>
                  </View>
                </View>
                <View style={styles.reportInfoElement}>
                  <View style={styles.reportTextNumContainer}>
                    <Text style={styles.reportTextNum}>1</Text>
                  </View>
                  <View style={styles.reportTextDescContainer}>
                    <Text style={styles.reportTextDesc}>No margin</Text>
                  </View>
                  <View style={styles.reportTextPercentageContainer}>
                    <View style={styles.reportTextPercentageBox}>
                      <Text style={styles.reportTextPercentage}>12%</Text>
                    </View>
                    <View style={styles.reportTextImageContainer}>
                      <FontAwesome5
                        name="caret-up"
                        size={0.06 * WIDTH}
                        color="#14FF00"
                        style={{paddingLeft:0.01*WIDTH}}
                      />
                    </View>
                  </View>
                </View>
              </View>
            </View>
          </View>

          {/* NEW REPORT ELEMENT */}
          <View style={styles.reportContainer}>
            <View style={styles.reportTitleContainer}>
              <Text style={styles.reportTitle}>JANUARY 2023</Text>
            </View>
            <View style={styles.reportInfoContainer}>
              <View style={styles.reportInfoBox}>
                <View style={styles.reportInfoElement}>
                  <View style={styles.reportTextNumContainer}>
                    <Text style={styles.reportTextNum}>65/124</Text>
                  </View>
                  <View style={styles.reportTextDescContainer}>
                    <Text style={styles.reportTextDesc}>Orders</Text>
                  </View>
                  <View style={styles.reportTextPercentageContainer}>
                    <View style={styles.reportTextPercentageBox}>
                      <Text style={[styles.reportTextPercentage,{color:'red'}]}>12%</Text>
                    </View>
                    <View style={styles.reportTextImageContainer}>
                      <FontAwesome5
                        name="caret-down"
                        size={0.06 * WIDTH}
                        color="red"
                        style={{paddingLeft:0.01*WIDTH}}
                      />
                    </View>
                  </View>
                </View>
                <View style={styles.reportInfoElement}>
                  <View style={styles.reportTextNumContainer}>
                    <Text style={styles.reportTextNum}>12</Text>
                  </View>
                  <View style={styles.reportTextDescContainer}>
                    <Text style={styles.reportTextDesc}>Delay</Text>
                  </View>
                  <View style={styles.reportTextPercentageContainer}>
                    <View style={styles.reportTextPercentageBox}>
                      <Text style={styles.reportTextPercentage}>8%</Text>
                    </View>
                    <View style={styles.reportTextImageContainer}>
                      <FontAwesome5
                        name="caret-up"
                        size={0.06 * WIDTH}
                        color="#14FF00"
                        style={{paddingLeft:0.01*WIDTH}}
                      />
                    </View>
                  </View>
                </View>
                <View style={styles.reportInfoElement}>
                  <View style={styles.reportTextNumContainer}>
                    <Text style={styles.reportTextNum}>1</Text>
                  </View>
                  <View style={styles.reportTextDescContainer}>
                    <Text style={styles.reportTextDesc}>No margin</Text>
                  </View>
                  <View style={styles.reportTextPercentageContainer}>
                    <View style={styles.reportTextPercentageBox}>
                      <Text style={styles.reportTextPercentage}>12%</Text>
                    </View>
                    <View style={styles.reportTextImageContainer}>
                      <FontAwesome5
                        name="caret-up"
                        size={0.06 * WIDTH}
                        color="#14FF00"
                        style={{paddingLeft:0.01*WIDTH}}
                      />
                    </View>
                  </View>
                </View>
              </View>
            </View>
          </View>

          {/* NEW REPORT ELEMENT */}
          <View style={styles.reportContainer}>
            <View style={styles.reportTitleContainer}>
              <Text style={styles.reportTitle}>JANUARY 2023</Text>
            </View>
            <View style={styles.reportInfoContainer}>
              <View style={styles.reportInfoBox}>
                <View style={styles.reportInfoElement}>
                  <View style={styles.reportTextNumContainer}>
                    <Text style={styles.reportTextNum}>65/124</Text>
                  </View>
                  <View style={styles.reportTextDescContainer}>
                    <Text style={styles.reportTextDesc}>Orders</Text>
                  </View>
                  <View style={styles.reportTextPercentageContainer}>
                    <View style={styles.reportTextPercentageBox}>
                      <Text style={[styles.reportTextPercentage,{color:'red'}]}>12%</Text>
                    </View>
                    <View style={styles.reportTextImageContainer}>
                      <FontAwesome5
                        name="caret-down"
                        size={0.06 * WIDTH}
                        color="red"
                        style={{paddingLeft:0.01*WIDTH}}
                      />
                    </View>
                  </View>
                </View>
                <View style={styles.reportInfoElement}>
                  <View style={styles.reportTextNumContainer}>
                    <Text style={styles.reportTextNum}>12</Text>
                  </View>
                  <View style={styles.reportTextDescContainer}>
                    <Text style={styles.reportTextDesc}>Delay</Text>
                  </View>
                  <View style={styles.reportTextPercentageContainer}>
                    <View style={styles.reportTextPercentageBox}>
                      <Text style={styles.reportTextPercentage}>8%</Text>
                    </View>
                    <View style={styles.reportTextImageContainer}>
                      <FontAwesome5
                        name="caret-up"
                        size={0.06 * WIDTH}
                        color="#14FF00"
                        style={{paddingLeft:0.01*WIDTH}}
                      />
                    </View>
                  </View>
                </View>
                <View style={styles.reportInfoElement}>
                  <View style={styles.reportTextNumContainer}>
                    <Text style={styles.reportTextNum}>1</Text>
                  </View>
                  <View style={styles.reportTextDescContainer}>
                    <Text style={styles.reportTextDesc}>No margin</Text>
                  </View>
                  <View style={styles.reportTextPercentageContainer}>
                    <View style={styles.reportTextPercentageBox}>
                      <Text style={styles.reportTextPercentage}>12%</Text>
                    </View>
                    <View style={styles.reportTextImageContainer}>
                      <FontAwesome5
                        name="caret-up"
                        size={0.06 * WIDTH}
                        color="#14FF00"
                        style={{paddingLeft:0.01*WIDTH}}
                      />
                    </View>
                  </View>
                </View>
              </View>
            </View>
          </View>
          
        </ScrollView>

        <View style={styles.separator} />
          
        {/* REVENUE CONTAINER */}
        <View style={styles.metricContainer}>
          <View style={styles.metricTitleBox}>
            <Text style={styles.metricTitleText}>REVENUE</Text>
          </View>
          <View style={styles.verticalSeparator}/>
          <View style={styles.metricNumContainer}>
            <View style={styles.metricNumBox}>
              <Text style={styles.metricNumText}>₹  50,32,561</Text>
            </View>
            <View style={styles.metricNumBox}>
              <Text style={styles.metricNumText}>₹  21,25,50,653</Text>
            </View>
          </View>
          <View style={styles.metricPercentageBox}>
            <View style={styles.reportTextPercentageContainer}>
              <View style={styles.reportTextPercentageBox}>
                <Text style={[styles.reportTextPercentage,{color:'red'}]}>12%</Text>
              </View>
              <View style={styles.reportTextImageContainer}>
                <FontAwesome5
                  name="caret-down"
                  size={0.06 * WIDTH}
                  color="red"
                    style={{paddingLeft:0.01*WIDTH}}
                />
              </View>
            </View>
            <View style={styles.reportTextPercentageContainer}>
              <View style={styles.reportTextPercentageBox}>
                <Text style={[styles.reportTextPercentage,{color:'red'}]}>12%</Text>
              </View>
              <View style={styles.reportTextImageContainer}>
                <FontAwesome5
                  name="caret-down"
                  size={0.06 * WIDTH}
                  color="red"
                    style={{paddingLeft:0.01*WIDTH}}
                />
              </View>
            </View>
          </View>
        </View>

        {/* PROFITS CONTAINER */}
        <View style={styles.metricContainer}>
          <View style={styles.metricTitleBox}>
            <Text style={styles.metricTitleText}>PROFITS</Text>
          </View>
          <View style={styles.verticalSeparator}/>
          <View style={styles.metricProfitsNumContainer}>
            <View style={styles.metricNumBox}>
              <Text style={styles.metricNumText}>₹  50,32,561</Text>
              <Text style={styles.metricProfitsNumPercentageText}>(7.25%)</Text>
            </View>
            <View style={styles.metricNumBox}>
              <Text style={styles.metricNumText}>₹  21,25,50,653</Text>
              <Text style={styles.metricProfitsNumPercentageText}>(7.25%)</Text>
            </View>
          </View>
          <View style={styles.metricPercentageBox}>
            <View style={styles.reportTextPercentageContainer}>
              <View style={styles.reportTextPercentageBox}>
                <Text style={[styles.reportTextPercentage,{color:'red'}]}>12%</Text>
              </View>
              <View style={styles.reportTextImageContainer}>
                <FontAwesome5
                  name="caret-down"
                  size={0.06 * WIDTH}
                  color="red"
                    style={{paddingLeft:0.01*WIDTH}}
                />
              </View>
            </View>
            <View style={styles.reportTextPercentageContainer}>
              <View style={styles.reportTextPercentageBox}>
                <Text style={[styles.reportTextPercentage,{color:'red'}]}>12%</Text>
              </View>
              <View style={styles.reportTextImageContainer}>
                <FontAwesome5
                  name="caret-down"
                  size={0.06 * WIDTH}
                  color="red"
                    style={{paddingLeft:0.01*WIDTH}}
                />
              </View>
            </View>
          </View>
        </View>

        {/* EFFICIENCY CONTAINER */}
        <View style={styles.metricContainer}>
          <View style={styles.metricTitleBox}>
            <Text style={styles.metricTitleText}>EFFICIENCY</Text>
          </View>
          <View style={styles.verticalSeparator}/>
          <View style={{flex:2.5, flexDirection:'row', justifyContent: 'center', alignItems: 'center',}}>
            <View style={{flex:1, flexDirection:'column', justifyContent: 'center', alignItems: 'center',}}>
              <View style={{flex:2, justifyContent:'flex-end', alignItems: 'center',}}>
                <Text style={styles.metricNumText}>82%</Text>
                {/* <Text style={styles.metricProfitsNumPercentageText}>PROFILING</Text> */}
              </View>
              <View style={{flex:2, justifyContent:'center', alignItems: 'center',}}>
                <Text style={styles.metricProfitsNumPercentageText}>PROFILING</Text>
              </View>
              <View style={styles.reportTextPercentageContainer}>
                 <View style={styles.reportTextPercentageBox}>
                   <Text style={[styles.reportTextPercentage,{color:'red'}]}>12%</Text>
                </View>
                <View style={styles.reportTextImageContainer}>
                  <FontAwesome5
                     name="caret-down"
                    size={0.06 * WIDTH}
                     color="red"
                     style={{paddingLeft:0.01*WIDTH}}
                  />
                 </View>
                </View>
            </View>
            <View style={{flex:1, flexDirection:'column', justifyContent: 'center', alignItems: 'center',}}>
              <View style={{flex:2, justifyContent:'flex-end', alignItems: 'center',}}>
                <Text style={styles.metricNumText}>82%</Text>
                {/* <Text style={styles.metricProfitsNumPercentageText}>PROFILING</Text> */}
              </View>
              <View style={{flex:2, justifyContent:'center', alignItems: 'center',}}>
                <Text style={styles.metricProfitsNumPercentageText}>PROFILING</Text>
              </View>
              <View style={styles.reportTextPercentageContainer}>
                 <View style={styles.reportTextPercentageBox}>
                   <Text style={[styles.reportTextPercentage,{color:'red'}]}>12%</Text>
                </View>
                <View style={styles.reportTextImageContainer}>
                  <FontAwesome5
                     name="caret-down"
                    size={0.06 * WIDTH}
                     color="red"
                     style={{paddingLeft:0.01*WIDTH}}
                  />
                 </View>
                </View>
            </View>
            <View style={{flex:1, flexDirection:'column', justifyContent: 'center', alignItems: 'center',}}>
              <View style={{flex:2, justifyContent:'flex-end', alignItems: 'center',}}>
                <Text style={styles.metricNumText}>82%</Text>
                {/* <Text style={styles.metricProfitsNumPercentageText}>PROFILING</Text> */}
              </View>
              <View style={{flex:2, justifyContent:'center', alignItems: 'center',}}>
                <Text style={styles.metricProfitsNumPercentageText}>PROFILING</Text>
              </View>
              <View style={styles.reportTextPercentageContainer}>
                 <View style={styles.reportTextPercentageBox}>
                   <Text style={[styles.reportTextPercentage,{color:'red'}]}>12%</Text>
                </View>
                <View style={styles.reportTextImageContainer}>
                  <FontAwesome5
                     name="caret-down"
                    size={0.06 * WIDTH}
                     color="red"
                     style={{paddingLeft:0.01*WIDTH}}
                  />
                 </View>
                </View>
            </View>
          </View>
        </View>

        {/* <Button title="Check" onPress={fetchData}></Button>

        {loading === true ? <Text>Loading... </Text> : <Text> {data} </Text>}

        <Button
          title="Get Tokens"
          onPress={async () => {
            const data = await AsyncStorage.getAllKeys();
            console.log(data);
            alert(data);
          }}
        ></Button>

        <Button
          title="Kill Tokens"
          onPress={async () => {
            await AsyncStorage.multiRemove(["access_token", "refresh_token"]);
            console.log("Killed Tokens");
            alert("Killed Tokens");
          }}
        ></Button> */}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  metricProfitsNumPercentageText: {
    fontSize:0.03*WIDTH, color:'gray', fontWeight:'bold'
  },
  metricProfitsNumContainer: {
    flex:1.5, flexDirection:'column', justifyContent: 'center', alignItems: 'center'
  },
  metricPercentageBox: {
    flex:1, flexDirection:'column', justifyContent: 'center', alignItems: 'center'
  },
  metricNumText: {
    fontSize:0.043*WIDTH, color:'#4baa4c', fontWeight:'bold'
  },
  metricNumBox: {
    flex:1, justifyContent: 'center', alignItems: 'center',
  },
  metricNumContainer: {
    flex:1.5, flexDirection:'column', justifyContent: 'center', alignItems: 'center'
  },
  metricTitleText: {
    color:'#fff', fontSize:0.037*WIDTH, fontWeight:'bold', letterSpacing:1.5
  },
  metricTitleBox: {
    flex:1, backgroundColor:'#4baa4c', justifyContent: 'center', alignItems:'center', borderTopLeftRadius:23, borderBottomLeftRadius:23
  },
  metricContainer: {
    flex:1, flexDirection:'row',backgroundColor:'#fff', margin:0.035*WIDTH, 
    marginTop:0.01*WIDTH, borderRadius:25, borderWidth:1, borderColor:'#4baa4c'
  },
  homeIconElementText: {
    flex:1, marginTop:0.02*WIDTH, fontSize:0.035*WIDTH
  },
  homeIconElementStyle: {
    flex:1, padding:0.02*WIDTH, borderWidth:1.5, borderColor:'#4baa4c', borderRadius:15, backgroundColor:'#fff'
  },
  homeIconElement: {
    flex:1, flexDirection:'column', justifyContent: 'center', alignItems: 'center'
  },
  homeIconsContainer: {
    flex:1, flexDirection:'row', justifyContent: 'center', alignItems: 'center', 
    margin:0.035*WIDTH, backgroundColor:'#fff', borderRadius:25, padding:0.04*WIDTH,
  },
  deptTextDesc: {
    color: "white",
    fontSize: normalize(11.5),
    marginTop: 0.009 * HEIGHT,
  },
  deptTextPercentage: {
    color: "white",
    fontSize: normalize(20),
    fontWeight: "bold",
  },
  deptTextPercentageContainer: {
    flex: 2,
    height: "85%",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 0.008 * HEIGHT,
  },
  verticalSeparator: {
    height: 0.11 * HEIGHT,
    backgroundColor: "white",
    width: 0.002 * WIDTH,
  },
  deptTitle: {
    color: "white",
    fontSize: normalize(12),
    fontWeight: "500",
  },
  deptTitleContainer: {
    flex: 1.25,
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 0.01 * HEIGHT,
    marginRight: 0.01 * HEIGHT,
  },
  deptContainer: {
    height: 0.11 * HEIGHT,
    marginBottom: 0.005 * HEIGHT,
    marginLeft: 0.01 * HEIGHT,
    marginRight: 0.01 * HEIGHT,
    flexDirection: "row",
    flex: 1,
    backgroundColor: "#4BAA4C",
    borderRadius: 25,
    shadowColor: "black",
    borderWidth: 1,
    borderColor: "#d9d9d9",
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    elevation: 8,
  },
  separator: {
    height: 0.002 * WIDTH,
    backgroundColor: "grey",
    width: 1 * WIDTH,
    marginTop: 0.05 * WIDTH,
    marginBottom: 0.06 * WIDTH,
  },
  reportTextImageContainer: {
    flex:1, justifyContent: 'center' ,alignItems: 'flex-start',
  },
  reportTextPercentage: {
    color:'#14FF00', fontWeight:'bold', fontSize:0.038*WIDTH
  },
  reportTextPercentageBox: {
    flex:1.2, justifyContent: 'center', alignItems: 'flex-end',
  },
  reportTextPercentageContainer: {
    flex:2, flexDirection:'row', justifyContent: 'center', alignItems:'center'
  },
  reportTextDesc: {
    color: "#515151", fontSize: normalize(11.5), textAlign: "center"
  },
  reportTextDescContainer: {
    flex:1, justifyContent: 'center', alignItems:'center', paddingBottom:0.01*WIDTH
  },
  reportTextNum: {
    color: "#4baa4c",
    fontSize: normalize(18),
    fontWeight: "bold",
  },
  reportTextNumContainer: {
    flex:2, justifyContent: 'flex-end', alignItems:'center'
  },
  reportInfoElement: {
    flex:1, flexDirection:'column'
  },
  reportInfoBox: {
    flex:1, flexDirection:'row'
  },
  reportInfoContainer: {
    flexDirection: "row", flex: 1, marginBottom:0.03*WIDTH, marginTop: 0.01*WIDTH
  },
  reportTextContainer: {
    flex: 1,
    marginLeft: 0.01 * WIDTH,
    marginRight: 0.01 * WIDTH,
    height: 0.105 * HEIGHT,
    justifyContent: "center",
    alignItems: "center",
  },
  reportTitle: {
    color: "#4baa4c",
    fontSize: normalize(16),
    fontWeight: "bold",
    paddingBottom:0.02*WIDTH
  },
  reportTitleContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 0.03 * WIDTH,
    paddingLeft: 0.01 * WIDTH,
    paddingRight: 0.01 * WIDTH,
  },
  reportContainer: {
    height: 0.35 * WIDTH,
    width: 0.88 * WIDTH,
    margin: 0.025 * WIDTH,
    marginTop: 0,
    paddingLeft: 0.02 * WIDTH,
    paddingRight: 0.02 * WIDTH,
    borderRadius: 25,
    backgroundColor: "white",
    ...Platform.select({
      ios: {
        shadowColor: "rgba(0, 0, 0, 0.2)",
        shadowOpacity: 0.8,
        shadowRadius: 4,
        shadowOffset: {
          height: 2,
          width: 0,
        },
      },
      android: {
        elevation: 6,
      },
    }),
  },
  percentageText: {
    fontSize: normalize(13),
    textAlign: "center",
  },
  percentagePercentage: {
    fontWeight: "bold",
    fontSize: normalize(30),
  },
  percentageInnerElement: {
    backgroundColor: "white",
    borderRadius: 25,
    height: "93%",
    width: "93%",
    justifyContent: "center",
    alignItems: "center",
  },
  percentageElement: {
    flex: 1,
    borderRadius: 25,
    backgroundColor: "#4BAA4C",
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 0.015 * HEIGHT,
    marginRight: 0.015 * HEIGHT,
    height: 0.12 * HEIGHT,
  },
  percentageContainer: {
    margin: 0.015 * HEIGHT,
    marginBottom: 0.005 * HEIGHT,
    height: 0.15 * HEIGHT,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 0,
  },
  announcementBodyElementText: {
    margin: 0.02 * HEIGHT,
    marginBottom: 0,
    marginTop: 0.01 * HEIGHT,
    fontSize: normalize(11.5),
    flex: 25,
  },
  announcementBodyElementIcon: {
    marginLeft: "1%",
    flex: 1,
    marginTop: 0.01 * HEIGHT,
    marginLeft: 0.02 * HEIGHT,
  },
  announcementBodyElement: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  announcementBodyContainer: {
    paddingBottom: 0.03 * HEIGHT,
  },
  announcementTitle: {
    fontWeight: "bold",
    fontSize: normalize(17),
    letterSpacing: 0.5,
  },
  announcementTitleContainer: {
    justifyContent: "center",
    alignItems: "center",
    height: 0.05 * HEIGHT,
  },
  announcementContainer: {
    backgroundColor: "#fff",
    height: 0.2 * HEIGHT,
    borderRadius: 25,
    padding: 0.003 * HEIGHT,
    margin: 0.01 * HEIGHT,
    marginBottom: 0.01 * HEIGHT,
    shadowColor: "black",
    borderWidth: 1,
    borderColor: "#d9d9d9",
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    elevation: 8,
  },
  headerBody: {
    fontWeight: "400",
    color: "white",
    fontSize: normalize(13),
    paddingTop: 0.01 * HEIGHT,
    paddingBottom: 0.02 * HEIGHT,
    letterSpacing: 0.5,
  },
  headerTitle: {
    fontWeight: "bold",
    color: "white",
    fontSize: normalize(25),
    letterSpacing: 1,
  },
  headerContainer: {
    backgroundColor: "#4BAA4C",
    height: 0.105 * HEIGHT,
    borderBottomLeftRadius: 35,
    borderBottomRightRadius: 35,
  },
  lottie: {
    width: 100,
    height: 100,
  },
});

export default Auth;

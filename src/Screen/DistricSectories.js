import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  TouchableOpacity,
  Image,
  ScrollView,
  FlatList,
  Dimensions,
  Modal,
  ActivityIndicator,
  RefreshControl,
  Linking,
} from 'react-native'
import React, { useState, useEffect, memo } from 'react'
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize
} from "react-native-responsive-dimensions";
import Back from 'react-native-vector-icons/Ionicons';
import Usernameicon from 'react-native-vector-icons/FontAwesome';
import Location from 'react-native-vector-icons/Entypo';
import MobileIcon from 'react-native-vector-icons/AntDesign';
import CallingIcon from 'react-native-vector-icons/Feather';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
const devicewidth = Dimensions.get('window').width
const DistricSectories = () => {
  const [statusBarStyle, setStatusBarStyle] = useState();
  const navigation = useNavigation();
  const [load, setload] = useState(false);
  const [memberdetails, setmemberdetails] = useState();
  const [refreshing, setRefreshing] = useState(false);

  const dialCall = (mobile) => {
    console.log(mobile);
    Linking.openURL(`tel:${mobile}`);
  };
  return (
    <View style={{
      flex: 1,
      backgroundColor: "#fff",
      //  backgroundColor: "#fff" 
    }}>
      <StatusBar
        animated={true}
        backgroundColor="#000"
        barStyle={statusBarStyle}
      />

      <View
        style={{
          flexDirection: 'row',
          //  paddingHorizontal: 10,
          paddingVertical: 8,
          alignItems: 'center',
          backgroundColor: "#000",
          elevation: 1,
          position: 'relative',
          zIndex: 20,
          justifyContent: "space-between",
          height: 50
        }}>
        <View style={{ flexDirection: 'row', justifyContent: "center", }}>

          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={{ justifyContent: "center", paddingLeft: responsiveWidth(1), marginTop: 2 }}>
            <TouchableOpacity
              style={{ borderRadius: 20, justifyContent: "center", textAlign: "center", paddingHorizontal: 5, paddingVertical: 5 }}
              onPress={() => navigation.goBack()}
            // navigation.goBack()
            >
              <Back
                name="chevron-back-outline"
                style={{ fontSize: responsiveFontSize(2.5), color: "#4e8ef9", textAlign: "center", justifyContent: "center", color: "#fff" }}
              />
            </TouchableOpacity>
          </TouchableOpacity>

          <View style={{ justifyContent: "center", }}>
            <Text
              style={{
                fontSize: responsiveFontSize(2.1),
                color: "#fff",
                fontWeight: '400',
                alignItems: "center"
              }}>
              Our District Secretaries
            </Text>
          </View>
        </View>
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
      >

        <View style={{ marginHorizontal: 8, marginTop: 2 }}>
          <View style={{ width: "100%", backgroundColor: "#c5c5c5", height: 140, borderRadius: 8 }}>

            <View style={{
              backgroundColor: "#797979",
              flexDirection: "row",
              alignItems: "center",
              paddingHorizontal: 5,
              paddingVertical: 5,
              width: "100%",
            }}>
              <View style={{}}>
                <Usernameicon name="user" style={{
                  backgroundColor: "#fff",
                  paddingHorizontal: 5,
                  borderRadius: 70,
                  color: "#636363",
                  paddingVertical: 4

                }} />
              </View>
              <Text style={{ color: "#fff", paddingLeft: 8, fontSize: responsiveFontSize(1.9), fontWeight: "700" }}>
                Dulal Chandra Deka
              </Text>
            </View>

            <View style={{ marginTop: 2, marginHorizontal: 5 }}>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Location
                  name="location"
                  style={{ backgroundColor: "#797979", padding: 5, borderRadius: 70, color: "#fff", fontSize: responsiveFontSize(1.5) }} />
                <Text style={{ paddingLeft: 5, color: "#000", fontSize: responsiveFontSize(1.8), fontWeight: "500" }}>
                  Name of District/Block
                </Text>
              </View>
              <View style={{ marginLeft: 25 }}>
                <Text style={{ color: "#000", fontSize: responsiveFontSize(1.8), }}>
                  Sipajhar
                </Text>
              </View>

            </View>

            <View style={{ marginTop: 5, marginHorizontal: 5 }}>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <MobileIcon
                  name="mobile1"
                  style={{ backgroundColor: "#797979", padding: 5, borderRadius: 70, color: "#fff", fontSize: responsiveFontSize(1.5) }} />
                <Text style={{ paddingLeft: 5, color: "#000", fontSize: responsiveFontSize(1.8), fontWeight: "500" }}>
                  Phone No.
                </Text>
              </View>

              <View style={{ marginLeft: 25, flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                <View>
                  <Text style={{ color: "#000", fontSize: responsiveFontSize(1.8), }}>
                    6002274423
                  </Text>
                </View>

                <TouchableOpacity
                  style={{ backgroundColor: "#c9c9c9", alignItems: "center", padding: 5, borderRadius: 60, elevation: 5 }}
                  onPress={() => dialCall(6002274423)}
                >
                  <CallingIcon
                    style={{ color: "#000", fontSize: responsiveFontSize(2), }}
                    name="phone-call" />
                </TouchableOpacity>
              </View>


            </View>

          </View>
        </View>

        <View style={{ marginHorizontal: 8, marginTop: 5 }}>
          <View style={{ width: "100%", backgroundColor: "#c5c5c5", height: 140, borderRadius: 8 }}>

            <View style={{
              backgroundColor: "#797979",
              flexDirection: "row",
              alignItems: "center",
              paddingHorizontal: 5,
              paddingVertical: 5,
              width: "100%",
            }}>
              <View style={{}}>
                <Usernameicon name="user" style={{
                  backgroundColor: "#fff",
                  paddingHorizontal: 5,
                  borderRadius: 70,
                  color: "#636363",
                  paddingVertical: 4

                }} />
              </View>
              <Text style={{ color: "#fff", paddingLeft: 8, fontSize: responsiveFontSize(1.9), fontWeight: "700" }}>
                Bhupen Talukdar
              </Text>
            </View>

            <View style={{ marginTop: 2, marginHorizontal: 5 }}>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Location
                  name="location"
                  style={{ backgroundColor: "#797979", padding: 5, borderRadius: 70, color: "#fff", fontSize: responsiveFontSize(1.5) }} />
                <Text style={{ paddingLeft: 5, color: "#000", fontSize: responsiveFontSize(1.8), fontWeight: "500" }}>
                  Name of District/Block
                </Text>
              </View>
              <View style={{ marginLeft: 25 }}>
                <Text style={{ color: "#000", fontSize: responsiveFontSize(1.8), }}>
                  Raha
                </Text>
              </View>

            </View>

            <View style={{ marginTop: 5, marginHorizontal: 5 }}>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <MobileIcon
                  name="mobile1"
                  style={{ backgroundColor: "#797979", padding: 5, borderRadius: 70, color: "#fff", fontSize: responsiveFontSize(1.5) }} />
                <Text style={{ paddingLeft: 5, color: "#000", fontSize: responsiveFontSize(1.8), fontWeight: "500" }}>
                  Phone No.
                </Text>
              </View>
              <View style={{ marginLeft: 25, flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                <View>
                  <Text style={{ color: "#000", fontSize: responsiveFontSize(1.8), }}>
                    7635880442
                  </Text>
                </View>

                <TouchableOpacity
                  style={{ backgroundColor: "#c9c9c9", alignItems: "center", padding: 5, borderRadius: 60, elevation: 5 }}
                  onPress={() => dialCall(7635880442)}
                >
                  <CallingIcon
                    style={{ color: "#000", fontSize: responsiveFontSize(2), }}
                    name="phone-call" />
                </TouchableOpacity>
              </View>

            </View>

          </View>
        </View>

        <View style={{ marginHorizontal: 8, marginTop: 5 }}>
          <View style={{ width: "100%", backgroundColor: "#c5c5c5", height: 140, borderRadius: 8 }}>

            <View style={{
              backgroundColor: "#797979",
              flexDirection: "row",
              alignItems: "center",
              paddingHorizontal: 5,
              paddingVertical: 5,
              width: "100%",
            }}>
              <View style={{}}>
                <Usernameicon name="user" style={{
                  backgroundColor: "#fff",
                  paddingHorizontal: 5,
                  borderRadius: 70,
                  color: "#636363",
                  paddingVertical: 4

                }} />
              </View>
              <Text style={{ color: "#fff", paddingLeft: 8, fontSize: responsiveFontSize(1.9), fontWeight: "700" }}>
                Alam Baharul Islam
              </Text>
            </View>

            <View style={{ marginTop: 2, marginHorizontal: 5 }}>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Location
                  name="location"
                  style={{ backgroundColor: "#797979", padding: 5, borderRadius: 70, color: "#fff", fontSize: responsiveFontSize(1.5) }} />
                <Text style={{ paddingLeft: 5, color: "#000", fontSize: responsiveFontSize(1.8), fontWeight: "500" }}>
                  Name of District/Block
                </Text>
              </View>
              <View style={{ marginLeft: 25 }}>
                <Text style={{ color: "#000", fontSize: responsiveFontSize(1.8), }}>
                  Mairabari
                </Text>
              </View>

            </View>

            <View style={{ marginTop: 5, marginHorizontal: 5 }}>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <MobileIcon
                  name="mobile1"
                  style={{ backgroundColor: "#797979", padding: 5, borderRadius: 70, color: "#fff", fontSize: responsiveFontSize(1.5) }} />
                <Text style={{ paddingLeft: 5, color: "#000", fontSize: responsiveFontSize(1.8), fontWeight: "500" }}>
                  Phone No.
                </Text>
              </View>

              <View style={{ marginLeft: 25, flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                <View>
                  <Text style={{ color: "#000", fontSize: responsiveFontSize(1.8), }}>
                    7663939622 / 9365098781
                  </Text>
                </View>

                <TouchableOpacity
                  style={{ backgroundColor: "#c9c9c9", alignItems: "center", padding: 5, borderRadius: 60, elevation: 5 }}
                  onPress={() => dialCall(7663939622)}
                >
                  <CallingIcon
                    style={{ color: "#000", fontSize: responsiveFontSize(2), }}
                    name="phone-call" />
                </TouchableOpacity>
              </View>



            </View>

          </View>
        </View>

        <View style={{ marginHorizontal: 8, marginTop: 5 }}>
          <View style={{ width: "100%", backgroundColor: "#c5c5c5", height: 140, borderRadius: 8 }}>

            <View style={{
              backgroundColor: "#797979",
              flexDirection: "row",
              alignItems: "center",
              paddingHorizontal: 5,
              paddingVertical: 5,
              width: "100%",
            }}>
              <View style={{}}>
                <Usernameicon name="user" style={{
                  backgroundColor: "#fff",
                  paddingHorizontal: 5,
                  borderRadius: 70,
                  color: "#636363",
                  paddingVertical: 4

                }} />
              </View>
              <Text style={{ color: "#fff", paddingLeft: 8, fontSize: responsiveFontSize(1.9), fontWeight: "700" }}>
                Harun Al Rashid
              </Text>
            </View>

            <View style={{ marginTop: 2, marginHorizontal: 5 }}>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Location
                  name="location"
                  style={{ backgroundColor: "#797979", padding: 5, borderRadius: 70, color: "#fff", fontSize: responsiveFontSize(1.5) }} />
                <Text style={{ paddingLeft: 5, color: "#000", fontSize: responsiveFontSize(1.8), fontWeight: "500" }}>
                  Name of District/Block
                </Text>
              </View>
              <View style={{ marginLeft: 25 }}>
                <Text style={{ color: "#000", fontSize: responsiveFontSize(1.8), }}>
                  Laharighat
                </Text>
              </View>

            </View>

            <View style={{ marginTop: 5, marginHorizontal: 5 }}>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <MobileIcon
                  name="mobile1"
                  style={{ backgroundColor: "#797979", padding: 5, borderRadius: 70, color: "#fff", fontSize: responsiveFontSize(1.5) }} />
                <Text style={{ paddingLeft: 5, color: "#000", fontSize: responsiveFontSize(1.8), fontWeight: "500" }}>
                  Phone No.
                </Text>
              </View>

              <View style={{ marginLeft: 25, flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                <View>
                  <Text style={{ color: "#000", fontSize: responsiveFontSize(1.8), }}>
                    7002467240
                  </Text>
                </View>

                <TouchableOpacity
                  style={{ backgroundColor: "#c9c9c9", alignItems: "center", padding: 5, borderRadius: 60, elevation: 5 }}
                  onPress={() => dialCall(7002467240)}
                >
                  <CallingIcon
                    style={{ color: "#000", fontSize: responsiveFontSize(2), }}
                    name="phone-call" />
                </TouchableOpacity>
              </View>
              {/* <View style={{ marginLeft: 25 }}>
                <Text style={{ color: "#000", fontSize: responsiveFontSize(1.8), }}>
                  7635880442
                </Text>
              </View> */}

            </View>

          </View>
        </View>

        <View style={{ marginHorizontal: 8, marginTop: 5 }}>
          <View style={{ width: "100%", backgroundColor: "#c5c5c5", height: 140, borderRadius: 8 }}>

            <View style={{
              backgroundColor: "#797979",
              flexDirection: "row",
              alignItems: "center",
              paddingHorizontal: 5,
              paddingVertical: 5,
              width: "100%",
            }}>
              <View style={{}}>
                <Usernameicon name="user" style={{
                  backgroundColor: "#fff",
                  paddingHorizontal: 5,
                  borderRadius: 70,
                  color: "#636363",
                  paddingVertical: 4

                }} />
              </View>
              <Text style={{ color: "#fff", paddingLeft: 8, fontSize: responsiveFontSize(1.9), fontWeight: "700" }}>
                not available
              </Text>
            </View>

            <View style={{ marginTop: 2, marginHorizontal: 5 }}>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Location
                  name="location"
                  style={{ backgroundColor: "#797979", padding: 5, borderRadius: 70, color: "#fff", fontSize: responsiveFontSize(1.5) }} />
                <Text style={{ paddingLeft: 5, color: "#000", fontSize: responsiveFontSize(1.8), fontWeight: "500" }}>
                  Name of District/Block
                </Text>
              </View>
              <View style={{ marginLeft: 25 }}>
                <Text style={{ color: "#000", fontSize: responsiveFontSize(1.8), }}>
                  Lahowal
                </Text>
              </View>

            </View>

            <View style={{ marginTop: 5, marginHorizontal: 5 }}>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <MobileIcon
                  name="mobile1"
                  style={{ backgroundColor: "#797979", padding: 5, borderRadius: 70, color: "#fff", fontSize: responsiveFontSize(1.5) }} />
                <Text style={{ paddingLeft: 5, color: "#000", fontSize: responsiveFontSize(1.8), fontWeight: "500" }}>
                  Phone No.
                </Text>
              </View>
              <View style={{ marginLeft: 25 }}>
                <Text style={{ color: "#000", fontSize: responsiveFontSize(1.8), }}>
                  not available
                </Text>
              </View>

            </View>

          </View>
        </View>


        <View style={{ marginHorizontal: 8, marginTop: 5 }}>
          <View style={{ width: "100%", backgroundColor: "#c5c5c5", height: 140, borderRadius: 8 }}>

            <View style={{
              backgroundColor: "#797979",
              flexDirection: "row",
              alignItems: "center",
              paddingHorizontal: 5,
              paddingVertical: 5,
              width: "100%",
            }}>
              <View style={{}}>
                <Usernameicon name="user" style={{
                  backgroundColor: "#fff",
                  paddingHorizontal: 5,
                  borderRadius: 70,
                  color: "#636363",
                  paddingVertical: 4

                }} />
              </View>
              <Text style={{ color: "#fff", paddingLeft: 8, fontSize: responsiveFontSize(1.9), fontWeight: "700" }}>
                not available
              </Text>
            </View>

            <View style={{ marginTop: 2, marginHorizontal: 5 }}>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Location
                  name="location"
                  style={{ backgroundColor: "#797979", padding: 5, borderRadius: 70, color: "#fff", fontSize: responsiveFontSize(1.5) }} />
                <Text style={{ paddingLeft: 5, color: "#000", fontSize: responsiveFontSize(1.8), fontWeight: "500" }}>
                  Name of District/Block
                </Text>
              </View>
              <View style={{ marginLeft: 25 }}>
                <Text style={{ color: "#000", fontSize: responsiveFontSize(1.8), }}>
                  Dhemaji
                </Text>
              </View>

            </View>

            <View style={{ marginTop: 5, marginHorizontal: 5 }}>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <MobileIcon
                  name="mobile1"
                  style={{ backgroundColor: "#797979", padding: 5, borderRadius: 70, color: "#fff", fontSize: responsiveFontSize(1.5) }} />
                <Text style={{ paddingLeft: 5, color: "#000", fontSize: responsiveFontSize(1.8), fontWeight: "500" }}>
                  Phone No.
                </Text>
              </View>
              <View style={{ marginLeft: 25 }}>
                <Text style={{ color: "#000", fontSize: responsiveFontSize(1.8), }}>
                  not available
                </Text>
              </View>

            </View>

          </View>
        </View>

        <View style={{ marginHorizontal: 8, marginTop: 5 }}>
          <View style={{ width: "100%", backgroundColor: "#c5c5c5", height: 140, borderRadius: 8 }}>

            <View style={{
              backgroundColor: "#797979",
              flexDirection: "row",
              alignItems: "center",
              paddingHorizontal: 5,
              paddingVertical: 5,
              width: "100%",
            }}>
              <View style={{}}>
                <Usernameicon name="user" style={{
                  backgroundColor: "#fff",
                  paddingHorizontal: 5,
                  borderRadius: 70,
                  color: "#636363",
                  paddingVertical: 4

                }} />
              </View>
              <Text style={{ color: "#fff", paddingLeft: 8, fontSize: responsiveFontSize(1.9), fontWeight: "700" }}>
                Mojammil
              </Text>
            </View>

            <View style={{ marginTop: 2, marginHorizontal: 5 }}>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Location
                  name="location"
                  style={{ backgroundColor: "#797979", padding: 5, borderRadius: 70, color: "#fff", fontSize: responsiveFontSize(1.5) }} />
                <Text style={{ paddingLeft: 5, color: "#000", fontSize: responsiveFontSize(1.8), fontWeight: "500" }}>
                  Name of District/Block
                </Text>
              </View>
              <View style={{ marginLeft: 25 }}>
                <Text style={{ color: "#000", fontSize: responsiveFontSize(1.8), }}>
                  Gowalpara
                </Text>
              </View>

            </View>

            <View style={{ marginTop: 5, marginHorizontal: 5 }}>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <MobileIcon
                  name="mobile1"
                  style={{ backgroundColor: "#797979", padding: 5, borderRadius: 70, color: "#fff", fontSize: responsiveFontSize(1.5) }} />
                <Text style={{ paddingLeft: 5, color: "#000", fontSize: responsiveFontSize(1.8), fontWeight: "500" }}>
                  Phone No.
                </Text>
              </View>

              <View style={{ marginLeft: 25, flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                <View>
                  <Text style={{ color: "#000", fontSize: responsiveFontSize(1.8), }}>
                    7002166244
                  </Text>
                </View>

                <TouchableOpacity
                  style={{ backgroundColor: "#c9c9c9", alignItems: "center", padding: 5, borderRadius: 60, elevation: 5 }}
                  onPress={() => dialCall(7002166244)}
                >
                  <CallingIcon
                    style={{ color: "#000", fontSize: responsiveFontSize(2), }}
                    name="phone-call" />
                </TouchableOpacity>
              </View>


            </View>

          </View>
        </View>


        <View style={{ marginHorizontal: 8, marginTop: 5 }}>
          <View style={{ width: "100%", backgroundColor: "#c5c5c5", height: 140, borderRadius: 8 }}>

            <View style={{
              backgroundColor: "#797979",
              flexDirection: "row",
              alignItems: "center",
              paddingHorizontal: 5,
              paddingVertical: 5,
              width: "100%",
            }}>
              <View style={{}}>
                <Usernameicon name="user" style={{
                  backgroundColor: "#fff",
                  paddingHorizontal: 5,
                  borderRadius: 70,
                  color: "#636363",
                  paddingVertical: 4

                }} />
              </View>
              <Text style={{ color: "#fff", paddingLeft: 8, fontSize: responsiveFontSize(1.9), fontWeight: "700" }}>
                Gopi Nath Das
              </Text>
            </View>

            <View style={{ marginTop: 2, marginHorizontal: 5 }}>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Location
                  name="location"
                  style={{ backgroundColor: "#797979", padding: 5, borderRadius: 70, color: "#fff", fontSize: responsiveFontSize(1.5) }} />
                <Text style={{ paddingLeft: 5, color: "#000", fontSize: responsiveFontSize(1.8), fontWeight: "500" }}>
                  Name of District/Block
                </Text>
              </View>
              <View style={{ marginLeft: 25 }}>
                <Text style={{ color: "#000", fontSize: responsiveFontSize(1.8), }}>
                  Barpeta
                </Text>
              </View>

            </View>

            <View style={{ marginTop: 5, marginHorizontal: 5 }}>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <MobileIcon
                  name="mobile1"
                  style={{ backgroundColor: "#797979", padding: 5, borderRadius: 70, color: "#fff", fontSize: responsiveFontSize(1.5) }} />
                <Text style={{ paddingLeft: 5, color: "#000", fontSize: responsiveFontSize(1.8), fontWeight: "500" }}>
                  Phone No.
                </Text>
              </View>

              <View style={{ marginLeft: 25, flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                <View>
                  <Text style={{ color: "#000", fontSize: responsiveFontSize(1.8), }}>
                    9435321073
                  </Text>
                </View>

                <TouchableOpacity
                  style={{ backgroundColor: "#c9c9c9", alignItems: "center", padding: 5, borderRadius: 60, elevation: 5 }}
                  onPress={() => dialCall(9435321073)}
                >
                  <CallingIcon
                    style={{ color: "#000", fontSize: responsiveFontSize(2), }}
                    name="phone-call" />
                </TouchableOpacity>
              </View>

            </View>

          </View>
        </View>

        <View style={{ marginHorizontal: 8, marginTop: 5 }}>
          <View style={{ width: "100%", backgroundColor: "#c5c5c5", height: 140, borderRadius: 8 }}>

            <View style={{
              backgroundColor: "#797979",
              flexDirection: "row",
              alignItems: "center",
              paddingHorizontal: 5,
              paddingVertical: 5,
              width: "100%",
            }}>
              <View style={{}}>
                <Usernameicon name="user" style={{
                  backgroundColor: "#fff",
                  paddingHorizontal: 5,
                  borderRadius: 70,
                  color: "#636363",
                  paddingVertical: 4

                }} />
              </View>
              <Text style={{ color: "#fff", paddingLeft: 8, fontSize: responsiveFontSize(1.9), fontWeight: "700" }}>
                Prasanna Kumar Kalita
              </Text>
            </View>

            <View style={{ marginTop: 2, marginHorizontal: 5 }}>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Location
                  name="location"
                  style={{ backgroundColor: "#797979", padding: 5, borderRadius: 70, color: "#fff", fontSize: responsiveFontSize(1.5) }} />
                <Text style={{ paddingLeft: 5, color: "#000", fontSize: responsiveFontSize(1.8), fontWeight: "500" }}>
                  Name of District/Block
                </Text>
              </View>
              <View style={{ marginLeft: 25 }}>
                <Text style={{ color: "#000", fontSize: responsiveFontSize(1.8), }}>
                  Kamrup(M)
                </Text>
              </View>

            </View>

            <View style={{ marginTop: 5, marginHorizontal: 5 }}>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <MobileIcon
                  name="mobile1"
                  style={{ backgroundColor: "#797979", padding: 5, borderRadius: 70, color: "#fff", fontSize: responsiveFontSize(1.5) }} />
                <Text style={{ paddingLeft: 5, color: "#000", fontSize: responsiveFontSize(1.8), fontWeight: "500" }}>
                  Phone No.
                </Text>
              </View>
              {/* <View style={{ marginLeft: 25 }}>
                <Text style={{ color: "#000", fontSize: responsiveFontSize(1.8), }}>
                  9864277742 / 7002895077
                </Text>
              </View> */}

              <View style={{ marginLeft: 25, flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                <View>
                  <Text style={{ color: "#000", fontSize: responsiveFontSize(1.8), }}>
                    9864277742 / 7002895077
                  </Text>
                </View>

                <TouchableOpacity
                  style={{ backgroundColor: "#c9c9c9", alignItems: "center", padding: 5, borderRadius: 60, elevation: 5 }}
                  onPress={() => dialCall(9864277742)}
                >
                  <CallingIcon
                    style={{ color: "#000", fontSize: responsiveFontSize(2), }}
                    name="phone-call" />
                </TouchableOpacity>
              </View>

            </View>

          </View>
        </View>

        <View style={{ marginHorizontal: 8, marginTop: 5 }}>
          <View style={{ width: "100%", backgroundColor: "#c5c5c5", height: 140, borderRadius: 8 }}>

            <View style={{
              backgroundColor: "#797979",
              flexDirection: "row",
              alignItems: "center",
              paddingHorizontal: 5,
              paddingVertical: 5,
              width: "100%",
            }}>
              <View style={{}}>
                <Usernameicon name="user" style={{
                  backgroundColor: "#fff",
                  paddingHorizontal: 5,
                  borderRadius: 70,
                  color: "#636363",
                  paddingVertical: 4

                }} />
              </View>
              <Text style={{ color: "#fff", paddingLeft: 8, fontSize: responsiveFontSize(1.9), fontWeight: "700" }}>
                Munindra Das
              </Text>
            </View>

            <View style={{ marginTop: 2, marginHorizontal: 5 }}>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Location
                  name="location"
                  style={{ backgroundColor: "#797979", padding: 5, borderRadius: 70, color: "#fff", fontSize: responsiveFontSize(1.5) }} />
                <Text style={{ paddingLeft: 5, color: "#000", fontSize: responsiveFontSize(1.8), fontWeight: "500" }}>
                  Name of District/Block
                </Text>
              </View>
              <View style={{ marginLeft: 25 }}>
                <Text style={{ color: "#000", fontSize: responsiveFontSize(1.8), }}>
                  Kamrup(R)
                </Text>
              </View>

            </View>

            <View style={{ marginTop: 5, marginHorizontal: 5 }}>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <MobileIcon
                  name="mobile1"
                  style={{ backgroundColor: "#797979", padding: 5, borderRadius: 70, color: "#fff", fontSize: responsiveFontSize(1.5) }} />
                <Text style={{ paddingLeft: 5, color: "#000", fontSize: responsiveFontSize(1.8), fontWeight: "500" }}>
                  Phone No.
                </Text>
              </View>

              <View style={{ marginLeft: 25, flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                <View>
                  <Text style={{ color: "#000", fontSize: responsiveFontSize(1.8), }}>
                    9401038979
                  </Text>

                </View>

                <TouchableOpacity
                  style={{ backgroundColor: "#c9c9c9", alignItems: "center", padding: 5, borderRadius: 60, elevation: 5 }}
                  onPress={() => dialCall(9401038979)}
                >
                  <CallingIcon
                    style={{ color: "#000", fontSize: responsiveFontSize(2), }}
                    name="phone-call" />
                </TouchableOpacity>
              </View>

            </View>

          </View>
        </View>


        <View style={{ marginHorizontal: 8, marginTop: 5 }}>
          <View style={{ width: "100%", backgroundColor: "#c5c5c5", height: 140, borderRadius: 8 }}>

            <View style={{
              backgroundColor: "#797979",
              flexDirection: "row",
              alignItems: "center",
              paddingHorizontal: 5,
              paddingVertical: 5,
              width: "100%",
            }}>
              <View style={{}}>
                <Usernameicon name="user" style={{
                  backgroundColor: "#fff",
                  paddingHorizontal: 5,
                  borderRadius: 70,
                  color: "#636363",
                  paddingVertical: 4

                }} />
              </View>
              <Text style={{ color: "#fff", paddingLeft: 8, fontSize: responsiveFontSize(1.9), fontWeight: "700" }}>
                Khargadhar Saharia
              </Text>
            </View>

            <View style={{ marginTop: 2, marginHorizontal: 5 }}>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Location
                  name="location"
                  style={{ backgroundColor: "#797979", padding: 5, borderRadius: 70, color: "#fff", fontSize: responsiveFontSize(1.5) }} />
                <Text style={{ paddingLeft: 5, color: "#000", fontSize: responsiveFontSize(1.8), fontWeight: "500" }}>
                  Name of District/Block
                </Text>
              </View>
              <View style={{ marginLeft: 25 }}>
                <Text style={{ color: "#000", fontSize: responsiveFontSize(1.8), }}>
                  Darrang
                </Text>
              </View>

            </View>

            <View style={{ marginTop: 5, marginHorizontal: 5 }}>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <MobileIcon
                  name="mobile1"
                  style={{ backgroundColor: "#797979", padding: 5, borderRadius: 70, color: "#fff", fontSize: responsiveFontSize(1.5) }} />
                <Text style={{ paddingLeft: 5, color: "#000", fontSize: responsiveFontSize(1.8), fontWeight: "500" }}>
                  Phone No.
                </Text>
              </View>
              {/* <View style={{ marginLeft: 25 }}>
                <Text style={{ color: "#000", fontSize: responsiveFontSize(1.8), }}>
                  8638100126
                </Text>
              </View> */}

              <View style={{ marginLeft: 25, flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                <View>
                  <Text style={{ color: "#000", fontSize: responsiveFontSize(1.8), }}>
                    8638100126
                  </Text>
                </View>

                <TouchableOpacity
                  style={{ backgroundColor: "#c9c9c9", alignItems: "center", padding: 5, borderRadius: 60, elevation: 5 }}
                  onPress={() => dialCall(8638100126)}
                >
                  <CallingIcon
                    style={{ color: "#000", fontSize: responsiveFontSize(2), }}
                    name="phone-call" />
                </TouchableOpacity>
              </View>

            </View>

          </View>
        </View>

        <View style={{ marginHorizontal: 8, marginTop: 5 }}>
          <View style={{ width: "100%", backgroundColor: "#c5c5c5", height: 140, borderRadius: 8 }}>

            <View style={{
              backgroundColor: "#797979",
              flexDirection: "row",
              alignItems: "center",
              paddingHorizontal: 5,
              paddingVertical: 5,
              width: "100%",
            }}>
              <View style={{}}>
                <Usernameicon name="user" style={{
                  backgroundColor: "#fff",
                  paddingHorizontal: 5,
                  borderRadius: 70,
                  color: "#636363",
                  paddingVertical: 4

                }} />
              </View>
              <Text style={{ color: "#fff", paddingLeft: 8, fontSize: responsiveFontSize(1.9), fontWeight: "700" }}>
                Budheswar
              </Text>
            </View>

            <View style={{ marginTop: 2, marginHorizontal: 5 }}>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Location
                  name="location"
                  style={{ backgroundColor: "#797979", padding: 5, borderRadius: 70, color: "#fff", fontSize: responsiveFontSize(1.5) }} />
                <Text style={{ paddingLeft: 5, color: "#000", fontSize: responsiveFontSize(1.8), fontWeight: "500" }}>
                  Name of District/Block
                </Text>
              </View>
              <View style={{ marginLeft: 25 }}>
                <Text style={{ color: "#000", fontSize: responsiveFontSize(1.8), }}>
                  Golaghat
                </Text>
              </View>

            </View>

            <View style={{ marginTop: 5, marginHorizontal: 5 }}>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <MobileIcon
                  name="mobile1"
                  style={{ backgroundColor: "#797979", padding: 5, borderRadius: 70, color: "#fff", fontSize: responsiveFontSize(1.5) }} />
                <Text style={{ paddingLeft: 5, color: "#000", fontSize: responsiveFontSize(1.8), fontWeight: "500" }}>
                  Phone No.
                </Text>
              </View>
       
               <View style={{ marginLeft: 25, flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                <View>
                  <Text style={{ color: "#000", fontSize: responsiveFontSize(1.8), }}>
                    7002018616
                  </Text>
                </View>

                <TouchableOpacity
                  style={{ backgroundColor: "#c9c9c9", alignItems: "center", padding: 5, borderRadius: 60, elevation: 5 }}
                  onPress={() => dialCall(7002018616)}
                >
                  <CallingIcon
                    style={{ color: "#000", fontSize: responsiveFontSize(2), }}
                    name="phone-call" />
                </TouchableOpacity>
              </View>
       

            </View>

          </View>
        </View>

        <View style={{ marginHorizontal: 8, marginTop: 5 }}>
          <View style={{ width: "100%", backgroundColor: "#c5c5c5", height: 140, borderRadius: 8 }}>

            <View style={{
              backgroundColor: "#797979",
              flexDirection: "row",
              alignItems: "center",
              paddingHorizontal: 5,
              paddingVertical: 5,
              width: "100%",
            }}>
              <View style={{}}>
                <Usernameicon name="user" style={{
                  backgroundColor: "#fff",
                  paddingHorizontal: 5,
                  borderRadius: 70,
                  color: "#636363",
                  paddingVertical: 4

                }} />
              </View>
              <Text style={{ color: "#fff", paddingLeft: 8, fontSize: responsiveFontSize(1.9), fontWeight: "700" }}>
                Ranju Gogoi
              </Text>
            </View>

            <View style={{ marginTop: 2, marginHorizontal: 5 }}>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Location
                  name="location"
                  style={{ backgroundColor: "#797979", padding: 5, borderRadius: 70, color: "#fff", fontSize: responsiveFontSize(1.5) }} />
                <Text style={{ paddingLeft: 5, color: "#000", fontSize: responsiveFontSize(1.8), fontWeight: "500" }}>
                  Name of District/Block
                </Text>
              </View>
              <View style={{ marginLeft: 25 }}>
                <Text style={{ color: "#000", fontSize: responsiveFontSize(1.8), }}>
                  Jorhat
                </Text>
              </View>

            </View>

            <View style={{ marginTop: 5, marginHorizontal: 5 }}>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <MobileIcon
                  name="mobile1"
                  style={{ backgroundColor: "#797979", padding: 5, borderRadius: 70, color: "#fff", fontSize: responsiveFontSize(1.5) }} />
                <Text style={{ paddingLeft: 5, color: "#000", fontSize: responsiveFontSize(1.8), fontWeight: "500" }}>
                  Phone No.
                </Text>
              </View>
           
                 <View style={{ marginLeft: 25, flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                <View>
                  <Text style={{ color: "#000", fontSize: responsiveFontSize(1.8), }}>
                    9365479359
                  </Text>
                </View>

                <TouchableOpacity
                  style={{ backgroundColor: "#c9c9c9", alignItems: "center", padding: 5, borderRadius: 60, elevation: 5 }}
                  onPress={() => dialCall(9365479359)}
                >
                  <CallingIcon
                    style={{ color: "#000", fontSize: responsiveFontSize(2), }}
                    name="phone-call" />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>

        <View style={{ marginHorizontal: 8, marginTop: 5 }}>
          <View style={{ width: "100%", backgroundColor: "#c5c5c5", height: 140, borderRadius: 8 }}>

            <View style={{
              backgroundColor: "#797979",
              flexDirection: "row",
              alignItems: "center",
              paddingHorizontal: 5,
              paddingVertical: 5,
              width: "100%",
            }}>
              <View style={{}}>
                <Usernameicon name="user" style={{
                  backgroundColor: "#fff",
                  paddingHorizontal: 5,
                  borderRadius: 70,
                  color: "#636363",
                  paddingVertical: 4

                }} />
              </View>
              <Text style={{ color: "#fff", paddingLeft: 8, fontSize: responsiveFontSize(1.9), fontWeight: "700" }}>
                Nazrul Islam
              </Text>
            </View>

            <View style={{ marginTop: 2, marginHorizontal: 5 }}>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Location
                  name="location"
                  style={{ backgroundColor: "#797979", padding: 5, borderRadius: 70, color: "#fff", fontSize: responsiveFontSize(1.5) }} />
                <Text style={{ paddingLeft: 5, color: "#000", fontSize: responsiveFontSize(1.8), fontWeight: "500" }}>
                  Name of District/Block
                </Text>
              </View>
              <View style={{ marginLeft: 25 }}>
                <Text style={{ color: "#000", fontSize: responsiveFontSize(1.8), }}>
                  Dhuburi
                </Text>
              </View>

            </View>

            <View style={{ marginTop: 5, marginHorizontal: 5 }}>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <MobileIcon
                  name="mobile1"
                  style={{ backgroundColor: "#797979", padding: 5, borderRadius: 70, color: "#fff", fontSize: responsiveFontSize(1.5) }} />
                <Text style={{ paddingLeft: 5, color: "#000", fontSize: responsiveFontSize(1.8), fontWeight: "500" }}>
                  Phone No.
                </Text>
              </View>
           
                <View style={{ marginLeft: 25, flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                <View>
                  <Text style={{ color: "#000", fontSize: responsiveFontSize(1.8), }}>
                    9435849132
                  </Text>
                </View>

                <TouchableOpacity
                  style={{ backgroundColor: "#c9c9c9", alignItems: "center", padding: 5, borderRadius: 60, elevation: 5 }}
                  onPress={() => dialCall(9435849132)}
                >
                  <CallingIcon
                    style={{ color: "#000", fontSize: responsiveFontSize(2), }}
                    name="phone-call" />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>

        <View style={{ marginHorizontal: 8, marginTop: 5 }}>
          <View style={{ width: "100%", backgroundColor: "#c5c5c5", height: 140, borderRadius: 8 }}>

            <View style={{
              backgroundColor: "#797979",
              flexDirection: "row",
              alignItems: "center",
              paddingHorizontal: 5,
              paddingVertical: 5,
              width: "100%",
            }}>
              <View style={{}}>
                <Usernameicon name="user" style={{
                  backgroundColor: "#fff",
                  paddingHorizontal: 5,
                  borderRadius: 70,
                  color: "#636363",
                  paddingVertical: 4

                }} />
              </View>
              <Text style={{ color: "#fff", paddingLeft: 8, fontSize: responsiveFontSize(1.9), fontWeight: "700" }}>
                Dilip Thakuria
              </Text>
            </View>

            <View style={{ marginTop: 2, marginHorizontal: 5 }}>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Location
                  name="location"
                  style={{ backgroundColor: "#797979", padding: 5, borderRadius: 70, color: "#fff", fontSize: responsiveFontSize(1.5) }} />
                <Text style={{ paddingLeft: 5, color: "#000", fontSize: responsiveFontSize(1.8), fontWeight: "500" }}>
                  Name of District/Block
                </Text>
              </View>
              <View style={{ marginLeft: 25 }}>
                <Text style={{ color: "#000", fontSize: responsiveFontSize(1.8), }}>
                  Hajo
                </Text>
              </View>

            </View>

            <View style={{ marginTop: 5, marginHorizontal: 5 }}>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <MobileIcon
                  name="mobile1"
                  style={{ backgroundColor: "#797979", padding: 5, borderRadius: 70, color: "#fff", fontSize: responsiveFontSize(1.5) }} />
                <Text style={{ paddingLeft: 5, color: "#000", fontSize: responsiveFontSize(1.8), fontWeight: "500" }}>
                  Phone No.
                </Text>
              </View>
           
                <View style={{ marginLeft: 25, flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                <View>
                  <Text style={{ color: "#000", fontSize: responsiveFontSize(1.8), }}>
                    9101161273
                  </Text>
                </View>

                <TouchableOpacity
                  style={{ backgroundColor: "#c9c9c9", alignItems: "center", padding: 5, borderRadius: 60, elevation: 5 }}
                  onPress={() => dialCall(9101161273)}
                >
                  <CallingIcon
                    style={{ color: "#000", fontSize: responsiveFontSize(2), }}
                    name="phone-call" />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>

        <View style={{ marginHorizontal: 8, marginTop: 5 }}>
          <View style={{ width: "100%", backgroundColor: "#c5c5c5", height: 140, borderRadius: 8 }}>

            <View style={{
              backgroundColor: "#797979",
              flexDirection: "row",
              alignItems: "center",
              paddingHorizontal: 5,
              paddingVertical: 5,
              width: "100%",
            }}>
              <View style={{}}>
                <Usernameicon name="user" style={{
                  backgroundColor: "#fff",
                  paddingHorizontal: 5,
                  borderRadius: 70,
                  color: "#636363",
                  paddingVertical: 4

                }} />
              </View>
              <Text style={{ color: "#fff", paddingLeft: 8, fontSize: responsiveFontSize(1.9), fontWeight: "700" }}>
                Arun Roy
              </Text>
            </View>

            <View style={{ marginTop: 2, marginHorizontal: 5 }}>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Location
                  name="location"
                  style={{ backgroundColor: "#797979", padding: 5, borderRadius: 70, color: "#fff", fontSize: responsiveFontSize(1.5) }} />
                <Text style={{ paddingLeft: 5, color: "#000", fontSize: responsiveFontSize(1.8), fontWeight: "500" }}>
                  Name of District/Block
                </Text>
              </View>
              <View style={{ marginLeft: 25 }}>
                <Text style={{ color: "#000", fontSize: responsiveFontSize(1.8), }}>
                  Bangaigaon
                </Text>
              </View>

            </View>

            <View style={{ marginTop: 5, marginHorizontal: 5 }}>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <MobileIcon
                  name="mobile1"
                  style={{ backgroundColor: "#797979", padding: 5, borderRadius: 70, color: "#fff", fontSize: responsiveFontSize(1.5) }} />
                <Text style={{ paddingLeft: 5, color: "#000", fontSize: responsiveFontSize(1.8), fontWeight: "500" }}>
                  Phone No.
                </Text>
              </View>
       
                  <View style={{ marginLeft: 25, flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                <View>
                  <Text style={{ color: "#000", fontSize: responsiveFontSize(1.8), }}>
                  9401737452
                  </Text>
                </View>

                <TouchableOpacity
                  style={{ backgroundColor: "#c9c9c9", alignItems: "center", padding: 5, borderRadius: 60, elevation: 5 }}
                  onPress={() => dialCall(9401737452)}
                >
                  <CallingIcon
                    style={{ color: "#000", fontSize: responsiveFontSize(2), }}
                    name="phone-call" />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>

        <View style={{ marginHorizontal: 8, marginTop: 5 }}>
          <View style={{ width: "100%", backgroundColor: "#c5c5c5", height: 140, borderRadius: 8 }}>

            <View style={{
              backgroundColor: "#797979",
              flexDirection: "row",
              alignItems: "center",
              paddingHorizontal: 5,
              paddingVertical: 5,
              width: "100%",
            }}>
              <View style={{}}>
                <Usernameicon name="user" style={{
                  backgroundColor: "#fff",
                  paddingHorizontal: 5,
                  borderRadius: 70,
                  color: "#636363",
                  paddingVertical: 4

                }} />
              </View>
              <Text style={{ color: "#fff", paddingLeft: 8, fontSize: responsiveFontSize(1.9), fontWeight: "700" }}>
                Narayan Fayel
              </Text>
            </View>

            <View style={{ marginTop: 2, marginHorizontal: 5 }}>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Location
                  name="location"
                  style={{ backgroundColor: "#797979", padding: 5, borderRadius: 70, color: "#fff", fontSize: responsiveFontSize(1.5) }} />
                <Text style={{ paddingLeft: 5, color: "#000", fontSize: responsiveFontSize(1.8), fontWeight: "500" }}>
                  Name of District/Block
                </Text>
              </View>
              <View style={{ marginLeft: 25 }}>
                <Text style={{ color: "#000", fontSize: responsiveFontSize(1.8), }}>
                  Dhekiajuli
                </Text>
              </View>

            </View>

            <View style={{ marginTop: 5, marginHorizontal: 5 }}>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <MobileIcon
                  name="mobile1"
                  style={{ backgroundColor: "#797979", padding: 5, borderRadius: 70, color: "#fff", fontSize: responsiveFontSize(1.5) }} />
                <Text style={{ paddingLeft: 5, color: "#000", fontSize: responsiveFontSize(1.8), fontWeight: "500" }}>
                  Phone No.
                </Text>
              </View>
          
               <View style={{ marginLeft: 25, flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                <View>
                  <Text style={{ color: "#000", fontSize: responsiveFontSize(1.8), }}>
                    9854898070
                  </Text>
                </View>

                <TouchableOpacity
                  style={{ backgroundColor: "#c9c9c9", alignItems: "center", padding: 5, borderRadius: 60, elevation: 5 }}
                  onPress={() => dialCall(9854898070)}
                >
                  <CallingIcon
                    style={{ color: "#000", fontSize: responsiveFontSize(2), }}
                    name="phone-call" />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>

        <View style={{ marginHorizontal: 8, marginTop: 5 }}>
          <View style={{ width: "100%", backgroundColor: "#c5c5c5", height: 140, borderRadius: 8 }}>

            <View style={{
              backgroundColor: "#797979",
              flexDirection: "row",
              alignItems: "center",
              paddingHorizontal: 5,
              paddingVertical: 5,
              width: "100%",
            }}>
              <View style={{}}>
                <Usernameicon name="user" style={{
                  backgroundColor: "#fff",
                  paddingHorizontal: 5,
                  borderRadius: 70,
                  color: "#636363",
                  paddingVertical: 4

                }} />
              </View>
              <Text style={{ color: "#fff", paddingLeft: 8, fontSize: responsiveFontSize(1.9), fontWeight: "700" }}>
                Jesimuddin
              </Text>
            </View>

            <View style={{ marginTop: 2, marginHorizontal: 5 }}>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Location
                  name="location"
                  style={{ backgroundColor: "#797979", padding: 5, borderRadius: 70, color: "#fff", fontSize: responsiveFontSize(1.5) }} />
                <Text style={{ paddingLeft: 5, color: "#000", fontSize: responsiveFontSize(1.8), fontWeight: "500" }}>
                  Name of District/Block
                </Text>
              </View>
              <View style={{ marginLeft: 25 }}>
                <Text style={{ color: "#000", fontSize: responsiveFontSize(1.8), }}>
                  Hailakandi
                </Text>
              </View>

            </View>

            <View style={{ marginTop: 5, marginHorizontal: 5 }}>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <MobileIcon
                  name="mobile1"
                  style={{ backgroundColor: "#797979", padding: 5, borderRadius: 70, color: "#fff", fontSize: responsiveFontSize(1.5) }} />
                <Text style={{ paddingLeft: 5, color: "#000", fontSize: responsiveFontSize(1.8), fontWeight: "500" }}>
                  Phone No.
                </Text>
              </View>
           
               <View style={{ marginLeft: 25, flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                <View>
                  <Text style={{ color: "#000", fontSize: responsiveFontSize(1.8), }}>
                    9854319564
                  </Text>
                </View>

                <TouchableOpacity
                  style={{ backgroundColor: "#c9c9c9", alignItems: "center", padding: 5, borderRadius: 60, elevation: 5 }}
                  onPress={() => dialCall(9854319564)}
                >
                  <CallingIcon
                    style={{ color: "#000", fontSize: responsiveFontSize(2), }}
                    name="phone-call" />
                </TouchableOpacity>
              </View>

            </View>
          </View>
        </View>

        <View style={{ marginHorizontal: 8, marginTop: 5 }}>
          <View style={{ width: "100%", backgroundColor: "#c5c5c5", height: 140, borderRadius: 8 }}>

            <View style={{
              backgroundColor: "#797979",
              flexDirection: "row",
              alignItems: "center",
              paddingHorizontal: 5,
              paddingVertical: 5,
              width: "100%",
            }}>
              <View style={{}}>
                <Usernameicon name="user" style={{
                  backgroundColor: "#fff",
                  paddingHorizontal: 5,
                  borderRadius: 70,
                  color: "#636363",
                  paddingVertical: 4

                }} />
              </View>
              <Text style={{ color: "#fff", paddingLeft: 8, fontSize: responsiveFontSize(1.9), fontWeight: "700" }}>
                Arup Bordoloi
              </Text>
            </View>

            <View style={{ marginTop: 2, marginHorizontal: 5 }}>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Location
                  name="location"
                  style={{ backgroundColor: "#797979", padding: 5, borderRadius: 70, color: "#fff", fontSize: responsiveFontSize(1.5) }} />
                <Text style={{ paddingLeft: 5, color: "#000", fontSize: responsiveFontSize(1.8), fontWeight: "500" }}>
                  Name of District/Block
                </Text>
              </View>
              <View style={{ marginLeft: 25 }}>
                <Text style={{ color: "#000", fontSize: responsiveFontSize(1.8), }}>
                  Karbi Anglong
                </Text>
              </View>

            </View>

            <View style={{ marginTop: 5, marginHorizontal: 5 }}>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <MobileIcon
                  name="mobile1"
                  style={{ backgroundColor: "#797979", padding: 5, borderRadius: 70, color: "#fff", fontSize: responsiveFontSize(1.5) }} />
                <Text style={{ paddingLeft: 5, color: "#000", fontSize: responsiveFontSize(1.8), fontWeight: "500" }}>
                  Phone No.
                </Text>
              </View>
             
               <View style={{ marginLeft: 25, flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                <View>
                  <Text style={{ color: "#000", fontSize: responsiveFontSize(1.8), }}>
                    7002863995
                  </Text>
                </View>

                <TouchableOpacity
                  style={{ backgroundColor: "#c9c9c9", alignItems: "center", padding: 5, borderRadius: 60, elevation: 5 }}
                  onPress={() => dialCall(7002863995)}
                >
                  <CallingIcon
                    style={{ color: "#000", fontSize: responsiveFontSize(2), }}
                    name="phone-call" />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>


        <View style={{ marginHorizontal: 8, marginTop: 5 }}>
          <View style={{ width: "100%", backgroundColor: "#c5c5c5", height: 140, borderRadius: 8 }}>

            <View style={{
              backgroundColor: "#797979",
              flexDirection: "row",
              alignItems: "center",
              paddingHorizontal: 5,
              paddingVertical: 5,
              width: "100%",
            }}>
              <View style={{}}>
                <Usernameicon name="user" style={{
                  backgroundColor: "#fff",
                  paddingHorizontal: 5,
                  borderRadius: 70,
                  color: "#636363",
                  paddingVertical: 4

                }} />
              </View>
              <Text style={{ color: "#fff", paddingLeft: 8, fontSize: responsiveFontSize(1.9), fontWeight: "700" }}>
                Dipen Deka
              </Text>
            </View>

            <View style={{ marginTop: 2, marginHorizontal: 5 }}>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Location
                  name="location"
                  style={{ backgroundColor: "#797979", padding: 5, borderRadius: 70, color: "#fff", fontSize: responsiveFontSize(1.5) }} />
                <Text style={{ paddingLeft: 5, color: "#000", fontSize: responsiveFontSize(1.8), fontWeight: "500" }}>
                  Name of District/Block
                </Text>
              </View>
              <View style={{ marginLeft: 25 }}>
                <Text style={{ color: "#000", fontSize: responsiveFontSize(1.8), }}>
                  Odalguri
                </Text>
              </View>

            </View>

            <View style={{ marginTop: 5, marginHorizontal: 5 }}>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <MobileIcon
                  name="mobile1"
                  style={{ backgroundColor: "#797979", padding: 5, borderRadius: 70, color: "#fff", fontSize: responsiveFontSize(1.5) }} />
                <Text style={{ paddingLeft: 5, color: "#000", fontSize: responsiveFontSize(1.8), fontWeight: "500" }}>
                  Phone No.
                </Text>
              </View>
         
               <View style={{ marginLeft: 25, flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                <View>
                  <Text style={{ color: "#000", fontSize: responsiveFontSize(1.8), }}>
                    7002697262
                  </Text>
                </View>

                <TouchableOpacity
                  style={{ backgroundColor: "#c9c9c9", alignItems: "center", padding: 5, borderRadius: 60, elevation: 5 }}
                  onPress={() => dialCall(7002697262)}
                >
                  <CallingIcon
                    style={{ color: "#000", fontSize: responsiveFontSize(2), }}
                    name="phone-call" />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>

        <View style={{ paddingBottom: 5 }}></View>




      </ScrollView>



    </View>
  )
}

export default DistricSectories

const styles = StyleSheet.create({})
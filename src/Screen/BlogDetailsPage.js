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
  RefreshControl
} from 'react-native'
import React, { useState, memo, useEffect } from 'react'
import Back from 'react-native-vector-icons/Ionicons';
import Listt from 'react-native-vector-icons/Ionicons';
import Dateee from 'react-native-vector-icons/Fontisto';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios'
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize
} from "react-native-responsive-dimensions";
import HTML from 'react-native-render-html';
const BlogDetailsPage = ({ route }) => {
  console.log("fffdata", route)
  const [statusBarStyle, setStatusBarStyle] = useState();
  const navigation = useNavigation();
  const [load, setload] = useState(false);
  const baseStyle = {
    fontSize: responsiveFontSize(2),
    color: '#000',
    fontWeight: "400",
    lineHeight: 24,



  };


  return (
    <View style={{ flex: 1, backgroundColor: "#fff" }}>
      {
        load && load == true ?
          <View
            style={{
              flex: 1,
              // marginVertical: "50%",
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <ActivityIndicator size="small" color="#000" animating={load} />
            <Text style={{ fontSize: 12, color: "#000", fontWeight: "400", }}>please wait</Text>
          </View>
          :

          <ScrollView showsVerticalScrollIndicator={false}>
            <StatusBar translucent backgroundColor="transparent" />
            <View style={{ width: "100%" }}>

              <View style={{
                width: '100%',
                height: 400
              }}>
                <Image
                  style={{
                    borderBottomLeftRadius: 20,
                    borderBottomRightRadius: 20,
                    width: '100%',
                    height: '100%'
                  }}

                  source={{ uri: route.params.data.img }}
                  resizeMode="stretch"
                />
              </View>

              <TouchableOpacity
                style={{
                  position: "absolute",
                  top: 40,
                  left: 15,
                  zIndex: 11,
                  backgroundColor: "#fff",
                  borderRadius: 20,
                  padding: 3,
                  alignItems: "center",
                }}
                onPress={() => navigation.goBack()}
              >
                <Back
                  name="chevron-back-outline"
                  style={{ color: "#000", fontSize: responsiveFontSize(2.8), alignItems: "center", }}
                />
              </TouchableOpacity>

              <View style={{ marginHorizontal: 8, marginTop: 5 }}>
                <View style={{ width: "97%" }}>
                  <Text style={{
                    color: "#000",
                    fontSize: responsiveFontSize(2.2),
                    fontWeight: '700',
                    textAlign: "justify"
                  }}>
                    {/* Nature is a teacher – Just sit quietly under a tree. */}
                    {route.params.data.heading}

                  </Text>
                </View>
              </View>

              <View style={{ marginHorizontal: 13, marginTop: 5 }}>
                <View style={{
                  width: "100%",
                  flexDirection: "row",
                  alignItems: "center",

                }}>
                  <Dateee name="date"
                    style={{ color: "grey", fontSize: responsiveFontSize(1.5) }}
                  />
                  <Text style={{
                    color: "grey",
                    fontSize: responsiveFontSize(1.5),
                    paddingLeft: 5,
                    fontWeight: "400"
                  }}>
                    {/* 10 October 2023 */}
                    {route.params.data.date}
                  </Text>
                </View>
              </View>

              <View style={{ marginHorizontal: 10, marginTop: 5 }}>
                <View style={{
                  width: "100%", alignItems: "center",
                  paddingHorizontal: 8,
                  paddingTop: 5,
                  textAlign: "justify",
                  // backgroundColor:"grey"
                }}>
                  <HTML
                    baseStyle={baseStyle}
                    source={{ html: route.params.data.desc }} />
                </View>
              </View>

            </View>

          </ScrollView>
      }
    </View>
  )
}

export default memo(BlogDetailsPage)

const styles = StyleSheet.create({})
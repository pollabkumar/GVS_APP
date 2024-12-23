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
import LottieView from 'lottie-react-native';
import Viewww from 'react-native-vector-icons/AntDesign';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios'
import RadioGroup from 'react-native-radio-buttons-group'
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize
} from "react-native-responsive-dimensions";
const NoticeBoard = () => {

  const [statusBarStyle, setStatusBarStyle] = useState();
  const navigation = useNavigation();
  const [modal, setmodal] = useState(false);
  const [noticeditem, setnoticeditem] = useState();
  const [load, setload] = useState(false);
  const [bloglist, setbloglist] = useState("");
  const [refreshing, setRefreshing] = useState(false);


  const noticedata = async (languageidd) => {

    try {
      setload(true)
      const result = await axios
        .post(
          // `https://gvs.webinfoghy.co.in/api/index`,
          `https://gvsassam.org/api/index`,
          {
            type: languageidd ? languageidd : 1
          }
        )
        .then(res => {
          setload(false)
          setnoticeditem(res.data.notices)
          // console.log(res, 'jjjjjjjj');
        });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    noticedata()
  }, [])

  const EmptyListMessage = ({ item }) => {
    return (
      // Flat List Item
      <View style={{
        paddingTop: "30%",
      }}>
        <View
          style={{

            alignItems: 'center',
            justifyContent: "center",

          }}>
          <Image
            style={{
              width: '70%', height: 170, alignItems: 'center',
              justifyContent: "center"
            }}
            source={require('../assets/pb.png')}
          />
        </View>

        <View
          style={{
            alignItems: 'center',
            margin: 10
          }}>
          <Text
            style={{ color: '#000', fontSize: 15, fontWeight: '300' }}
          >
            No Data Found
          </Text>
        </View>

      </View>
    );
  };
  const onRefresh = () => {
    noticedata()
  }

  return (
    <View style={{ flex: 1, backgroundColor: "#e1e1e1" }}>
      <StatusBar
        animated={true}
        backgroundColor="#000"
        barStyle={statusBarStyle}
      />

      <View
        style={{
          flexDirection: 'row',
          paddingHorizontal: 10,
          paddingVertical: 8,
          alignItems: 'center',
          backgroundColor: "#000",
          elevation: 1,
          position: 'relative',
          zIndex: 20,
          justifyContent: "space-between",
          height: 50,
          alignItems: "center"
        }}>
        <View style={{ flexDirection: 'row', justifyContent: "center", alignItems: "center" }}>

          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={{
              justifyContent: "center",
              paddingLeft: responsiveWidth(1),
              //  marginTop: 2 
            }}>
            <TouchableOpacity
              style={{ borderRadius: 20, justifyContent: "center", textAlign: "center", paddingHorizontal: 5, paddingVertical: 5 }}
              onPress={() => navigation.goBack()}
            // navigation.goBack()
            >
              <Back
                name="chevron-back-outline"
                style={{ fontSize: responsiveFontSize(3), color: "#4e8ef9", textAlign: "center", justifyContent: "center", color: "#fff" }}
              />
            </TouchableOpacity>
          </TouchableOpacity>

          <View style={{ justifyContent: "center", }}>
            <Text
              style={{
                fontSize: responsiveFontSize(2.1),
                color: "#fff",
                fontWeight: '500',
                alignItems: "center"
              }}>
              Latest News & Events
            </Text>
          </View>
        </View>


      </View>


      {
        load && load == true ? (
          <View
            style={{
              flex: 2,
              // marginVertical: "50%",
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <ActivityIndicator size="small" color="#000" animating={load} />
            <Text style={{ fontSize: 12, color: "#000", fontWeight: "400", }}>please wait</Text>
          </View>
        ) : (

          <FlatList
            data={noticeditem && noticeditem.length > 0 ? noticeditem : ''}
            ListEmptyComponent={EmptyListMessage}
            refreshControl={
              <RefreshControl
                refreshing={refreshing}
                onRefresh={onRefresh}
                colors={['#000']}
              />
            }
            showsVerticalScrollIndicator={false}
            style={{ marginBottom: 55 }}
            // numColumns={2}
            renderItem={({ item, index }) => {
              return (
                <View style={{ marginHorizontal: 10, paddingVertical: 10 }}>
                  <TouchableOpacity
                    onPress={() => navigation.navigate('PdfView', { data: item.file })}
                    style={{
                      paddingTop: 10,
                      width: "100%",
                      flexDirection: "row",
                      borderBottomWidth: 0.65,
                      borderColor: "grey",
                      paddingBottom: 8,
                      borderStyle: "dotted",
                      justifyContent: "space-between",
                      alignItems: "center",

                    }}>
                    <View style={{ flexDirection: "row", width: "85%", alignItems: "center" }}>
                      <TouchableOpacity
                        onPress={() => navigation.navigate('PdfView', { data: item.file })}
                        style={{ alignItems: "center", }}
                      >
                        {/* <Externallink
                            style={{
                                color: "#000",
                                fontSize: responsiveFontSize(1.8),
                                backgroundColor: "#fff",
                                paddingHorizontal: 4,
                                paddingVertical: 4,
                                borderRadius: 60,

                            }}
                            name="external-link" /> */}
                        <LottieView
                          style={{ width: 30, height: 30 }}
                          source={require('../assets/Animation - 1703747019321.json')} autoPlay loop />
                      </TouchableOpacity>

                      <TouchableOpacity
                        onPress={() => navigation.navigate('PdfView', { data: item.file })}
                        style={{ paddingLeft: 5 }}>
                        <Text style={{ fontSize: responsiveFontSize(1.8), color: "#000" }}>
                          {item.heading}
                        </Text>
                      </TouchableOpacity>
                    </View>

                    <TouchableOpacity
                      onPress={() => navigation.navigate('PdfView', { data: item.file })}
                      style={{ width: "15%", alignItems: "flex-end" }}>
                      <Viewww name='arrowright'
                        style={{
                          color: "#fff",
                          fontSize: responsiveFontSize(1.3),
                          backgroundColor: "#ff853b",
                          paddingHorizontal: 3,
                          paddingVertical: 3,
                          borderRadius: 50
                        }} />
                    </TouchableOpacity>
                  </TouchableOpacity>
                </View>
              )
            }}
          />
        )
      }

    </View>
  )
}

export default NoticeBoard

const styles = StyleSheet.create({})
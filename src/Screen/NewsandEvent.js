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
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize
} from "react-native-responsive-dimensions";
import axios from 'axios'


const NewsandEvent = ({route}) => {
  // console.log(route)
  const [statusBarStyle, setStatusBarStyle] = useState();
  const navigation = useNavigation();
  const [load, setload] = useState(false);
  const [list, setlist] = useState();
  const [refreshing, setRefreshing] = useState(false);
  
  const onRefresh = () => {
    prabandhakfetch()
  }

  const prabandhakfetch = async () => {
    try {
      setload(true)
        const result = await axios
            .post(
                // `https://gvs.webinfoghy.co.in/api/index`,
                `https://gvsassam.org/api/index`,
                {
                    type: route.params.data ? route.params.data : 1
                }
            )
            .then(res => {
                setload(false)
                setlist(res.data.prabandhak)
                // console.log(res.data.prabandhak, 'bloggggg show');
            });
    } catch (error) {
        console.log(error);
    }
};
useEffect(() => {
    prabandhakfetch()
}, [])

  const EmptyListMessage = ({}) => {
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

  // useEffect(() => {
  //   newslist()
  // }, [])



  return (
    <View style={{ flex: 1, backgroundColor: "#fff" }}>
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
                Prabandhak
            </Text>
          </View>
        </View>
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
      >


        <View style={{ marginHorizontal: 8, marginTop: 5 }}>
          <View style={{
            width: "100%",
            flexDirection: "row",
            alignItems: "center",
            backgroundColor: "#dbdbdb",
            paddingVertical: 8,
            borderRadius: 10,
            paddingHorizontal: 5
          }}>
            <View style={{ backgroundColor: "#fff", padding: 2, borderRadius: 20 }}>
              <Listt name="list" style={{ color: "#000", fontSize: responsiveFontSize(1.9), }} />
            </View>
            <Text style={{ color: "#000", fontSize: responsiveFontSize(1.9), fontWeight: "500", paddingLeft: 5 }}>Prabandhak List's</Text>
          </View>
        </View>

        {
          load && load == true ?
            <View
              style={{
                marginVertical: "70%",
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <ActivityIndicator size="small" color="#000" animating={load} />
              <Text style={{ fontSize: 12, color: "#000",fontWeight: "400", }}>Please Wait...</Text>
            </View> 
         :

            <FlatList
              data={list?.length > 0 ? list : ''}
              ListEmptyComponent={EmptyListMessage}
              // style={{ marginBottom: 5 }}
              refreshControl={
                <RefreshControl
                  refreshing={refreshing}
                  onRefresh={onRefresh}
                  colors={['#000']}
                />
              }
              renderItem={({ item, index }) => (
                <View style={{
                  marginHorizontal: 10,
                  marginTop: 7
                }}>
                  <TouchableOpacity
                  //  onPress={() => newsidd(item.id)}
                    onPress={() => navigation.navigate("Newseventdetailpage",{data:item})}
                    style={{
                      width: "100%",
                      backgroundColor: "#e5e5e5",
                      flexDirection: "row",
                      // paddingVertical: 3,
                      // paddingHorizontal: 3,
                      borderRadius: 10,
                    }}>

                    <View
                      style={{
                        width: "40%",
                      }}
                    >
                      <Image
                        // source={require('../assets/news.jpg')}
                        source={{ uri: item.image }}
                        style={{
                          width: "100%",
                          height: 120,
                          borderRadius: 10,
                        }}
                        resizeMode="stretch"
                      />

                    </View>

                    <View
                      style={{
                        width: "60%",

                      }}
                    >
                      <View style={{ width: "100%", paddingHorizontal: 5, }}>
                        <Text style={{ color: "#000", fontSize: responsiveFontSize(2), fontWeight: "500", paddingTop: 5 }}>
                          {item.heading}
                        </Text>
                      </View>


                      <View style={{
                        flexDirection: "row",
                        alignItems: "center",
                        position: "absolute",
                        bottom: 5,
                        left: 7
                      }}>
                        <Dateee name="date"
                          style={{ color: "grey", fontSize: responsiveFontSize(1.5) }}
                        />
                        <Text style={{
                          color: "grey",
                          fontSize: responsiveFontSize(1.5),
                          paddingLeft: 5
                        }}>
                          {item.date}
                        </Text>
                      </View>

                    </View>
                  </TouchableOpacity>
                </View>


              )}
            />
        }

      

        <View style={{ marginBottom: 10 }}></View>
      </ScrollView>

    </View>
  )
}

export default memo(NewsandEvent)

const styles = StyleSheet.create({})
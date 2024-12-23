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
import AsyncStorage from '@react-native-async-storage/async-storage'; 
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
const Publication = () => {
    const [statusBarStyle, setStatusBarStyle] = useState();
    const navigation = useNavigation();
    const [load, setload] = useState(false);
    const [homedata, sethomedata] = useState("")
    const [refreshing, setRefreshing] = useState(false);

    const Publication = async () => {

        try {
            const storedValue = await AsyncStorage.getItem('languageidd');
            // console.log("1212is equal",storedValue)
            setload(true)
            const result = await axios
                .post(
                    // `https://gvs.webinfoghy.co.in/api/index`,
                    `https://gvsassam.org/api/index`,
                    {
                        type:storedValue
                    }
                )
                .then(res => {
                    setload(false)
                    // setmodal(false)
                    sethomedata(res.data.publication)
                    // console.log(res, 'language1211112112211212');
                });
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        Publication()
    }, [])

    const onRefresh = () => {
        Publication()
    }

    const EmptyListMessage = () => {
        return (
            <View
                style={{
                    alignItems: 'center',
                    justifyContent: "center",
                    marginTop: "50%"
                }}>
                <Image
                    style={{
                        width: "80%",
                        height: 150
                    }}
                    source={require('../assets/pb.png')} />
                <Text
                    style={{ color: '#000', fontSize: 15, fontWeight: '200', paddingTop: 10 }}>
                    No Data Found
                </Text>
            </View>
        );
    };


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
                            Books
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
                ) :
                    (
                        <View style={{ marginHorizontal: 8, marginTop: 3 ,}}>
                            <FlatList
                                data={homedata && homedata.length > 0 ? homedata : ''}
                                ListEmptyComponent={EmptyListMessage}
                                showsVerticalScrollIndicator={false}
                                style={{marginBottom:55}}
                                
                                refreshControl={
                                    <RefreshControl
                                        refreshing={refreshing}
                                        onRefresh={onRefresh}
                                        colors={['#000']}
                                    />
                                }
                                numColumns={2}
                                renderItem={({ item, index }) => {
                                    return (
                                        <View
                                            style={{
                                                width: "100%",
                                                flex: 1,
                                                margin: 3,
                                                // alignItems: "center",
                                                justifyContent: "center",

                                            }}>
                                            <View style={{
                                                height: 190,
                                                width: 169,
                                                borderRadius: 5,
                                                backgroundColor: "red",
                                                elevation: 2,
                                                backgroundColor: "#fff",
                                            }}>

                                                <View style={{ width: "100%", }}>
                                                    {
                                                        item.image ?
                                                            <Image
                                                                // source={require('../assets/blogs.jpg')}
                                                                source={{ uri: item.image }}
                                                                style={{
                                                                    width: "100%",
                                                                    height: 100,
                                                                    borderTopLeftRadius: 3,
                                                                    borderTopRightRadius: 3
                                                                    // borderRadius: 10
                                                                }}
                                                                resizeMode="stretch"
                                                            /> :
                                                            <Image
                                                                source={require('../assets/nophoto.jpg')}
                                                                // source={{ uri: item.img }}
                                                                style={{
                                                                    width: "100%",
                                                                    height: 100,
                                                                    borderTopLeftRadius: 3,
                                                                    borderTopRightRadius: 3
                                                                    // borderRadius: 10
                                                                }}
                                                                resizeMode="stretch"
                                                            />

                                                    }
                                                </View>

                                                <View style={{
                                                    width: "100%",
                                                    paddingHorizontal: 5,
                                                    paddingTop: 5
                                                }}>
                                                    <Text style={{
                                                        color: "#000",
                                                        fontSize: responsiveFontSize(1.5),
                                                        textAlign: "justify",
                                                        fontFamily: "Roboto-BoldItalic"
                                                    }}>
                                                        {item.heading}
                                                    </Text>
                                                </View>

                                                <View style={{
                                                    width: "100%",
                                                    flexDirection: "row",
                                                    justifyContent: "space-between",
                                                    paddingHorizontal: 3,
                                                    alignItems: "center",
                                                    marginTop: 10,
                                                    position: "absolute",
                                                    bottom: 5,

                                                }}>

                                                    <View style={{ flexDirection: "row", alignItems: "center" }}>
                                                        <View style={{ backgroundColor: "#e1e1e1", paddingHorizontal: 5, paddingVertical: 4, borderRadius: 10 }}>
                                                            <Dateee name="date" style={{ color: "#000", fontSize: responsiveFontSize(1.1) }} />
                                                        </View>
                                                        <Text style={{ color: "grey", fontSize: responsiveFontSize(1.3), fontWeight: "500", paddingLeft: 3 }}>{item.date}</Text>
                                                    </View>

                                                    <TouchableOpacity
                                                        onPress={() => navigation.navigate("Newseventdetailpage", { data: item })}
                                                        style={{
                                                            backgroundColor: "#000",
                                                            paddingHorizontal: 13,
                                                            paddingVertical: 4,
                                                            borderRadius: 4,
                                                            marginRight: 2
                                                        }}>
                                                        <Text style={{ color: "#fff", fontSize: responsiveFontSize(1.3), fontWeight: "400" }}>View</Text>
                                                    </TouchableOpacity>
                                                </View>
                                            </View>


                                        </View>
                                    )
                                }}
                            />
                            {/* <View style={{ marginBottom: 250 }}></View> */}
                        </View>
                    )
            }


        </View>
    )
}

export default Publication

const styles = StyleSheet.create({})
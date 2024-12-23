import { StyleSheet, Text, View, StatusBar, TouchableOpacity, Image, ScrollView, TextInput, ActivityIndicator } from 'react-native'
import React, { useState, useEffect,memo } from 'react'
// import Back from 'react-native-vector-icons/Ionicons';
import Listt from 'react-native-vector-icons/Ionicons';
import Dateee from 'react-native-vector-icons/Fontisto';
import { useNavigation } from '@react-navigation/native';
import Back from 'react-native-vector-icons/Ionicons';
import axios from 'axios'
import {
    responsiveHeight,
    responsiveWidth,
    responsiveFontSize
} from "react-native-responsive-dimensions";
import HTML from 'react-native-render-html';
const Newseventdetailpage = ({ route }) => {
    // console.log('id data', route)
    const [statusBarStyle, setStatusBarStyle] = useState("");
    const [details, setdetails] = useState("");
    const navigation = useNavigation();
    const [load, setload] = useState(false);

    const baseStyle = {
        fontSize: responsiveFontSize(1.5), 
        color: '#000',
        textAlign: "justify",
        fontWeight:"400"
        // textAlign: "center"

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
                        <Text style={{ fontSize: 12, color: "#000",fontWeight: "400", }}>please wait</Text>
                    </View>
                    :

                    <ScrollView showsVerticalScrollIndicator={false}>
                        <StatusBar translucent backgroundColor="transparent" />
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

                                source={{ uri: route.params.data.image }}
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



                        <View style={{ marginHorizontal: 10, marginTop: 5 }}>
                            <View style={{ width: "100%" }}>
                                <Text style={{
                                    color: "#000",
                                    fontSize: responsiveFontSize(2.5),
                                    fontWeight: '700'
                                }}>
                                    {route.params.data.heading}
                                </Text>
                            </View>
                        </View>

                        <View style={{ marginHorizontal: 13, marginTop: 8 }}>
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
                                    paddingLeft: 5
                                }}>
                                    {route.params.data.date}
                                </Text>
                            </View>
                        </View>

                        <View
                            style={{
                                marginHorizontal: 10,
                                // marginTop: 5
                            }}>
                            <View style={{
                                width: "100%",
                                //  alignItems: "center",
                                // paddingHorizontal: 10, 
                                // paddingTop: 5
                            }}>
                                <HTML
                                    baseStyle={baseStyle}
                                    source={{ html: route.params.data.description }} />
                                {/* <Text style={{ color: "#494a4b", fontWeight: '400', fontSize: responsiveFontSize(1.75), textAlign: "justify" }}>
                            Recent encounters involving Canadian warships in the Indo-Pacific region have raised concerns about
                            Canada’s military presence far from home and its potential involvement in conflicts, particularly
                            with China. This situation prompts questions about whether the United States is drawing Canada into
                            regional tensions that do not align with its values and interests. Like any other
                        </Text> */}
                            </View>
                        </View>
                        {/* <View style={{ marginHorizontal: 10, marginTop: 5 }}>
                    <View style={{
                        width: "100%", alignItems: "center",
                        // paddingHorizontal: 10, 
                        paddingTop: 5
                    }}>
                        <Text style={{ color: "#494a4b", fontWeight: '400', fontSize: responsiveFontSize(1.75), textAlign: "justify" }}>
                            Recent encounters involving Canadian warships in the Indo-Pacific region have raised concerns about
                            Canada’s military presence far from home and its potential involvement in conflicts, particularly
                            with China. This situation prompts questions about whether the United States is drawing Canada into
                            regional tensions that do not align with its values and interests. Like any other
                        </Text>
                    </View>
                </View> */}
                    </ScrollView>
            }

        </View>
    )
}

export default memo(Newseventdetailpage)

const styles = StyleSheet.create({})
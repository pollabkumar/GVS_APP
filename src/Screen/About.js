import { StyleSheet, Text, View, StatusBar, TouchableOpacity, Image, ScrollView } from 'react-native'
import React, { useState } from 'react'
import {
    responsiveHeight,
    responsiveWidth,
    responsiveFontSize
} from "react-native-responsive-dimensions";
import Back from 'react-native-vector-icons/Ionicons';
import Ribbon from 'react-native-vector-icons/Octicons';
import { useNavigation } from '@react-navigation/native';
const OurCausesDetails = ({ route }) => {
    const [statusBarStyle, setStatusBarStyle] = useState();
    const navigation = useNavigation();
    // console.log('pp', route)
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
                            Aboout us
                        </Text>
                    </View>
                </View>
            </View>

            <ScrollView
               showsVerticalScrollIndicator={false}
            >
            <View style={{ marginTop: 5, marginHorizontal: 10, justifyContent: "center", alignItems: "center" }}>
                <View style={{ width: "100%",alignItems:"center" }}>
                    <Image
                        source={require('../assets/banner1.jpeg')}
                        style={{ width: 345, borderRadius: 7, height: 200 }}
                        resizeMode="stretch"
                    />
                </View>
            </View>

            <View style={{marginTop:6}}>
                <View style={{ width: '100%', alignItems: "center" }}>
                    <Text style={{ color: "#ff6015", fontSize: responsiveFontSize(1.5), borderBottomWidth: 0.65, width: "20%", textAlign: "center", borderColor:"#ff6015", paddingBottom: 5  }}>Get to Know</Text>
                </View>
            </View>

            <View style={{marginTop:6,marginHorizontal:8,}}>
                <View style={{ width: '100%', alignItems: "center" }}>
                    <Text style={{ color: "#000", fontSize: responsiveFontSize(2.1),fontWeight:"600"}}>About our Organization</Text>
                </View>

                <View style={{marginTop:6}}>
                    <View style={{ width: '100%', alignItems: "center" }}>
                        <Text style={{color: "#000", fontSize: responsiveFontSize(1.8),textAlign:"justify",alignItems:"center",fontWeight:"300"}}>
                            Established on July 18, 1990 as sub-committee of Assam Science Society,
                            one of the premier voluntary organisation of India (established in 1953),
                            Guwahati, to formulate and conduct Total Literacy Campaign in 7 Development
                            Blocks in 6 Districts of Assam.
                        </Text>
                    </View>
                </View>

                <View style={{marginTop:6}}>
                    <View style={{ width: '100%', alignItems: "center" }}>
                        <Text style={{color: "#000", fontSize: responsiveFontSize(1.8),textAlign:"justify",alignItems:"center",fontWeight:"300" }}>
                            Having successfully completed the Total Literacy Campaign and having created a
                            grass-root level work base through the Total Literacy Campaign, it was decided
                            to register Gyan Vigyan Samiti Assam under Society Registration Act XXI of 1860
                            in 1994. The Registration number is 1516 of 1994-95.
                        </Text>
                    </View>
                </View>


                <View style={{marginTop:6}}>
                    <View style={{ width: '100%', alignItems: "center", }}>
                        <Text style={{color: "#000", fontSize: responsiveFontSize(1.8),textAlign:"justify",alignItems:"center",fontWeight:"300"}}>
                            Works in the area of Disaster Management, Education & Literacy, Environment and natural
                            resource management, Health & Nutrition, HIV/AIDS, Information & Communication Technology (ICT) ,
                            Micro Finance (SHGs), Panchayati Raj, Rural Development & Poverty Alleviation, Science & Technology,
                            Vocational Training, Womens Development & Empowerment, Youth Affairs, etc.
                        </Text>
                    </View>
                </View>






            </View>
            </ScrollView>

        </View>

    )
}

export default OurCausesDetails

const styles = StyleSheet.create({})
import React, { useState,memo } from 'react';
import {
    Button,
    DrawerLayoutAndroid,
    Text,
    StyleSheet,
    View,
    StatusBar,
    TouchableOpacity,
    Image,
    ScrollView,
    Dimensions,
    FlatList
} from 'react-native';
import {
    responsiveHeight,
    responsiveWidth,
    responsiveFontSize
} from "react-native-responsive-dimensions";
import { useNavigation } from '@react-navigation/native';
import BackIcon from 'react-native-vector-icons/dist/Ionicons';
import Popular from 'react-native-vector-icons/Feather';

const OurObjectives = () => {
    const [statusBarStyle, setStatusBarStyle] = useState();
    const navigation = useNavigation();
    return (
        <View style={{ flex: 1, backgroundColor: "#fff", }}>

            <StatusBar
                animated={true}
                backgroundColor="#000"
                barStyle={statusBarStyle}
            />

            <View
                style={{
                    flexDirection: 'row',
                    // paddingHorizontal: 10,
                    paddingVertical: 8,
                    alignItems: 'center',
                    backgroundColor: '#000',
                    elevation: 1,
                    position: 'relative',
                    zIndex: 20,
                    justifyContent: "space-between",
                    height: 50,
                    paddingLeft: 2

                }}>
                <View style={{ flexDirection: 'row', justifyContent: "center" }}>

                    <TouchableOpacity
                        onPress={() => navigation.goBack()}
                        style={{ justifyContent: "center", paddingLeft: responsiveWidth(1), marginTop: 2 }}>
                        <TouchableOpacity
                            style={{ justifyContent: "center", textAlign: "center" }}
                            onPress={() => navigation.goBack()}
                        // navigation.goBack()
                        >
                            <BackIcon
                                name="chevron-back-outline"
                                style={{
                                    fontSize: responsiveFontSize(3), color: "#4e8ef9",
                                    textAlign: "center",
                                    justifyContent: "center",
                                    color: "#fff",
                                }}
                            />
                        </TouchableOpacity>
                    </TouchableOpacity>

                    <View style={{ justifyContent: "center", paddingLeft: responsiveWidth(.68) }}>
                        <Text
                            style={{
                                fontSize: responsiveFontSize(2.1),
                                color: "#fff",
                                fontWeight: '500',
                                alignItems: "center"
                            }}>
                            Our Objectives
                        </Text>
                    </View>
                </View>
            </View>

            {/* Popular Objectives */}

            <ScrollView
             showsVerticalScrollIndicator={false}
            >


                <View style={{ marginHorizontal: 9, marginTop: 5 }}>
                    <View style={{
                        width: "100%",
                        backgroundColor: "#e3e3e3",
                        flexDirection: "row",
                        alignItems: 'center',
                        paddingHorizontal: 8,
                        paddingVertical: 7,
                        borderRadius: 8
                    }}>

                        <View style={{ backgroundColor: "#fff", borderRadius: 26 }}>
                            <Popular name='slack'
                                style={{ color: "#000", fontSize: responsiveFontSize(1.65), paddingHorizontal: 4, paddingVertical: 4 }} />
                        </View>
                        <View style={{ paddingLeft: 5 }}>
                            <Text style={{ color: "#000", fontSize: responsiveFontSize(1.9), fontWeight: "500" }}>Popular Objectives</Text>
                        </View>
                    </View>
                </View>

                {/* Objectives */}

                <View style={{ marginHorizontal: 10, marginTop: 7 }}>
                    <View style={{
                        width: "100%",
                        flexDirection: "row",
                        backgroundColor: "#e3e3e3",
                        height: 120,
                        borderTopLeftRadius: 20,
                        borderBottomRightRadius: 20

                    }}>
                        <View style={{ width: "40%", paddingHorizontal: 10, paddingVertical: 10 }}>
                            <Image source={require('../assets/p1.jpg')}
                                resizeMode="cover"
                                style={{
                                    width: "100%",
                                    height: 100,
                                    // borderRadius: 10
                                    borderTopLeftRadius: 20,
                                    // borderBottomLeftRadius:20
                                    borderBottomRightRadius: 20
                                }}
                            />
                        </View>

                        <View style={{ width: "60%", justifyContent: "center", alignItems: "center", paddingHorizontal: 10 }}>
                            <Text style={{ color: "#000", fontSize: responsiveFontSize(1.7), textAlign: "justify",fontWeight:"400"}}>
                                To link up the Government and non-Government organizations working for literacy and work together in unison.
                            </Text>
                        </View>
                    </View>
                </View>

                <View style={{ marginHorizontal: 10, marginTop: 5 }}>
                    <View style={{
                        width: "100%",
                        flexDirection: "row",
                        backgroundColor: "#e3e3e3",
                        height: 120,
                        // borderWidth:0.25,
                        borderTopRightRadius: 20,
                        borderBottomLeftRadius: 20
                    }}>

                        <View style={{ width: "60%", justifyContent: "center", alignItems: "center", paddingHorizontal: 10 }}>
                            <Text style={{ color: "#000", fontSize: responsiveFontSize(1.7), textAlign: "justify",fontWeight:"400" }}>
                                To provide a platform for a quicker exchange of ideas amongst the activists.
                            </Text>
                        </View>

                        <View style={{ width: "40%", paddingHorizontal: 10, paddingVertical: 10 }}>
                            <Image source={require('../assets/p2.jpg')}
                                resizeMode="cover"
                                style={{
                                    width: "100%",
                                    height: 100,
                                    // borderRadius: 10
                                    borderTopRightRadius: 20,
                                    borderBottomLeftRadius: 20
                                }}
                            />
                        </View>
                    </View>
                </View>

                <View style={{ marginHorizontal: 10, marginTop: 5 }}>
                    <View style={{
                        width: "100%",
                        flexDirection: "row",
                        backgroundColor: "#e3e3e3",
                        height: 120,
                        // borderWidth:0.25,
                        borderTopLeftRadius: 20,
                        borderBottomRightRadius: 20
                    }}>
                        <View style={{ width: "40%", paddingHorizontal: 10, paddingVertical: 10 }}>
                            <Image source={require('../assets/p3.jpg')}
                                resizeMode="cover"
                                style={{
                                    width: "100%",
                                    height: 100,
                                    // borderRadius: 10
                                    borderTopLeftRadius: 20,
                                    // borderBottomLeftRadius:20
                                    borderBottomRightRadius: 20
                                }}
                            />
                        </View>

                        <View style={{ width: "60%", justifyContent: "center", alignItems: "center", paddingHorizontal: 10 }}>
                            <Text style={{ color: "#000", fontSize: responsiveFontSize(1.7), textAlign: "justify",fontWeight:"400" }}>
                                To work for the achievement of total literacy and for building of mass awareness amongst the people for attainment of self-reliance.
                            </Text>
                        </View>
                    </View>
                </View>

                <View style={{ marginHorizontal: 10, marginTop: 5 }}>
                    <View style={{
                        width: "100%",
                        flexDirection: "row",
                        backgroundColor: "#e3e3e3",
                        height: 120,
                        // borderWidth:0.25,
                        borderTopRightRadius: 20,
                        borderBottomLeftRadius: 20
                    }}>
                        <View style={{ width: "60%", justifyContent: "center", alignItems: "center", paddingHorizontal: 10 }}>
                            <Text style={{ color: "#000", fontSize: responsiveFontSize(1.7), textAlign: "justify",fontWeight:"400" }}>
                                To imbue in the mind of the people the spirit of patriotism and brotherhood.
                            </Text>
                        </View>

                        <View style={{ width: "40%", paddingHorizontal: 10, paddingVertical: 10 }}>
                            <Image source={require('../assets/p4.jpg')}
                                resizeMode="cover"
                                style={{
                                    width: "100%",
                                    height: 100,
                                    // borderRadius: 10
                                    borderTopRightRadius: 20,
                                    borderBottomLeftRadius: 20
                                }}
                            />
                        </View>
                    </View>
                </View>

                <View style={{ marginHorizontal: 10, marginTop: 5 }}>
                    <View style={{
                        width: "100%",
                        flexDirection: "row",
                        backgroundColor: "#e3e3e3",
                        height: 120,
                        // borderWidth:0.25,
                        borderTopLeftRadius: 20,
                        borderBottomRightRadius: 20
                    }}>
                        <View style={{ width: "40%", paddingHorizontal: 10, paddingVertical: 10 }}>
                            <Image source={require('../assets/p7.jpg')}
                                resizeMode="cover"
                                style={{
                                    width: "100%",
                                    height: 100,
                                    // borderRadius: 10
                                    borderTopLeftRadius: 20,
                                    // borderBottomLeftRadius:20
                                    borderBottomRightRadius: 20
                                }}
                            />
                        </View>

                        <View style={{ width: "60%", justifyContent: "center", alignItems: "center", paddingHorizontal: 10 }}>
                            <Text style={{ color: "#000", fontSize: responsiveFontSize(1.7), textAlign: "justify",fontWeight:"400" }}>
                                To work for building linkages between literacy and other development processes.
                            </Text>
                        </View>
                    </View>
                </View>

                <View style={{ marginHorizontal: 10, marginTop: 5 }}>
                    <View style={{
                        width: "100%",
                        flexDirection: "row",
                        backgroundColor: "#e3e3e3",
                        height: 120,
                        // borderWidth:0.25,
                        borderTopRightRadius: 20,
                        borderBottomLeftRadius: 20
                    }}>


                        <View style={{ width: "60%", justifyContent: "center", alignItems: "center", paddingHorizontal: 10 }}>
                            <Text style={{ color: "#000", fontSize: responsiveFontSize(1.7), textAlign: "justify",fontWeight:"400" }}>
                                To work for the welfare of children, universal of elementary education.
                            </Text>
                        </View>

                        <View style={{ width: "40%", paddingHorizontal: 10, paddingVertical: 10 }}>
                            <Image source={require('../assets/p8.jpg')}
                                resizeMode="cover"
                                style={{
                                    width: "100%",
                                    height: 100,
                                    // borderRadius: 10
                                    borderTopRightRadius: 20,
                                    borderBottomLeftRadius: 20
                                }}
                            />
                        </View>
                    </View>
                </View>

                <View style={{ marginHorizontal: 10, marginTop: 5 }}>
                    <View style={{
                        width: "100%",
                        flexDirection: "row",
                        backgroundColor: "#e3e3e3",
                        height: 120,
                        // borderWidth:0.25,
                        borderTopLeftRadius: 20,
                        borderBottomRightRadius: 20
                    }}>
                        <View style={{ width: "40%", paddingHorizontal: 10, paddingVertical: 10 }}>
                            <Image source={require('../assets/p5.jpg')}
                                resizeMode="cover"
                                style={{
                                    width: "100%",
                                    height: 100,
                                    // borderRadius: 10
                                    borderTopLeftRadius: 20,
                                    // borderBottomLeftRadius:20
                                    borderBottomRightRadius: 20
                                }}
                            />
                        </View>

                        <View style={{ width: "60%", justifyContent: "center", alignItems: "center", paddingHorizontal: 10 }}>
                            <Text style={{ color: "#000", fontSize: responsiveFontSize(1.7), textAlign: "justify",fontWeight:"400" }}>
                                To work in such way that the spirit of peoples movement is preserved and strengthened.
                            </Text>
                        </View>
                    </View>
                </View>

                <View style={{ marginHorizontal: 10, marginTop: 5 }}>
                    <View style={{
                        width: "100%",
                        flexDirection: "row",
                        backgroundColor: "#e3e3e3",
                        height: 120,
                        // borderWidth:0.25,
                        borderTopRightRadius: 20,
                        borderBottomLeftRadius: 20
                    }}>


                        <View style={{ width: "60%", justifyContent: "center", alignItems: "center", paddingHorizontal: 10 }}>
                            <Text style={{ color: "#000", fontSize: responsiveFontSize(1.7), textAlign: "justify",fontWeight:"400" }}>
                                To take all such other steps and measures as may be necessary for the fulfilment of the aims and objectives of the Samiti.
                            </Text>
                        </View>

                        <View style={{ width: "40%", paddingHorizontal: 10, paddingVertical: 10 }}>
                            <Image source={require('../assets/p6.jpg')}
                                resizeMode="cover"
                                style={{
                                    width: "100%",
                                    height: 100,
                                    // borderRadius: 10
                                    borderTopRightRadius: 20,
                                    borderBottomLeftRadius: 20
                                }}
                            />
                        </View>
                    </View>
                </View>
                <View style={{ marginBottom: 10 }}></View>
            </ScrollView>
        </View>
    )
}

export default memo(OurObjectives)

const styles = StyleSheet.create({})
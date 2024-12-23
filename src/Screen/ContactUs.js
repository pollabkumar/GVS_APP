import {
    StyleSheet,
    Text,
    View,
    StatusBar,
    TouchableOpacity,
    Image,
    ScrollView,
    TextInput,
    ActivityIndicator,
    ToastAndroid

} from 'react-native'
import React, { useState,memo } from 'react'
import Back from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import Location from 'react-native-vector-icons/dist/Entypo';
import Call from 'react-native-vector-icons/dist/Fontisto';
import Email from 'react-native-vector-icons/dist/MaterialCommunityIcons';
import ContactIcon from 'react-native-vector-icons/FontAwesome5';
import {
    responsiveHeight,
    responsiveWidth,
    responsiveFontSize
} from "react-native-responsive-dimensions";
import axios from 'axios'
const ContactUs = () => {
    const [statusBarStyle, setStatusBarStyle] = useState();
    const navigation = useNavigation();
    const [name, setname] = useState("")
    const [mobile, setmobile] = useState("")
    const [email, setemail] = useState("")
    const [remark, setremark] = useState("")
    const [error, seterror] = useState()
    const [load, setload] = useState(false)

    const handleSubmit = async () => {
        // console.log('khjkhjkhjkhjkhjhjhj')
        setload(true)
        try {
            const result = await axios
                .post(
                    // `https://www.webinfoghy.co.in/gvs/public/api/app/contact/submit`,
                    `https://gvsassam.org/api/app/contact/submit`,
                    {
                        name: name && name,
                        mobile: mobile && mobile,
                        email: email && email,
                        message: remark && remark,

                    }
                )
                .then(res => {
                    console.log(res, 'contact uss');
                    if (res.data.error_code == true) {
                        setload(false)
                        seterror(res.data.error_message)
                        // console.log(res, 'khkhkhkhkhkhkhhk');
                    } else {
                        setload(false)
                        navigation.navigate('HomePage')
                        setname("")
                        setemail("")
                        setmobile("")
                        setremark("")
                        // emptyy()
                        Toast()
                    }
                    // setload(false)
                });
            // console.log(result);
        } catch (error) {
            console.log(error)
        }
    };


    const Toast = () => {
        ToastAndroid.showWithGravityAndOffset(
            'Contact Data Submitted Successfully',
            ToastAndroid.LONG,
            ToastAndroid.BOTTOM,
            25,
            50,

        );
    };


    return (
        <View style={{ flex: 1, backgroundColor: "#e6eaed" }}>
            <StatusBar
                animated={true}
                backgroundColor="#000"
                barStyle={statusBarStyle}
            />


            {/* 1st */}

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
                            Contact Info
                        </Text>
                    </View>
                </View>
            </View>

            <View style={{ marginHorizontal: 5, marginTop: 7 }}>
                {/* <View style={{ width: "100%", backgroundColor: "#bdbdbd", height: "auto", elevation: 5, borderRadius: 10, paddingVertical: 10 }}> */}
                <View style={{ width: "100%", backgroundColor: "#e6eaed", height: "auto", paddingHorizontal: 2 }}>

                    <View style={{
                        paddingHorizontal: 10,
                        borderRadius: 15,
                        // justifyContent: "center",
                        paddingVertical: 8,
                        elevation: 3,
                        backgroundColor: "#e6eaed",
                        marginHorizontal: 3,
                        flexDirection:"row",
                        alignItems:"center"
                    }}>
                        <View>
                            <ContactIcon name="align-left"
                                style={{ color: "#000" }}
                            />
                        </View>
                        <Text style={{ 
                            color: "#000", 
                            fontSize: responsiveFontSize(2.2),
                            fontWeight: "300", 
                            borderColor: "#000", 
                            paddingLeft:10
                            }}>Contact Information</Text>
                    </View>


                    <View style={{ paddingHorizontal: 4 }}>

                        <View style={{ padding: 7, flexDirection: "row", alignItems: "center", paddingTop: 15 }}>
                            <View style={{ backgroundColor: "#fff", borderRadius: 20 }}>
                                <Email name="email-variant" style={{ color: "#000", fontSize: responsiveFontSize(2), padding: 5 }} />
                            </View>

                            <View style={{ paddingLeft: 5 }}>
                                <Text style={{ color: "#000", fontSize: responsiveFontSize(2),fontWeight:"400"}}>needhelp@company.com</Text>
                            </View>

                        </View>

                        <View style={{ padding: 7, flexDirection: "row", alignItems: "center", }}>
                            <View style={{ backgroundColor: "#fff", borderRadius: 20, paddingHorizontal: 8, paddingVertical: 6 }}>
                                <Call name="mobile-alt" style={{ color: "#000", fontSize: responsiveFontSize(1.7), }} />
                            </View>

                            <View style={{ paddingLeft: 5 }}>
                                <Text style={{ color: "#000", fontSize: responsiveFontSize(1.9),fontWeight:"400"}}>+ 1 (307) 776-0608</Text>
                            </View>

                        </View>

                        <View style={{ padding: 7, flexDirection: "row", alignItems: "center", }}>
                            <View style={{ backgroundColor: "#fff", borderRadius: 20 }}>
                                <Location name="location" style={{ color: "#000", fontSize: responsiveFontSize(2), padding: 5 }} />
                            </View>

                            <View style={{ paddingLeft: 5, paddingBottom: 10 }}>
                                <Text style={{ color: "#000", fontSize: responsiveFontSize(1.9),fontWeight:"400" }}>Gopinath Bordoloi Rd,Opp. Rabindra Bhawan,Guwahati, Assam.</Text>
                            </View>

                        </View>
                    </View>


                </View>
            </View>

            {/* 3st */}

            <View style={{
                flex: 2,
                backgroundColor: '#000',
                width: "100%",
                padding: 19,
                borderTopRightRadius: 20,
                borderTopLeftRadius: 20
            }}>

                <ScrollView
                    showsVerticalScrollIndicator={false}
                >

                    <View style={{ alignItems: "center", paddingTop: 10, width: "100%", paddingLeft: 10 }}>
                        <Text style={{ color: "#F29D38", fontSize: responsiveFontSize(2.15), fontWeight: "600" }}>
                            {/* Let’s Talk ! */}
                            Connect With Us !
                        </Text>
                    </View>

                    <View style={{ paddingTop: responsiveHeight(5) }}>
                        <Text style={{ color: "#fff", fontSize: responsiveFontSize(2), fontStyle: 'italic', fontWeight: "400" }}>
                            Name
                        </Text>
                        <TextInput
                            placeholder="Enter Your Name"
                            placeholderTextColor={"#fff"}
                            value={name}
                            onChangeText={(text) => setname(text)}
                            style={{
                                width: '100%',
                                borderBottomWidth: 0.29,
                                borderBottomColor: "#fff",
                                marginTop: 5,

                                padding: 0,
                                fontSize: responsiveFontSize(1.85),
                                color: '#fff',
                                fontWeight: '200',
                                fontStyle: 'italic'
                            }}
                        />
                        {
                            error && error.name ?
                                <View style={{ paddingTop: 5 }}>
                                    <Text style={{ color: "red", fontSize: responsiveFontSize(1.85) }}>{error && error?.name}</Text>
                                </View>
                                : ""
                        }

                    </View>


                    {
                        load && load ?
                            <View style={{
                                marginVertical: "55%",
                                alignItems: "center",
                                // justifyContent: "center",
                                position: "absolute",
                                width: "100%",
                            }}>
                                <View style={{
                                    backgroundColor: "#fff",
                                    borderRadius: 80,
                                    alignItems: "center",
                                    paddingVertical: 10,
                                    paddingHorizontal: 10
                                }}>
                                    <ActivityIndicator size="small" color="#000" animating={load} />
                                    {/* <Text style={{ fontSize: responsiveWidth(2.4), color: "red" }}>Please Wait...</Text> */}

                                </View>
                            </View>
                            : ""

                    }




                    <View style={{ paddingTop: 15 }}>
                        <Text style={{ color: "#fff", fontSize: responsiveFontSize(2), fontWeight: "400", fontStyle: 'italic' }}>
                            Email
                        </Text>
                        <TextInput
                            placeholder="Enter Email Id"
                            placeholderTextColor={"#fff"}
                            value={email}
                            onChangeText={(text) => setemail(text)}
                            style={{
                                width: '100%',
                                borderBottomWidth: 0.29,
                                borderBottomColor: "#fff",
                                marginTop: 5,

                                padding: 0,
                                fontSize: responsiveFontSize(1.85),
                                color: '#fff',
                                fontWeight: '200',
                                fontStyle: 'italic'
                            }}
                        />
                        {
                            error && error.email ?
                                <View style={{ paddingTop: 5 }}>
                                    <Text style={{ color: "red", fontSize: responsiveFontSize(1.85) }}>{error && error?.email}</Text>
                                </View>
                                : ""
                        }

                    </View>

                    <View style={{ paddingTop: 15 }}>
                        <Text style={{ color: "#fff", fontSize: responsiveFontSize(2), fontWeight: "400", fontStyle: 'italic' }}>
                            Mobile Number
                        </Text>
                        <TextInput
                            placeholder="Enter Your Mobile Number"
                            placeholderTextColor={"#fff"}
                            maxLength={10}
                            keyboardType="numeric"
                            value={mobile}
                            onChangeText={(text) => setmobile(text)}
                            style={{
                                width: '100%',
                                borderBottomWidth: 0.29,
                                borderBottomColor: "#fff",
                                marginTop: 5,
                                padding: 0,
                                fontSize: responsiveFontSize(1.85),
                                color: '#fff',
                                fontWeight: '200',
                                fontStyle: 'italic'
                            }}
                        />
                        {
                            error && error.mobile ?
                                <View style={{ paddingTop: 5 }}>
                                    <Text style={{ color: "red", fontSize: responsiveFontSize(1.85) }}>{error && error?.mobile}</Text>
                                </View>
                                : ""
                        }
                    </View>


                    <View style={{ paddingTop: 15 }}>
                        <Text style={{ color: "#fff", fontSize: responsiveFontSize(2), fontWeight: "400", fontStyle: 'italic' }}>
                            Remark
                        </Text>
                        <TextInput
                            placeholder="write something"
                            placeholderTextColor={"#fff"}
                            value={remark}
                            onChangeText={(text) => setremark(text)}
                            style={{
                                width: '100%',
                                borderBottomWidth: 0.29,
                                borderBottomColor: "#fff",
                                marginTop: 5,

                                padding: 0,
                                fontSize: responsiveFontSize(1.85),
                                color: '#fff',
                                fontWeight: '200',
                                fontStyle: 'italic'
                            }}
                        />
                        {
                            error && error.message ?
                                <View style={{ paddingTop: 5 }}>
                                    <Text style={{ color: "red", fontSize: responsiveFontSize(1.85) }}>
                                        The remark field is required
                                    </Text>
                                </View>
                                : ""
                        }
                    </View>


                    <TouchableOpacity
                        style={{
                            marginTop: responsiveHeight(6),
                            // marginBottom:5,
                            alignItems: "center",
                            justifyContent: "center",

                        }}>
                        <TouchableOpacity
                            onPress={() => handleSubmit()}
                            style={{
                                backgroundColor: '#F29D38',
                                borderRadius: 10,
                                padding: 7,
                                alignItems: "center",
                                width: "100%",
                                justifyContent: "center",

                            }}>
                            <Text style={{ color: '#fff', fontSize: responsiveFontSize(2), paddingHorizontal: 35 }}>Submit</Text>
                        </TouchableOpacity>
                    </TouchableOpacity>

                    <View style={{ marginTop: 15 }}></View>

                </ScrollView>
            </View>
        </View >
    )
}

export default memo(ContactUs)

const styles = StyleSheet.create({})
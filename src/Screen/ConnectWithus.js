import {
    StyleSheet,
    Text,
    View,
    TextInput,
    TouchableOpacity,
    StatusBar,
    ToastAndroid,
    ScrollView,
    ActivityIndicator
} from 'react-native'
import React, { useState, memo, useEffect } from 'react'
import {
    responsiveHeight,
    responsiveWidth,
    responsiveFontSize
} from "react-native-responsive-dimensions";
import { useNavigation } from '@react-navigation/native';
import axios from 'axios'
const ConnectWithus = () => {
    const [statusBarStyle, setStatusBarStyle] = useState();
    const navigation = useNavigation();
    const [name, setname] = useState("")
    const [mobile, setmobile] = useState("")
    const [email, setemail] = useState("")
    const [remark, setremark] = useState("")
    const [error, seterror] = useState("")
    const [load, setload] = useState(false)

    const handleSubmit = async () => {
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
                    console.log(res, 'contactuss');
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
                        Toast()
                    }
                   
                });
        } catch (error) {

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
        <View style={{ flex: 1, backgroundColor: "#000", justifyContent: "center" }}>
            <StatusBar
                animated={true}
                backgroundColor="#000"
                barStyle={statusBarStyle}
            />



            {/* loaderrrrrrrr */}
            {
                load && load ?
                    <View style={{
                        marginVertical: "50%",
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
            <View style={{}}>
                <View style={{ width: "100%", paddingHorizontal: 15 }}>

                    <View style={{ alignItems: "center" }}>
                        <Text style={{ color: "#F29D38", fontSize: responsiveFontSize(2.8), fontWeight: "400", fontStyle: 'italic' }}>Reach Us !</Text>
                    </View>

                    <View style={{ paddingTop: responsiveHeight(5) }}>
                        <Text style={{ color: "#F29D38", fontSize: responsiveFontSize(2), fontWeight: "200", fontStyle: 'italic' }}>
                            Name
                        </Text>
                        <TextInput
                            placeholder="Enter Your Name"
                            placeholderTextColor={'#fff'}
                            value={name}
                            onChangeText={(text) => setname(text)}
                            style={{
                                width: '100%',
                                borderBottomWidth: 0.29,
                                borderBottomColor: "#a1bdc8",
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

                    <View style={{ paddingTop: 10 }}>
                        <Text style={{ color: "#F29D38", fontSize: responsiveFontSize(2), fontWeight: "200", fontStyle: 'italic' }}>
                            Mobile Number
                        </Text>
                        <TextInput
                            placeholder="Enter Your Mobile Number"
                            placeholderTextColor={'#fff'}
                            value={mobile}
                            maxLength={10}
                            keyboardType="numeric"
                            onChangeText={(text) => setmobile(text)}
                            style={{
                                width: '100%',
                                borderBottomWidth: 0.29,
                                borderBottomColor: "#a1bdc8",
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

                    <View style={{ paddingTop: 10 }}>
                        <Text style={{ color: "#F29D38", fontSize: responsiveFontSize(2), fontWeight: "200", fontStyle: 'italic' }}>
                            Email
                        </Text>
                        <TextInput
                            placeholder="Enter Email Id"
                            placeholderTextColor={'#fff'}
                            value={email}
                            onChangeText={(text) => setemail(text)}
                            style={{
                                width: '100%',
                                borderBottomWidth: 0.29,
                                borderBottomColor: "#a1bdc8",
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

                    <View style={{ paddingTop: 10 }}>
                        <Text style={{ color: "#F29D38", fontSize: responsiveFontSize(2), fontWeight: "200", fontStyle: 'italic' }}>
                            Remarks
                        </Text>
                        <TextInput
                            placeholder="write something"
                            placeholderTextColor={'#fff'}
                            value={remark}
                            onChangeText={(text) => setremark(text)}
                            style={{
                                width: '100%',
                                borderBottomWidth: 0.29,
                                borderBottomColor: "#a1bdc8",
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
                        // onPress={()=>handleSubmit()}
                        style={{
                            marginTop: responsiveHeight(10),
                            alignItems: "center",
                            justifyContent: "center",
                            width: "100%",
                            paddingHorizontal: 10

                        }}>
                        <TouchableOpacity
                            onPress={() => handleSubmit()}
                            // onPress={() => navigation.navigate('Login')}
                            style={{
                                backgroundColor: '#F29D38', borderRadius: 15,
                                padding: 10,


                                alignItems: "center",
                                width: "100%",
                                justifyContent: "center",

                            }}>
                            <Text style={{ color: '#fff', fontSize: responsiveFontSize(2), paddingHorizontal: 35 }}>Submit</Text>
                        </TouchableOpacity>
                    </TouchableOpacity>

                </View>
            </View>
        </View>
    )
}

export default memo(ConnectWithus)

const styles = StyleSheet.create({})
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
import React, { useState, memo } from 'react'
import Back from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import Checkedicon from 'react-native-vector-icons/dist/Ionicons';
import Droppp from 'react-native-vector-icons/dist/AntDesign';
import DatePicker from 'react-native-date-picker'
import ContactIcon from 'react-native-vector-icons/FontAwesome5';
import SelectDropdown from 'react-native-select-dropdown'
import {
    responsiveHeight,
    responsiveWidth,
    responsiveFontSize
} from "react-native-responsive-dimensions";
import axios from 'axios'
import Calender from 'react-native-vector-icons/dist/AntDesign';
const WorkWithUs = () => {
    const [statusBarStyle, setStatusBarStyle] = useState();
    const navigation = useNavigation();
    const [username, setusername] = useState("")
    const [mobile, setmobile] = useState("")
    const [email, setemail] = useState("")
    const [occupation, setoccupation] = useState("")
    const [adddress, setadddress] = useState("")
    const [workas, setworkas] = useState("")
    const [remark, setremark] = useState("")
    const [error, seterror] = useState(false)
    const [load, setload] = useState(false)
    const [open, setOpen] = useState(false);
    const [date, setDate] = useState(new Date())
    const [startdate, setstartdate] = useState("");
    const [usertype, setusertype] = useState(
        [
            {
                name: "An Intern"
            },
            {
                name: "a Volunteer"
            },
       
        ]

    );

    const handleSubmit = async () => {
        // console.log('khjkhjkhjkhjkhjhjhj')
        setload(true)
        try {
            const result = await axios
                .post(
                    // `https://gvs.webinfoghy.co.in/api/WorkWithUs/submit`,
                    `https://gvsassam.org/api/WorkWithUs/submit`,
                    {
                        name: username && username,
                        phone:mobile && mobile,
                        occupation:occupation && occupation,
                        work_as:workas && workas,
                        email:email && email,
                        dob:startdate && startdate,
                        address:adddress && adddress,
                        message:remark && remark

                    }
                )
                .then(res => {
                    console.log(res, '55555555555');
                    if(res.data.error_code == true){
                        seterror(res.data.error_message)
                        setload(false)
                    }else{
                        setload(false)
                        // navigation.navigate("HomePage")
                        Toast()
                        setusername("")
                        setmobile("")
                        setemail("")
                        setstartdate("")
                        setoccupation("")
                        setadddress("")
                        setworkas("")
                        setremark("")
                        seterror(false)
                    }
           
                });
            // console.log(result);
        } catch (error) {
            console.log(error)
        }
    };

    const Toast = () => {
        ToastAndroid.showWithGravityAndOffset(
            ' Form Submitted Successfully',
            ToastAndroid.LONG,
            ToastAndroid.BOTTOM,
            25,
            50,

        );
    };

    // console.log(username,mobile,email,occupation,adddress,startdate,workas,remark)
    return (
        <View style={{ flex: 1, backgroundColor: "#e6eaed" }}>
            <DatePicker
                modal
                open={open}
                date={date}
                title="Select Date"
                mode="date"
                onConfirm={date => {
                    // let formattedDate = date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate()
                    // setOpen(false);
                    const year = date.getFullYear();
                    const month = (date.getMonth() + 1).toString().padStart(2, '0');
                    const day = date.getDate().toString().padStart(2, '0');

                    const formattedDate = `${year}-${month}-${day}`;

                    setOpen(false);
                    setstartdate(formattedDate, console.log('lkikiki', formattedDate));
                    // setstartdate(date.toLocaleDateString('en-IN', {
                    //     year: 'numeric',
                    //     month: '2-digit',
                    //     day: '2-digit',
                    // }), console.log('lkikiki',date));
                }}
                onCancel={() => {
                    setOpen(false);
                }}
            />

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
                            Work With Us
                        </Text>
                    </View>
                </View>
            </View>

            <View style={{ marginHorizontal: 5, marginTop: 7 }}>
                {/* <View style={{ width: "100%", backgroundColor: "#bdbdbd", height: "auto", elevation: 5, borderRadius: 10, paddingVertical: 10 }}> */}
                <View style={{ width: "100%", backgroundColor: "#e6eaed", height: "auto", }}>

                    <View style={{
                        paddingHorizontal: 10,
                        borderRadius: 15,
                        // justifyContent: "center",
                        paddingVertical: 8,
                        elevation: 3,
                        backgroundColor: "#e6eaed",
                        marginHorizontal: 3,
                        flexDirection: "row",
                        alignItems: "center"
                    }}>
                        <View>
                            <ContactIcon name="align-left"
                                style={{ color: "#000" }}
                            />
                        </View>
                        <Text style={{
                            color: "#000",
                            fontSize: responsiveFontSize(2),
                            fontWeight: "500",
                            borderColor: "#000",
                            paddingLeft: 10
                        }}>Become a Volunteer / an Intern</Text>
                    </View>

                    <View style={{ width: "100%", alignItems: "center", paddingTop: 5 }}>
                        <Text style={{ color: "#000" }}>
                            Aliquam hendrerit a augue insu image pellentes que id erat quis sollicitud null mattis Ipsum is simply dummy typesetting industry. Alienum phaedrum torquatos nec eu.
                        </Text>
                    </View>


                    <View style={{ marginHorizontal: 10 }}>

                        <View style={{ flexDirection: "row", alignItems: "center", paddingTop: 15 }}>
                            <View style={{ backgroundColor: "#fff", borderRadius: 20 }}>
                                <Checkedicon name="checkmark-done-sharp" style={{ color: "#000", fontSize: responsiveFontSize(2), padding: 5 }} />
                            </View>

                            <View style={{ paddingLeft: 5 }}>
                                <Text style={{ color: "#000", fontSize: responsiveFontSize(2), fontWeight: "400" }}>Nsectetur cing do not elit.</Text>
                            </View>

                        </View>

                        <View style={{ flexDirection: "row", alignItems: "center", marginTop: 5 }}>
                            <View style={{ backgroundColor: "#fff", borderRadius: 20, paddingHorizontal: 8, paddingVertical: 6 }}>
                                <Checkedicon name="checkmark-done-sharp" style={{ color: "#000", fontSize: responsiveFontSize(1.7), }} />
                            </View>

                            <View style={{ paddingLeft: 5 }}>
                                <Text style={{ color: "#000", fontSize: responsiveFontSize(1.9), fontWeight: "400" }}>Suspe ndisse suscipit sagittis in leo.</Text>
                            </View>

                        </View>

                        <View style={{ flexDirection: "row", alignItems: "center", marginTop: 5, marginBottom: 10 }}>
                            <View style={{ backgroundColor: "#fff", borderRadius: 20 }}>
                                <Checkedicon name="checkmark-done-sharp" style={{ color: "#000", fontSize: responsiveFontSize(2), padding: 5 }} />
                            </View>

                            <View style={{ paddingLeft: 5, paddingBottom: 10 }}>
                                <Text style={{ color: "#000", fontSize: responsiveFontSize(1.9), fontWeight: "400" }}>Suspe ndisse suscipit sagittidsdss in leo.</Text>
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

                    <View style={{ alignItems: "center", paddingTop: 1, width: "100%", paddingLeft: 10 }}>
                        <Text style={{ color: "#F29D38", fontSize: responsiveFontSize(2.15), fontWeight: "300" }}>
                            {/* Let’s Talk ! */}
                            Fill the Form to Join Us !
                        </Text>
                    </View>

                    <View style={{ paddingTop: responsiveHeight(2) }}>
                        <Text style={{ color: "#fff", fontSize: responsiveFontSize(2), fontStyle: 'italic', fontWeight: "400" }}>
                            Name
                        </Text>
                        <TextInput
                            placeholder="Enter Your Name"
                            placeholderTextColor={"#fff"}
                            value={username}
                            onChangeText={(text) => setusername(text)}
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
                            error && error ?
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
                            error && error ?
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
                            error && error ?
                                <View style={{ paddingTop: 5 }}>
                                    <Text style={{ color: "red", fontSize: responsiveFontSize(1.85) }}>{error && error?.phone}</Text>
                                </View>
                                : ""
                        }
                    </View>


                    <View style={{ paddingTop: 15 }}>
                        <Text style={{ color: "#fff", fontSize: responsiveFontSize(2), fontWeight: "400", fontStyle: 'italic' }}>
                            Occupation
                        </Text>
                        <TextInput
                            placeholder="Enter Occupation name"
                            placeholderTextColor={"#fff"}
                            value={occupation}
                            onChangeText={(text) => setoccupation(text)}
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
                            error && error ?
                                <View style={{ paddingTop: 5 }}>
                                    <Text style={{ color: "red", fontSize: responsiveFontSize(1.85) }}>
                                    {error && error?.occupation}
                                    </Text>
                                </View>
                                : ""
                        }
                    </View>

                    <View style={{ paddingTop: 15 }}>
                        <Text style={{ color: "#fff", fontSize: responsiveFontSize(2), fontWeight: "400", fontStyle: 'italic' }}>
                            Address
                        </Text>
                        <TextInput
                            placeholder="Enter Address"
                            placeholderTextColor={"#fff"}
                            value={adddress}
                            onChangeText={(text) => setadddress(text)}
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
                        {/* {
                            error && error.message ?
                                <View style={{ paddingTop: 5 }}>
                                    <Text style={{ color: "red", fontSize: responsiveFontSize(1.85) }}>
                                        The remark field is required
                                    </Text>
                                </View>
                                : ""
                        } */}
                    </View>

                    {/*  Date of Birth */}
                    <View style={{ width: "100%", paddingTop: 12 }}>
                        <Text style={{ color: '#fff', fontSize: responsiveFontSize(2), fontWeight: "400" }}>
                            Date of Birth
                        </Text>

                        <TouchableOpacity
                            onPress={() => setOpen(true)}
                            style={{
                                borderWidth: 1,
                                borderRadius: 12,
                                // padding: 10,
                                // marginHorizontal: 9,
                                borderColor: '#fff',
                                marginTop: 12,
                                justifyContent: "space-between",
                                flexDirection: "row",
                                paddingVertical: 10,
                                paddingHorizontal: 10,
                                // width:"100%"
                            }}>
                            <View style={{ flexDirection: "row", fontSize: responsiveFontSize(1.85), alignItems: "center" }}>
                                <Calender name="calendar" style={{ color: "#fff", fontSize: responsiveFontSize(2) }} />
                                {
                                    startdate ?

                                        <Text style={{ color: '#fff', fontSize: responsiveFontSize(1.85), paddingLeft: 5 }}>
                                            {startdate && startdate.toString().replaceAll('/', '-')}
                                        </Text> :
                                        <Text style={{fontWeight: "400" , color: '#fff', fontSize: responsiveFontSize(1.85), paddingLeft: 5 }}>
                                            Select Date
                                        </Text>
                                }
                            </View>

                            <View style={{}}>
                                <Droppp name="caretdown" style={{ color: "#000", fontSize: responsiveFontSize(1.85) }} />
                            </View>
                        </TouchableOpacity>


                    </View>

                    <View style={{ width: "100%",  justifyContent: "center",marginTop:10 }}>
                        <View style={{  }}>
                            <Text style={{ color: "#fff" }}>
                                Work as
                            </Text>
                        </View>

                        <View style={{ width: "100%",paddingTop:5}}>
                            <SelectDropdown
                                data={usertype && usertype.map((item) => {
                                    return item.name
                                })}
                                onSelect={(selectedItem, index) => {
                                    setworkas(selectedItem)
                                    console.log("selectedItemselectedItem", selectedItem)
                                }}
                                buttonTextAfterSelection={(selectedItem, index) => {
                                    return selectedItem;
                                }}
                                buttonStyle={styles.dropdown1BtnStyle}
                                buttonTextStyle={styles.dropdown4BtnTxtStyle}
                                rowTextForSelection={(item, index) => {
                                    return item;
                                }}
                            />
                        </View>

                        {
                            error && error ?
                                <View style={{ paddingTop: 5 }}>
                                    <Text style={{ color: "red", fontSize: responsiveFontSize(1.85) }}>
                                    {error && error?.work_as}

                                    </Text>
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
                        {/* {
                            error && error.message ?
                                <View style={{ paddingTop: 5 }}>
                                    <Text style={{ color: "red", fontSize: responsiveFontSize(1.85) }}>
                                        The remark field is required
                                    </Text>
                                </View>
                                : ""
                        } */}
                    </View>

                    <TouchableOpacity
                        style={{
                            marginTop: responsiveHeight(4),
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

                    {/* <View style={{ marginTop: 10}}></View> */}

                </ScrollView>
            </View>
        </View>
    )
}

export default WorkWithUs

const styles = StyleSheet.create({
    // Add your styles here
    icon: {
        color: '#fff',
        fontSize: 20,
        marginHorizontal: 5,
    },
    clubContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 10,
    },
    input: {
        flex: 1,
        borderBottomWidth: 0.29,
        borderBottomColor: '#fff',
        marginVertical: 5,
        padding: 0,
        fontSize: 16,
        color: '#000',
        fontWeight: '300',
    },
    datePicker: {
        flex: 1,
        marginVertical: 5,
    },
    dropdown1BtnStyle: {
        width: "100%",
        height: 35,
        borderRadius: 10,
        marginTop: 5

    },
    dropdown4BtnTxtStyle: {
        fontSize: responsiveFontSize(1.8),
        textAlign: 'left'
    }
});


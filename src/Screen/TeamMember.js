
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

} from 'react-native'
import React, { useState, useEffect, memo } from 'react'
import {
    responsiveHeight,
    responsiveWidth,
    responsiveFontSize
} from "react-native-responsive-dimensions";
import Back from 'react-native-vector-icons/Ionicons';
import Usernameicon from 'react-native-vector-icons/FontAwesome';
import Designationicon from 'react-native-vector-icons/FontAwesome5';
import Locationicon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
const devicewidth = Dimensions.get('window').width

const TeamMember = () => {
    const [statusBarStyle, setStatusBarStyle] = useState();
    const navigation = useNavigation();
    const [load, setload] = useState(false);
    const [memberdetails, setmemberdetails] = useState();
    const [refreshing, setRefreshing] = useState(false);
    return (
        <View style={{
            flex: 1,
            backgroundColor: "#fff",
            //  backgroundColor: "#fff" 
        }}>
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
                            Executive Members
                        </Text>
                    </View>
                </View>
            </View>

            <ScrollView
                   showsVerticalScrollIndicator={false}
                   showsHorizontalScrollIndicator={false}
            >

                {/* Sri Tapan Kumar Sarma */}

                <View style={{}}>
                    <View style={{ marginHorizontal: 10, marginTop: 5 }}>
                        <View style={{
                            width: "100%",
                            backgroundColor: "#e0e0e0",
                            flexDirection: "row",
                            height: 130,
                            borderRadius: 20,
                            elevation: 3

                        }}>
                            <View style={{ width: "32%", alignItems: "center", justifyContent: 'center' }}>
                                <Image
                                    source={require("../membersassets/tapan.jpg")}
                                    resizeMode="stretch"
                                    style={{ width: "90%", height: "90%", borderRadius: 20 }}
                                />
                            </View>
                            <View style={{ width: "68%", alignItems: "center", justifyContent: 'center' }}>
                                <View style={{
                                    width: "100%",
                                    height: "90%",
                                    // backgroundColor: "red",
                                    borderRadius: 10,
                                    paddingTop: 8
                                }}>
                                    <View style={{ flexDirection: "row", }}>
                                        <View style={{ alignItems: "flex-start", width: "10%", padding: 2, backgroundColor: "#a7a6ab", alignItems: "center", borderRadius: 60, elevation: 2 }}>
                                            <Usernameicon
                                                name="user"
                                                style={{
                                                    color: "#000",
                                                    fontSize: responsiveFontSize(2.3),
                                                    // backgroundColor: "#000",
                                                    // paddingHorizontal: 5,
                                                    borderRadius: 60,
                                                    // paddingVertical: 3,

                                                }} />

                                        </View>
                                        <View style={{
                                            width: "90%",
                                            // backgroundColor:"red",
                                        }}>
                                            <Text style={{
                                                color: "#000",
                                                fontSize: responsiveFontSize(1.8),
                                                paddingLeft: 5,
                                                fontWeight: "500"
                                            }}>Sri Tapan Kumar Sarma</Text>
                                        </View>
                                    </View>

                                    <View style={{ flexDirection: "row", alignItems: "center", paddingTop: 5 }}>
                                        <View style={{ elevation: 2, alignItems: "flex-start", width: "10%", padding: 2, backgroundColor: "#a7a6ab", alignItems: "center", borderRadius: 60 }}>
                                            <Designationicon
                                                name="user-tie"
                                                style={{
                                                    color: "#000",
                                                    fontSize: responsiveFontSize(2),
                                                    backgroundColor: "#a7a6ab",
                                                    // paddingHorizontal: 5,
                                                    borderRadius: 60,
                                                    paddingVertical: 2,

                                                }} />

                                        </View>

                                        <View style={{
                                            width: "90%",
                                            // backgroundColor:"red",
                                        }}>

                                            <Text style={{
                                                color: "#000",
                                                fontSize: responsiveFontSize(1.8),
                                                paddingLeft: 5,
                                                fontWeight: "500"
                                            }}>President </Text>
                                        </View>

                                    </View>

                                    <View style={{ flexDirection: "row", alignItems: "center", paddingTop: 5, width: "90%" }}>
                                        <View style={{ elevation: 2, alignItems: "flex-start", width: "11%", padding: 2, backgroundColor: "#a7a6ab", alignItems: "center", borderRadius: 60 }}>
                                            <Locationicon
                                                name="location"
                                                style={{
                                                    color: "#000",
                                                    fontSize: responsiveFontSize(2),
                                                    // backgroundColor: "#a7a6ab",
                                                    // paddingHorizontal: 5,
                                                    borderRadius: 60,
                                                    paddingVertical: 2,

                                                }} />
                                        </View>
                                        <View style={{
                                            width: "90%",
                                            // backgroundColor:"red",
                                        }}>
                                            <Text style={{
                                                color: "#000",
                                                fontSize: responsiveFontSize(1.8),
                                                paddingLeft: 5,
                                                fontWeight: "500"
                                            }}>Arun Apartment, Pub Sarania Road, Chandmari, Guwahati-3</Text>
                                        </View>
                                    </View>
                                </View>
                            </View>

                        </View>
                    </View>
                </View>

                {/*Sri Ananta Charan Sarma */}
                <View style={{}}>
                    <View style={{ marginHorizontal: 10, marginTop: 5 }}>
                        <View style={{
                            width: "100%",
                            backgroundColor: "#e0e0e0",
                            flexDirection: "row",
                            height: 130,
                            borderRadius: 20,
                            elevation: 3

                        }}>
                            <View style={{ width: "32%", alignItems: "center", justifyContent: 'center' }}>
                                <Image
                                    source={require("../membersassets/anantasarma.jpg")}
                                    resizeMode="stretch"
                                    style={{ width: "90%", height: "90%", borderRadius: 20 }}
                                />
                            </View>
                            <View style={{ width: "68%", alignItems: "center", justifyContent: 'center' }}>
                                <View style={{
                                    width: "100%",
                                    height: "90%",
                                    // backgroundColor: "red",
                                    borderRadius: 10,
                                    paddingTop: 8
                                }}>
                                    <View style={{ flexDirection: "row", }}>
                                        <View style={{ alignItems: "flex-start", width: "10%", padding: 2, backgroundColor: "#a7a6ab", alignItems: "center", borderRadius: 60, elevation: 2 }}>
                                            <Usernameicon
                                                name="user"
                                                style={{
                                                    color: "#000",
                                                    fontSize: responsiveFontSize(2.3),
                                                    // backgroundColor: "#000",
                                                    // paddingHorizontal: 5,
                                                    borderRadius: 60,
                                                    // paddingVertical: 3,

                                                }} />

                                        </View>
                                        <View style={{
                                            width: "90%",
                                            // backgroundColor:"red",
                                        }}>
                                            <Text style={{
                                                color: "#000",
                                                fontSize: responsiveFontSize(1.8),
                                                paddingLeft: 5,
                                                fontWeight: "500"
                                            }}>Sri Ananta Charan Sarma</Text>
                                        </View>
                                    </View>

                                    <View style={{ flexDirection: "row", alignItems: "center", paddingTop: 9 }}>
                                        <View style={{ elevation: 2, alignItems: "flex-start", width: "10%", padding: 2, backgroundColor: "#a7a6ab", alignItems: "center", borderRadius: 60 }}>
                                            <Designationicon
                                                name="user-tie"
                                                style={{
                                                    color: "#000",
                                                    fontSize: responsiveFontSize(2),
                                                    backgroundColor: "#a7a6ab",
                                                    // paddingHorizontal: 5,
                                                    borderRadius: 60,
                                                    paddingVertical: 2,

                                                }} />

                                        </View>

                                        <View style={{
                                            width: "90%",
                                            // backgroundColor:"red",
                                        }}>

                                            <Text style={{
                                                color: "#000",
                                                fontSize: responsiveFontSize(1.8),
                                                paddingLeft: 5,
                                                fontWeight: "500"
                                            }}>Executive President </Text>
                                        </View>

                                    </View>

                                    <View style={{ flexDirection: "row", alignItems: "center", paddingTop: 9, width: "90%" }}>
                                        <View style={{ elevation: 2, alignItems: "flex-start", width: "11%", padding: 2, backgroundColor: "#a7a6ab", alignItems: "center", borderRadius: 60 }}>
                                            <Locationicon
                                                name="location"
                                                style={{
                                                    color: "#000",
                                                    fontSize: responsiveFontSize(2),
                                                    // backgroundColor: "#a7a6ab",
                                                    // paddingHorizontal: 5,
                                                    borderRadius: 60,
                                                    paddingVertical: 2,

                                                }} />
                                        </View>
                                        <View style={{
                                            width: "90%",
                                            // backgroundColor:"red",
                                        }}>
                                            <Text style={{
                                                color: "#000",
                                                fontSize: responsiveFontSize(1.8),
                                                paddingLeft: 5,
                                                fontWeight: "500"
                                            }}>Mongoldoi, Darrang</Text>
                                        </View>
                                    </View>
                                </View>
                            </View>

                        </View>
                    </View>
                </View>

                {/*Sri Atul Chandra Kakati */}
                <View style={{}}>
                    <View style={{ marginHorizontal: 10, marginTop: 5 }}>
                        <View style={{
                            width: "100%",
                            backgroundColor: "#e0e0e0",
                            flexDirection: "row",
                            height: 130,
                            borderRadius: 20,
                            elevation: 3

                        }}>
                            <View style={{ width: "32%", alignItems: "center", justifyContent: 'center' }}>
                                <Image
                                    source={require("../membersassets/atul.jpg")}
                                    resizeMode="stretch"
                                    style={{ width: "90%", height: "90%", borderRadius: 20 }}
                                />
                            </View>
                            <View style={{ width: "68%", alignItems: "center", justifyContent: 'center' }}>
                                <View style={{
                                    width: "100%",
                                    height: "90%",
                                    // backgroundColor: "red",
                                    borderRadius: 10,
                                    paddingTop: 8
                                }}>
                                    <View style={{ flexDirection: "row", }}>
                                        <View style={{ alignItems: "flex-start", width: "10%", padding: 2, backgroundColor: "#a7a6ab", alignItems: "center", borderRadius: 60, elevation: 2 }}>
                                            <Usernameicon
                                                name="user"
                                                style={{
                                                    color: "#000",
                                                    fontSize: responsiveFontSize(2.3),
                                                    // backgroundColor: "#000",
                                                    // paddingHorizontal: 5,
                                                    borderRadius: 60,
                                                    // paddingVertical: 3,

                                                }} />

                                        </View>
                                        <View style={{
                                            width: "90%",
                                            // backgroundColor:"red",
                                        }}>
                                            <Text style={{
                                                color: "#000",
                                                fontSize: responsiveFontSize(1.8),
                                                paddingLeft: 5,
                                                fontWeight: "500"
                                            }}>Sri Atul Chandra Kakati</Text>
                                        </View>
                                    </View>

                                    <View style={{ flexDirection: "row", alignItems: "center", paddingTop: 9 }}>
                                        <View style={{ elevation: 2, alignItems: "flex-start", width: "10%", padding: 2, backgroundColor: "#a7a6ab", alignItems: "center", borderRadius: 60 }}>
                                            <Designationicon
                                                name="user-tie"
                                                style={{
                                                    color: "#000",
                                                    fontSize: responsiveFontSize(2),
                                                    backgroundColor: "#a7a6ab",
                                                    // paddingHorizontal: 5,
                                                    borderRadius: 60,
                                                    paddingVertical: 2,

                                                }} />

                                        </View>

                                        <View style={{
                                            width: "90%",
                                            // backgroundColor:"red",
                                        }}>

                                            <Text style={{
                                                color: "#000",
                                                fontSize: responsiveFontSize(1.8),
                                                paddingLeft: 5,
                                                fontWeight: "500"
                                            }}>Vice President</Text>
                                        </View>

                                    </View>

                                    <View style={{ flexDirection: "row", alignItems: "center", paddingTop: 9, width: "90%" }}>
                                        <View style={{ elevation: 2, alignItems: "flex-start", width: "11%", padding: 2, backgroundColor: "#a7a6ab", alignItems: "center", borderRadius: 60 }}>
                                            <Locationicon
                                                name="location"
                                                style={{
                                                    color: "#000",
                                                    fontSize: responsiveFontSize(2),
                                                    // backgroundColor: "#a7a6ab",
                                                    // paddingHorizontal: 5,
                                                    borderRadius: 60,
                                                    paddingVertical: 2,

                                                }} />
                                        </View>
                                        <View style={{
                                            width: "90%",
                                            // backgroundColor:"red",
                                        }}>
                                            <Text style={{
                                                color: "#000",
                                                fontSize: responsiveFontSize(1.8),
                                                paddingLeft: 5,
                                                fontWeight: "500"
                                            }}>Hajo, Kamrup(R)</Text>
                                        </View>
                                    </View>
                                </View>
                            </View>

                        </View>
                    </View>
                </View>

                {/*Julhash Uddin Ahmed */}
                <View style={{}}>
                    <View style={{ marginHorizontal: 10, marginTop: 5 }}>
                        <View style={{
                            width: "100%",
                            backgroundColor: "#e0e0e0",
                            flexDirection: "row",
                            height: 130,
                            borderRadius: 20,
                            elevation: 3

                        }}>
                            <View style={{ width: "32%", alignItems: "center", justifyContent: 'center' }}>
                                <Image
                                    source={require("../membersassets/julhash.jpg")}
                                    resizeMode="stretch"
                                    style={{ width: "90%", height: "90%", borderRadius: 20 }}
                                />
                            </View>
                            <View style={{ width: "68%", alignItems: "center", justifyContent: 'center' }}>
                                <View style={{
                                    width: "100%",
                                    height: "90%",
                                    // backgroundColor: "red",
                                    borderRadius: 10,
                                    paddingTop: 8
                                }}>
                                    <View style={{ flexDirection: "row", }}>
                                        <View style={{ alignItems: "flex-start", width: "10%", padding: 2, backgroundColor: "#a7a6ab", alignItems: "center", borderRadius: 60, elevation: 2 }}>
                                            <Usernameicon
                                                name="user"
                                                style={{
                                                    color: "#000",
                                                    fontSize: responsiveFontSize(2.3),
                                                    // backgroundColor: "#000",
                                                    // paddingHorizontal: 5,
                                                    borderRadius: 60,
                                                    // paddingVertical: 3,

                                                }} />

                                        </View>
                                        <View style={{
                                            width: "90%",
                                            // backgroundColor:"red",
                                        }}>
                                            <Text style={{
                                                color: "#000",
                                                fontSize: responsiveFontSize(1.8),
                                                paddingLeft: 5,
                                                fontWeight: "500"
                                            }}>Julhash Uddin Ahmed</Text>
                                        </View>
                                    </View>

                                    <View style={{ flexDirection: "row", alignItems: "center", paddingTop: 9 }}>
                                        <View style={{ elevation: 2, alignItems: "flex-start", width: "10%", padding: 2, backgroundColor: "#a7a6ab", alignItems: "center", borderRadius: 60 }}>
                                            <Designationicon
                                                name="user-tie"
                                                style={{
                                                    color: "#000",
                                                    fontSize: responsiveFontSize(2),
                                                    backgroundColor: "#a7a6ab",
                                                    // paddingHorizontal: 5,
                                                    borderRadius: 60,
                                                    paddingVertical: 2,

                                                }} />

                                        </View>

                                        <View style={{
                                            width: "90%",
                                            // backgroundColor:"red",
                                        }}>

                                            <Text style={{
                                                color: "#000",
                                                fontSize: responsiveFontSize(1.8),
                                                paddingLeft: 5,
                                                fontWeight: "500"
                                            }}>General Secretary</Text>
                                        </View>

                                    </View>

                                    <View style={{ flexDirection: "row", alignItems: "center", paddingTop: 9, width: "90%" }}>
                                        <View style={{ elevation: 2, alignItems: "flex-start", width: "11%", padding: 2, backgroundColor: "#a7a6ab", alignItems: "center", borderRadius: 60 }}>
                                            <Locationicon
                                                name="location"
                                                style={{
                                                    color: "#000",
                                                    fontSize: responsiveFontSize(2),
                                                    // backgroundColor: "#a7a6ab",
                                                    // paddingHorizontal: 5,
                                                    borderRadius: 60,
                                                    paddingVertical: 2,

                                                }} />
                                        </View>
                                        <View style={{
                                            width: "90%",
                                            // backgroundColor:"red",
                                        }}>
                                            <Text style={{
                                                color: "#000",
                                                fontSize: responsiveFontSize(1.8),
                                                paddingLeft: 5,
                                                fontWeight: "500"
                                            }}>Moirabari, Nagaon</Text>
                                        </View>
                                    </View>
                                </View>
                            </View>

                        </View>
                    </View>
                </View>

                {/*Sri Sushil Kumar Dekad */}
                <View style={{}}>
                    <View style={{ marginHorizontal: 10, marginTop: 5 }}>
                        <View style={{
                            width: "100%",
                            backgroundColor: "#e0e0e0",
                            flexDirection: "row",
                            height: 130,
                            borderRadius: 20,
                            elevation: 3

                        }}>
                            <View style={{ width: "32%", alignItems: "center", justifyContent: 'center' }}>
                                <Image
                                    source={require("../membersassets/sushil.jpg")}
                                    resizeMode="stretch"
                                    style={{ width: "90%", height: "90%", borderRadius: 20 }}
                                />
                            </View>
                            <View style={{ width: "68%", alignItems: "center", justifyContent: 'center' }}>
                                <View style={{
                                    width: "100%",
                                    height: "90%",
                                    // backgroundColor: "red",
                                    borderRadius: 10,
                                    paddingTop: 8
                                }}>
                                    <View style={{ flexDirection: "row", }}>
                                        <View style={{ alignItems: "flex-start", width: "10%", padding: 2, backgroundColor: "#a7a6ab", alignItems: "center", borderRadius: 60, elevation: 2 }}>
                                            <Usernameicon
                                                name="user"
                                                style={{
                                                    color: "#000",
                                                    fontSize: responsiveFontSize(2.3),
                                                    // backgroundColor: "#000",
                                                    // paddingHorizontal: 5,
                                                    borderRadius: 60,
                                                    // paddingVertical: 3,

                                                }} />

                                        </View>
                                        <View style={{
                                            width: "90%",
                                            // backgroundColor:"red",
                                        }}>
                                            <Text style={{
                                                color: "#000",
                                                fontSize: responsiveFontSize(1.8),
                                                paddingLeft: 5,
                                                fontWeight: "500"
                                            }}>Sri Sushil Kumar Deka</Text>
                                        </View>
                                    </View>

                                    <View style={{ flexDirection: "row", alignItems: "center", paddingTop: 9 }}>
                                        <View style={{ elevation: 2, alignItems: "flex-start", width: "10%", padding: 2, backgroundColor: "#a7a6ab", alignItems: "center", borderRadius: 60 }}>
                                            <Designationicon
                                                name="user-tie"
                                                style={{
                                                    color: "#000",
                                                    fontSize: responsiveFontSize(2),
                                                    backgroundColor: "#a7a6ab",
                                                    // paddingHorizontal: 5,
                                                    borderRadius: 60,
                                                    paddingVertical: 2,

                                                }} />

                                        </View>

                                        <View style={{
                                            width: "90%",
                                            // backgroundColor:"red",
                                        }}>

                                            <Text style={{
                                                color: "#000",
                                                fontSize: responsiveFontSize(1.8),
                                                paddingLeft: 5,
                                                fontWeight: "500"
                                            }}>Assistant Secretary</Text>
                                        </View>

                                    </View>

                                    <View style={{ flexDirection: "row", paddingTop: 9, width: "90%" }}>
                                        <View style={{ width: "11%", borderRadius: 60 }}>
                                            <Locationicon
                                                name="location"
                                                style={{
                                                    color: "#000",
                                                    fontSize: responsiveFontSize(2),
                                                    backgroundColor: "#a7a6ab",
                                                    // paddingHorizontal: 5,
                                                    borderRadius: 60,
                                                    paddingLeft: 4,
                                                    paddingVertical: 4,
                                                    // padding: 5, 
                                                    // alignItems:"center"

                                                }} />
                                        </View>
                                        <View style={{
                                            width: "90%",
                                            // backgroundColor:"red",
                                        }}>
                                            <Text style={{
                                                color: "#000",
                                                fontSize: responsiveFontSize(1.8),
                                                paddingLeft: 5,
                                                fontWeight: "500"
                                            }}>Aditya Enclaves, Near Guwahati Commerce College, Bhaskar Nagar</Text>
                                        </View>
                                    </View>
                                </View>
                            </View>

                        </View>
                    </View>
                </View>

                {/*Sri Prabhat Bania */}
                <View style={{}}>
                    <View style={{ marginHorizontal: 10, marginTop: 5 }}>
                        <View style={{
                            width: "100%",
                            backgroundColor: "#e0e0e0",
                            flexDirection: "row",
                            height: 130,
                            borderRadius: 20,
                            elevation: 3

                        }}>
                            <View style={{ width: "32%", alignItems: "center", justifyContent: 'center' }}>
                                <Image
                                    source={require("../membersassets/prabhat.jpg")}
                                    resizeMode="stretch"
                                    style={{ width: "90%", height: "90%", borderRadius: 20 }}
                                />
                            </View>
                            <View style={{ width: "68%", alignItems: "center", justifyContent: 'center' }}>
                                <View style={{
                                    width: "100%",
                                    height: "90%",
                                    // backgroundColor: "red",
                                    borderRadius: 10,
                                    paddingTop: 8
                                }}>
                                    <View style={{ flexDirection: "row", }}>
                                        <View style={{ alignItems: "flex-start", width: "10%", padding: 2, backgroundColor: "#a7a6ab", alignItems: "center", borderRadius: 60, elevation: 2 }}>
                                            <Usernameicon
                                                name="user"
                                                style={{
                                                    color: "#000",
                                                    fontSize: responsiveFontSize(2.3),
                                                    // backgroundColor: "#000",
                                                    // paddingHorizontal: 5,
                                                    borderRadius: 60,
                                                    // paddingVertical: 3,

                                                }} />

                                        </View>
                                        <View style={{
                                            width: "90%",
                                            // backgroundColor:"red",
                                        }}>
                                            <Text style={{
                                                color: "#000",
                                                fontSize: responsiveFontSize(1.8),
                                                paddingLeft: 5,
                                                fontWeight: "500"
                                            }}>Sri Prabhat Bania </Text>
                                        </View>
                                    </View>

                                    <View style={{ flexDirection: "row", alignItems: "center", paddingTop: 9 }}>
                                        <View style={{ elevation: 2, alignItems: "flex-start", width: "10%", padding: 2, backgroundColor: "#a7a6ab", alignItems: "center", borderRadius: 60 }}>
                                            <Designationicon
                                                name="user-tie"
                                                style={{
                                                    color: "#000",
                                                    fontSize: responsiveFontSize(2),
                                                    backgroundColor: "#a7a6ab",
                                                    // paddingHorizontal: 5,
                                                    borderRadius: 60,
                                                    paddingVertical: 2,

                                                }} />

                                        </View>

                                        <View style={{
                                            width: "90%",
                                            // backgroundColor:"red",
                                        }}>

                                            <Text style={{
                                                color: "#000",
                                                fontSize: responsiveFontSize(1.8),
                                                paddingLeft: 5,
                                                fontWeight: "500"
                                            }}>Treasurer</Text>
                                        </View>

                                    </View>

                                    <View style={{ flexDirection: "row", alignItems: "center", paddingTop: 9, width: "90%" }}>
                                        <View style={{ elevation: 2, alignItems: "flex-start", width: "11%", padding: 2, backgroundColor: "#a7a6ab", alignItems: "center", borderRadius: 60 }}>
                                            <Locationicon
                                                name="location"
                                                style={{
                                                    color: "#000",
                                                    fontSize: responsiveFontSize(2),
                                                    // backgroundColor: "#a7a6ab",
                                                    // paddingHorizontal: 5,
                                                    // borderRadius: 60,
                                                    paddingVertical: 2,

                                                }} />
                                        </View>
                                        <View style={{
                                            width: "90%",
                                            // backgroundColor:"red",
                                        }}>
                                            <Text style={{
                                                color: "#000",
                                                fontSize: responsiveFontSize(1.8),
                                                paddingLeft: 5,
                                                fontWeight: "500"
                                            }}>Mongoldoi, Darrang</Text>
                                        </View>
                                    </View>
                                </View>
                            </View>

                        </View>
                    </View>
                </View>

                {/*Sri Biswajit Das */}
                <View style={{}}>
                    <View style={{ marginHorizontal: 10, marginTop: 5 }}>
                        <View style={{
                            width: "100%",
                            backgroundColor: "#e0e0e0",
                            flexDirection: "row",
                            height: 130,
                            borderRadius: 20,
                            elevation: 3

                        }}>
                            <View style={{ width: "32%", alignItems: "center", justifyContent: 'center' }}>
                                <Image
                                    source={require("../membersassets/biswajitdas.jpg")}
                                    resizeMode="stretch"
                                    style={{ width: "90%", height: "90%", borderRadius: 20 }}
                                />
                            </View>
                            <View style={{ width: "68%", alignItems: "center", justifyContent: 'center' }}>
                                <View style={{
                                    width: "100%",
                                    height: "90%",
                                    // backgroundColor: "red",
                                    borderRadius: 10,
                                    paddingTop: 8
                                }}>
                                    <View style={{ flexDirection: "row", }}>
                                        <View style={{ alignItems: "flex-start", width: "10%", padding: 2, backgroundColor: "#a7a6ab", alignItems: "center", borderRadius: 60, elevation: 2 }}>
                                            <Usernameicon
                                                name="user"
                                                style={{
                                                    color: "#000",
                                                    fontSize: responsiveFontSize(2.3),
                                                    // backgroundColor: "#000",
                                                    // paddingHorizontal: 5,
                                                    borderRadius: 60,
                                                    // paddingVertical: 3,

                                                }} />

                                        </View>
                                        <View style={{
                                            width: "90%",
                                            // backgroundColor:"red",
                                        }}>
                                            <Text style={{
                                                color: "#000",
                                                fontSize: responsiveFontSize(1.8),
                                                paddingLeft: 5,
                                                fontWeight: "500"
                                            }}>Sri Biswajit Das</Text>
                                        </View>
                                    </View>

                                    <View style={{ flexDirection: "row", alignItems: "center", paddingTop: 9 }}>
                                        <View style={{ elevation: 2, alignItems: "flex-start", width: "10%", padding: 2, backgroundColor: "#a7a6ab", alignItems: "center", borderRadius: 60 }}>
                                            <Designationicon
                                                name="user-tie"
                                                style={{
                                                    color: "#000",
                                                    fontSize: responsiveFontSize(2),
                                                    backgroundColor: "#a7a6ab",
                                                    // paddingHorizontal: 5,
                                                    borderRadius: 60,
                                                    paddingVertical: 2,

                                                }} />

                                        </View>

                                        <View style={{
                                            width: "90%",
                                            // backgroundColor:"red",
                                        }}>

                                            <Text style={{
                                                color: "#000",
                                                fontSize: responsiveFontSize(1.8),
                                                paddingLeft: 5,
                                                fontWeight: "500"
                                            }}>Member</Text>
                                        </View>

                                    </View>

                                    <View style={{ flexDirection: "row", alignItems: "center", paddingTop: 9, width: "90%" }}>
                                        <View style={{ elevation: 2, alignItems: "flex-start", width: "11%", padding: 2, backgroundColor: "#a7a6ab", alignItems: "center", borderRadius: 60 }}>
                                            <Locationicon
                                                name="location"
                                                style={{
                                                    color: "#000",
                                                    fontSize: responsiveFontSize(2),
                                                    // backgroundColor: "#a7a6ab",
                                                    // paddingHorizontal: 5,
                                                    // borderRadius: 60,
                                                    paddingVertical: 2,

                                                }} />
                                        </View>
                                        <View style={{
                                            width: "90%",
                                            // backgroundColor:"red",
                                        }}>
                                            <Text style={{
                                                color: "#000",
                                                fontSize: responsiveFontSize(1.8),
                                                paddingLeft: 5,
                                                fontWeight: "500"
                                            }}>Karbi Anglong</Text>
                                        </View>
                                    </View>
                                </View>
                            </View>

                        </View>
                    </View>
                </View>

                {/*Sri Rabin Talukdar*/}
                <View style={{}}>
                    <View style={{ marginHorizontal: 10, marginTop: 5 }}>
                        <View style={{
                            width: "100%",
                            backgroundColor: "#e0e0e0",
                            flexDirection: "row",
                            height: 130,
                            borderRadius: 20,
                            elevation: 3

                        }}>
                            <View style={{ width: "32%", alignItems: "center", justifyContent: 'center' }}>
                                <Image
                                    source={require("../membersassets/rabin.jpg")}
                                    resizeMode="stretch"
                                    style={{ width: "90%", height: "90%", borderRadius: 20 }}
                                />
                            </View>
                            <View style={{ width: "68%", alignItems: "center", justifyContent: 'center' }}>
                                <View style={{
                                    width: "100%",
                                    height: "90%",
                                    // backgroundColor: "red",
                                    borderRadius: 10,
                                    paddingTop: 8
                                }}>
                                    <View style={{ flexDirection: "row", }}>
                                        <View style={{ alignItems: "flex-start", width: "10%", padding: 2, backgroundColor: "#a7a6ab", alignItems: "center", borderRadius: 60, elevation: 2 }}>
                                            <Usernameicon
                                                name="user"
                                                style={{
                                                    color: "#000",
                                                    fontSize: responsiveFontSize(2.3),
                                                    // backgroundColor: "#000",
                                                    // paddingHorizontal: 5,
                                                    borderRadius: 60,
                                                    // paddingVertical: 3,

                                                }} />

                                        </View>
                                        <View style={{
                                            width: "90%",
                                            // backgroundColor:"red",
                                        }}>
                                            <Text style={{
                                                color: "#000",
                                                fontSize: responsiveFontSize(1.8),
                                                paddingLeft: 5,
                                                fontWeight: "500"
                                            }}>Sri Rabin Talukdar</Text>
                                        </View>
                                    </View>

                                    <View style={{ flexDirection: "row", alignItems: "center", paddingTop: 9 }}>
                                        <View style={{ elevation: 2, alignItems: "flex-start", width: "10%", padding: 2, backgroundColor: "#a7a6ab", alignItems: "center", borderRadius: 60 }}>
                                            <Designationicon
                                                name="user-tie"
                                                style={{
                                                    color: "#000",
                                                    fontSize: responsiveFontSize(2),
                                                    backgroundColor: "#a7a6ab",
                                                    // paddingHorizontal: 5,
                                                    borderRadius: 60,
                                                    paddingVertical: 2,

                                                }} />

                                        </View>

                                        <View style={{
                                            width: "90%",
                                            // backgroundColor:"red",
                                        }}>

                                            <Text style={{
                                                color: "#000",
                                                fontSize: responsiveFontSize(1.8),
                                                paddingLeft: 5,
                                                fontWeight: "500"
                                            }}>Member</Text>
                                        </View>

                                    </View>

                                    <View style={{ flexDirection: "row", alignItems: "center", paddingTop: 9, width: "90%" }}>
                                        <View style={{ elevation: 2, alignItems: "flex-start", width: "11%", padding: 2, backgroundColor: "#a7a6ab", alignItems: "center", borderRadius: 60 }}>
                                            <Locationicon
                                                name="location"
                                                style={{
                                                    color: "#000",
                                                    fontSize: responsiveFontSize(2),
                                                    // backgroundColor: "#a7a6ab",
                                                    // paddingHorizontal: 5,
                                                    // borderRadius: 60,
                                                    paddingVertical: 2,

                                                }} />
                                        </View>
                                        <View style={{
                                            width: "90%",
                                            // backgroundColor:"red",
                                        }}>
                                            <Text style={{
                                                color: "#000",
                                                fontSize: responsiveFontSize(1.8),
                                                paddingLeft: 5,
                                                fontWeight: "500"
                                            }}>Pathsala, Barpeta</Text>
                                        </View>
                                    </View>
                                </View>
                            </View>

                        </View>
                    </View>
                </View>

                {/*Sri Kumud Barthakur*/}
                <View style={{}}>
                    <View style={{ marginHorizontal: 10, marginTop: 5 }}>
                        <View style={{
                            width: "100%",
                            backgroundColor: "#e0e0e0",
                            flexDirection: "row",
                            height: 130,
                            borderRadius: 20,
                            elevation: 3

                        }}>
                            <View style={{ width: "32%", alignItems: "center", justifyContent: 'center' }}>
                                <Image
                                    source={require("../membersassets/kumud.jpg")}
                                    resizeMode="stretch"
                                    style={{ width: "90%", height: "90%", borderRadius: 20 }}
                                />
                            </View>
                            <View style={{ width: "68%", alignItems: "center", justifyContent: 'center' }}>
                                <View style={{
                                    width: "100%",
                                    height: "90%",
                                    // backgroundColor: "red",
                                    borderRadius: 10,
                                    paddingTop: 8
                                }}>
                                    <View style={{ flexDirection: "row", }}>
                                        <View style={{ alignItems: "flex-start", width: "10%", padding: 2, backgroundColor: "#a7a6ab", alignItems: "center", borderRadius: 60, elevation: 2 }}>
                                            <Usernameicon
                                                name="user"
                                                style={{
                                                    color: "#000",
                                                    fontSize: responsiveFontSize(2.3),
                                                    // backgroundColor: "#000",
                                                    // paddingHorizontal: 5,
                                                    borderRadius: 60,
                                                    // paddingVertical: 3,

                                                }} />

                                        </View>
                                        <View style={{
                                            width: "90%",
                                            // backgroundColor:"red",
                                        }}>
                                            <Text style={{
                                                color: "#000",
                                                fontSize: responsiveFontSize(1.8),
                                                paddingLeft: 5,
                                                fontWeight: "500"
                                            }}>Sri Kumud Barthakur</Text>
                                        </View>
                                    </View>

                                    <View style={{ flexDirection: "row", alignItems: "center", paddingTop: 9 }}>
                                        <View style={{ elevation: 2, alignItems: "flex-start", width: "10%", padding: 2, backgroundColor: "#a7a6ab", alignItems: "center", borderRadius: 60 }}>
                                            <Designationicon
                                                name="user-tie"
                                                style={{
                                                    color: "#000",
                                                    fontSize: responsiveFontSize(2),
                                                    backgroundColor: "#a7a6ab",
                                                    // paddingHorizontal: 5,
                                                    borderRadius: 60,
                                                    paddingVertical: 2,

                                                }} />

                                        </View>

                                        <View style={{
                                            width: "90%",
                                            // backgroundColor:"red",
                                        }}>

                                            <Text style={{
                                                color: "#000",
                                                fontSize: responsiveFontSize(1.8),
                                                paddingLeft: 5,
                                                fontWeight: "500"
                                            }}>Member</Text>
                                        </View>

                                    </View>

                                    <View style={{ flexDirection: "row", alignItems: "center", paddingTop: 9, width: "90%" }}>
                                        <View style={{ elevation: 2, alignItems: "flex-start", width: "11%", padding: 2, backgroundColor: "#a7a6ab", alignItems: "center", borderRadius: 60 }}>
                                            <Locationicon
                                                name="location"
                                                style={{
                                                    color: "#000",
                                                    fontSize: responsiveFontSize(2),
                                                    // backgroundColor: "#a7a6ab",
                                                    // paddingHorizontal: 5,
                                                    // borderRadius: 60,
                                                    paddingVertical: 2,

                                                }} />
                                        </View>
                                        <View style={{
                                            width: "90%",
                                            // backgroundColor:"red",
                                        }}>
                                            <Text style={{
                                                color: "#000",
                                                fontSize: responsiveFontSize(1.8),
                                                paddingLeft: 5,
                                                fontWeight: "500"
                                            }}>Dhekiajuli, Sonitpur</Text>
                                        </View>
                                    </View>
                                </View>
                            </View>

                        </View>
                    </View>
                </View>

                {/*Sri Pampi Ravidas*/}
                <View style={{}}>
                    <View style={{ marginHorizontal: 10, marginTop: 5 }}>
                        <View style={{
                            width: "100%",
                            backgroundColor: "#e0e0e0",
                            flexDirection: "row",
                            height: 130,
                            borderRadius: 20,
                            elevation: 3

                        }}>
                            <View style={{ width: "32%", alignItems: "center", justifyContent: 'center' }}>
                                <Image
                                    source={require("../membersassets/pampi.jpg")}
                                    resizeMode="stretch"
                                    style={{ width: "90%", height: "90%", borderRadius: 20 }}
                                />
                            </View>
                            <View style={{ width: "68%", alignItems: "center", justifyContent: 'center' }}>
                                <View style={{
                                    width: "100%",
                                    height: "90%",
                                    // backgroundColor: "red",
                                    borderRadius: 10,
                                    paddingTop: 8
                                }}>
                                    <View style={{ flexDirection: "row", }}>
                                        <View style={{ alignItems: "flex-start", width: "10%", padding: 2, backgroundColor: "#a7a6ab", alignItems: "center", borderRadius: 60, elevation: 2 }}>
                                            <Usernameicon
                                                name="user"
                                                style={{
                                                    color: "#000",
                                                    fontSize: responsiveFontSize(2.3),
                                                    // backgroundColor: "#000",
                                                    // paddingHorizontal: 5,
                                                    borderRadius: 60,
                                                    // paddingVertical: 3,

                                                }} />

                                        </View>
                                        <View style={{
                                            width: "90%",
                                            // backgroundColor:"red",
                                        }}>
                                            <Text style={{
                                                color: "#000",
                                                fontSize: responsiveFontSize(1.8),
                                                paddingLeft: 5,
                                                fontWeight: "500"
                                            }}>Sri Pampi Ravidas</Text>
                                        </View>
                                    </View>

                                    <View style={{ flexDirection: "row", alignItems: "center", paddingTop: 9 }}>
                                        <View style={{ elevation: 2, alignItems: "flex-start", width: "10%", padding: 2, backgroundColor: "#a7a6ab", alignItems: "center", borderRadius: 60 }}>
                                            <Designationicon
                                                name="user-tie"
                                                style={{
                                                    color: "#000",
                                                    fontSize: responsiveFontSize(2),
                                                    backgroundColor: "#a7a6ab",
                                                    // paddingHorizontal: 5,
                                                    borderRadius: 60,
                                                    paddingVertical: 2,

                                                }} />

                                        </View>

                                        <View style={{
                                            width: "90%",
                                            // backgroundColor:"red",
                                        }}>

                                            <Text style={{
                                                color: "#000",
                                                fontSize: responsiveFontSize(1.8),
                                                paddingLeft: 5,
                                                fontWeight: "500"
                                            }}>Member</Text>
                                        </View>

                                    </View>

                                    <View style={{ flexDirection: "row", alignItems: "center", paddingTop: 9, width: "90%" }}>
                                        <View style={{ elevation: 2, alignItems: "flex-start", width: "11%", padding: 2, backgroundColor: "#a7a6ab", alignItems: "center", borderRadius: 60 }}>
                                            <Locationicon
                                                name="location"
                                                style={{
                                                    color: "#000",
                                                    fontSize: responsiveFontSize(2),
                                                    // backgroundColor: "#a7a6ab",
                                                    // paddingHorizontal: 5,
                                                    // borderRadius: 60,
                                                    paddingVertical: 2,

                                                }} />
                                        </View>
                                        <View style={{
                                            width: "90%",
                                            // backgroundColor:"red",
                                        }}>
                                            <Text style={{
                                                color: "#000",
                                                fontSize: responsiveFontSize(1.8),
                                                paddingLeft: 5,
                                                fontWeight: "500"
                                            }}>Laharighat</Text>
                                        </View>
                                    </View>
                                </View>
                            </View>

                        </View>
                    </View>
                </View>

                {/*Amina Yasmin*/}
                <View style={{}}>
                    <View style={{ marginHorizontal: 10, marginTop: 5 }}>
                        <View style={{
                            width: "100%",
                            backgroundColor: "#e0e0e0",
                            flexDirection: "row",
                            height: 130,
                            borderRadius: 20,
                            elevation: 3

                        }}>
                            <View style={{ width: "32%", alignItems: "center", justifyContent: 'center' }}>
                                <Image
                                    source={require("../membersassets/amina.jpg")}
                                    resizeMode="stretch"
                                    style={{ width: "90%", height: "90%", borderRadius: 20 }}
                                />
                            </View>
                            <View style={{ width: "68%", alignItems: "center", justifyContent: 'center' }}>
                                <View style={{
                                    width: "100%",
                                    height: "90%",
                                    // backgroundColor: "red",
                                    borderRadius: 10,
                                    paddingTop: 8
                                }}>
                                    <View style={{ flexDirection: "row", }}>
                                        <View style={{ alignItems: "flex-start", width: "10%", padding: 2, backgroundColor: "#a7a6ab", alignItems: "center", borderRadius: 60, elevation: 2 }}>
                                            <Usernameicon
                                                name="user"
                                                style={{
                                                    color: "#000",
                                                    fontSize: responsiveFontSize(2.3),
                                                    // backgroundColor: "#000",
                                                    // paddingHorizontal: 5,
                                                    borderRadius: 60,
                                                    // paddingVertical: 3,

                                                }} />

                                        </View>
                                        <View style={{
                                            width: "90%",
                                            // backgroundColor:"red",
                                        }}>
                                            <Text style={{
                                                color: "#000",
                                                fontSize: responsiveFontSize(1.8),
                                                paddingLeft: 5,
                                                fontWeight: "500"
                                            }}>Amina Yasmin</Text>
                                        </View>
                                    </View>

                                    <View style={{ flexDirection: "row", alignItems: "center", paddingTop: 9 }}>
                                        <View style={{ elevation: 2, alignItems: "flex-start", width: "10%", padding: 2, backgroundColor: "#a7a6ab", alignItems: "center", borderRadius: 60 }}>
                                            <Designationicon
                                                name="user-tie"
                                                style={{
                                                    color: "#000",
                                                    fontSize: responsiveFontSize(2),
                                                    backgroundColor: "#a7a6ab",
                                                    // paddingHorizontal: 5,
                                                    borderRadius: 60,
                                                    paddingVertical: 2,

                                                }} />

                                        </View>

                                        <View style={{
                                            width: "90%",
                                            // backgroundColor:"red",
                                        }}>

                                            <Text style={{
                                                color: "#000",
                                                fontSize: responsiveFontSize(1.8),
                                                paddingLeft: 5,
                                                fontWeight: "500"
                                            }}>Member</Text>
                                        </View>

                                    </View>

                                    <View style={{ flexDirection: "row", alignItems: "center", paddingTop: 9, width: "90%" }}>
                                        <View style={{ elevation: 2, alignItems: "flex-start", width: "11%", padding: 2, backgroundColor: "#a7a6ab", alignItems: "center", borderRadius: 60 }}>
                                            <Locationicon
                                                name="location"
                                                style={{
                                                    color: "#000",
                                                    fontSize: responsiveFontSize(2),
                                                    // backgroundColor: "#a7a6ab",
                                                    // paddingHorizontal: 5,
                                                    // borderRadius: 60,
                                                    paddingVertical: 2,

                                                }} />
                                        </View>
                                        <View style={{
                                            width: "90%",
                                            // backgroundColor:"red",
                                        }}>
                                            <Text style={{
                                                color: "#000",
                                                fontSize: responsiveFontSize(1.8),
                                                paddingLeft: 5,
                                                fontWeight: "500"
                                            }}>Gowalpara</Text>
                                        </View>
                                    </View>
                                </View>
                            </View>

                        </View>
                    </View>
                </View>

                {/*Lachima Begum*/}
                <View style={{}}>
                    <View style={{ marginHorizontal: 10, marginTop: 5 }}>
                        <View style={{
                            width: "100%",
                            backgroundColor: "#e0e0e0",
                            flexDirection: "row",
                            height: 130,
                            borderRadius: 20,
                            elevation: 3

                        }}>
                            <View style={{ width: "32%", alignItems: "center", justifyContent: 'center' }}>
                                <Image
                                    source={require("../membersassets/lachima.jpg")}
                                    resizeMode="stretch"
                                    style={{ width: "90%", height: "90%", borderRadius: 20 }}
                                />
                            </View>
                            <View style={{ width: "68%", alignItems: "center", justifyContent: 'center' }}>
                                <View style={{
                                    width: "100%",
                                    height: "90%",
                                    // backgroundColor: "red",
                                    borderRadius: 10,
                                    paddingTop: 8
                                }}>
                                    <View style={{ flexDirection: "row", }}>
                                        <View style={{ alignItems: "flex-start", width: "10%", padding: 2, backgroundColor: "#a7a6ab", alignItems: "center", borderRadius: 60, elevation: 2 }}>
                                            <Usernameicon
                                                name="user"
                                                style={{
                                                    color: "#000",
                                                    fontSize: responsiveFontSize(2.3),
                                                    // backgroundColor: "#000",
                                                    // paddingHorizontal: 5,
                                                    borderRadius: 60,
                                                    // paddingVertical: 3,

                                                }} />

                                        </View>
                                        <View style={{
                                            width: "90%",
                                            // backgroundColor:"red",
                                        }}>
                                            <Text style={{
                                                color: "#000",
                                                fontSize: responsiveFontSize(1.8),
                                                paddingLeft: 5,
                                                fontWeight: "500"
                                            }}>Lachima Begum</Text>
                                        </View>
                                    </View>

                                    <View style={{ flexDirection: "row", alignItems: "center", paddingTop: 9 }}>
                                        <View style={{ elevation: 2, alignItems: "flex-start", width: "10%", padding: 2, backgroundColor: "#a7a6ab", alignItems: "center", borderRadius: 60 }}>
                                            <Designationicon
                                                name="user-tie"
                                                style={{
                                                    color: "#000",
                                                    fontSize: responsiveFontSize(2),
                                                    backgroundColor: "#a7a6ab",
                                                    // paddingHorizontal: 5,
                                                    borderRadius: 60,
                                                    paddingVertical: 2,

                                                }} />

                                        </View>

                                        <View style={{
                                            width: "90%",
                                            // backgroundColor:"red",
                                        }}>

                                            <Text style={{
                                                color: "#000",
                                                fontSize: responsiveFontSize(1.8),
                                                paddingLeft: 5,
                                                fontWeight: "500"
                                            }}>Member</Text>
                                        </View>

                                    </View>

                                    <View style={{ flexDirection: "row", alignItems: "center", paddingTop: 9, width: "90%" }}>
                                        <View style={{ elevation: 2, alignItems: "flex-start", width: "11%", padding: 2, backgroundColor: "#a7a6ab", alignItems: "center", borderRadius: 60 }}>
                                            <Locationicon
                                                name="location"
                                                style={{
                                                    color: "#000",
                                                    fontSize: responsiveFontSize(2),
                                                    // backgroundColor: "#a7a6ab",
                                                    // paddingHorizontal: 5,
                                                    // borderRadius: 60,
                                                    paddingVertical: 2,

                                                }} />
                                        </View>
                                        <View style={{
                                            width: "90%",
                                            // backgroundColor:"red",
                                        }}>
                                            <Text style={{
                                                color: "#000",
                                                fontSize: responsiveFontSize(1.8),
                                                paddingLeft: 5,
                                                fontWeight: "500"
                                            }}>Bezera, Kamrup(R)</Text>
                                        </View>
                                    </View>
                                </View>
                            </View>

                        </View>
                    </View>
                </View>

                {/*Sri Ranjeet Kumar Sarma*/}
                <View style={{}}>
                    <View style={{ marginHorizontal: 10, marginTop: 5 }}>
                        <View style={{
                            width: "100%",
                            backgroundColor: "#e0e0e0",
                            flexDirection: "row",
                            height: 130,
                            borderRadius: 20,
                            elevation: 3

                        }}>
                            <View style={{ width: "32%", alignItems: "center", justifyContent: 'center' }}>
                                <Image
                                    source={require("../membersassets/ranjeet.jpg")}
                                    resizeMode="stretch"
                                    style={{ width: "90%", height: "90%", borderRadius: 20 }}
                                />
                            </View>
                            <View style={{ width: "68%", alignItems: "center", justifyContent: 'center' }}>
                                <View style={{
                                    width: "100%",
                                    height: "90%",
                                    // backgroundColor: "red",
                                    borderRadius: 10,
                                    paddingTop: 8
                                }}>
                                    <View style={{ flexDirection: "row", }}>
                                        <View style={{ alignItems: "flex-start", width: "10%", padding: 2, backgroundColor: "#a7a6ab", alignItems: "center", borderRadius: 60, elevation: 2 }}>
                                            <Usernameicon
                                                name="user"
                                                style={{
                                                    color: "#000",
                                                    fontSize: responsiveFontSize(2.3),
                                                    // backgroundColor: "#000",
                                                    // paddingHorizontal: 5,
                                                    borderRadius: 60,
                                                    // paddingVertical: 3,

                                                }} />

                                        </View>
                                        <View style={{
                                            width: "90%",
                                            // backgroundColor:"red",
                                        }}>
                                            <Text style={{
                                                color: "#000",
                                                fontSize: responsiveFontSize(1.8),
                                                paddingLeft: 5,
                                                fontWeight: "500"
                                            }}>Sri Ranjeet Kumar Sarma</Text>
                                        </View>
                                    </View>

                                    <View style={{ flexDirection: "row", alignItems: "center", paddingTop: 9 }}>
                                        <View style={{ elevation: 2, alignItems: "flex-start", width: "10%", padding: 2, backgroundColor: "#a7a6ab", alignItems: "center", borderRadius: 60 }}>
                                            <Designationicon
                                                name="user-tie"
                                                style={{
                                                    color: "#000",
                                                    fontSize: responsiveFontSize(2),
                                                    backgroundColor: "#a7a6ab",
                                                    // paddingHorizontal: 5,
                                                    borderRadius: 60,
                                                    paddingVertical: 2,

                                                }} />

                                        </View>

                                        <View style={{
                                            width: "90%",
                                            // backgroundColor:"red",
                                        }}>

                                            <Text style={{
                                                color: "#000",
                                                fontSize: responsiveFontSize(1.8),
                                                paddingLeft: 5,
                                                fontWeight: "500"
                                            }}>Member</Text>
                                        </View>

                                    </View>

                                    <View style={{ flexDirection: "row", alignItems: "center", paddingTop: 9, width: "90%" }}>
                                        <View style={{ elevation: 2, alignItems: "flex-start", width: "11%", padding: 2, backgroundColor: "#a7a6ab", alignItems: "center", borderRadius: 60 }}>
                                            <Locationicon
                                                name="location"
                                                style={{
                                                    color: "#000",
                                                    fontSize: responsiveFontSize(2),
                                                    // backgroundColor: "#a7a6ab",
                                                    // paddingHorizontal: 5,
                                                    // borderRadius: 60,
                                                    paddingVertical: 2,

                                                }} />
                                        </View>
                                        <View style={{
                                            width: "90%",
                                            // backgroundColor:"red",
                                        }}>
                                            <Text style={{
                                                color: "#000",
                                                fontSize: responsiveFontSize(1.8),
                                                paddingLeft: 5,
                                                fontWeight: "500"
                                            }}>Madhyam Khanda, North Guwahati</Text>
                                        </View>
                                    </View>
                                </View>
                            </View>

                        </View>
                    </View>
                </View>

                {/*Sri Munin Kakati*/}
                <View style={{}}>
                    <View style={{ marginHorizontal: 10, marginTop: 5 }}>
                        <View style={{
                            width: "100%",
                            backgroundColor: "#e0e0e0",
                            flexDirection: "row",
                            height: 130,
                            borderRadius: 20,
                            elevation: 3

                        }}>
                            <View style={{ width: "32%", alignItems: "center", justifyContent: 'center' }}>
                                <Image
                                    source={require("../membersassets/munin.jpg")}
                                    resizeMode="stretch"
                                    style={{ width: "90%", height: "90%", borderRadius: 20 }}
                                />
                            </View>
                            <View style={{ width: "68%", alignItems: "center", justifyContent: 'center' }}>
                                <View style={{
                                    width: "100%",
                                    height: "90%",
                                    // backgroundColor: "red",
                                    borderRadius: 10,
                                    paddingTop: 8
                                }}>
                                    <View style={{ flexDirection: "row", }}>
                                        <View style={{ alignItems: "flex-start", width: "10%", padding: 2, backgroundColor: "#a7a6ab", alignItems: "center", borderRadius: 60, elevation: 2 }}>
                                            <Usernameicon
                                                name="user"
                                                style={{
                                                    color: "#000",
                                                    fontSize: responsiveFontSize(2.3),
                                                    // backgroundColor: "#000",
                                                    // paddingHorizontal: 5,
                                                    borderRadius: 60,
                                                    // paddingVertical: 3,

                                                }} />

                                        </View>
                                        <View style={{
                                            width: "90%",
                                            // backgroundColor:"red",
                                        }}>
                                            <Text style={{
                                                color: "#000",
                                                fontSize: responsiveFontSize(1.8),
                                                paddingLeft: 5,
                                                fontWeight: "500"
                                            }}>Sri Munin Kakati</Text>
                                        </View>
                                    </View>

                                    <View style={{ flexDirection: "row", alignItems: "center", paddingTop: 9 }}>
                                        <View style={{ elevation: 2, alignItems: "flex-start", width: "10%", padding: 2, backgroundColor: "#a7a6ab", alignItems: "center", borderRadius: 60 }}>
                                            <Designationicon
                                                name="user-tie"
                                                style={{
                                                    color: "#000",
                                                    fontSize: responsiveFontSize(2),
                                                    backgroundColor: "#a7a6ab",
                                                    // paddingHorizontal: 5,
                                                    borderRadius: 60,
                                                    paddingVertical: 2,

                                                }} />

                                        </View>

                                        <View style={{
                                            width: "90%",
                                            // backgroundColor:"red",
                                        }}>

                                            <Text style={{
                                                color: "#000",
                                                fontSize: responsiveFontSize(1.8),
                                                paddingLeft: 5,
                                                fontWeight: "500"
                                            }}>Member</Text>
                                        </View>

                                    </View>

                                    <View style={{ flexDirection: "row", alignItems: "center", paddingTop: 9, width: "90%" }}>
                                        <View style={{ elevation: 2, alignItems: "flex-start", width: "11%", padding: 2, backgroundColor: "#a7a6ab", alignItems: "center", borderRadius: 60 }}>
                                            <Locationicon
                                                name="location"
                                                style={{
                                                    color: "#000",
                                                    fontSize: responsiveFontSize(2),
                                                    // backgroundColor: "#a7a6ab",
                                                    // paddingHorizontal: 5,
                                                    // borderRadius: 60,
                                                    paddingVertical: 2,

                                                }} />
                                        </View>
                                        <View style={{
                                            width: "90%",
                                            // backgroundColor:"red",
                                        }}>
                                            <Text style={{
                                                color: "#000",
                                                fontSize: responsiveFontSize(1.8),
                                                paddingLeft: 5,
                                                fontWeight: "500"
                                            }}>Nabagraha Road, Silpukhuri</Text>
                                        </View>
                                    </View>
                                </View>
                            </View>

                        </View>
                    </View>
                </View>

                {/*Sri Sobhan Bora*/}
                <View style={{}}>
                    <View style={{ marginHorizontal: 10, marginTop: 5 }}>
                        <View style={{
                            width: "100%",
                            backgroundColor: "#e0e0e0",
                            flexDirection: "row",
                            height: 130,
                            borderRadius: 20,
                            elevation: 3

                        }}>
                            <View style={{ width: "32%", alignItems: "center", justifyContent: 'center' }}>
                                <Image
                                    source={require("../membersassets/sobhan.jpg")}
                                    resizeMode="stretch"
                                    style={{ width: "90%", height: "90%", borderRadius: 20 }}
                                />
                            </View>
                            <View style={{ width: "68%", alignItems: "center", justifyContent: 'center' }}>
                                <View style={{
                                    width: "100%",
                                    height: "90%",
                                    // backgroundColor: "red",
                                    borderRadius: 10,
                                    paddingTop: 8
                                }}>
                                    <View style={{ flexDirection: "row", }}>
                                        <View style={{ alignItems: "flex-start", width: "10%", padding: 2, backgroundColor: "#a7a6ab", alignItems: "center", borderRadius: 60, elevation: 2 }}>
                                            <Usernameicon
                                                name="user"
                                                style={{
                                                    color: "#000",
                                                    fontSize: responsiveFontSize(2.3),
                                                    // backgroundColor: "#000",
                                                    // paddingHorizontal: 5,
                                                    borderRadius: 60,
                                                    // paddingVertical: 3,

                                                }} />

                                        </View>
                                        <View style={{
                                            width: "90%",
                                            // backgroundColor:"red",
                                        }}>
                                            <Text style={{
                                                color: "#000",
                                                fontSize: responsiveFontSize(1.8),
                                                paddingLeft: 5,
                                                fontWeight: "500"
                                            }}>Sri Sobhan Bora</Text>
                                        </View>
                                    </View>

                                    <View style={{ flexDirection: "row", alignItems: "center", paddingTop: 9 }}>
                                        <View style={{ elevation: 2, alignItems: "flex-start", width: "10%", padding: 2, backgroundColor: "#a7a6ab", alignItems: "center", borderRadius: 60 }}>
                                            <Designationicon
                                                name="user-tie"
                                                style={{
                                                    color: "#000",
                                                    fontSize: responsiveFontSize(2),
                                                    backgroundColor: "#a7a6ab",
                                                    // paddingHorizontal: 5,
                                                    borderRadius: 60,
                                                    paddingVertical: 2,

                                                }} />

                                        </View>

                                        <View style={{
                                            width: "90%",
                                            // backgroundColor:"red",
                                        }}>

                                            <Text style={{
                                                color: "#000",
                                                fontSize: responsiveFontSize(1.8),
                                                paddingLeft: 5,
                                                fontWeight: "500"
                                            }}>Member</Text>
                                        </View>

                                    </View>

                                    <View style={{ flexDirection: "row", alignItems: "center", paddingTop: 9, width: "90%" }}>
                                        <View style={{ elevation: 2, alignItems: "flex-start", width: "11%", padding: 2, backgroundColor: "#a7a6ab", alignItems: "center", borderRadius: 60 }}>
                                            <Locationicon
                                                name="location"
                                                style={{
                                                    color: "#000",
                                                    fontSize: responsiveFontSize(2),
                                                    // backgroundColor: "#a7a6ab",
                                                    // paddingHorizontal: 5,
                                                    // borderRadius: 60,
                                                    paddingVertical: 2,

                                                }} />
                                        </View>
                                        <View style={{
                                            width: "90%",
                                            // backgroundColor:"red",
                                        }}>
                                            <Text style={{
                                                color: "#000",
                                                fontSize: responsiveFontSize(1.8),
                                                paddingLeft: 5,
                                                fontWeight: "500"
                                            }}>Senapati Path, Silpukhuri</Text>
                                        </View>
                                    </View>
                                </View>
                            </View>

                        </View>
                    </View>
                </View>

                
                {/*Sri Dilip Kumar Kalita*/}
                <View style={{}}>
                    <View style={{ marginHorizontal: 10, marginTop: 5 }}>
                        <View style={{
                            width: "100%",
                            backgroundColor: "#e0e0e0",
                            flexDirection: "row",
                            height: 130,
                            borderRadius: 20,
                            elevation: 3

                        }}>
                            <View style={{ width: "32%", alignItems: "center", justifyContent: 'center' }}>
                                <Image
                                    source={require("../membersassets/dilip.jpg")}
                                    resizeMode="stretch"
                                    style={{ width: "90%", height: "90%", borderRadius: 20 }}
                                />
                            </View>
                            <View style={{ width: "68%", alignItems: "center", justifyContent: 'center' }}>
                                <View style={{
                                    width: "100%",
                                    height: "90%",
                                    // backgroundColor: "red",
                                    borderRadius: 10,
                                    paddingTop: 8
                                }}>
                                    <View style={{ flexDirection: "row", }}>
                                        <View style={{ alignItems: "flex-start", width: "10%", padding: 2, backgroundColor: "#a7a6ab", alignItems: "center", borderRadius: 60, elevation: 2 }}>
                                            <Usernameicon
                                                name="user"
                                                style={{
                                                    color: "#000",
                                                    fontSize: responsiveFontSize(2.3),
                                                    // backgroundColor: "#000",
                                                    // paddingHorizontal: 5,
                                                    borderRadius: 60,
                                                    // paddingVertical: 3,

                                                }} />

                                        </View>
                                        <View style={{
                                            width: "90%",
                                            // backgroundColor:"red",
                                        }}>
                                            <Text style={{
                                                color: "#000",
                                                fontSize: responsiveFontSize(1.8),
                                                paddingLeft: 5,
                                                fontWeight: "500"
                                            }}>Sri Dilip Kumar Kalita</Text>
                                        </View>
                                    </View>

                                    <View style={{ flexDirection: "row", alignItems: "center", paddingTop: 9 }}>
                                        <View style={{ elevation: 2, alignItems: "flex-start", width: "10%", padding: 2, backgroundColor: "#a7a6ab", alignItems: "center", borderRadius: 60 }}>
                                            <Designationicon
                                                name="user-tie"
                                                style={{
                                                    color: "#000",
                                                    fontSize: responsiveFontSize(2),
                                                    backgroundColor: "#a7a6ab",
                                                    // paddingHorizontal: 5,
                                                    borderRadius: 60,
                                                    paddingVertical: 2,

                                                }} />

                                        </View>

                                        <View style={{
                                            width: "90%",
                                            // backgroundColor:"red",
                                        }}>

                                            <Text style={{
                                                color: "#000",
                                                fontSize: responsiveFontSize(1.8),
                                                paddingLeft: 5,
                                                fontWeight: "500"
                                            }}>Ex-Officio Member</Text>
                                        </View>

                                    </View>

                                    <View style={{ flexDirection: "row", alignItems: "center", paddingTop: 9, width: "90%" }}>
                                        <View style={{ elevation: 2, alignItems: "flex-start", width: "11%", padding: 2, backgroundColor: "#a7a6ab", alignItems: "center", borderRadius: 60 }}>
                                            <Locationicon
                                                name="location"
                                                style={{
                                                    color: "#000",
                                                    fontSize: responsiveFontSize(2),
                                                    // backgroundColor: "#a7a6ab",
                                                    // paddingHorizontal: 5,
                                                    // borderRadius: 60,
                                                    paddingVertical: 2,

                                                }} />
                                        </View>
                                        <View style={{
                                            width: "90%",
                                            // backgroundColor:"red",
                                        }}>
                                            <Text style={{
                                                color: "#000",
                                                fontSize: responsiveFontSize(1.8),
                                                paddingLeft: 5,
                                                fontWeight: "500"
                                            }}>Sipajhar, Darrang</Text>
                                        </View>
                                    </View>
                                </View>
                            </View>

                        </View>
                    </View>
                </View>
                <View style={{paddingBottom:5}}></View>
            </ScrollView>





        </View>
    )
}

export default TeamMember

const styles = StyleSheet.create({})
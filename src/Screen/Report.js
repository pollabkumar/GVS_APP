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
import Viewww from 'react-native-vector-icons/AntDesign';
import Pdff from 'react-native-vector-icons/FontAwesome';
import {
    responsiveHeight,
    responsiveWidth,
    responsiveFontSize
} from "react-native-responsive-dimensions";
import axios from 'axios'
import AsyncStorage from '@react-native-async-storage/async-storage';

const Report = () => {
    const [statusBarStyle, setStatusBarStyle] = useState();
    const navigation = useNavigation();
    const [load, setload] = useState(false);
    const [homedata, sethomedata] = useState("")
    const [refreshing, setRefreshing] = useState(false);
    const [showbutton, setshowbutton] = useState("1")

    const reportdata = async () => {
        try {
            const storedValue = await AsyncStorage.getItem('languageidd');
            setload(true)
            const result = await axios
                .post(
                    // `https://gvs.webinfoghy.co.in/api/index`,
                    `https://gvsassam.org/api/index`,
                    {
                        type: storedValue
                    }
                )
                .then(res => {
                    setload(false)
                    sethomedata(res.data)
                    console.log(res, 'language1211112112211212');
                });
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        reportdata()
    }, [])

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
            // </View>
        );
    };
    
    const onRefresh = () => {
        reportdata()
    }



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
                            Report
                        </Text>
                    </View>
                </View>
            </View>

            <View style={{ marginHorizontal: 10 }}>
                <View style={{
                    width: "100%",
                    flexDirection: "row",
                    backgroundColor: "#b9b9b9",
                    marginTop: 5,
                    paddingVertical: 7,
                    gap: 4,
                    borderRadius: 5
                }}>

                    <TouchableOpacity
                        onPress={() => setshowbutton("1")}
                        style={{ width: "50%", alignItems: "center", borderRightWidth: 0.65 }}>
                        <Text style={{ color: "#000", fontSize: responsiveFontSize(2), fontWeight: "300" }}>Blogs</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => setshowbutton("2")}
                        style={{ width: "50%", alignItems: "center", borderRadius: 5 }}>
                        <Text style={{ color: "#000", fontSize: responsiveFontSize(2), fontWeight: "300" }}>Pdf</Text>
                    </TouchableOpacity>
                </View>
            </View>

            {
                showbutton && showbutton == "1" ?

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
                        <View style={{ marginHorizontal: 8, marginTop: 3, flex: 1 }}>
                            <FlatList
                                data={homedata && homedata.report.length > 0 ? homedata.report : ''}
                                ListEmptyComponent={EmptyListMessage}
                                refreshControl={
                                    <RefreshControl
                                        refreshing={refreshing}
                                        onRefresh={onRefresh}
                                        colors={['#000']}
                                    />
                                }
                                showsVerticalScrollIndicator={false}
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
                                                        item.img ?
                                                            <Image
                                                                source={{ uri: item.img }}
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
                                                    // alignItems:"center",
                                                    paddingHorizontal: 5,
                                                    paddingTop: 5
                                                }}>
                                                    <Text style={{
                                                        color: "#000",
                                                        fontSize: responsiveFontSize(1.5),
                                                        // fontWeight: "600",
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
                                                        onPress={() => navigation.navigate("BlogDetailsPage", { data: item })}
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
                        </View>
                    )

                    :

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
                        <View style={{ flex: 1 }}>
                            <View style={{ marginHorizontal: 8, marginTop: 3, }}>
                                <FlatList
                                    data={homedata && homedata.report_pdf.length > 0 ? homedata.report_pdf : ''}
                                    ListEmptyComponent={EmptyListMessage}
                                    refreshControl={
                                        <RefreshControl
                                            refreshing={refreshing}
                                            onRefresh={onRefresh}
                                            colors={['#000']}
                                        />
                                    }
                                    showsVerticalScrollIndicator={false}
                                    // numColumns={2}
                                    renderItem={({ item, index }) => {
                                        // console.log('pdfdaata',item)
                                        return (
                                            <TouchableOpacity
                                                onPress={() => navigation.navigate('PdfView', { data: item.pdf })}
                                                style={{
                                                    width: "100%",
                                                    // backgroundColor: "#e6e6e6",
                                                    flexDirection: "row",
                                                    alignItems: "center",
                                                    borderRadius: 10,
                                                    paddingVertical: 9,
                                                    marginTop: 6,
                                                    elvation: 10,
                                                    alignItems: "center",
                                                    backgroundColor: "#d6d6d6"
                                                }}>

                                                <View style={{
                                                    width: "14%",
                                                    height: 50,
                                                    paddingVertical: 9,
                                                    // backgroundColor: "#d4d4d4",
                                                    backgroundColor: "#e7e7e7",
                                                    borderBottomRightRadius: 2,
                                                    borderBottomLeftRadius: 2,
                                                    borderTopRightRadius: 13,
                                                    borderTopLeftRadius: 2,
                                                    alignItems: "center",
                                                    marginLeft: 10,
                                                    elvatiion: 30

                                                }}>

                                                    <View style={{
                                                        width: "60%",
                                                        height: 30,
                                                        backgroundColor: "red",
                                                        alignItems: "center",
                                                        justifyContent: "center",
                                                        borderBottomRightRadius: 2,
                                                        borderBottomLeftRadius: 2,
                                                        borderTopRightRadius: 7,
                                                        borderTopLeftRadius: 2,

                                                    }}>
                                                        <Pdff name="file-pdf-o"
                                                            style={{
                                                                color: "#fff",
                                                                fontSize: responsiveFontSize(2),
                                                                fontWeight: "200",

                                                            }} />
                                                    </View>
                                                </View>


                                                <View style={{
                                                    width: "80%",
                                                    // backgroundColor: "blue"
                                                }}>
                                                    <View style>
                                                        <Text style={{

                                                            color: "#000",
                                                            fontSize: responsiveFontSize(1.7),
                                                            paddingLeft: 7,
                                                            fontWeight: "500",
                                                            textAlign: "justify"
                                                        }}>{item.heading}</Text>
                                                    </View>

                                                    <View style={{ flexDirection: "row", alignItems: "center", paddingTop: 2, paddingLeft: "55%" }}>
                                                        <View
                                                            style={{
                                                                backgroundColor: "#fff",
                                                                paddingHorizontal: 4,
                                                                paddingVertical: 4,
                                                                borderRadius: 10,
                                                                marginRight: 3,
                                                                // alignItems: "center"
                                                            }}>
                                                            <Dateee name="date"
                                                                style={{
                                                                    color: "#000",
                                                                    fontSize: responsiveFontSize(1.2),
                                                                }} />
                                                        </View>
                                                        <Text
                                                            style={{
                                                                color: "#000",
                                                                fontSize: responsiveFontSize(1.4),
                                                                paddingRight: 4,
                                                                fontWeight: '500'

                                                            }}>
                                                            {item.date}
                                                        </Text>
                                                    </View>

                                                </View>

                                            </TouchableOpacity>
                                        )
                                    }}
                                />
                            </View>

                        </View>
                    )
            }

            <View style={{ height: 5 }}></View>
        </View>
    )
}

export default Report

const styles = StyleSheet.create({})
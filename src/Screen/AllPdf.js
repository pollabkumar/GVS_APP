import React, { useEffect, useState,memo } from 'react';
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
import {
    responsiveHeight,
    responsiveWidth,
    responsiveFontSize
} from "react-native-responsive-dimensions";
import { useNavigation } from '@react-navigation/native';
import BackIcon from 'react-native-vector-icons/dist/Ionicons';
import Listt from 'react-native-vector-icons/Entypo';
import Pdff from 'react-native-vector-icons/FontAwesome';
import Dateee from 'react-native-vector-icons/Fontisto';
import Slidersss from 'react-native-vector-icons/dist/FontAwesome';
import axios from 'axios';
const deviceheight = Dimensions.get('window').height
const devicewidth = Dimensions.get('window').width
const AllPdf = ({route}) => {
    // console.log('lokok',route)
    const [statusBarStyle, setStatusBarStyle] = useState();
    const navigation = useNavigation();
    const [load, setload] = useState(false)
    const [alllpdf, setalllpdf] = useState("")
    const [refreshing, setRefreshing] = useState(false);


    const languagedata = async () => {
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
                    setalllpdf(res.data.pdf)
                    // console.log(res.data.pdf, 'pdf show');
                });
        } catch (error) {
            console.log(error);
        }
    };
    useEffect(() => {
        languagedata()
    }, [])

    const onRefresh = () => {
        languagedata()
    }

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
                            Gyan Barta PDF
                        </Text>
                    </View>
                </View>
            </View>

            <ScrollView
               showsVerticalScrollIndicator={false}>

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
                        <View style={{ flexDirection: "row", }}>
                            <View style={{ backgroundColor: "#fff", borderRadius: 26 }}>
                                <Listt name='list'
                                    style={{ color: "#000", fontSize: responsiveFontSize(1.65), paddingHorizontal: 4, paddingVertical: 4 }} />
                            </View>
                            <View style={{ paddingLeft: 5 }}>
                                <Text style={{ color: "#000", fontSize: responsiveFontSize(2), fontWeight: "500" }}>All Documents</Text>
                            </View>
                        </View>

                        {/* 
                        <View style={{flexDirection: "row",alignItems:"center",justifyContent:"center"}}>
                            <Slidersss name="sliders" style={{
                                color: "#000", fontSize: responsiveFontSize(1.5)
                            }} />
                            <Text style={{ color: "#000", fontSize: responsiveFontSize(1.5), paddingLeft: 7 }}>
                                Filter
                            </Text>
                        </View> */}
                    </View>
                </View>



                {
                    load && load == true ? (
                        <View
                            style={{
                                // flex: 1,
                                marginVertical: "60%",
                                flexDirection: 'column',
                                justifyContent: 'center',
                                alignItems: 'center',
                            }}>
                            <ActivityIndicator size="small" color="#000" animating={load} />
                            <Text style={{ fontSize: 12, color: "#000",fontWeight: "400",}}>please wait</Text>
                        </View>
                    ) : (
                        <View style={{ marginHorizontal: 8, }}>
                            <FlatList
                                data={alllpdf && alllpdf.length > 0 ? alllpdf : ''}
                                ListEmptyComponent={EmptyListMessage}
                                refreshControl={
                                    <RefreshControl
                                        refreshing={refreshing}
                                        onRefresh={onRefresh}
                                        colors={['#000']}
                                    />
                                }
                                showsVerticalScrollIndicator={false}
                                style={{ marginBottom: 55 }}
                                // numColumns={2}
                                renderItem={({ item, index }) => {
                                    return (
                                        <TouchableOpacity

                                                onPress={() => navigation.navigate('PdfView', { data: item.pdf })}
                                                style={{
                                                    width: "100%",
                                                    backgroundColor: "#e6e6e6",
                                                    flexDirection: "row",
                                                    alignItems: "center",
                                                    borderRadius: 10,
                                                    paddingVertical: 9,
                                                    marginTop: 6,
                                                    elvation: 10, alignItems: "center"
                                                }}>

                                                <View style={{

                                                    width: "14%",
                                                    height: 50,
                                                    paddingVertical: 9,
                                                    backgroundColor: "#d4d4d4",
                                                    borderBottomRightRadius: 2,
                                                    borderBottomLeftRadius: 2,
                                                    borderTopRightRadius: 13,
                                                    borderTopLeftRadius: 2,
                                                    alignItems: "center",
                                                    marginLeft: 10,
                                                    // elvatiion:30

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

                                                    <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "flex-end", paddingTop: 2, }}>
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
                                                                fontWeight:'500'

                                                            }}> 
                                                            {item.date}
                                                        </Text>
                                                    </View>

                                                </View>

                                            </TouchableOpacity>  
                                )
                                }}
                            />
                            <View style={{ paddingBottom: 17 }}></View>
                        </View>
                    )
                }

                {/* <View style={{marginHorizontal:10,marginTop:5}}>
                    <View style={{ width: "100%",flexDirection:"row" }}>
                        <View style={{ width: "20%", backgroundColor: "blue" }}>
                          <Text style={{}}>dfdf</Text>
                        </View>

                        <View style={{ width: "80%", backgroundColor: "yellow" }}>
                        <Text style={{}}>dfdf</Text>
                        </View>
                    </View>
                </View> */}

                {/* <View style={{ marginHorizontal: 8, marginTop: 10 }}>
                    <View style={{ width: "100%" }}>
                        <View style={{ marginHorizontal: 5 }}>
                            <Text style={{ color: "#000", fontSize: responsiveFontSize(2), fontWeight: "500" }}>
                                January 2023
                            </Text>
                        </View>

                        <View style={{
                            width: "100%",
                            flexDirection: "row",
                            flexWrap: "wrap",
                            gap: 5,
                            alignItems: "center",
                            justifyContent: "center",
                            marginTop: 10

                        }}>
                            {
                                pdff && pdff.map((item) => {
                                    return (
                                        <TouchableOpacity
                                            // onPress={()=>presspdf(item.name)}
                                            onPress={() => navigation.navigate('PdfView', { data: item.name })}

                                            style={{
                                                width: (devicewidth / 4) - 10,
                                                height: 90,
                                                backgroundColor: "#e1e1e1",
                                                borderRadius: 10,
                                                alignItems: "center",
                                                justifyContent: "center",
                                                //    elevation:5

                                            }}>
                                            <Pdff name="file-pdf-o" style={{ color: "#000", fontSize: responsiveFontSize(4), fontWeight: "200" }} />
                                            <Text style={{ color: "#000", fontSize: responsiveFontSize(1.75), }}>abcd</Text>
                                        </TouchableOpacity>

                                    )
                                })
                            }
                        </View>

                    </View>
                </View>

                <View style={{ marginHorizontal: 12, marginTop: 13 }}>
                    <View style={{ width: "100%" }}>
                        <View style={{ marginHorizontal: 5 }}>
                            <Text style={{ color: "#000", fontSize: responsiveFontSize(2), fontWeight: "500" }}>
                                February 2023
                            </Text>
                        </View>

                        <View style={{
                            width: "100%",
                            flexDirection: "row",
                            flexWrap: "wrap",
                            gap: 5,
                            alignItems: "center",
                            justifyContent: "center",
                            marginTop: 10

                        }}>
                            {
                                pdff && pdff.map((item) => {
                                    return (
                                        <TouchableOpacity
                                            // onPress={()=>presspdf(item.name)}
                                            onPress={() => navigation.navigate('PdfView', { data: item.name })}

                                            style={{
                                                width: (devicewidth / 4) - 10,
                                                height: 90,
                                                backgroundColor: "#e1e1e1",
                                                // marginHorizontal: 7,
                                                borderRadius: 10,
                                                alignItems: "center", justifyContent: "center"
                                                // borderWidth: .35,
                                                // borderColor: "grey"
                                            }}>
                                            <Pdff name="file-pdf-o" style={{ color: "#000", fontSize: responsiveFontSize(4), fontWeight: "200" }} />
                                            <Text style={{ color: "#000", fontSize: responsiveFontSize(1.75), }}>abcd</Text>
                                        </TouchableOpacity>

                                    )
                                })
                            }
                        </View>

                    </View>
                </View>

                <View style={{ marginHorizontal: 12, marginTop: 13 }}>
                    <View style={{ width: "100%" }}>
                        <View style={{ marginHorizontal: 5 }}>
                            <Text style={{ color: "#000", fontSize: responsiveFontSize(2), fontWeight: "500" }}>
                                March 2023
                            </Text>
                        </View>

                        <View style={{
                            width: "100%",
                            flexDirection: "row",
                            flexWrap: "wrap",
                            gap: 5,
                            alignItems: "center",
                            justifyContent: "center",
                            marginTop: 10

                        }}>
                            {
                                pdff && pdff.map((item) => {
                                    return (
                                        <TouchableOpacity
                                            // onPress={()=>presspdf(item.name)}
                                            onPress={() => navigation.navigate('PdfView', { data: item.name })}

                                            style={{
                                                width: (devicewidth / 4) - 10,
                                                height: 90,
                                                backgroundColor: "#e1e1e1",
                                                // marginHorizontal: 7,
                                                borderRadius: 10,
                                                alignItems: "center", justifyContent: "center"
                                                // borderWidth: .35,
                                                // borderColor: "grey"
                                            }}>
                                            <Pdff name="file-pdf-o" style={{ color: "#000", fontSize: responsiveFontSize(4), fontWeight: "200" }} />
                                            <Text style={{ color: "#000", fontSize: responsiveFontSize(1.75), }}>abcd</Text>
                                        </TouchableOpacity>

                                    )
                                })
                            }
                        </View>

                        <View style={{ marginBottom: 10 }}></View>

                    </View>
                </View> */}

            </ScrollView>
            
        </View>
    )
}

export default memo(AllPdf)

const styles = StyleSheet.create({})
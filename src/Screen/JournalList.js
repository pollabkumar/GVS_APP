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
import Headline from 'react-native-vector-icons/MaterialCommunityIcons';
import Dateee from 'react-native-vector-icons/Fontisto';
import { useNavigation } from '@react-navigation/native';
import LottieView from 'lottie-react-native';
import {
    responsiveHeight,
    responsiveWidth,
    responsiveFontSize
} from "react-native-responsive-dimensions";
import axios from 'axios'
import AsyncStorage from '@react-native-async-storage/async-storage';

const JournalList = () => {
    const [statusBarStyle, setStatusBarStyle] = useState();
    const navigation = useNavigation();
    const [load, setload] = useState(false);
    const [data, setdata] = useState("")
    const [refreshing, setRefreshing] = useState(false);

    const getjournaldetails = async () => {
        try {
            //   setload(true)
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
                    setdata(res.data.journals)
                      console.log(res, 'DATAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA');
                    // Toast()
                });
            console.log(result);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(()=>{
        getjournaldetails()
    },[])


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


    const onRefresh = () => {
        getjournaldetails()
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
                            Journal Lists
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
                ) : (
                    <View style={{ marginHorizontal: 8, marginTop: 3, flex: 1 }}>
                        <FlatList
                            data={data && data.length > 0 ? data : ''}
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
                                console.log("uidataitem",item)
                                return (
                                    <View style={{ marginHorizontal: 1, marginTop: 5 }}>
                                    <TouchableOpacity
                                        onPress={() => navigation.navigate("JournalListdetails",{data:item})}
                                        style={{
                                            width: "100%",
                                            // flexDirection: "row",
                                            alignItems: "center",
                                            backgroundColor: "#cacaca",
                                            paddingHorizontal: 5,
                                            paddingVertical: 10,
                                            borderRadius: 10,
                                            elevation: 10,
                                            
                                        }}>
                    
                    
                                        <View style={{ flexDirection: "row",alignItems:"flex-start",justifyContent:"center",marginHorizontal:3}}>
                                            <View style={{  width: "10%",paddingTop:1,alignItems:"center"}}>
                                                <Headline
                                                    style={{ backgroundColor: "#000", paddingVertical: 5, borderRadius: 50,paddingHorizontal:5 }}
                                                    name="view-headline" />
                                            </View>
                                            <View style={{
                                                paddingLeft: 4,
                                                width: "90%",
                                                // backgroundColor:"red"

                                            }}>
                                                <Text style={{ color: "#000", fontSize: responsiveFontSize(1.8), fontWeight: "500" }}>
                                                {
                                                    item.heading
                                                }
                                                </Text>
                                            </View>
                                        </View>
                                        <View
                                        //  onPress={() => navigation.navigate("JournalListdetails")}
                                            // onPress={() => navigation.navigate('PdfView', { data: item.file })}
                                            style={{width:"100%",alignItems:"flex-end",}}
                                        >
                    
                                            <LottieView
                                                style={{ width: 22, height: 22, }}
                                                source={require('../assets/NewAnimation.json')} autoPlay loop />
                                        </View>
                    
                                    </TouchableOpacity>
                                </View>
                                )
                            }}
                        />
                    </View>
                )
            }
{/* 
            <View style={{ marginHorizontal: 8, marginTop: 5 }}>
                <TouchableOpacity
                    onPress={() => navigation.navigate("JournalListdetails")}
                    style={{
                        width: "100%",
                        // flexDirection: "row",
                        alignItems: "center",
                        backgroundColor: "#cacaca",
                        paddingHorizontal: 5,
                        paddingVertical: 10,
                        borderRadius: 10,
                        elevation: 5
                    }}>


                    <View style={{ flexDirection: "row",alignItems:"flex-start",justifyContent:"center" }}>
                        <View style={{  width: "5%",paddingTop:1}}>
                            <Headline
                                style={{ backgroundColor: "#000", paddingHorizontal: 2, paddingVertical: 2, borderRadius: 50 }}
                                name="view-headline" />
                        </View>
                        <View style={{
                            paddingLeft: 6,
                            width: "95%"
                        }}>
                            <Text style={{ color: "#000", fontSize: responsiveFontSize(1.8), fontWeight: "500" }}>
                                Economic & Political Week Economic Economic & Political Week Economic Economic & Political Week Economic 
                            </Text>
                        </View>
                    </View>
                    <TouchableOpacity
                     onPress={() => navigation.navigate("JournalListdetails")}
                        // onPress={() => navigation.navigate('PdfView', { data: item.file })}
                        style={{width:"100%",alignItems:"flex-end",}}
                    >

                        <LottieView
                            style={{ width: 22, height: 22, }}
                            source={require('../assets/NewAnimation.json')} autoPlay loop />
                    </TouchableOpacity>

                </TouchableOpacity>
            </View>

            <View style={{ marginHorizontal: 8, marginTop: 5 }}>
                <TouchableOpacity
                    onPress={() => navigation.navigate("JournalListdetails")}
                    style={{
                        width: "100%",
                        // flexDirection: "row",
                        alignItems: "center",
                        backgroundColor: "#cacaca",
                        paddingHorizontal: 5,
                        paddingVertical: 10,
                        borderRadius: 10,
                        elevation: 10
                    }}>


                    <View style={{ flexDirection: "row",alignItems:"flex-start",justifyContent:"center" }}>
                        <View style={{  width: "5%",paddingTop:1}}>
                            <Headline
                                style={{ backgroundColor: "#000", paddingHorizontal: 2, paddingVertical: 2, borderRadius: 50 }}
                                name="view-headline" />
                        </View>
                        <View style={{
                            paddingLeft: 6,
                            width: "95%"
                        }}>
                            <Text style={{ color: "#000", fontSize: responsiveFontSize(1.8), fontWeight: "500" }}>
                            Economic & Political Week Economic Economic & Political Week Economic Economic & Political Week Economic 
                            </Text>
                        </View>
                    </View>
                    <TouchableOpacity
                     onPress={() => navigation.navigate("JournalListdetails")}
                        // onPress={() => navigation.navigate('PdfView', { data: item.file })}
                        style={{width:"100%",alignItems:"flex-end",}}
                    >

                        <LottieView
                            style={{ width: 22, height: 22, }}
                            source={require('../assets/NewAnimation.json')} autoPlay loop />
                    </TouchableOpacity>

                </TouchableOpacity>
            </View>

            <View style={{ marginHorizontal: 8, marginTop: 5 }}>
                <TouchableOpacity
                    onPress={() => navigation.navigate("JournalListdetails")}
                    style={{
                        width: "100%",
                        // flexDirection: "row",
                        alignItems: "center",
                        backgroundColor: "#cacaca",
                        paddingHorizontal: 5,
                        paddingVertical: 10,
                        borderRadius: 10,
                        elevation: 10
                    }}>


                    <View style={{ flexDirection: "row",alignItems:"flex-start",justifyContent:"center" }}>
                        <View style={{  width: "5%",paddingTop:1}}>
                            <Headline
                                style={{ backgroundColor: "#000", paddingHorizontal: 2, paddingVertical: 2, borderRadius: 50 }}
                                name="view-headline" />
                        </View>
                        <View style={{
                            paddingLeft: 6,
                            width: "95%"
                        }}>
                            <Text style={{ color: "#000", fontSize: responsiveFontSize(1.8), fontWeight: "500" }}>
                                Economic & Political Week Economic Economic & Political Week Economic Economic & Political Week Economic 
                            </Text>
                        </View>
                    </View>
                    <TouchableOpacity
                     onPress={() => navigation.navigate("JournalListdetails")}
                        // onPress={() => navigation.navigate('PdfView', { data: item.file })}
                        style={{width:"100%",alignItems:"flex-end",}}
                    >

                        <LottieView
                            style={{ width: 22, height: 22, }}
                            source={require('../assets/NewAnimation.json')} autoPlay loop />
                    </TouchableOpacity>

                </TouchableOpacity>
            </View> */}

        </View>
    )
}

export default JournalList

const styles = StyleSheet.create({})
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
import Language from 'react-native-vector-icons/FontAwesome';
import Dateee from 'react-native-vector-icons/Fontisto';
import Circular from 'react-native-vector-icons/FontAwesome';
import Cross from 'react-native-vector-icons/Entypo';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios'
import RadioGroup from 'react-native-radio-buttons-group'
import {
    responsiveHeight,
    responsiveWidth,
    responsiveFontSize
} from "react-native-responsive-dimensions";
const BlogDetails = ({route}) => {
    //  console.log('route',route)
    const [statusBarStyle, setStatusBarStyle] = useState();
    const navigation = useNavigation();
    const [modal, setmodal] = useState(false);
    const [language, setlanguage] = useState();
    const [load, setload] = useState(false);
    const [bloglist, setbloglist] = useState("");
    const [refreshing, setRefreshing] = useState(false);
    const blogdata = async () => {
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
                    setbloglist(res.data.blogs)
                    // console.log(res.data.blogs, 'blogs show');
                });
        } catch (error) {
            console.log(error);
        }
    };
    useEffect(() => {
        blogdata()
    }, [])

    const selectlanguage = () => {
        setmodal(true)
    }

    const EmptyListMessage = ({ item }) => {
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
    const onRefresh = () => {
        blogdata()
    }


    return (
        <View style={{ flex: 1, backgroundColor: "#e1e1e1" }}>
            <StatusBar
                animated={true}
                backgroundColor="#000"
                barStyle={statusBarStyle}
            />



            <View
                style={{
                    flexDirection: 'row',
                    paddingHorizontal: 10,
                    paddingVertical: 8,
                    alignItems: 'center',
                    backgroundColor: "#000",
                    elevation: 1,
                    position: 'relative',
                    zIndex: 20,
                    justifyContent: "space-between",
                    height: 50,
                    alignItems: "center"
                }}>
                <View style={{ flexDirection: 'row', justifyContent: "center",alignItems: "center" }}>

                    <TouchableOpacity
                        onPress={() => navigation.goBack()}
                        style={{ 
                            justifyContent: "center",
                             paddingLeft: responsiveWidth(1), 
                            //  marginTop: 2 
                             }}>
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
                           Gyan Barta  Blog's
                        </Text>
                    </View>
                </View>

                {/* <TouchableOpacity
                    onPress={() => selectlanguage()}
                    style={{
                         backgroundColor: "#000", 
                          borderRadius: 50,
                          flexDirection:"row",
                          alignItems:"center",
                          borderWidth:1,
                          borderColor:"#fff",
                          paddingHorizontal:7,
                          paddingVertical:5,
                          justifyContent:"center",

                          }}>

                        <View style={{paddingRight:5}}>
                         <Text style={{backgroundColor: "#000", fontSize: responsiveFontSize(2.2),color:"#fff"}}>Select Language</Text>
                        </View>

                         <Language name='language'
                            style={{
                              fontSize: responsiveFontSize(1.5),
                              color: '#000',
                              backgroundColor:"#fff",
                              paddingHorizontal:5,
                              paddingVertical:3,
                              borderRadius:40,
                              alignItems:"center"
                        }}
                    />
                </TouchableOpacity> */}
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

                    <FlatList
                        data={bloglist && bloglist.length > 0 ? bloglist : ''}
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

                                <View
                                    // onPress={() => navigation.navigate("")}
                                    style={{
                                        marginTop: 5,
                                        marginHorizontal: 8,
                                        borderRadius: 18
                                    }}>
                                    <View style={{
                                        width: "100%",
                                        borderRadius: 15,
                                        flexDirection: "row",



                                    }}>
                                        <View style={{
                                            width: "40%",
                                            paddingHorizontal: 5,
                                            paddingVertical: 5,
                                            backgroundColor: "#fff",

                                        }}>
                                            {
                                                item.img ?
                                                    <Image
                                                        source={{ uri: item.img }}
                                                        style={{
                                                            width: "100%",
                                                            height: 100,
                                                            borderRadius: 5
                                                        }}
                                                        resizeMode="stretch"
                                                    />
                                                    :
                                                    <Image
                                                        source={require('../assets/nophoto.jpg')}
                                                        style={{
                                                            width: "100%",
                                                            height: 100,
                                                            borderRadius: 5
                                                        }}
                                                        resizeMode="stretch"
                                                    />


                                            }
                                        </View>

                                        <View style={{
                                            width: "60%",
                                            paddingHorizontal: 2,
                                            paddingVertical: 5,
                                            backgroundColor: "#fff",

                                        }}>
                                            <View style={{}}>
                                                <Text style={{
                                                    color: "#000",
                                                    fontSize: responsiveFontSize(1.94),
                                                    fontWeight: "700",
                                                    textAlign: "justify",
                                                    fontFamily: "Roboto-BoldItalic"
                                                }}>
                                                    {item.heading}
                                                </Text>
                                            </View>

                                            <View style={{
                                                flexDirection: "row",
                                                width: "100%",
                                                justifyContent: "space-between",
                                                position: "absolute",
                                                bottom: 7,
                                                alignItems: "center"
                                            }}>
                                                <View style={{ flexDirection: "row", alignItems: "center" }}>
                                                    <View style={{ backgroundColor: "#e1e1e1", paddingHorizontal: 5, paddingVertical: 4, borderRadius: 10 }}>
                                                        <Dateee name="date" style={{ color: "#000", fontSize: responsiveFontSize(1.6) }} />
                                                    </View>
                                                    <Text style={{ color: "grey", fontSize: responsiveFontSize(1.4), fontWeight: "500", paddingLeft: 3 }}>{item.month}</Text>
                                                </View>

                                                <TouchableOpacity
                                                    onPress={() => navigation.navigate("BlogDetailsPage", { data: item })}
                                                    style={{
                                                        backgroundColor: "#000",
                                                        paddingVertical: 5,
                                                        paddingHorizontal: 10,
                                                        borderRadius: 5
                                                    }}>
                                                    <Text style={{ color: "#fff", fontSize: responsiveFontSize(1.6), fontWeight: "400", }}>
                                                        Detail Blog's
                                                    </Text>
                                                </TouchableOpacity>
                                            </View>

                                        </View>
                                    </View>
                                </View>
                            )
                        }}
                    />
                )
            }

            {modal ? (
                <Modal animationType="slide" transparent={true} visible={true}>
                    <View
                        style={{
                            flex: 1,
                            justifyContent: 'center',
                            alignItems: 'center',
                            marginHorizontal: 20,
                            elevation:10
                        }}>
                        <View
                            style={{
                                backgroundColor: 'white',
                                borderRadius: 20,
                                padding: 20,
                                shadowColor: '#000',
                                shadowOffset: {
                                    width: 0,
                                    height: 2,
                                },
                                shadowOpacity: 0.25,
                                shadowRadius: 4,
                                elevation: 5,
                                width: '100%',
                                height: 'auto',
                                paddingVertical: 23,
                              
                            }}>
                            <TouchableOpacity
                                onPress={() => setmodal(false)}
                                style={{ position: "absolute", right: 5, top: 2,}}>
                                <Cross name="circle-with-cross"
                                    style={{
                                        color: "#000",
                                        fontSize: responsiveFontSize(4.2),
                                    }}
                                />
                            </TouchableOpacity>
                            <View style={{ }}>
                                {
                                    language && language.map((item) => (
                                        <TouchableOpacity
                                            onPress={() => blog(item.id)}
                                            style={{
                                                flexDirection: "row",
                                                alignItems: "center",
                                                paddingVertical: 5,
                                                
                                            }}>
                                            <Circular name="circle-o"
                                                style={{
                                                    color: "#000",
                                                    fontSize: responsiveFontSize(1.9),
                                                }}
                                            />
                                            <Text
                                                style={{
                                                    color: "#000",
                                                    paddingLeft: 5,
                                                    fontSize: responsiveFontSize(1.9),
                                                }}>{item.name}</Text>
                                        </TouchableOpacity>
                                    ))
                                }
                            </View>
                        </View>
                    </View>
                </Modal>
            ) : (
                ''
            )}

            
        </View>
    )
}

export default memo(BlogDetails)

const styles = StyleSheet.create({})
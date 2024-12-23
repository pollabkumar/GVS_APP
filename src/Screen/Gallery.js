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
    // Modal,
    ActivityIndicator,
    RefreshControl
} from 'react-native'
import React, { useState, memo, useEffect } from 'react'
import Back from 'react-native-vector-icons/Ionicons';
import Cross from 'react-native-vector-icons/Entypo';
import Imagefolder from 'react-native-vector-icons/Entypo';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import Modal from "react-native-modal";
import {
    responsiveHeight,
    responsiveWidth,
    responsiveFontSize
} from "react-native-responsive-dimensions";

const Gallery = () => {
    const [statusBarStyle, setStatusBarStyle] = useState();
    const navigation = useNavigation();
    const [load, setload] = useState(false);
    const [imagefolder, setimagefolder] = useState("");
    const [modal, setmodal] = useState(false);
    const [refreshing, setRefreshing] = useState(false);
    const [show, setshow] = useState(false);


    const imagefolderr = async () => {
        setload(true)
        try {
            const result = await axios
                .get(
                    // ` https://www.webinfoghy.co.in/gvs/public/api/app/gallery/folder`,
                    `https://gvsassam.org/api/app/gallery/folder`,
                )
                .then(res => {
                    setimagefolder(res.data.data)
                    // console.log(res, 'gallry image');
                    setload(false)
                });
            console.log(result);
        } catch (error) {
            // seterror(error.response.data.message)
            console.log(error);
        }
    };
    const onRefresh = () => {
        imagefolderr()
    }

    const EmptyListMessage = () => {
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

    useEffect(() => {
        imagefolderr()
    }, [])

    function one(image) {
        setshow(image)
        setmodal(true)
        console.log(image)
    }




    return (
        <View style={{ flex: 1, }}>
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
                            Gallery Folders
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
                    <View style={{ marginHorizontal: 4 }}>
                        <FlatList
                            data={imagefolder && imagefolder.length > 0 ? imagefolder : ''}
                            ListEmptyComponent={EmptyListMessage}
                            refreshControl={
                                <RefreshControl
                                    refreshing={refreshing}
                                    onRefresh={onRefresh}
                                    colors={['#000']}
                                />
                            }
                            showsVerticalScrollIndicator={false}
                            numColumns={4}
                            renderItem={({ item, index }) => {
                                // console.log("itemitem", item.id)
                                return (
                               
                                    <View style={{  width: '25%', paddingHorizontal:5,paddingTop:10,height:100}}>
                                    <TouchableOpacity
                                        style={{ flex: 1, backgroundColor: '#000', justifyContent: 'center', alignItems: 'center',borderRadius:10 }}
                                        onPress={() => navigation.navigate("GalleryImages", { data: item.id })}
                                    >
                                        <Imagefolder 
                                        style={{fontSize:responsiveFontSize(5), justifyContent: 'center', alignItems: 'center'}}
                                        name="images"/>
                                        
                                    </TouchableOpacity>
                                    <Text style={{ 
                                            color: "#000", 
                                            textAlign: 'center' }}>
                                            {item.name}
                                        </Text>
                                </View>

                                )
                            }}
                        />
                        < View style={{ paddingBottom: 170 }}></View >
                    </View >
                )
            }

            <Modal
                // animationType="slide"
                // transparent={true}
                isVisible={modal}
                // onBackdropPress={() => setmodal(false)}
                onSwipeComplete={() => setmodal(false)}
                // swipeDirection={['down']}
                backdropOpacity={0.5}
                style={{
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center',
                    // marginHorizontal: 20,
                }}>
                <View
                    style={{
                        backgroundColor: 'white',
                        borderRadius: 20,
                        padding: 1,

                        shadowColor: '#000',
                        shadowOffset: {
                            width: 0,
                            height: 2,
                        },
                        shadowOpacity: 0.25,
                        shadowRadius: 4,
                        elevation: 5,
                        width: '100%',
                        height: '50%',
                        justifyContent: "center",
                        alignItems: "center"
                        // paddingVertical: 30,
                    }}>
                    {/* <StatusBar backgroundColor="rgba(0,0,0,0.5)" translucent /> */}
                    <TouchableOpacity
                        onPress={() => setmodal(false)}
                        style={{
                            position: "absolute",
                            top: -40,
                            backgroundColor: "#fff",
                            borderRadius: 50,
                            paddingHorizontal: 5,
                            paddingVertical: 5
                        }}>
                        <Cross name="circle-with-cross"
                            style={{ color: "#000", fontSize: responsiveFontSize(3) }}
                        />
                    </TouchableOpacity>
                    <Image
                        source={{ uri: show && show }}
                        style={{
                            height: "100%",
                            width: "100%",
                            borderRadius: 20,
                        }}
                        resizeMode="cover"
                    />

                </View>
            </Modal>

        </View >
    )
}

export default memo(Gallery)

const styles = StyleSheet.create({})
import React, { useEffect, useState, memo, useRef } from 'react';
import {
    Button,
    ActivityIndicator,
    Text,
    StyleSheet,
    View,
    StatusBar,
    TouchableOpacity,
    Image,
    ScrollView,
    Dimensions,
    PixelRatio,
    FlatList,
    RefreshControl,
    // Modal
} from 'react-native';
import {
    responsiveHeight,
    responsiveWidth,
    responsiveFontSize
} from "react-native-responsive-dimensions";
import AsyncStorage from '@react-native-async-storage/async-storage';
import LottieView from 'lottie-react-native';
import { useNavigation, useFocusEffect } from '@react-navigation/native';
import { SliderBox } from "react-native-image-slider-box";
import Viewww from 'react-native-vector-icons/AntDesign';
import Pdff from 'react-native-vector-icons/FontAwesome';
import PDFFFFF from 'react-native-vector-icons/AntDesign';
import Dateee from 'react-native-vector-icons/Fontisto';
import Blogss from 'react-native-vector-icons/Zocial';
import Newsss from 'react-native-vector-icons/Entypo';
import Startdateicon from 'react-native-vector-icons/dist/Entypo';
import Modal from "react-native-modal";
import axios from 'axios'
import Language from 'react-native-vector-icons/FontAwesome';
import Circular from 'react-native-vector-icons/FontAwesome';
import Cross from 'react-native-vector-icons/Entypo';
import Notices from 'react-native-vector-icons/AntDesign';
import DefaultLanguage from 'react-native-vector-icons/AntDesign';
import FormIcon from 'react-native-vector-icons/FontAwesome';


//  sidebar
import Homee from 'react-native-vector-icons/AntDesign';
import Journalicon from 'react-native-vector-icons/Entypo';
import PublicationIcon from 'react-native-vector-icons/dist/Ionicons';
import Reporticon from 'react-native-vector-icons/dist/FontAwesome';
import DropdownListIcon from 'react-native-vector-icons/AntDesign';
import Bookicon from 'react-native-vector-icons/Entypo';
import Eventicon from 'react-native-vector-icons/MaterialCommunityIcons';
import About from 'react-native-vector-icons/AntDesign';
import Historyicon from 'react-native-vector-icons/MaterialIcons';
import Popular from 'react-native-vector-icons/Feather';
import Memberandjournal from 'react-native-vector-icons/Feather';
import Imageicon from 'react-native-vector-icons/Feather';
import Terms from 'react-native-vector-icons/dist/FontAwesome';
import Privacy from 'react-native-vector-icons/MaterialIcons';
import Contactt from 'react-native-vector-icons/AntDesign';
// import Splashscreen from '../navigation/Splashscreen';
const deviceheight = Dimensions.get('window').height
const devicewidth = Dimensions.get('window').width

const HomePage = () => {
    const [statusBarStyle, setStatusBarStyle] = useState();
    const navigation = useNavigation();
    const [sendlanguageid, setsendlanguageid] = useState("");
    const [refreshing, setRefreshing] = useState(false);
    const [load, setload] = useState(false);
    const [homedata, sethomedata] = useState("")
    const [Publicationstab, setPublicationstab] = useState(false)
    const [aboutlisticon, setaboutlisticon] = useState(false)
    const [showSplash, setShowSplash] = useState(true);
    const [sidebaropen, setsidebaropen] = useState(false);
    const [listoflanguage, setlistoflanguage] = useState([
        {
            id: "1",
            name: "English"
        },
        {
            id: "2",
            name: "Assamese"
        },
    ]);
    const [modal, setmodal] = useState(false);
    const [slider, setslider] = useState(false);

    const languagedata = async (languageidd) => {
        console.log(typeof (languageidd))
        try {

            setsendlanguageid(languageidd)
            // console.log('klklklklklk1212', languageidd)
            const storedLanguageId = languageidd ? languageidd : "1";

            await AsyncStorage.setItem('languageidd', storedLanguageId);

            setload(true)
            const result = await axios
                .post(
                    // `https://gvs.webinfoghy.co.in/api/index`,
                    `https://gvsassam.org/api/index`,
                    {
                        type: storedLanguageId
                    }
                )
                .then(res => {
                    setload(false)
                    setmodal(false)
                    sethomedata(res.data)
                    // console.log(res, 'mainapiiiiiiiiii');
                });
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        languagedata()
    }, [])


    const selectlanguage = () => {
        setmodal(true)
    }

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowSplash(false);
        }, 5000);

        return () => clearTimeout(timer);
    }, []);

    useFocusEffect(
        React.useCallback(() => {
            return () => {
                setsidebaropen(false);
            };
        }, [])
    );


    const image = [
        require('../assets/banner1.jpeg'),
        require('../assets/banner2.jpeg'),

    ]

    const EmptyListMessage = ({ item }) => {
        return (
            // Flat List Item
            <View style={{}}>
                <View
                    style={{
                        alignItems: 'center',
                        // margin: 10
                        paddingVertical: 10
                    }}>
                    <Text
                        style={{ color: '#000', fontSize: 15, fontWeight: '400' }}>
                        No Data Found
                    </Text>
                </View>
            </View>
        );
    };

    const scrollViewRef = useRef(null);

    const onRefresh = async () => {
        setRefreshing(true);

        try {
            await languagedata();

        } catch (error) {
            console.error("Error refreshing data:", error);
        } finally {
            setRefreshing(false);
        }
    };


    const loadData = async () => {
        try {
            const storedValue = await AsyncStorage.getItem('languageidd');
            if (storedValue !== null) {
                // setStringValue(storedValue);
                console.log('Data loaded successfully!', storedValue);
            }
        } catch (error) {
            console.error('Error loading data: ', error);
        }
    };

    useEffect(() => {
        loadData()
    }, [])
    const funnn = () => {
        navigation.navigate('HomePage')
        setsidebaropen(false);
    }

    return (
        <View style={{ flex: 1 }}>
            <StatusBar
                animated={true}
                backgroundColor="#000"
                barStyle={statusBarStyle}
            />

            <View style={{ flex: 1, backgroundColor: "#fff", }}>


                <View style={{}}>
                    <View style={{ flexDirection: "row", width: "100%", backgroundColor: "#000", paddingHorizontal: 10, justifyContent: "space-between", alignItems: "center" }}>
                        <View style={{ flexDirection: "row", alignItems: "center" }}>
                            <TouchableOpacity
                                onPress={() => setsidebaropen(true)}
                                style={{ flexDirection: "row", paddingVertical: 10 }}>
                                <Startdateicon name="menu" size={18} style={styles.icon} />
                            </TouchableOpacity>
                            <View style={{}}>
                                <Text style={styles.Headline}>GVS</Text>
                            </View>

                        </View>

                        <View style={{}}>
                            <TouchableOpacity
                                onPress={() => navigation.navigate('ConnectWithus')}
                                style={{
                                    backgroundColor: "#ff6000",
                                    paddingHorizontal: 10,
                                    paddingVertical: 3,
                                    borderRadius: 5
                                }}
                            >
                                <Text style={{
                                    fontSize: responsiveFontSize(1.60),
                                    fontWeight: "500",
                                    // fontStyle:"italic",
                                    color: "#fff"
                                }}>Connect With us</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>

                <ScrollView showsVerticalScrollIndicator={false}
                    refreshControl={
                        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} colors={['#F29D38']} />
                    }
                >

                    <SliderBox
                        images={image}
                        // images={imaage}
                        autoplauInterval={10000}
                        autoplay
                        circleLoop
                        imageLoadingColor='#ff6000'
                        dotColor="#302c51"
                        // resizeMethod={'resize'}
                        // resizeMode={'contain'}
                        ImageComponentStyle={{ borderRadius: 10, width: "96%", marginTop: 2, }}
                    />

                    <View style={{ alignItems: "center", marginTop: 12 }}>
                        <Text style={{
                            color: "#000", fontSize: responsiveFontSize(2.5),
                            //  fontWeight: "100",
                            fontFamily: "Dosis-SemiBold"
                        }}>
                            Welcome To Gyan Vigyan Samiti
                        </Text>
                    </View>


                    {/* Welcome to Gyan Vigyan Samiti's website */}

                    <View style={{ marginHorizontal: 10, marginTop: 12 }}>
                        <View style={{ width: "100%" }}>
                            <View style={{ width: "100%", position: "absolute", top: 1, zIndex: 11, justifyContent: "center", alignItems: "center", }}>
                                <Image
                                    source={require('../assets/main.jpeg')}
                                    resizeMode="center"
                                    style={{
                                        width: 150,
                                        height: 150,
                                        borderRadius: 100,
                                        borderWidth: 2,
                                        borderColor: "#000",
                                        alignSelf: "center",
                                        elevation: 7
                                    }}
                                />
                            </View>
                            <View style={{
                                marginTop: 50,
                                backgroundColor: "#fff",
                                paddingHorizontal: 2,
                                paddingVertical: 10,
                                borderRadius: 15,
                                width: "100%",
                                height: "auto",
                                borderWidth: 0.65,
                                elevation: 3,
                                alignItems: "center",
                                borderColor: "#d8dadc"
                            }}>

                                <View style={{ paddingTop: 60, paddingHorizontal: 2 }}>
                                    <Text style={{ color: "#ff6000", alignSelf: "center", paddingTop: 35, fontSize: responsiveFontSize(2.1), fontWeight: "500" }}> We’re Non-profit Charity Organization</Text>
                                    <Text
                                        style={{
                                            color: "#000",
                                            textAlign: "justify",
                                            // fontSize: 14, 
                                            fontWeight: "normal",
                                            fontStyle: "italic",
                                            lineHeight: 24,
                                            textAlign: "center",

                                            fontSize: responsiveFontSize(1.9),
                                            paddingTop: 5,
                                            // fontWeight: "500",
                                            // // fontFamily: "Dosis-SemiBold"
                                            fontFamily: "Roboto-BoldItalic"
                                            // // fontFamily:"TiltNeon-Regular-VariableFont_XROT,YROT"

                                        }}>
                                        Established on July 18, 1990 as sub-committee of Assam Science Society,one of the premier voluntary organisation of India (established in 1953),
                                        Guwahati, to formulate and conduct Total Literacy Campaign in Development Blocks in 6 Districts of Assam.
                                        Works in the area of Disaster Management, Education & Literacy,
                                        Environment and natural resource management, Health & Nutrition,
                                        HIV/AIDS, Information & Communication Technology (ICT) , Micro Finance (SHGs),
                                        Panchayati Raj, Rural Development & Poverty Alleviation, Science & Technology,
                                        Vocational Training, Womens Development & Empowerment, Youth Affairs, etc.
                                    </Text>
                                </View>
                            </View>

                        </View>
                    </View>

                    {/*     noitice      */}

                    <View style={{ marginHorizontal: 10, marginTop: 12 }}>
                        <View style={{ width: "100%", backgroundColor: '#e7e7e7', borderBottomRightRadius: 5 }}>
                            <View style={{
                                width: "100%",
                                flexDirection: "row",
                                backgroundColor: "#ff6000",
                                paddingHorizontal: 6,
                                paddingVertical: 7,
                                borderRadius: 7,
                                alignItems: "center",
                                elevation: 4,
                                justifyContent: "space-between",
                                borderBottomStartRadius: 20,
                                borderBottomRightRadius: 20,
                                borderTopLeftRadius: 5,
                                borderTopRightRadius: 5
                            }}>

                                <View style={{ flexDirection: "row", }}>
                                    <View
                                        style={{
                                            backgroundColor: "#fff",
                                            paddingHorizontal: 5,
                                            paddingVertical: 5,
                                            borderRadius: 80,
                                            // marginLeft: 3
                                        }}>
                                        <Notices name='notification'
                                            style={{
                                                color: '#ff6000',
                                                fontSize: responsiveFontSize(1.7)
                                            }}
                                        />
                                    </View>
                                    <View style={{ paddingLeft: 5 }}>
                                        <Text style={{ color: "#fff", fontSize: responsiveFontSize(1.8), fontWeight: "900", fontFamily: "Roboto-Italic" }}>Latest News & Events</Text>
                                    </View>
                                </View>

                                <TouchableOpacity
                                    onPress={() => navigation.navigate('NoticeBoard')}
                                    style={{
                                        height: 20,
                                        flexDirection: 'row',
                                        width: "20%",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        backgroundColor: "#e1e1e1",
                                        // paddingVertical: 2,
                                        borderRadius: 8

                                    }}>
                                    <TouchableOpacity
                                        onPress={() => navigation.navigate('NoticeBoard')}
                                        style={{}}>
                                        <Text style={{ color: "#000", fontSize: responsiveFontSize(1.4), fontWeight: "400" }}>
                                            View All
                                        </Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity

                                        onPress={() => navigation.navigate('NoticeBoard')} style={{
                                            marginLeft: 4,
                                            backgroundColor: "#000",
                                            paddingHorizontal: 2,
                                            borderRadius: 50,
                                            paddingVertical: 2,
                                            alignItems: "center",
                                        }}>
                                        <Viewww name='arrowright' style={{ color: "#fff", fontSize: responsiveFontSize(1) }} />
                                    </TouchableOpacity>
                                </TouchableOpacity>
                            </View>

                            {/* polll */}

                            {
                                load && load ?
                                    <View style={{}}>
                                        <View style={{ alignItems: "center", flexDirection: "column", height: 100, width: "100%", justifyContent: 'center', }}>
                                            <View style={{ flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                                                <ActivityIndicator size="small" color="#000" animating={load} />
                                                <Text style={{ color: "#000", fontSize: responsiveFontSize(1.6) }}>
                                                    Please Wait
                                                </Text>
                                            </View>

                                        </View>
                                    </View>
                                    :
                                    <View style={{ marginHorizontal: 8, marginTop: 3 }}>
                                        <FlatList
                                            data={homedata && homedata.notices.length > 0 ? homedata.notices.slice(0, 4) : ''}
                                            ListEmptyComponent={EmptyListMessage}
                                            showsVerticalScrollIndicator={false}
                                            // numColumns={2}
                                            renderItem={({ item, index }) => {
                                                // console.log('pdfdaata',item)
                                                return (
                                                    <TouchableOpacity
                                                        onPress={() => navigation.navigate('PdfView', { data: item.file })}
                                                        style={{
                                                            paddingTop: 10,
                                                            width: "100%",
                                                            flexDirection: "row",
                                                            borderBottomWidth: 0.65,
                                                            borderColor: "grey",
                                                            paddingBottom: 8,
                                                            borderStyle: "dotted",
                                                            justifyContent: "space-between",
                                                            alignItems: "center",

                                                        }}>
                                                        <View style={{ flexDirection: "row", width: "85%", alignItems: "center" }}>
                                                            <TouchableOpacity
                                                                onPress={() => navigation.navigate('PdfView', { data: item.file })}
                                                                style={{ alignItems: "center", }}
                                                            >

                                                                <LottieView
                                                                    style={{ width: 30, height: 30 }}
                                                                    source={require('../assets/Animation - 1703747019321.json')} autoPlay loop />
                                                            </TouchableOpacity>

                                                            <TouchableOpacity
                                                                onPress={() => navigation.navigate('PdfView', { data: item.file })}
                                                                style={{ paddingLeft: 5 }}>
                                                                <Text style={{ fontSize: responsiveFontSize(1.8), color: "#000" }}>
                                                                    {item.heading}
                                                                </Text>
                                                            </TouchableOpacity>
                                                        </View>

                                                        <TouchableOpacity
                                                            onPress={() => navigation.navigate('PdfView', { data: item.file })}
                                                            style={{ width: "15%", alignItems: "flex-end" }}>
                                                            <Viewww name='arrowright'
                                                                style={{
                                                                    color: "#fff",
                                                                    fontSize: responsiveFontSize(1.3),
                                                                    backgroundColor: "#ff853b",
                                                                    paddingHorizontal: 3,
                                                                    paddingVertical: 3,
                                                                    borderRadius: 50
                                                                }} />
                                                        </TouchableOpacity>

                                                    </TouchableOpacity>
                                                )
                                            }}
                                        />
                                        <View style={{ marginBottom: 10 }}></View>
                                    </View>
                            }
                        </View>
                    </View>



                    {/* Select Language */}

                    <View style={{ marginHorizontal: 10, marginTop: 10 }}>
                        <TouchableOpacity
                            onPress={() => selectlanguage()}
                            style={{
                                width: "100%",
                                flexDirection: "row",
                                // alignItems: "center",
                                justifyContent: "space-between",
                                paddingHorizontal: 10,
                                backgroundColor: "#ff6000",
                                paddingVertical: 10,
                                // alignItems: "center",
                                // justifyContent: "center",
                                elevation: 10,
                                borderBottomStartRadius: 20,
                                borderBottomRightRadius: 20,
                                borderTopLeftRadius: 5,
                                borderTopRightRadius: 5
                            }}>


                            <View style={{ flexDirection: "row", alignItems: "center" }}>
                                <Language name='language'
                                    style={{
                                        fontSize: responsiveFontSize(1.5),
                                        color: '#ff6000',
                                        backgroundColor: "#fff",
                                        paddingHorizontal: 5,
                                        paddingVertical: 3,
                                        borderRadius: 40,
                                        alignItems: "center",
                                        // marginLeft: 10

                                    }}
                                />
                                <View style={{ marginLeft: 5 }}>
                                    <Text style={{ color: "#fff", fontSize: responsiveFontSize(1.8), fontWeight: "900", fontFamily: "Roboto-Italic" }}>Select Language</Text>
                                </View>

                            </View>

                            <View style={{ flexDirection: "row", alignItems: "center", paddingRight: 5, }}>
                                <View style={{ paddingRight: 2, }}>
                                    <DefaultLanguage name="circledown"
                                        style={{
                                            // paddingRight:3,
                                            borderRadius: 50,
                                            color: "#fff",
                                            fontSize: responsiveFontSize(1.8),
                                            backgroundColor: "#ff6000",
                                            alignSelf: "center",
                                            paddingHorizontal: 2,
                                            paddingVertical: 2,
                                            fontWeight: "300"

                                        }} />

                                </View>
                                <View style={{}}>
                                    {
                                        sendlanguageid && sendlanguageid == 2 ?
                                            <Text style={{ color: "#fff", fontSize: responsiveFontSize(1.5), fontWeight: "500" }}>Assamese</Text>
                                            :
                                            <Text style={{ color: "#fff", fontSize: responsiveFontSize(1.5), fontWeight: "500" }}>English</Text>

                                    }
                                </View>
                            </View>

                        </TouchableOpacity>
                    </View>
                    {/*   Select Language   */}

                    {/* Gyan barta pdf */}

                    <View style={{ marginHorizontal: 8, marginTop: 5 }}>
                        <View style={{
                            width: "100%",
                            backgroundColor: "#e7e7e7",
                            marginTop: 15,
                            paddingVertical: 10,
                            borderRadius: 7
                        }}>
                            <View style={{ width: "100%", alignItems: "center", marginTop: 1 }}>
                                <View style={{
                                    alignItems: 'center',
                                    flexDirection: "row",
                                    textAlign: "center",
                                    paddingHorizontal: 10,
                                    paddingVertical: 8,
                                    justifyContent: "center",
                                    backgroundColor: "#dadada",
                                    borderTopLeftRadius: 10,
                                    borderBottomRightRadius: 10,
                                    width: "50%",
                                    elevation: 3
                                }}>
                                    <View style={{ backgroundColor: "#000", paddingHorizontal: 5, paddingVertical: 5, borderRadius: 50 }}>
                                        <PDFFFFF name="pdffile1"
                                            style={{
                                                color: "#cacaca",
                                                fontSize: responsiveFontSize(1.8)
                                            }}
                                        />
                                    </View>

                                    <Text style={{
                                        color: "#000",
                                        fontSize: responsiveFontSize(2),
                                        fontWeight: "700",
                                        paddingLeft: 5,
                                        fontFamily: "Dosis-SemiBold"
                                    }}>Gyan barta PDF</Text>
                                </View>
                            </View>

                            <View style={{}}>
                                {
                                    load && load ?
                                        <View style={{}}>
                                            <View style={{ alignItems: "center", flexDirection: "column", height: 100, width: "100%", justifyContent: 'center', }}>
                                                <View style={{ flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                                                    <ActivityIndicator size="small" color="#000" animating={load} />
                                                    <Text style={{ color: "#000", fontSize: responsiveFontSize(1.6) }}>
                                                        Please Wait
                                                    </Text>
                                                </View>

                                            </View>
                                        </View> :
                                        <View style={{ marginHorizontal: 8, marginTop: 3 }}>
                                            <FlatList
                                                data={homedata && homedata.pdf.length > 0 ? homedata.pdf.slice(0, 4) : ''}
                                                ListEmptyComponent={EmptyListMessage}
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
                                            <View style={{ justifyContent: 'center', alignItems: "center", marginTop: 5 }}>
                                                <TouchableOpacity
                                                    onPress={() => navigation.navigate('AllPdf', { data: sendlanguageid && sendlanguageid })}
                                                    style={{
                                                        flexDirection: 'row',
                                                        width: "22%",
                                                        alignItems: "center",
                                                        justifyContent: "center",
                                                        // backgroundColor: "#e1e1e1",
                                                        backgroundColor: "#d5d5d5",
                                                        paddingVertical: 5,
                                                        borderRadius: 8

                                                    }}>
                                                    <TouchableOpacity
                                                        onPress={() => navigation.navigate('AllPdf', { data: sendlanguageid && sendlanguageid })}
                                                        style={{}}>
                                                        <Text style={{ color: "#000", fontSize: responsiveFontSize(1.4), fontWeight: "400" }}>
                                                            View All
                                                        </Text>
                                                    </TouchableOpacity>

                                                    <TouchableOpacity
                                                        onPress={() => navigation.navigate('AllPdf', { data: sendlanguageid && sendlanguageid })}
                                                        style={{
                                                            marginLeft: 4,
                                                            backgroundColor: "#000",
                                                            paddingHorizontal: 2,
                                                            borderRadius: 50,
                                                            paddingVertical: 2,
                                                            alignItems: "center",
                                                        }}>
                                                        <Viewww name='arrowright'
                                                            style={{
                                                                color: "#fff",
                                                                fontSize: responsiveFontSize(1),
                                                                // fontWeight:"500"

                                                            }} />
                                                    </TouchableOpacity>
                                                </TouchableOpacity>
                                            </View>
                                        </View>

                                }

                            </View>

                        </View>
                    </View>
                    {/* prabandhak */}




                    {/* blogs */}

                    <View style={{ marginHorizontal: 8, marginTop: 16 }}>
                        <View style={{
                            width: "100%",
                            flexDirection: "row",
                            backgroundColor: "#000",
                            paddingHorizontal: 5,
                            paddingVertical: 7,
                            borderRadius: 7,
                            alignItems: "center",
                            elevation: 4,
                            justifyContent: "space-between"
                        }}>

                            <View style={{ flexDirection: "row", }}>
                                <View
                                    style={{
                                        backgroundColor: "grey",
                                        paddingHorizontal: 5,
                                        paddingVertical: 5,
                                        borderRadius: 80,
                                        marginLeft: 3
                                    }}>
                                    <Blogss name="blogger"
                                        style={{
                                            color: "#cacaca",
                                            fontSize: responsiveFontSize(1.5)
                                        }}
                                    />
                                </View>
                                <View style={{ paddingLeft: 5 }}>
                                    <Text
                                        style={{
                                            color: "#fff",
                                            fontSize: responsiveFontSize(2),
                                            fontWeight: "500",
                                            fontFamily: "Dosis-SemiBold"
                                        }}>
                                        Gyan barta Blog's
                                    </Text>
                                </View>
                            </View>

                            <TouchableOpacity
                                onPress={() => navigation.navigate('BlogDetails', { data: sendlanguageid && sendlanguageid })}
                                style={{
                                    height: 20,
                                    flexDirection: 'row',
                                    width: "20%",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    backgroundColor: "#e1e1e1",
                                    // paddingVertical: 2,
                                    borderRadius: 8

                                }}>
                                <TouchableOpacity
                                    onPress={() => navigation.navigate('BlogDetails', { data: sendlanguageid && sendlanguageid })}
                                    style={{}}>
                                    <Text style={{ color: "#000", fontSize: responsiveFontSize(1.4), fontWeight: "500" }}>
                                        View All
                                    </Text>
                                </TouchableOpacity>
                                <TouchableOpacity

                                    onPress={() => navigation.navigate('BlogDetails', { data: item.blogs })} style={{
                                        marginLeft: 4,
                                        backgroundColor: "#000",
                                        paddingHorizontal: 2,
                                        borderRadius: 50,
                                        paddingVertical: 2,
                                        alignItems: "center",
                                    }}>
                                    <Viewww name='arrowright' style={{ color: "#fff", fontSize: responsiveFontSize(1) }} />
                                </TouchableOpacity>
                            </TouchableOpacity>

                        </View>


                    </View>

                    {/* blogs flatlist */}

                    {
                        load && load ?
                            <View style={{}}>
                                <View style={{ alignItems: "center", flexDirection: "column", height: 100, width: "100%", justifyContent: 'center', }}>
                                    <View style={{ flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                                        <ActivityIndicator size="small" color="#000" animating={load} />
                                        <Text style={{ color: "#000", fontSize: responsiveFontSize(1.6) }}>
                                            Please Wait
                                        </Text>
                                    </View>

                                </View>
                            </View>
                            :

                            <View style={{ marginHorizontal: 8, marginTop: 3 }}>
                                <FlatList
                                    data={homedata && homedata.blogs.length > 0 ? homedata.blogs.slice(0, 4) : ''}
                                    ListEmptyComponent={EmptyListMessage}
                                    showsVerticalScrollIndicator={false}
                                    numColumns={2}
                                    renderItem={({ item, index }) => {
                                        return (
                                            <View

                                                style={{
                                                    width: "100%",
                                                    flex: 1,
                                                    margin: 3,
                                                    alignItems: "center",
                                                    justifyContent: "center",

                                                }}>
                                                <View style={{
                                                    height: 190,
                                                    width: 166,
                                                    borderRadius: 5,
                                                    backgroundColor: "red",
                                                    elevation: 2,
                                                    backgroundColor: "#fff",
                                                }}>

                                                    <View style={{ width: "100%", }}>
                                                        {
                                                            item.img ?
                                                                <Image
                                                                    // source={require('../assets/blogs.jpg')}
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
                                                            {/* Nature is a teacher – Just sit quietly under a tree */}
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
                    }


                    <View style={{ marginBottom: 10 }}></View>
                </ScrollView>

                {
                    modal ? (
                        <Modal animationType="slide" transparent={true} visible={true}>
                            <View
                                style={{
                                    flex: 1,
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    marginHorizontal: 20,
                                    elevation: 10
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
                                        style={{ position: "absolute", right: 8, top: 8, padding: 2 }}>
                                        <Cross name="circle-with-cross"
                                            style={{
                                                color: "#000",
                                                fontSize: responsiveFontSize(2.5),
                                            }}
                                        />
                                    </TouchableOpacity>


                                    {
                                        load && load ?
                                            <View
                                                style={{
                                                    position: "absolute",
                                                    justifyContent: "center",
                                                    alignItems: "center",
                                                    // width: "100%",
                                                    marginTop: 40,
                                                    backgroundColor: "#fff",
                                                    alignSelf: "center"
                                                }}
                                            >

                                                <ActivityIndicator color="#000"
                                                    style={{
                                                        backgroundColor: "#fff",
                                                        elevation: 15,
                                                        borderRadius: 60,
                                                        padding: 5,



                                                    }}
                                                />
                                            </View>
                                            :
                                            ""
                                    }


                                    <View style={{}}>
                                        {
                                            listoflanguage && listoflanguage.map((item) => (
                                                <TouchableOpacity
                                                    onPress={() => languagedata(item.id)}
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
                                                        }}>
                                                        {item.name}
                                                    </Text>
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

            <Modal
                isVisible={sidebaropen}
                onBackdropPress={() => setsidebaropen(false)}
                onSwipeComplete={() => setsidebaropen(false)}
                swipeDirection="left"
                backdropOpacity={0.5}
                animationIn="slideInLeft"
                animationOut="slideOutLeft"
                style={{ margin: 0 }}
            >
                <View style={{ backgroundColor: "#fff", width: "80%", flex: 1 }}>

                    <View style={{
                        width: "100%",
                        backgroundColor: "#e8ebed",
                        alignItems: "center",
                        // paddingVertical: 10,
                        justifyContent: "center",
                        height: 180,
                        borderBottomEndRadius: 20,
                        borderBottomLeftRadius: 20,
                        elevation: 3
                    }}>
                        <View style={{ paddingTop: 10 }}>
                            <Image
                                style={{ height: 80, width: 80, borderRadius: 50, }}
                                source={require('../assets/p6.jpg')}
                                resizeMode="stretch"
                            />
                        </View>
                        <Text style={{ color: "#000", fontSize: responsiveFontSize(2), fontWeight: "500", paddingTop: 10 }}>Gyan Vigyan Samiti Assam</Text>
                    </View>

                    <ScrollView style={{ padding: 5 }}>

                        <TouchableOpacity
                            onPress={() => funnn()}
                            style={{ flexDirection: "row", alignItems: "center" }}
                        >
                            <View style={{ padding: 6, borderRadius: 70 }}>
                                <Homee name='home'
                                    size={18}
                                    color="#000"
                                    style={{ backgroundColor: "#e8ebed", padding: 6, borderRadius: 70 }}
                                />
                            </View>

                            <Text style={{ color: "#000", fontSize: responsiveFontSize(1.8), fontWeight: "500" }}>Home</Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            onPress={() => setPublicationstab(!Publicationstab)}
                            style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}
                        >
                            <View style={{ flexDirection: "row", alignItems: "center", }}>
                                <View style={{ padding: 6, borderRadius: 70 }}>
                                    <PublicationIcon name='newspaper-outline'
                                        size={18}
                                        color="#000"
                                        style={{ backgroundColor: "#e8ebed", padding: 6, borderRadius: 70 }}
                                    />
                                </View>

                                <Text style={{ color: "#000", fontSize: responsiveFontSize(1.8), fontWeight: "500" }}>Publications</Text>
                            </View>
                            <View style={{ marginRight: 5, alignItems: "center", padding: 2, borderRadius: 80, elevation: 5, backgroundColor: "#fff" }}>
                                <DropdownListIcon
                                    style={{ color: "#000", fontSize: responsiveFontSize(1.8) }}
                                    name="downcircleo" />
                            </View>

                        </TouchableOpacity>

                        {/* Publications lists*/}
                        {
                            Publicationstab && Publicationstab ?
                                <TouchableOpacity
                                    style={{ alignItems: "flex-end", width: "100%", paddingVertical: 8 }}>

                                    <TouchableOpacity
                                        onPress={() => navigation.navigate('Publication')}
                                        style={{
                                            flexDirection: 'row',
                                            alignItems: 'center',
                                            width: "90%",
                                        }}>
                                        <View style={{ width: "11%", }}>
                                            <Bookicon name='open-book'
                                                size={15}
                                                color="#000"
                                                style={{
                                                    backgroundColor: "#ebebeb",
                                                    padding: 6,
                                                    borderRadius: 70,

                                                }}
                                            />

                                        </View>
                                        <View style={{ width: "88%", paddingLeft: 2 }}>
                                            <Text style={{
                                                fontSize: responsiveFontSize(1.65),
                                                paddingLeft: 3,
                                                fontWeight: '500',
                                                color: '#000',
                                                backgroundColor: "#ebebeb",
                                                paddingVertical: 5,
                                                borderRadius: 15,
                                                paddingLeft: 10
                                            }}>Books</Text>
                                        </View>
                                    </TouchableOpacity>


                                    <TouchableOpacity
                                        onPress={() => navigation.navigate('JournalList')}
                                        style={{
                                            flexDirection: 'row',
                                            alignItems: 'center',
                                            width: "90%",
                                            marginTop: 2
                                        }}>
                                        <View style={{ width: "11%", }}>
                                            <Journalicon name='text'
                                                size={15}
                                                color="#000"
                                                style={{
                                                    backgroundColor: "#ebebeb",
                                                    padding: 6,
                                                    borderRadius: 70,

                                                }}
                                            />

                                        </View>
                                        <View style={{ width: "88%", paddingLeft: 2 }}>
                                            <Text style={{
                                                fontSize: responsiveFontSize(1.65),
                                                paddingLeft: 3,
                                                fontWeight: '500',
                                                color: '#000',
                                                backgroundColor: "#ebebeb",
                                                paddingVertical: 5,
                                                borderRadius: 15,
                                                paddingLeft: 10
                                            }}>Journal</Text>
                                        </View>
                                    </TouchableOpacity>

                                    <TouchableOpacity
                                        onPress={() => navigation.navigate('Report')}
                                        style={{
                                            flexDirection: 'row',
                                            alignItems: 'center',
                                            width: "90%",
                                            marginTop: 2
                                        }}>
                                        <View style={{ width: "11%", }}>
                                            <Reporticon name='list-alt'
                                                size={15}
                                                color="#000"
                                                style={{
                                                    backgroundColor: "#ebebeb",
                                                    padding: 6,
                                                    borderRadius: 70,

                                                }}
                                            />

                                        </View>
                                        <View style={{ width: "88%", paddingLeft: 2 }}>
                                            <Text style={{
                                                fontSize: responsiveFontSize(1.65),
                                                paddingLeft: 3,
                                                fontWeight: '500',
                                                color: '#000',
                                                backgroundColor: "#ebebeb",
                                                paddingVertical: 5,
                                                borderRadius: 15,
                                                paddingLeft: 10
                                            }}>Reports</Text>
                                        </View>
                                    </TouchableOpacity>

                                </TouchableOpacity>
                                :
                                ""
                        }

                        <TouchableOpacity
                            onPress={() => navigation.navigate('Events')}
                            style={{ flexDirection: "row", alignItems: "center" }}
                        >
                            <View style={{ padding: 6, borderRadius: 70 }}>
                                <Eventicon name='sticker-text-outline'
                                    size={17}
                                    color="#000"
                                    style={{ backgroundColor: "#e8ebed", padding: 6, borderRadius: 70 }}
                                />
                            </View>

                            <Text style={{ color: "#000", fontSize: responsiveFontSize(1.8), fontWeight: "500" }}>Events</Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            onPress={() => setaboutlisticon(!aboutlisticon)}
                            style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}
                        >
                            <View style={{ flexDirection: "row", alignItems: "center", }}>
                                <View style={{ padding: 6, borderRadius: 70 }}>
                                    <About name='menufold'
                                        size={15}
                                        color="#000"
                                        style={{ backgroundColor: "#e8ebed", padding: 6, borderRadius: 70 }}
                                    />
                                </View>

                                <Text style={{ color: "#000", fontSize: responsiveFontSize(1.8), fontWeight: "500" }}>About</Text>
                            </View>
                            <View style={{ marginRight: 5, alignItems: "center", padding: 2, borderRadius: 80, elevation: 5, backgroundColor: "#fff" }}>
                                <DropdownListIcon
                                    style={{ color: "#000", fontSize: responsiveFontSize(1.8) }}
                                    name="downcircleo" />
                            </View>

                        </TouchableOpacity>

                        {/* Publications lists*/}
                        {
                            aboutlisticon && aboutlisticon ?
                                <TouchableOpacity
                                    style={{ alignItems: "flex-end", width: "100%", paddingVertical: 8 }}>

                                    <TouchableOpacity
                                        onPress={() => navigation.navigate('OurObjectives')}
                                        style={{
                                            flexDirection: 'row',
                                            alignItems: 'center',
                                            width: "90%",
                                        }}>
                                        <View style={{ width: "11%", }}>
                                            <Popular name='slack'
                                                size={15}
                                                color="#000"
                                                style={{
                                                    backgroundColor: "#ebebeb",
                                                    padding: 6,
                                                    borderRadius: 70,

                                                }}
                                            />

                                        </View>
                                        <View style={{ width: "88%", paddingLeft: 2 }}>
                                            <Text style={{
                                                fontSize: responsiveFontSize(1.65),
                                                paddingLeft: 3,
                                                fontWeight: '500',
                                                color: '#000',
                                                backgroundColor: "#ebebeb",
                                                paddingVertical: 5,
                                                borderRadius: 15,
                                                paddingLeft: 10
                                            }}>Vision and Objectives</Text>
                                        </View>
                                    </TouchableOpacity>

                                    {/* <TouchableOpacity
                                        onPress={() => navigation.navigate('JournalList')}
                                        style={{
                                            flexDirection: 'row',
                                            alignItems: 'center',
                                            width: "90%",
                                            marginTop: 2
                                        }}>
                                        <View style={{ width: "11%", }}>
                                            <Historyicon name='history'
                                                size={15}
                                                color="#000"
                                                style={{
                                                    backgroundColor: "#ebebeb",
                                                    padding: 6,
                                                    borderRadius: 70,

                                                }}
                                            />

                                        </View>
                                        <View style={{ width: "88%", paddingLeft: 2 }}>
                                            <Text style={{
                                                fontSize: responsiveFontSize(1.65),
                                                paddingLeft: 3,
                                                fontWeight: '500',
                                                color: '#000',
                                                backgroundColor: "#ebebeb",
                                                paddingVertical: 5,
                                                borderRadius: 15,
                                                paddingLeft: 10
                                            }}>History and Legacy</Text>
                                        </View>
                                    </TouchableOpacity> */}

                                    <TouchableOpacity
                                        onPress={() => navigation.navigate('TeamMember')}
                                        style={{
                                            flexDirection: 'row',
                                            alignItems: 'center',
                                            width: "90%",
                                            marginTop: 2
                                        }}>
                                        <View style={{ width: "11%", }}>
                                            <Memberandjournal name='users'
                                                size={15}
                                                color="#000"
                                                style={{
                                                    backgroundColor: "#ebebeb",
                                                    padding: 6,
                                                    borderRadius: 70,

                                                }}
                                            />

                                        </View>
                                        <View style={{ width: "88%", paddingLeft: 2 }}>
                                            <Text style={{
                                                fontSize: responsiveFontSize(1.65),
                                                paddingLeft: 3,
                                                fontWeight: '500',
                                                color: '#000',
                                                backgroundColor: "#ebebeb",
                                                paddingVertical: 5,
                                                borderRadius: 15,
                                                paddingLeft: 10
                                            }}>Executive Members</Text>
                                        </View>
                                    </TouchableOpacity>

                                    <TouchableOpacity
                                        onPress={() => navigation.navigate('DistricSectories')}
                                        style={{
                                            flexDirection: 'row',
                                            alignItems: 'center',
                                            width: "90%",
                                            marginTop: 2
                                        }}>
                                        <View style={{ width: "11%", }}>
                                            <FormIcon name='wpforms'
                                                size={15}
                                                color="#000"
                                                style={{
                                                    backgroundColor: "#ebebeb",
                                                    padding: 6,
                                                    borderRadius: 70,

                                                }}
                                            />

                                        </View>
                                        <View style={{ width: "88%", paddingLeft: 2 }}>
                                            <Text style={{
                                                fontSize: responsiveFontSize(1.65),
                                                paddingLeft: 3,
                                                fontWeight: '500',
                                                color: '#000',
                                                backgroundColor: "#ebebeb",
                                                paddingVertical: 5,
                                                borderRadius: 15,
                                                paddingLeft: 10
                                            }}>
                                                Our District Secretaries</Text>
                                        </View>
                                    </TouchableOpacity>

                                    <TouchableOpacity
                                        onPress={() => navigation.navigate('WorkWithUs')}
                                        style={{
                                            flexDirection: 'row',
                                            alignItems: 'center',
                                            width: "90%",
                                            marginTop: 2
                                        }}>
                                        <View style={{ width: "11%", }}>
                                            <FormIcon name='wpforms'
                                                size={15}
                                                color="#000"
                                                style={{
                                                    backgroundColor: "#ebebeb",
                                                    padding: 6,
                                                    borderRadius: 70,

                                                }}
                                            />

                                        </View>
                                        <View style={{ width: "88%", paddingLeft: 2 }}>
                                            <Text style={{
                                                fontSize: responsiveFontSize(1.65),
                                                paddingLeft: 3,
                                                fontWeight: '500',
                                                color: '#000',
                                                backgroundColor: "#ebebeb",
                                                paddingVertical: 5,
                                                borderRadius: 15,
                                                paddingLeft: 10
                                            }}>Work With Us</Text>
                                        </View>
                                    </TouchableOpacity>

                                </TouchableOpacity>
                                :
                                ""
                        }

                        <TouchableOpacity
                            onPress={() => navigation.navigate('Gallery')}
                            style={{ flexDirection: "row", alignItems: "center" }}
                        >
                            <View style={{ padding: 6, borderRadius: 70 }}>
                                <Imageicon name='image'
                                    size={17}
                                    color="#000"
                                    style={{ backgroundColor: "#e8ebed", padding: 6, borderRadius: 70 }}
                                />
                            </View>

                            <Text style={{ color: "#000", fontSize: responsiveFontSize(1.8), fontWeight: '500', }}>Children</Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            onPress={() => navigation.navigate('Termsandcondition')}
                            style={{ flexDirection: "row", alignItems: "center" }}
                        >
                            <View style={{ padding: 6, borderRadius: 70 }}>
                                <Terms name='file-text-o'
                                    size={17}
                                    color="#000"
                                    style={{ backgroundColor: "#e8ebed", padding: 6, borderRadius: 70 }}
                                />
                            </View>

                            <Text style={{ color: "#000", fontSize: responsiveFontSize(1.8), fontWeight: '500', }}>Terms & Conditions</Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            onPress={() => navigation.navigate('PrivacyPolicy')}
                            style={{ flexDirection: "row", alignItems: "center" }}
                        >
                            <View style={{ padding: 6, borderRadius: 70 }}>
                                <Privacy name='privacy-tip'
                                    size={17}
                                    color="#000"
                                    style={{ backgroundColor: "#e8ebed", padding: 6, borderRadius: 70 }}
                                />
                            </View>

                            <Text style={{ color: "#000", fontSize: responsiveFontSize(1.8), fontWeight: '500', }}>Privacy Policy</Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            onPress={() => navigation.navigate('ContactUs')}
                            style={{ flexDirection: "row", alignItems: "center" }}
                        >
                            <View style={{ padding: 6, borderRadius: 70 }}>
                                <Contactt name='contacts'
                                    size={17}
                                    color="#000"
                                    style={{ backgroundColor: "#e8ebed", padding: 6, borderRadius: 70 }}
                                />
                            </View>
                            <Text style={{ color: "#000", fontSize: responsiveFontSize(1.8), fontWeight: '500', }}>Contact Us</Text>
                        </TouchableOpacity>
                    </ScrollView>
                </View>
            </Modal>



        </View>
    )
}

export default HomePage

const styles = StyleSheet.create({
    icon: {
        // fontSize: responsiveFontSize(2),
        backgroundColor: "white",
        padding: 3,
        borderRadius: 100,
        color: "black",

    },
    Headline: {
        color: '#fff',
        fontSize: responsiveFontSize(2.2),
        // zIndex: 0,
        justifyContent: 'center',
        fontWeight: "400",
        paddingLeft: 6,
        fontFamily: ""
    }
});
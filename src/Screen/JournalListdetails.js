// import {
//     StyleSheet,
//     Text,
//     View,
//     StatusBar,
//     TouchableOpacity,
//     Image,
//     ScrollView,
//     FlatList,
//     Dimensions,
//     Modal,
//     ActivityIndicator,
//     RefreshControl,
//     Touchable
// } from 'react-native'
// import React, { useState, memo, useEffect } from 'react'
// import Back from 'react-native-vector-icons/Ionicons';
// import ShortText from 'react-native-vector-icons/MaterialIcons';
// import HeaderIcon from 'react-native-vector-icons/Octicons';
// import { useNavigation } from '@react-navigation/native';
// import {
//     responsiveHeight,
//     responsiveWidth,
//     responsiveFontSize
// } from "react-native-responsive-dimensions";
// import axios from 'axios'
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import LinearGradient from 'react-native-linear-gradient';
// const JournalListdetails = ({ route }) => {
//     console.log("routeroute", route)
//     const [statusBarStyle, setStatusBarStyle] = useState();
//     const navigation = useNavigation();
//     const [load, setload] = useState(false);
//     const [homedata, sethomedata] = useState("")
//     const [refreshing, setRefreshing] = useState(false);


//     const [showFullDesc, setShowFullDesc] = useState(false);

//     const toggleDescription = () => {
//         setShowFullDesc(!showFullDesc);
//     };

//     const renderDescription = (desc) => {
//         if (showFullDesc) {
//             return desc; // Render full description if showFullDesc is true
//         } else {
//             // Render only first 200 characters if showFullDesc is false
//             return desc.length > 200 ? desc.substring(0, 200) + '...' : desc;
//         }
//     };

//     return (
//         <View style={{ flex: 1, backgroundColor: "#fff" }}>

//             <StatusBar
//                 animated={true}
//                 backgroundColor="#000"
//                 barStyle={statusBarStyle}
//             />

//             <View
//                 style={{
//                     flexDirection: 'row',
//                     //  paddingHorizontal: 10,
//                     paddingVertical: 8,
//                     alignItems: 'center',
//                     backgroundColor: "#000",
//                     elevation: 1,
//                     position: 'relative',
//                     zIndex: 20,
//                     justifyContent: "space-between",
//                     height: 50
//                 }}>
//                 <View style={{ flexDirection: 'row', justifyContent: "center", }}>
//                     <TouchableOpacity
//                         onPress={() => navigation.goBack()}
//                         style={{ justifyContent: "center", paddingLeft: responsiveWidth(1), marginTop: 2 }}>
//                         <TouchableOpacity
//                             style={{ borderRadius: 20, justifyContent: "center", textAlign: "center", paddingHorizontal: 5, paddingVertical: 5 }}
//                             onPress={() => navigation.goBack()}
//                         // navigation.goBack()
//                         >
//                             <Back
//                                 name="chevron-back-outline"
//                                 style={{ fontSize: responsiveFontSize(3), color: "#4e8ef9", textAlign: "center", justifyContent: "center", color: "#fff" }}
//                             />
//                         </TouchableOpacity>
//                     </TouchableOpacity>

//                     <View style={{ justifyContent: "center", }}>
//                         <Text
//                             style={{
//                                 fontSize: responsiveFontSize(2.1),
//                                 color: "#fff",
//                                 fontWeight: '500',
//                                 alignItems: "center"
//                             }}>
//                             Journal Lists
//                         </Text>
//                     </View>
//                 </View>
//             </View>

//             <ScrollView>

//                 <View
//                     style={{ marginHorizontal: 3, }}>
//                     <LinearGradient
//                         colors={['#000', '#ff6000']}
//                         start={{ x: 0, y: 0 }}
//                         end={{ x: 1, y: 0 }}
//                         style={{
//                             width: "100%",
//                             height: 290,
//                             borderWidth: 5,
//                             borderColor: "transparent",
//                             borderRadius: 10,
//                             overflow: 'hidden',
//                         }}
//                     >
//                         <TouchableOpacity
//                             //   onPress={()=>navigation.navigate("")}
//                             style={{ alignItems: 'center', justifyContent: "center" }}>
//                             <Image
//                                 source={require('../assets/noticeeeeee.jpg')}
//                                 // source={uri:route}
//                                 style={{
//                                     width: 250,
//                                     height: 250,
//                                     position: "relative",
//                                     top: 15,
//                                     elevation: 10,
//                                     borderRadius: 5
//                                 }}
//                                 resizeMode="stretch"
//                             />
//                         </TouchableOpacity>
//                     </LinearGradient>
//                 </View>
//                 {/* first */}


//                 {route.params.data.details.map((item, index) => {
//                     console.log(item)
//                     return (
//                         <View key={index} style={{ marginHorizontal: 8, marginTop: 5 }}>
//                             <View style={styles.headingContainer}>
//                                 <View style={{}}>
//                                     <HeaderIcon
//                                         style={{
//                                             color: "#000",
//                                             fontSize: responsiveFontSize(1.4),
//                                             backgroundColor: "#fff",
//                                             padding: 4,
//                                             borderRadius: 50
//                                         }}
//                                         name="stack" />
//                                 </View>
//                                 <Text style={styles.heading}>{item.heading}</Text>
//                             </View>

//                             <View style={styles.descriptionContainer}>
//                                 <Text style={styles.description}>
//                                     {renderDescription(item.desc)}
//                                 </Text>
//                                 {item.desc.length > 200 && (
//                                     <TouchableOpacity
//                                         style={{
//                                             marginTop: 3,
//                                             backgroundColor: "#d7d7d7",
//                                             width: "20%",
//                                             alignItems: "center",
//                                             borderRadius: 10,
//                                             paddingVertical: 2

//                                         }}
//                                         onPress={toggleDescription}>
//                                         <Text style={styles.readMore}>
//                                             {showFullDesc ? 'Read Less' : 'Read More'}
//                                         </Text>
//                                     </TouchableOpacity>
//                                 )}
//                             </View>
//                         </View>
//                     )
//                 })}
//                 <View style={{ paddingBottom: 5 }}></View>
//             </ScrollView>
//         </View >

//     )
// }

// export default JournalListdetails



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
    RefreshControl,
    Touchable
} from 'react-native'
import React, { useState, memo, useEffect } from 'react'
import Back from 'react-native-vector-icons/Ionicons';
import ShortText from 'react-native-vector-icons/MaterialIcons';
import HeaderIcon from 'react-native-vector-icons/Octicons';
import { useNavigation } from '@react-navigation/native';
import {
    responsiveHeight,
    responsiveWidth,
    responsiveFontSize
} from "react-native-responsive-dimensions";
import LottieView from 'lottie-react-native';
import axios from 'axios'
import AsyncStorage from '@react-native-async-storage/async-storage';
import LinearGradient from 'react-native-linear-gradient';
const JournalListdetails = ({ route }) => {
    console.log("routeroute", route)
    const [statusBarStyle, setStatusBarStyle] = useState();
    const navigation = useNavigation();
    const [load, setload] = useState(false);
    const [homedata, sethomedata] = useState("")
    const [refreshing, setRefreshing] = useState(false);

    // State to manage which description is expanded
    const [expandedDescriptions, setExpandedDescriptions] = useState({});

    const toggleDescription = (index) => {
        // Toggle the state of the description at the given index
        setExpandedDescriptions(prevState => ({
            ...prevState,
            [index]: !prevState[index]
        }));
    };

    const renderDescription = (desc, index) => {
        const isExpanded = expandedDescriptions[index];
        if (isExpanded) {
            return desc;
        } else {
            return desc.length > 200 ? desc.substring(0, 200) + '...' : desc;
        }
    };

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
                            onPress={() => navigation.goBack()}>
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

            <ScrollView
             showsVerticalScrollIndicator={false} 
             showsHorizontalScrollIndicator={false}
            >

                <View
                    style={{ marginHorizontal: 3, }}>
                    <LinearGradient
                        colors={['#000', '#ff6000']}
                        start={{ x: 0, y: 0 }}
                        end={{ x: 1, y: 0 }}
                        style={{
                            width: "100%",
                            height: 290,
                            borderWidth: 5,
                            borderColor: "transparent",
                            borderRadius: 10,
                            overflow: 'hidden',
                        }}>
                        <TouchableOpacity
                            onPress={() => navigation.navigate("PdfView", { data: route.params.data?.file })}
                            style={{ alignItems: 'center', justifyContent: "center" }}>
                            <Image
                                source={{ uri: route.params.data?.image }}
                                style={{
                                    width: 250,
                                    height: 250,
                                    position: "relative",
                                    top: 15,
                                    elevation: 10,
                                    borderRadius: 5
                                }}
                                resizeMode="stretch"
                            />
                        </TouchableOpacity>

                        <TouchableOpacity
                            onPress={() => navigation.navigate('PdfView', {data: route.params.data?.file})}
                            style={{ alignItems:"flex-end",paddingBottom:10 }}
                        >

                            <LottieView
                                style={{ width: 35, height: 25 }}
                                source={require('../assets/pdfanimation.json')} autoPlay loop />
                        </TouchableOpacity>
                    </LinearGradient>
                </View>

                {route.params.data.details.map((item, index) => (
                    <View key={index} style={{ marginHorizontal: 8, marginTop: 5 }}>
                        <View style={styles.headingContainer}>
                            <View style={{}}>
                                <HeaderIcon
                                    style={{
                                        color: "#000",
                                        fontSize: responsiveFontSize(1.4),
                                        backgroundColor: "#fff",
                                        padding: 4,
                                        borderRadius: 50
                                    }}
                                    name="stack" />
                            </View>
                            <Text style={styles.heading}>{item.heading}</Text>
                        </View>

                        <View style={styles.descriptionContainer}>
                            <Text style={styles.description}>
                                {renderDescription(item.desc, index)}
                            </Text>
                            {item.desc.length > 200 && (
                                <TouchableOpacity
                                    style={{
                                        marginTop: 3,
                                        backgroundColor: "#d7d7d7",
                                        width: "20%",
                                        alignItems: "center",
                                        borderRadius: 10,
                                        paddingVertical: 2
                                    }}
                                    onPress={() => toggleDescription(index)}>
                                    <Text style={styles.readMore}>
                                        {expandedDescriptions[index] ? 'Read Less' : 'Read More'}
                                    </Text>
                                </TouchableOpacity>
                            )}
                        </View>
                    </View>
                ))}

                <View style={{ paddingBottom: 5 }}></View>

            </ScrollView>
        </View>
    )
}

export default JournalListdetails;


const styles = StyleSheet.create({
    headingContainer: {
        width: '100%',
        backgroundColor: '#e8ebed',
        flexDirection: 'row',
        alignItems: 'center',
        paddingLeft: 5,
        paddingVertical: 5,
    },
    heading: {
        color: '#000',
        fontSize: responsiveFontSize(1.6),
        fontWeight: '500',
        paddingLeft: 5
    },
    descriptionContainer: {
        paddingTop: 3,
    },
    description: {
        color: '#000',
        fontSize: responsiveFontSize(1.6),
        textAlign: 'justify',
        fontWeight: "400"
    },
    readMore: {
        color: '#ff6000',
        //   marginTop: 5,
        fontSize: responsiveFontSize(1.4),
        fontWeight: "400"
    },
});
import React, { useState, useEffect, useRef } from 'react';
import {
    StyleSheet,
    Text,
    View,
    StatusBar,
    TouchableOpacity,
    Image,
    ScrollView,
    FlatList,
    ActivityIndicator,
    RefreshControl,
} from 'react-native';
import Modal from 'react-native-modal';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import Back from 'react-native-vector-icons/Ionicons';
import {
    responsiveWidth,
    responsiveFontSize,
} from 'react-native-responsive-dimensions';
import Cross from 'react-native-vector-icons/Entypo';

const GalleryImages = ({ route }) => {
    const navigation = useNavigation();
    const [load, setLoad] = useState(false);
    const [images, setImages] = useState([]);
    const [modalVisible, setModalVisible] = useState(false);
    const [selectedImageIndex, setSelectedImageIndex] = useState(0);
    const scrollViewRef = useRef(null);

    const fetchImages = async () => {
        setLoad(true);
        try {
            const response = await axios.post(
                // 'https://www.webinfoghy.co.in/gvs/public/api/app/gallery/list',
                `https://gvsassam.org/api/app/gallery/list`,
                
                {
                    folder_id: route.params.data,
                }
            );
            setImages(response.data.data);
            console.log("response.data.data", response.data.data)
        } catch (error) {
            console.error('Error fetching images:', error);
        } finally {
            setLoad(false);
        }
    };

    useEffect(() => {
        fetchImages();
    }, []);

    const onRefresh = async () => {
        fetchImages();
    };

    const openModal = (index) => {
        setSelectedImageIndex(index);
        setModalVisible(true);
    };

    return (
        <View style={{ flex: 1, marginBottom: 60 }}>
            <StatusBar
                animated={true}
                backgroundColor="#000"
                barStyle="light-content"
            />

            {/* Header */}
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
                            Gallery
                        </Text>
                    </View>
                </View>
            </View>
            {load ? (
                <View style={styles.loaderContainer}>
                    <ActivityIndicator size="small" color="#000" />
                    <Text style={styles.loaderText}>Please wait</Text>
                </View>
            ) : (
                <View style={{ paddingHorizontal: 4,height:"100%",backgroundColor:"#b1b1b1"}}>
                    <FlatList
                        data={images}
                        refreshControl={
                            <RefreshControl
                                refreshing={load}
                                onRefresh={onRefresh}
                                colors={['#000']}
                            />
                        }
                        showsVerticalScrollIndicator={false}
                        numColumns={2}
                        renderItem={({ item, index }) => (
                            <>

                                <TouchableOpacity
                                    onPress={() => openModal(index)}
                                    // style={styles.imageContainer}
                                    style={{
                                        width: '50%',
                                        aspectRatio: 1,
                                        padding: 1,
                                        // backgroundColor: "#b1b1b1",
                                        borderWidth: 1,
                                        borderColor:"#fff",
                                        borderRadius:10
                                        // height: 1500,
                                    }}
                                >
                                    <Image
                                        source={{ uri: item.image }}
                                        style={styles.image}
                                        resizeMode="stretch"
                                    />

                                    <View style={{ alignItems: "center", width:"100%",height:38,justifyContent:"center"}}>
                                        <Text style={{ color: "#000", fontSize: responsiveFontSize(1.5),fontWeight:"500" }}>{item.title}</Text>
                                    </View>

                                </TouchableOpacity>
                            </>
                        )}
                        keyExtractor={(item, index) => index.toString()}
                    />

                </View>
            )}

            {/* Modal */}
            <Modal
                isVisible={modalVisible}
                onBackdropPress={() => setModalVisible(false)}
                backdropOpacity={0.5}
                style={styles.modal}>
                <TouchableOpacity
                    onPress={() => setModalVisible(false)}
                    style={styles.closeButton}>
                    <Cross name="circle-with-cross" style={styles.closeIcon} />
                </TouchableOpacity>
                <ScrollView
                    horizontal
                    pagingEnabled
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={styles.scrollViewContent}
                    ref={scrollViewRef}
                    onLayout={() => {
                        scrollViewRef.current.scrollTo({
                            x: selectedImageIndex * responsiveWidth(100),
                            animated: false,
                        });
                    }}>
                    {images.map((image, index) => (
                        <View style={{}}>
                            <Image
                                key={index}
                                source={{ uri: image.image }}
                                style={styles.modalImage}
                                resizeMode="cover"
                            />
                        </View>
                    ))}
                </ScrollView>
            </Modal>

        </View>
    );
};

export default GalleryImages;

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        paddingVertical: 8,
        alignItems: 'center',
        backgroundColor: '#000',
        elevation: 1,
        position: 'relative',
        zIndex: 20,
        justifyContent: 'space-between',
        height: 50,
    }, 
    backButton: {
        justifyContent: 'center',
        paddingLeft: 10,
        marginTop: 2,
    },
    backButtonText: {
        fontSize: 16,
        color: '#4e8ef9',
        fontWeight: '500',
    },
    headerTitle: {
        fontSize: 18,
        color: '#fff',
        fontWeight: '500',
    },
    loaderContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    loaderText: {
        fontSize: 12,
        color: '#000',
        fontWeight: '400',
    },
    imageContainer: {
        width: '50%',
        aspectRatio: 1,
        padding: 8,
        // backgroundColor: "red",
        borderWidth: 1,
        height: 500,

    },
    image: {
        flex: 1,
        borderRadius: 5,

    },
    modal: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    closeButton: {
        position: 'absolute',
        top: 10,
        right: 10,
        zIndex: 1,
    },
    closeIcon: {
        color: '#ff6000',
        fontSize: 30,
    },
    scrollViewContent: {
        alignItems: 'center',
        gap: 1,

    },
    modalImage: {
        width: responsiveWidth(100),
        aspectRatio: 1,

    },
});


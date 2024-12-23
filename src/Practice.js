import React, { useState, useEffect } from 'react';
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
    ActivityIndicator,
    RefreshControl,
} from 'react-native';
import Modal from 'react-native-modal';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import {
    responsiveHeight,
    responsiveWidth,
    responsiveFontSize,
} from 'react-native-responsive-dimensions';
import Cross from 'react-native-vector-icons/Entypo';

const GalleryImages = ({ route }) => {
    const [statusBarStyle, setStatusBarStyle] = useState();
    const navigation = useNavigation();
    const [load, setLoad] = useState(false);
    const [images, setImages] = useState([]);
    const [modalVisible, setModalVisible] = useState(false);
    const [selectedImage, setSelectedImage] = useState('');
    const [refreshing, setRefreshing] = useState(false);
    const [selectedImageIndex, setSelectedImageIndex] = useState(0);
    const fetchImages = async () => {
        setLoad(true);
        try {
            const response = await axios.post(
                'https://www.webinfoghy.co.in/gvs/public/api/app/gallery/list',
                {
                    folder_id: route.params.data,
                }
            );
            setImages(response.data.data);
        } catch (error) {
            console.error('Error fetching images:', error);
        } finally {
            setLoad(false);
        }
    };

    useEffect(() => {
        fetchImages();
    }, []);

    const onRefresh = () => {
        setRefreshing(true);
        fetchImages();
        setRefreshing(false);
    };

    // const openModal = (image) => {
    //     setSelectedImage(image);
    //     setModalVisible(true);
    // };
    const openModal = (index) => {
        setSelectedImageIndex(index);
        setModalVisible(true);
    };

    return (
        <View style={{ flex: 1 }}>
            <StatusBar
                animated={true}
                backgroundColor="#000"
                barStyle={statusBarStyle}
            />

            {/* Header */}
            <View style={styles.header}>
                <TouchableOpacity
                    onPress={() => navigation.goBack()}
                    style={styles.backButton}>
                    <Text style={styles.backButtonText}>Back</Text>
                </TouchableOpacity>
                <Text style={styles.headerTitle}>Gallery</Text>
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
                            data={images && images.length > 0 ? images : ''}
                            // ListEmptyComponent={EmptyListMessage}
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
                                console.log("itemimage", item)
                                return (
                                    <TouchableOpacity
                                        // onPress={() => openModal(item.image)}
                                        onPress={() => openModal(index)}
                                        style={{
                                            width: "100%",
                                            flex: 1,
                                            margin: 2,
                                            alignItems: "center", justifyContent: "center"
                                        }}>
                                        <Image
                                            source={{ uri: item.image }}
                                            style={{
                                                height: 165,
                                                width: 169,
                                                borderRadius: 5

                                            }}
                                            resizeMode="stretch"
                                        />
                                    </TouchableOpacity>

                                )
                            }}

                            keyExtractor={(item, index) => index.toString()}
                        />
                        <View style={{ paddingBottom: 170 }}></View>
                    </View>
                )
            }

            {/* Modal */}
            {/* <Modal
                isVisible={modalVisible}
                onBackdropPress={() => setModalVisible(false)}
                backdropOpacity={0.5}
                style={styles.modal}>
                <ScrollView
                    horizontal
                    pagingEnabled
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={styles.scrollViewContent}>
                    {images.map((image, index) => (
                        <Image
                            key={index}
                            source={{ uri: image.image }}
                            style={styles.modalImage}
                            resizeMode="cover"
                            // resizeMode="contain"
                        />
                    ))}
                </ScrollView>
            </Modal> */}
            <Modal
                isVisible={modalVisible}
                onBackdropPress={() => setModalVisible(false)}
                backdropOpacity={0.5}
                style={styles.modal}>
                    <View style={{}}>
                    <TouchableOpacity
                    onPress={()=>setModalVisible(false)}
                    style={{width:"100%"}}>
                        <Cross name="circle-with-cross"
                            style={{ color: "red", fontSize: responsiveFontSize(5),alignItems:"center"}}
                        />
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
                        <Image
                            key={index}
                            source={{ uri: image.image }}
                            style={styles.modalImage}
                            resizeMode="stretch"
                        />
                    ))}
                    
                </ScrollView>
                    </View>
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
        paddingLeft: responsiveWidth(1),
        marginTop: 2,
    },
    backButtonText: {
        fontSize: responsiveFontSize(2),
        color: '#4e8ef9',
        fontWeight: '500',
    },
    headerTitle: {
        fontSize: responsiveFontSize(2.1),
        color: '#fff',
        fontWeight: '500',
        alignItems: 'center',
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
        marginVertical: 4,
    },
    image: {
        flex: 1,
        borderRadius: 5,
    },
    modal: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    scrollViewContent: {
        alignItems: 'center',
    },
    modalImage: {
        // // width: Dimensions.get('window').width,
        // aspectRatio: 1,
        // marginHorizontal: 10,
        // width:500

        aspectRatio: 1,
        marginHorizontal: 5,
        width: 300,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#000',


    },
})
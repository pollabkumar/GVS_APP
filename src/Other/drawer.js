import React, { useEffect, useState } from 'react';
import {
  View,
  StyleSheet,
  Text,
  Dimensions,
  TouchableOpacity,
  Image,
  Alert,
  Share,
  ScrollView
} from 'react-native';

import * as Animatable from 'react-native-animatable';
import { useNavigation } from '@react-navigation/native';

import AsyncStorage from '@react-native-async-storage/async-storage';
// import { AuthContext } from '../navigation/StackNavigator'
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
import axios from 'axios'
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize
} from "react-native-responsive-dimensions";

import Homee from 'react-native-vector-icons/AntDesign';
import Servicess from 'react-native-vector-icons/MaterialCommunityIcons';
import Aboutus from 'react-native-vector-icons/dist/Ionicons';
import Terms from 'react-native-vector-icons/dist/FontAwesome';
import Privacy from 'react-native-vector-icons/MaterialIcons';
import Newsss from 'react-native-vector-icons/Entypo';
import Bookss from 'react-native-vector-icons/MaterialIcons';
import Eventss from 'react-native-vector-icons/Zocial';
import Contactt from 'react-native-vector-icons/AntDesign';
import Popular from 'react-native-vector-icons/Feather';
import Memberandjournal from 'react-native-vector-icons/Feather';
import Aboutt from 'react-native-vector-icons/MaterialIcons';
function drawer(props) {
  const navigation = useNavigation();
  const [Publicationstab, setPublicationstab] = useState(false)
  const [abouttab, setabouttab] = useState(false)
  const closeMenu = () => {
    props.setdrawer(false);
  };

  const onMove = () => {
    props.setdrawer(false);
  };

  const funnn = () => {
    navigation.navigate('HomePage')
    props.setdrawer(false);
  }
  // const onShare = async () => {
  //   try {
  //     const result = await Share.share({
  //       message:
  //         'React Native | A framework for building native apps using React',
  //     });
  //     if (result.action === Share.sharedAction) {
  //       if (result.activityType) {
  //         // shared with activity type of result.activityType
  //       } else {
  //         // shared
  //       }
  //     } else if (result.action === Share.dismissedAction) {
  //       // dismissed
  //     }
  //   } catch (error) {
  //     Alert.alert(error.message);
  //   }
  // };

  const languageee = async () => {

    try {

      const result = await axios
        .get(
          `/app/master/language/list`,
        )
        .then(res => {
          // console.log(res, 'languagezzzzzzzzz');
        });
     
    } catch (error) {
      // seterror(error.response.data.message)
      console.log(error);
    }
  };
  useEffect(() => {
    languageee()
  }, [])

  return (
    <>


      {props.drawer && (
        <Animatable.View
          animation="fadeInLeft"
          duration={100}
          style={styles.mainDrawerArea}>
          
            <View style={styles.drawerArea}>
              <View
                style={{
                  backgroundColor: "#e8ebed",
                  flexDirection: "column",
                  alignItems: 'center',
                  // marginTop: 1,
                  paddingVertical: 10,
                  paddingHorizontal: 8,
                  // borderBottomWidth: 0.55,
                  // borderBottomColor: "#000",
                  width: "100%",
                  borderBottomLeftRadius: 15,
                  borderBottomRightRadius: 15
                }}>
                <View
                  style={{
                    borderRadius: 50,
                    overflow: 'hidden',
                    marginLeft: 3
                  }}>
                  <Image
                    style={{ height: 70, width: 70 }}
                    source={require('../assets/p6.jpg')}
                  />
                </View>
                <View style={{ padding: 5 }}>
                  <View>
                    {/* <Text style={{ color: "#000", fontSize: responsiveFontSize(2), fontWeight: "500" }}>Gyan Vigyan Samiti Assam</Text> */}
                    <Text style={{ color: "#000", fontSize: responsiveFontSize(1.86), fontWeight: "500" }}>GYAN VIGYAN SAMITI ASSAM</Text>
                  </View>
                </View>
              </View>

              {/* button */}
              <View style={{ backgroundColor: '#fff', marginLeft: 5 }}>
                <View style={styles.menuBlock}>

                  <TouchableOpacity
                    onPress={() => funnn()}
                    style={styles.eachMenu}>
                    <Homee name='home'
                      size={19}
                      color="#100"
                      style={{ backgroundColor: "#e8ebed", padding: 6, borderRadius: 70 }}
                    />
                    <Text style={styles.menuText}>Home</Text>
                  </TouchableOpacity>

                  <TouchableOpacity
                    onPress={() => setPublicationstab(!Publicationstab)}
                    // onPress={() => navigation.navigate('Publication')}
                    style={styles.eachMenu}>
                    <Newsss name='news'
                      size={18}
                      color="#000"
                      style={{ backgroundColor: "#e8ebed", padding: 6, borderRadius: 70 }}
                    />
                    <Text style={styles.menuText}>Publications</Text>
                  </TouchableOpacity>



                  {/* Publications lists*/}
                  {
                    Publicationstab && Publicationstab ?
                      <TouchableOpacity
                        style={{ alignItems: "flex-end", width: "100%", }}>

                        <TouchableOpacity
                          onPress={() => navigation.navigate('Publication')}
                          style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                            // padding: 10,
                            paddingVertical: 8,
                            backgroundColor: "#ebebeb",
                            width: "90%",
                            borderBottomWidth: .25

                          }}>
                          <Bookss name='library-books'
                            size={15}
                            color="#000"
                            style={{
                              backgroundColor: "#e8ebed",
                              padding: 6,
                              borderRadius: 70,

                            }}
                          />
                          <Text style={{
                            fontSize: responsiveFontSize(1.65),
                            paddingLeft: 3,
                            fontWeight: '400',
                            color: '#000',
                          }}>Books</Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                          onPress={() => navigation.navigate('JournalList')}
                          style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                            // padding: 10,
                            paddingVertical: 8,
                            backgroundColor: "#ebebeb",
                            width: "90%",
                            borderBottomWidth: .25
                          }}>
                          <Newsss name='news'
                            size={15}
                            color="#000"
                            style={{ backgroundColor: "#e8ebed", padding: 6, borderRadius: 70 }}
                          />
                          <Text style={{
                            fontSize: responsiveFontSize(1.65),
                            paddingLeft: 3,
                            fontWeight: '400',
                            color: '#000',
                          }}>Journal</Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                          onPress={() => navigation.navigate('Report')}
                          style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                            // padding: 10,
                            paddingVertical: 8,
                            backgroundColor: "#ebebeb",
                            width: "90%",

                          }}>
                          <Newsss name='news'
                            size={15}
                            color="#000"
                            style={{ backgroundColor: "#e8ebed", padding: 6, borderRadius: 70 }}
                          />
                          <Text style={{
                            fontSize: responsiveFontSize(1.65),
                            paddingLeft: 3,
                            fontWeight: '400',
                            color: '#000',
                          }}>Reports
                          </Text>
                        </TouchableOpacity>

                      </TouchableOpacity>
                      :
                      ""
                  }

                  {/* Publications lists*/}


                  <TouchableOpacity
                    onPress={() => navigation.navigate('Events')}
                    style={styles.eachMenu}>
                    <Eventss name='blogger'
                      size={16}
                      color="#000"
                      style={{ backgroundColor: "#e8ebed", padding: 6, borderRadius: 70 }}
                    />
                    <Text style={styles.menuText}>Events</Text>
                  </TouchableOpacity>


                  <TouchableOpacity
                    onPress={() => setabouttab(!abouttab)}
                    style={styles.eachMenu}>
                    <Aboutt name='filter-list'
                      size={16}
                      color="#000"
                      style={{ backgroundColor: "#e8ebed", padding: 6, borderRadius: 70 }}
                    />
                    <Text style={styles.menuText}>About</Text>
                  </TouchableOpacity>

                  {/* About lists*/}

                  {
                    abouttab && abouttab ?
                      <TouchableOpacity
                        style={{ alignItems: "flex-end", width: "100%", }}>

                        <TouchableOpacity
                          onPress={() => navigation.navigate('OurObjectives')}
                          style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                            // padding: 10,
                            paddingVertical: 8,
                            backgroundColor: "#ebebeb",
                            width: "90%",
                            borderBottomWidth: .25

                          }}>
                          <Popular name='slack'
                            size={15}
                            color="#000"
                            style={{
                              backgroundColor: "#e8ebed",
                              padding: 6,
                              borderRadius: 70,

                            }}
                          />
                          <Text style={{
                            fontSize: responsiveFontSize(1.65),
                            paddingLeft: 3,
                            fontWeight: '400',
                            color: '#000',
                          }}>Vision and Objectives</Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                          // onPress={() => navigation.navigate('Publication')}
                          style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                            // padding: 10,
                            paddingVertical: 8,
                            backgroundColor: "#ebebeb",
                            width: "90%",
                            borderBottomWidth: .25
                          }}>
                          <Newsss name='news'
                            size={15}
                            color="#000"
                            style={{ backgroundColor: "#e8ebed", padding: 6, borderRadius: 70 }}
                          />
                          <Text style={{
                            fontSize: responsiveFontSize(1.65),
                            paddingLeft: 3,
                            fontWeight: '400',
                            color: '#000',
                          }}>History and Legacy
                          </Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                          onPress={() => navigation.navigate('TeamMember')}
                          style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                            // padding: 10,
                            paddingVertical: 8,
                            backgroundColor: "#ebebeb",
                            width: "90%",
                            borderBottomWidth: .25
                          }}>
                          <Memberandjournal name='users'
                            size={15}
                            color="#000"
                            style={{ backgroundColor: "#e8ebed", padding: 6, borderRadius: 70 }}
                          />
                          <Text style={{
                            fontSize: responsiveFontSize(1.65),
                            paddingLeft: 3,
                            fontWeight: '400',
                            color: '#000',
                          }}>
                            Members
                          </Text>
                        </TouchableOpacity>

                        {/* <TouchableOpacity
                          onPress={() => navigation.navigate('Publication')}
                          style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                            // padding: 10,
                            paddingVertical: 8,
                            backgroundColor: "#ebebeb",
                            width: "90%",
                            borderBottomWidth: .25
                          }}>
                          <Newsss name='news'
                            size={15}
                            color="#000"
                            style={{ backgroundColor: "#e8ebed", padding: 6, borderRadius: 70 }}
                          />
                          <Text style={{
                            fontSize: responsiveFontSize(1.65),
                            paddingLeft: 3,
                            fontWeight: '400',
                            color: '#000',
                          }}>
                            District Secretaries
                          </Text>
                        </TouchableOpacity> */}

                        <TouchableOpacity
                          onPress={() => navigation.navigate('WorkWithUs')}
                          style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                            // padding: 10,
                            paddingVertical: 8,
                            backgroundColor: "#ebebeb",
                            width: "90%",
                            // borderBottomWidth: .25
                          }}>
                          <Newsss name='news'
                            size={15}
                            color="#000"
                            style={{ backgroundColor: "#e8ebed", padding: 6, borderRadius: 70 }}
                          />
                          <Text style={{
                            fontSize: responsiveFontSize(1.65),
                            paddingLeft: 3,
                            fontWeight: '400',
                            color: '#000',
                          }}>
                           Work With Us
                          </Text>
                        </TouchableOpacity>



                      </TouchableOpacity>
                      :
                      ""
                  }


                  {/* About lists*/}

                  {/* <TouchableOpacity
                  onPress={() => navigation.navigate('OurObjectives')}
                  style={styles.eachMenu}>
                  <Popular name='slack'
                    size={18}
                    color="#000"
                    style={{ backgroundColor: "#e8ebed", padding: 6, borderRadius: 70 }}
                  />
                  <Text style={styles.menuText}>Our Objectives</Text>
                </TouchableOpacity> */}

                  <TouchableOpacity
                    onPress={() => navigation.navigate('Gallery')}
                    style={styles.eachMenu}>
                    <Servicess name='view-gallery-outline'
                      size={19}
                      color="#000"
                      style={{ backgroundColor: "#e8ebed", padding: 6, borderRadius: 70 }}
                    />
                    <Text style={styles.menuText}>Children</Text>
                  </TouchableOpacity>

                  {/* <TouchableOpacity
                    onPress={() => navigation.navigate('TeamMember')}
                    style={styles.eachMenu}>
                    <Aboutus name='receipt-outline'
                      size={19}
                      color="#000"
                      style={{ backgroundColor: "#e8ebed", padding: 6, borderRadius: 70 }}
                    />
                    <Text style={styles.menuText}>Our Team Members</Text>
                  </TouchableOpacity> */}

                  <TouchableOpacity
                    onPress={() => navigation.navigate('About')}
                    style={styles.eachMenu}>
                    <Aboutus name='receipt-outline'
                      size={19}
                      color="#000"
                      style={{ backgroundColor: "#e8ebed", padding: 6, borderRadius: 70 }}
                    />
                    <Text style={styles.menuText}>About Us</Text>
                  </TouchableOpacity>

                  <TouchableOpacity
                    onPress={() => navigation.navigate('Termsandcondition')}
                    style={styles.eachMenu}>
                    <Terms name='file-text-o'
                      size={19}
                      color="#000"
                      style={{ backgroundColor: "#e8ebed", padding: 6, borderRadius: 70 }}
                    />
                    <Text style={styles.menuText}>Terms & Conditions</Text>
                  </TouchableOpacity>

                  <TouchableOpacity
                    onPress={() => navigation.navigate('PrivacyPolicy')}
                    // onPress={onShare}
                    style={styles.eachMenu}>
                    <Privacy name='privacy-tip'
                      size={19}
                      color="#000"
                      style={{ backgroundColor: "#e8ebed", padding: 6, borderRadius: 70 }}
                    />
                    <Text style={styles.menuText}>Privacy Policy</Text>
                  </TouchableOpacity>

                  <TouchableOpacity
                    onPress={() => navigation.navigate('ContactUs')}
                    style={styles.eachMenu}>
                    <Contactt name='contacts'
                      size={19}
                      color="#000"
                      style={{ backgroundColor: "#e8ebed", padding: 6, borderRadius: 70 }}
                    />
                    <Text style={styles.menuText}>Contact Us</Text>
                  </TouchableOpacity>

                </View>
              </View>
            </View>
         

          <TouchableOpacity
            style={styles.nonDrawer}
            onPress={() => props.setdrawer(false)}></TouchableOpacity>
       </Animatable.View>
      )}
    </>
  );
}

export default drawer;
// const styles = StyleSheet.create({
//   mainDrawerArea: {
//     height: windowHeight,
//     backgroundColor: '#f9f9f966',
//     width: '80%',
//     position: 'absolute',
//     top: 0,
//     left: 0,
//     flexDirection: 'row',
//     zIndex: 30,
//     flex:1
   
//   },
//   nonDrawer: { width: '20%', height: '100%' },
//   drawerArea: { backgroundColor: '#fff', width: '100%', height: '100%', paddingHorizontal: 1 },
//   drawerAreaHead: { backgroundColor: 'blue', minHeight: 110 },
//   UserBLock: { flexDirection: 'row', marginTop: -60, paddingLeft: 10 },
//   userName: {
//     fontWeight: '700',
//     fontSize: 15,
//     textTransform: 'uppercase',
//     color: '#fff',
//     letterSpacing: 2,
//   },
//   userEmail: { fontWeight: '500', fontSize: 12, color: '#fff' },
//   menuBlock: { paddingTop: 10 },
//   eachMenu: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     padding: 10,
//     paddingVertical: 8,

//   },
//   menuText: {
//     fontSize: responsiveFontSize(1.95),
//     paddingLeft: 10,
//     fontWeight: '400',
//     color: '#000',
//   },
//   scrollViewContent: {
//     flexGrow: 1,
//   },
// });

const styles = StyleSheet.create({
  mainDrawerArea: {
    height: windowHeight,
    backgroundColor: '#f9f9f966',
    width: windowWidth,
    position: 'absolute',
    top: 0,
    left: 0,
    flexDirection: 'row',
    zIndex: 30,
    flex:1
   
  },
  nonDrawer: { width: '20%', height: '100%' },
  drawerArea: { backgroundColor: '#fff', width: '75%', height: '100%', paddingHorizontal: 1 },
  drawerAreaHead: { backgroundColor: 'blue', minHeight: 110 },
  UserBLock: { flexDirection: 'row', marginTop: -60, paddingLeft: 10 },
  userName: {
    fontWeight: '700',
    fontSize: 15,
    textTransform: 'uppercase',
    color: '#fff',
    letterSpacing: 2,
  },
  userEmail: { fontWeight: '500', fontSize: 12, color: '#fff' },
  menuBlock: { paddingTop: 10 },
  eachMenu: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    paddingVertical: 8,

  },
  menuText: {
    fontSize: responsiveFontSize(1.95),
    paddingLeft: 10,
    fontWeight: '400',
    color: '#000',
  },
  scrollViewContent: {
    flexGrow: 1,
  },
});

import React, { useState, memo } from 'react';
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  Dimensions,
  StatusBar
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import { useNavigation } from '@react-navigation/native';
import Drawer from './drawer';
import Icon2 from 'react-native-vector-icons/Ionicons';
import Wallet from 'react-native-vector-icons/MaterialIcons';

import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize
} from "react-native-responsive-dimensions";
const { width, height } = Dimensions.get('window')
const HeaderOnly = props => {
  const navigation = useNavigation();
  const [drawer, setdrawer] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [statusBarStyle, setStatusBarStyle] = useState();
  // const memoouse=useMemo(function oneslide(){
  //  return setdrawer(!drawer)
  // },[drawer])
  return (
    <>

      <View style={styles.headerArea}>

        <View style={{ flexDirection: "row",justifyContent:"center",alignItems:"center" }}>
          <TouchableOpacity
            onPress={() => setdrawer(true)}
            style={{ width: 27,
             height: 25, 
             justifyContent: "center",
             backgroundColor:"#fff",
             alignItems:"center",
             borderRadius:22
             }}>
            <Icon name="menu" size={18} color="#000" />
          </TouchableOpacity>
          <View style={{paddingLeft:5}}>
            <Text
              style={{
                color: '#fff',
                fontSize: responsiveFontSize(2.2),
                zIndex: 0,
                justifyContent: 'center',
                fontWeight: "400",

              }}>

              {props && props.name ? props.name : ''}
            </Text>
          </View>

        </View>

        <View style={{ flexDirection: "row"}}>
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
              color:"#fff"
            }}>Connect With us</Text>
          </TouchableOpacity>
        </View>

          <Drawer style={{flex:1}} drawer={drawer} setdrawer={setdrawer} />


      </View>
    </>
  );
};

export default memo(HeaderOnly);

const styles = StyleSheet.create({
  headerArea: {
   
    flexDirection: 'row',
    paddingHorizontal: 10,
    // paddingVertical: 8,
    alignItems: 'center',
    backgroundColor: "#000",
    elevation: 5,
    position: 'relative',
    zIndex: 20,
    justifyContent: "space-between",
    height: 48
  },
  logo: { width: 130, height: 45, resizeMode: 'stretch' },
  iconHome: { paddingLeft: 15 },
  mainBg: { backgroundColor: '#ddd', height: '85%' },
});

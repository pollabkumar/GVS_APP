import { StyleSheet, Text, View, StatusBar, TouchableOpacity, Image, ScrollView, TextInput } from 'react-native'
import React, { useState } from 'react'
import Back from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';

import {
    responsiveHeight,
    responsiveWidth,
    responsiveFontSize
} from "react-native-responsive-dimensions";
const PrivacyPolicy = () => {
    const [statusBarStyle, setStatusBarStyle] = useState();
    const navigation = useNavigation();
    return (
        <View style={{ flex: 1 }}>
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
                            Privacy Policy
                        </Text>
                    </View>
                </View>
            </View>

            <ScrollView
               showsVerticalScrollIndicator={false}
            >

                <View style={{ width: "100%", alignItems: "center", paddingHorizontal: 10, paddingTop: 5 }}>
                    <Text style={{ color: "#000", fontWeight: '400', fontSize: responsiveFontSize(1.75), textAlign: "justify" }}>
                        gdfgggdgg Foundation reserves the rights to change these terms and conditions at any time by posting changes online.
                        Your continued use of this site after changes are posted constitutes your acceptance of this agreement as modified.
                        You agree to use this site only for lawful purposes, and in a manner which does not infringe the rights, or restrict,
                        or inhibit the use and enjoyment of the site by any third party.
                    </Text>
                </View>


                <View style={{}}>
                    <View style={{ width: "100%", alignItems: "center", paddingHorizontal: 10 }}>
                        <Text style={{ color: "#000", fontWeight: '400', fontSize: responsiveFontSize(1.75), textAlign: "justify" }}>
                            This site and the information, names, images, pictures, logos regarding or relating to axaxxdgjki
                            Foundation are provided “as is” without any representation or endorsement made and without warranty of
                            any kind whether express or implied. In no event will axaxxdgjki axaxxdgjki be liable for any damages
                            including, without limitation, indirect or consequential damages, or any damages whatsoever arising from the
                            use or in connection with such use or loss of use of the site, whether in contract or in negligence.
                        </Text>
                    </View>
                </View>


                <View style={{ width: "100%", alignItems: "center", paddingHorizontal: 9, justifyContent: 'center' }}>
                    <Text style={{ color: "#000", fontWeight: '400', fontSize: responsiveFontSize(1.75), textAlign: "justify" }}>
                        axaxxdgjki axaxxdgjki does not warrant that the functions contained in the material contained in this site will
                        be uninterrupted or error free, that defects will be corrected, or that this site or the server that makes it available
                        are free of viruses or bugs or represents the full functionality, accuracy and reliability of the materials.or third party individuals.
                    </Text>
                </View>
            </ScrollView>

        </View>
    )
}

export default PrivacyPolicy

const styles = StyleSheet.create({})
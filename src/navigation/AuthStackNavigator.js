// import { StyleSheet, Text, View } from 'react-native'
// import React, { useEffect } from 'react'
// import axios from 'axios'
// import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import HomePage from '../Screen/HomePage';
// import ConnectWithus from '../Screen/ConnectWithus';
// import PdfView from '../Screen/PdfView';
// import OurObjectives from '../Screen/OurObjectives';
// import AllPdf from '../Screen/AllPdf';
// import Gallery from '../Screen/Gallery';
// import Splashscrren from './Splashscrren';
// import About from '../Screen/About';
// import ContactUs from '../Screen/ContactUs';
// import TeamMember from '../Screen/TeamMember';
// import Termsandcondition from '../Screen/Termsandcondition';
// import PrivacyPolicy from '../Screen/PrivacyPolicy';
// import NewsandEvent from '../Screen/NewsandEvent';
// import Newseventdetailpage from '../Screen/Newseventdetailpage';
// import BlogDetails from '../Screen/BlogDetails';
// import BlogDetailsPage from '../Screen/BlogDetailsPage';
// import NoticeBoard from '../Screen/NoticeBoard';
// import GalleryImages from '../Screen/GalleryImages';
// import Publication from '../Screen/Publication'
// import Report from '../Screen/Report'
// import Events from '../Screen/Events';
// import JournalList from '../Screen/JournalList';
// import JournalListdetails from '../Screen/JournalListdetails';
// import WorkWithUs from '../Screen/WorkWithUs';

// axios.defaults.baseURL = 'https://www.webinfoghy.co.in/gvs/public/api';

// const AuthStackNavigator = () => {
//   const Stack = createNativeStackNavigator();
//   return (
//     <NavigationContainer>
//       <Stack.Navigator screenOptions={{
//         headerShown: false
//       }}>
//         <Stack.Screen name="Splashscrren" component={Splashscrren} />
//         <Stack.Screen name="HomePage" component={HomePage} />
//         <Stack.Screen name="WorkWithUs" component={WorkWithUs} />
//         <Stack.Screen name="JournalListdetails" component={JournalListdetails} />
//         <Stack.Screen name="JournalList" component={JournalList} />
//         <Stack.Screen name="Publication" component={Publication} />
//         <Stack.Screen name="Report" component={Report} />
//         <Stack.Screen name="Events" component={Events} />
//         <Stack.Screen name="Gallery" component={Gallery} />
//         <Stack.Screen name="ContactUs" component={ContactUs} />
//         <Stack.Screen name="ConnectWithus" component={ConnectWithus} />
//         <Stack.Screen name="TeamMember" component={TeamMember} />
//         <Stack.Screen name="NewsandEvent" component={NewsandEvent} />
//         <Stack.Screen name="BlogDetails" component={BlogDetails} />
//         <Stack.Screen name="BlogDetailsPage" component={BlogDetailsPage} />
//         <Stack.Screen name="NoticeBoard" component={NoticeBoard} />
//         <Stack.Screen name="AllPdf" component={AllPdf} />
//         <Stack.Screen name="GalleryImages" component={GalleryImages} />
//         <Stack.Screen name="Newseventdetailpage" component={Newseventdetailpage} />
//         <Stack.Screen name="PrivacyPolicy" component={PrivacyPolicy} />
//         <Stack.Screen name="Termsandcondition" component={Termsandcondition} />
//         <Stack.Screen name="About" component={About} />
//         <Stack.Screen name="OurObjectives" component={OurObjectives} />
//         <Stack.Screen name="PdfView" component={PdfView} />
//       </Stack.Navigator>
//     </NavigationContainer>
//   )
// }

// export default AuthStackNavigator

// const styles = StyleSheet.create({})

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomePage from '../Screen/HomePage';
import ConnectWithus from '../Screen/ConnectWithus';
import PdfView from '../Screen/PdfView';
import OurObjectives from '../Screen/OurObjectives';
import AllPdf from '../Screen/AllPdf';
import Gallery from '../Screen/Gallery';
import About from '../Screen/About';
import ContactUs from '../Screen/ContactUs';
import TeamMember from '../Screen/TeamMember';
import Termsandcondition from '../Screen/Termsandcondition';
import PrivacyPolicy from '../Screen/PrivacyPolicy';
import NewsandEvent from '../Screen/NewsandEvent';
import Newseventdetailpage from '../Screen/Newseventdetailpage';
import BlogDetails from '../Screen/BlogDetails';
import BlogDetailsPage from '../Screen/BlogDetailsPage';
import NoticeBoard from '../Screen/NoticeBoard';
import GalleryImages from '../Screen/GalleryImages';
import Publication from '../Screen/Publication';
import Report from '../Screen/Report';
import Events from '../Screen/Events';
import JournalList from '../Screen/JournalList';
import JournalListdetails from '../Screen/JournalListdetails';
import WorkWithUs from '../Screen/WorkWithUs';
import Splashscreen from './Splashscreen';
import DistricSectories from '../Screen/DistricSectories';
import EventDetails from '../Screen/EventDetails';

const AuthStackNavigator = () => {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator
         screenOptions={{
           headerShown: false
          }} >
        <Stack.Screen name="Splashscreen" component={Splashscreen} />
         <Stack.Screen name="Gallery" component={Gallery} />
        <Stack.Screen name="DistricSectories" component={DistricSectories} />
        <Stack.Screen name="HomePage" component={HomePage} />
        <Stack.Screen name="TeamMember" component={TeamMember} />
        <Stack.Screen name="JournalListdetails" component={JournalListdetails} />
        <Stack.Screen name="JournalList" component={JournalList} />
        <Stack.Screen name="Publication" component={Publication} />
        <Stack.Screen name="WorkWithUs" component={WorkWithUs} />
        <Stack.Screen name="Report" component={Report} />
        <Stack.Screen name="Events" component={Events} />
        <Stack.Screen name="ContactUs" component={ContactUs} />
        <Stack.Screen name="ConnectWithus" component={ConnectWithus} />
        <Stack.Screen name="NewsandEvent" component={NewsandEvent} />
        <Stack.Screen name="BlogDetails" component={BlogDetails} />
        <Stack.Screen name="EventDetails" component={EventDetails} />
        <Stack.Screen name="BlogDetailsPage" component={BlogDetailsPage} />
        <Stack.Screen name="NoticeBoard" component={NoticeBoard} />
        <Stack.Screen name="AllPdf" component={AllPdf} />
        <Stack.Screen name="GalleryImages" component={GalleryImages} />
        <Stack.Screen name="Newseventdetailpage" component={Newseventdetailpage} />
        <Stack.Screen name="PrivacyPolicy" component={PrivacyPolicy} />
        <Stack.Screen name="Termsandcondition" component={Termsandcondition} />
        <Stack.Screen name="About" component={About} />
        <Stack.Screen name="OurObjectives" component={OurObjectives} />
        <Stack.Screen name="PdfView" component={PdfView} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AuthStackNavigator;

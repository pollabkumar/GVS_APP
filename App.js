import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import AuthStackNavigator from './src/navigation/AuthStackNavigator'
import Practice from './src/Practice'

const App = () => {

  return (
    <AuthStackNavigator/>
    // <Practice texts={['Text 1', 'Text 2', 'Text 3']} duration={3000} width={500}/>
  )
}

export default App

const styles = StyleSheet.create({})



// import React from 'react';
// import { View } from 'react-native';
// import Practice from './src/Practice'

// const App = () => {
//   const links = ['Link 1', 'Link 2', 'Link 3', 'Link 4', 'Link 5'];

//   return (
//     <View>
//       <Practice links={links} />
//     </View>
//   );
// };

// export default App;



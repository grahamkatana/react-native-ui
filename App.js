import { StatusBar } from 'expo-status-bar';
import Navigation from './navigation/Navigation';

export default function App() {
  return (
    <>
     <Navigation/>
     <StatusBar backgroundColor='#fff' />
    </>
   
    // <View style={styles.container}>
    //    <Navigation/>
    //   <StatusBar backgroundColor='#fff' />
    // </View>
  );
}


// In App.js in a new project

// import * as React from 'react';
// import { View, Text } from 'react-native';
// import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';

// function HomeScreen() {
//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//       <Text>Home Screen</Text>
//     </View>
//   );
// }

// const Stack = createNativeStackNavigator();

// function App() {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator>
//         <Stack.Screen name="Home" component={HomeScreen} />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// }

// export default App;
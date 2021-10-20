import React from "react";
import { View, StyleSheet } from "react-native";
import FoundChild from "./components/FoundChild";
import HomePage from "./components/HomePage";
import Login from "./components/Login";
import Menu from "./components/Menu";
import MissingChild from "./components/MissingChild";
import MyData from "./components/MyData";
import Search from "./components/Search";
import Share from "./components/Share";
import SignUp from "./components/SignUp";
// import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';


// const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <HomePage />
    // <NavigationContainer>
    //   <Stack.Navigator>
    //     <Stack.Screen
    //       name="Home"
    //       component={HomePage}
    //       options={{ title: 'Homepage' }}
    //     />
    //     <Stack.Screen name="Login" component={Login} />
    //   </Stack.Navigator>
  
    // </NavigationContainer>
    
  );
};

export default App;

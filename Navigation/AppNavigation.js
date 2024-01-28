import { View, Text } from 'react-native'
import React,{useState,useEffect} from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ProfileScreen from '../screens/ProfileScreen';
import WelcomeScreen from '../screens/WelcomeScreen';
import LoginScreen from '../screens/LoginScreen';
import ReasonScreen from '../screens/ReasonScreen';
import MyProfile from '../screens/MyProfile';
import {firebase} from '../config'
import SignUpScreen from '../screens/SignupScreen';

const Stack = createNativeStackNavigator();


export default function AppNavigation() {



  const [initialize, setInitialize] = useState(true);
  const [user, setUser] = useState();

  function onAuthStateChanged(user) {
    setUser(user);
    if (initialize) setInitialize(false);
  }

  useEffect(() => {
    const subscriber = firebase.auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber;
  }, []);

  if (initialize) return null;
  return (
    <NavigationContainer>




<Stack.Navigator initialRouteName='Welcome'> 
        {user ? (
          <>
          <Stack.Screen name="Profile" options={{headerShown: false}} component={ProfileScreen} />
          <Stack.Screen name="MyProfile" options={{headerShown: false}} component={MyProfile} />
          <Stack.Screen name="Reason" options={{headerShown: false}} component={ReasonScreen} />
          </>
        ) : (
          <>
                <Stack.Screen name="Welcome" options={{headerShown: false}} component={WelcomeScreen} />
                <Stack.Screen name="Login" options={{headerShown: false}} component={LoginScreen} />
    <Stack.Screen name="SignUp" options={{headerShown: false}} component={SignUpScreen} />
    {/* <Stack.Screen name="MyProfile" options={{headerShown: false}} component={MyProfile} />
    <Stack.Screen name="Reason" options={{headerShown: false}} component={ReasonScreen} /> */}
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  )
}
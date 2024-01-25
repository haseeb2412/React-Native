import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import AppNavigation from './Navigation/AppNavigation';
import ProfileScreen from './screens/ProfileScreen';
import MyProfile from './screens/MyProfile';
import ReasonScreen from './screens/ReasonScreen';
// import StopWatch from './components/StopWatch';rr

export default function App() {
  return (
    <AppNavigation/>
    // <ProfileScreen/>
    // <MyProfile/>
    // <ReasonScreen/>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightgrey',
    alignItems: 'center',
    justifyContent: 'center',
  },
});



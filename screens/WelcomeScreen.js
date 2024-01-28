import { View, Text, Image, TouchableOpacity, ImageBackground,StyleSheet } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { themeColors } from './Theme/Index'
import { useNavigation } from '@react-navigation/native'
import COLORS from '../constants/colors';
import {LinearGradient} from 'expo-linear-gradient';
import AppLoading from 'expo-app-loading'
import { useFonts } from 'expo-font'







export default function WelcomeScreen() {
    const navigation = useNavigation();

    let [fontLoaded]=useFonts({
        'Italic':require('../assets/fonts/AveriaSerifLibre-BoldItalic.ttf'),
        'LightItalic':require('../assets/fonts/AveriaSerifLibre-LightItalic.ttf'),
        'Light':require('../assets/fonts/AveriaSerifLibre-Light.ttf')
        
      })
    
    // if(!fontLoaded){
    //     return <AppLoading/>
    //   }
  return (
    <LinearGradient
    colors={[COLORS.primary, COLORS.secondary]}  
    style={{ flex: 1 }}
  >
    <SafeAreaView className="flex-1" style={{}}>
    <View className="flex-1 flex justify-around my-5">
        <View className='haseeb' style={{display:"flex",alignItems:"center",flexDirection:"row",justifyContent:"center",marginBottom:0}}>
            <Image source={require('../assets/images/newhero01.png')}/>

            <Text style={{
                fontFamily:'Light',
                fontSize:40,
                fontWeight:400,
                color:'#450920'}}
                className="text-4xl text-center">
                MyTime
            </Text>
        </View>
        <Text style={{
            color:'#000',
            width:250,
            height:88,
            fontSize:34,
            fontStyle:'normal',
            marginLeft:75,
            fontFamily:'Light',
            // alignSelf:'center'
            
            }}
            className=" text-4xl text-center">
            Manage your Time with ease.
        </Text>
        
        <View className="flex-row justify-center">
            <Image source={require("../assets/images/image1.png")}
                style={{width: 350, height: 350}} />
        </View>
        <View className="space-y-4">
            <TouchableOpacity
                onPress={()=> navigation.navigate('SignUp')}
                className="py-3  mx-7 " style={{
                    borderRadius:30,
                    backgroundColor:'#450920',
                    width:276,
                    height:56,
                    alignContent:'center',
                    marginLeft:60,
                    alignItems:'center',
                    flexShrink:0}}>
                    <Text 
                        className="text-xl font-semibold text-center rounded-30" style={{ 
                            fontFamily:'Light',fontSize:25, 
                            color:'#FFEDDF',
                        }}
                    >
                        Get Started
                    </Text>
            </TouchableOpacity>
            <View className="flex-row justify-center">
                <Text className="font-semibold"
            style={{color:'#450920', fontFamily:'Light',fontSize:20, }}>Get Started With Ease..!</Text>
                <TouchableOpacity onPress={()=> navigation.navigate('SignUp')}>
                    <Text className="font-semibold" style={{color:'#FFEDDF',fontFamily:'Light',fontSize:20, }}> SignUp</Text>
                </TouchableOpacity>
            </View>
        </View>
    </View>
</SafeAreaView>


</LinearGradient>
  )
}






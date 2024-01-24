import { View, Text, Image, TouchableOpacity, ImageBackground,StyleSheet } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { themeColors } from './Theme/Index'
import { useNavigation } from '@react-navigation/native'
import COLORS from '../constants/colors';
import {LinearGradient} from 'expo-linear-gradient';
import { useFonts } from 'expo-font';




const watchIconSvg = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
<path fill-rule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM12.75 6a.75.75 0 0 0-1.5 0v6c0 .414.336.75.75.75h4.5a.75.75 0 0 0 0-1.5h-3.75V6Z" clip-rule="evenodd" />
</svg>

`;


export default function WelcomeScreen() {

    let fontsLoaded = useFonts({
        'AveriaSerifLibre-Italic': require('../assets/fonts/AveriaSerifLibre-Bold.ttf'),
        // Add other custom fonts here
      });
    






    const navigation = useNavigation();
  return (
    <LinearGradient
    colors={[COLORS.primary, COLORS.secondary]}  // Add your two colors here
    style={{ flex: 1 }}
  >
    <SafeAreaView className="flex-1" style={{}}>
    <View className="flex-1 flex justify-around my-5">
        <View className='haseeb' style={{display:"flex",alignItems:"center",flexDirection:"row",justifyContent:"center",marginBottom:0}}>
            {/* <ClockIcon size={70} color="black" /> */}
            <Image source={require('../assets/images/newhero01.png')}/>

            <Text style={{
                fontFamily:'AveriaSerifLibre-Italic',
                color:'#450920'}}
                className=" font-bold text-4xl text-center">
                MyTime
            </Text>
        </View>
        <Text style={{
            color:'#000',
            width:200,
            height:88,
            textAlign:'center',
            fontSize:34,
            fontStyle:'normal',
            fontWeight:700,
            marginLeft:100,
            // lineHeight:'normal',
            // fontFamily:'AveriaSerifLibre-Italic',
            }}
            className=" font-bold text-4xl text-center">
            Manage your Time with ease
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
                        className="text-xl font-bold text-center rounded-30" style={{ 
                            fontFamily:'AveriaSerifLibre-Italic',
                            color:'#FFEDDF',fontWeight:'700',
                            width:'276px',
                    height:'56px',
                        }}
                    >
                        Get Started
                    </Text>
            </TouchableOpacity>
            <View className="flex-row justify-center">
                <Text className="font-semibold"
                style={{color:'#450920'}}>Get Started With Ease..!</Text>
                <TouchableOpacity onPress={()=> navigation.navigate('SignUp')}>
                    <Text className="font-bold text-yellow-400" style={{color:'#FFEDDF'}}> SignUp</Text>
                </TouchableOpacity>
            </View>
        </View>
    </View>
</SafeAreaView>
</LinearGradient>
  )
}






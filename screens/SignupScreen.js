import { View, Text, TouchableOpacity, Image, TextInput } from 'react-native'
import React from 'react'
import { themeColors } from './Theme/Index';
import { SafeAreaView } from 'react-native-safe-area-context'
import {ArrowLeftIcon} from 'react-native-heroicons/solid';
import { useNavigation } from '@react-navigation/native';
import COLORS from '../constants/colors';
import {LinearGradient} from 'expo-linear-gradient';
import {ChevronDoubleRightIcon} from 'react-native-heroicons/solid'


// subscribe for more videos like this :)
export default function SignUpScreen() {
    const navigation = useNavigation();
  return (
    // <View className="flex-1 bg-white" style={{backgroundColor: themeColors.bg}}>
    //   <SafeAreaView className="flex">
    //     <View className="flex-row justify-start">
    //         <TouchableOpacity 
    //             onPress={()=> navigation.goBack()}
    //             className="bg-yellow-400 p-2 rounded-tr-2xl rounded-bl-2xl ml-4"
    //         >
    //             <ArrowLeftIcon size="20" color="black" />
    //         </TouchableOpacity>
    //     </View>
    //     <View className="flex-row justify-center">
    //         <Image source={require('../assets/images/img01.png')} 
    //             style={{width: 165, height: 110}} />
    //     </View>
    //   </SafeAreaView>
    //   <View className="flex-1 bg-white px-8 pt-8"
    //     style={{borderTopLeftRadius: 50, borderTopRightRadius: 50}}
    //   >
    //     <View className="form space-y-2">
    //         <Text className="text-gray-700 ml-4">Full Name</Text>
    //         <TextInput
    //             className="p-4 bg-gray-100 text-gray-700 rounded-2xl mb-3"
    //             value="john snow"
    //             placeholder='Enter Name'
    //         />
    //         <Text className="text-gray-700 ml-4">Email Address</Text>
    //         <TextInput
    //             className="p-4 bg-gray-100 text-gray-700 rounded-2xl mb-3"
    //             value="john@gmail.com"
    //             placeholder='Enter Email'
    //         />
    //         <Text className="text-gray-700 ml-4">Password</Text>
    //         <TextInput
    //             className="p-4 bg-gray-100 text-gray-700 rounded-2xl mb-7"
    //             secureTextEntry
    //             value="test12345"
    //             placeholder='Enter Password'
    //         />
    //         <TouchableOpacity
    //             className="py-3 bg-yellow-400 rounded-xl"
    //         >
    //             <Text className="font-xl font-bold text-center text-gray-700">
    //                 Sign Up
    //             </Text>
    //         </TouchableOpacity>
    //     </View>
    //     <Text className="text-xl text-gray-700 font-bold text-center py-5">
    //         Or
    //     </Text>
    //     <View className="flex-row justify-center space-x-12">
    //         <TouchableOpacity className="p-2 bg-gray-100 rounded-2xl">
    //             <Image source={require('../assets/icons/google.png')} 
    //                 className="w-10 h-10" />
    //         </TouchableOpacity>
    //         <TouchableOpacity className="p-2 bg-gray-100 rounded-2xl">
    //             <Image source={require('../assets/icons/apple.png')} 
    //                 className="w-10 h-10" />
    //         </TouchableOpacity>
    //         <TouchableOpacity className="p-2 bg-gray-100 rounded-2xl">
    //             <Image source={require('../assets/icons/facebook.png')} 
    //                 className="w-10 h-10" />
    //         </TouchableOpacity>
    //     </View>
    //     <View className="flex-row justify-center mt-7">
    //         <Text className="text-gray-500 font-semibold">Already have an account?</Text>
    //         <TouchableOpacity onPress={()=> navigation.navigate('Login')}>
    //             <Text className="font-semibold text-yellow-500"> Login</Text>
    //         </TouchableOpacity>
    //     </View>
    //   </View>
    // </View>






























    <LinearGradient
colors={[COLORS.primary, COLORS.secondary]}  // Add your two colors here
style={{ flex: 1 }}
>
<SafeAreaView className="flex-1">
<View className="flex-1 flex justify-around my-6">
    <View className='haseeb' style={{display:"flex",alignItems:"center",flexDirection:"row",justifyContent:"center",color:'white',marginTop:-10,marginBottom:-20,}}>
        {/* <ClockIcon size={70} color="black" /> */}
        <Image  source={require('../assets/images/newhero01.png')}/>

        <Text style={{
            // fontFamily:'AveriaSerifLibre-Italic',
            marginBottom:0,
            color:'#450920'}}
            className=" font-bold text-4xl text-center">
            MyTime
        </Text>
    </View>    
    <View className="flex-row justify-center">
        <Image source={require("../assets/images/img01.png")}
            style={{width: 300, height: 300,}} />
    </View>
    <View className="space-y-4">
        <Text style={{
                display: 'flex',
                width: 180,
                height: 56,
                flexDirection: 'column',
                justifyContent: 'center',
                flexShrink: 0,
                color: '#FFEDDF',
                textAlign: 'center',
                // fontFamily: "Averia Serif Libre",
                fontSize: 32,
                fontStyle: 'normal',
                fontWeight: 700,
                marginTop:0,
                marginLeft:100,
              }}
                >Sign Up</Text>





<View className="form space-y-2">
            <Text className="text-gray-700 ml-4"
            style={{
              marginTop:-30,
              color: '#FFEDDF',
              textAlign: 'center',
              // fontFamily: "Averia Serif Libre",
              fontSize: 20,
              fontStyle: 'normal',
              fontWeight: 700,
              marginLeft:-260,
            }}
            
            >Email</Text>
            <TextInput style={{
              width:305,
              height:57,
              flexShrink:0,
              borderRadius:20,
              backgroundColor:'rgba(69, 9, 32, 0.35)',
              marginLeft:30,
              color:'white',
              marginBottom:-3 ,
            }}
              className="p-4 bg-gray-100 text-gray-700 rounded-2xl mb-3"
              placeholder="Enter Your Email"
              // value="john@gmail.com" 
            />
            <Text className="text-gray-700 ml-4"
            style={{
              color: '#FFEDDF',
              textAlign: 'center',
              // fontFamily: "Averia Serif Libre",
              fontSize: 20,
              fontStyle: 'normal',
              fontWeight: 700,
              marginLeft:-230,
            }}
            >Password</Text>
            <TextInput 
            style={{
              width:305,
              height:57,
              flexShrink:0,
              borderRadius:20,
              backgroundColor:'rgba(69, 9, 32, 0.35)',
              marginLeft:30,
              color:'white',
            }}
              className="p-4 bg-gray-100 text-gray-700 rounded-2xl"
              secureTextEntry
              placeholder="password"
            />
            <TouchableOpacity 
              className="py-3 "
              style={{
                borderRadius:25,
                backgroundColor:'#450920',
                width:79,
                height:37,
                marginLeft:240,
                flexShrink:0
              }}
              
              >
                <Text 
                    className="text-xl "
                    style={{ 
                      // fontFamily:'AveriaSerifLibre-Italic',
                      color:'#FFFFFF',fontWeight:500,
                      width:56,
                      marginLeft:28,
                      marginTop:-9,
              // height:9,
                  }}
                >
                        {/* Sign Up */}
                        <ChevronDoubleRightIcon size={30}  style={{color:'#FFFFFF',
                     width:36,marginTop:10,
              height:36,}}/>
                </Text>
                
             </TouchableOpacity>
            
          </View>


          <View className="flex-row justify-center">
                <Text className="font-semibold"
                style={{color:'#450920',marginLeft:-30,}}>Already Have An Account?</Text>
                <TouchableOpacity onPress={()=> navigation.navigate('Login')}>
                    <Text className="font-bold text-yellow-400" style={{color:'#FFFFFF'}}> Login</Text>
                </TouchableOpacity>
            </View>






    </View>
</View>
</SafeAreaView>
</LinearGradient>
    
  )
}
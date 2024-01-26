import { View, Text, TouchableOpacity, Image, TextInput ,ImageBackground} from 'react-native'
import {React,useState} from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useNavigation } from '@react-navigation/native'
import COLORS from '../constants/colors';
import { firebase } from '../config';
import {LinearGradient} from 'expo-linear-gradient';
import {ChevronDoubleRightIcon} from 'react-native-heroicons/solid'

export default function LoginScreen() {
  const navigation = useNavigation();

  const [email,setemail]=useState('');
    const [password,setPassword]=useState('');

    loginUser =async (email,password)=>{
      try {
          await firebase.auth().signInWithEmailAndPassword(email,password);
          alert('Logged In');
      } catch (error) {
          console.log("logged in error ")
      }
  }


  return (
  

<LinearGradient
colors={[COLORS.primary, COLORS.secondary]}  
style={{ flex: 1 }}
> 
<SafeAreaView className="flex-1" style={{}}>
<View className="flex-1 flex justify-around my-4">
    <View className='haseeb' style={{display:"flex",alignItems:"center",flexDirection:"row",justifyContent:"center",color:'white'}}>
        <Image  source={require('../assets/images/newhero01.png')}/>

        <Text style={{
            marginBottom:0,
            fontFamily:'Light',
            fontSize:40,
                fontWeight:400,
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
                fontFamily:'Light',
            fontSize:37,
                fontWeight:400,
                fontStyle: 'normal',
                marginTop:0,
                marginLeft:100,
              }}
                >Log In</Text>


<View className="form space-y-2">
            <Text className="text-gray-700 ml-4 font-semibold"
            style={{
              marginTop:-30,
              color: '#FFEDDF',
              textAlign: 'center',
              fontFamily:'Light',
              fontSize: 25,
              fontStyle: 'normal',
              
              marginLeft:-260,
            }}
            
            >Email</Text>
            <TextInput style={{
              width:305,
              height:57,
              flexShrink:0,
              borderRadius:20,
              backgroundColor:'#45092059',
              marginLeft:30,
              color:'white',
              fontFamily:'Light',
              fontSize: 20,
              marginBottom:-3 ,
            }}
            onChangeText={(email)=> setemail(email)} 
              className="p-4 bg-gray-100 text-gray-700 rounded-2xl mb-3"
              placeholder="Enter Your Email"

            />
            <Text className="text-gray-700 ml-4 font-semibold"
            style={{
              color: '#FFEDDF',
              textAlign: 'center',
              fontFamily:'Light',
              fontSize: 25,
              fontStyle: 'normal',
              marginLeft:-220,
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
              fontFamily:'Light',
              fontSize: 20,
            }}
            onChangeText={(password)=> setPassword(password)}
              className="p-4 bg-grey-100 text-gray-700 rounded-2xl"
              secureTextEntry
              placeholder="Password"
              // value="test12345" 
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
              onPress={ () => {
                 loginUser(email, password);
                // navigation.navigate('Profile');
              }}
              >
                
                        
                        <ChevronDoubleRightIcon size={40} style={{color:'#FFFFFF',
                     width:36,marginTop:-12,marginLeft:25,
              height:36,}}/>
                
             </TouchableOpacity>
            
          </View>








    </View>
</View>
</SafeAreaView>
</LinearGradient>
    
  )
}
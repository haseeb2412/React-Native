import { View, Text, TouchableOpacity, Image, TextInput } from 'react-native'
import React,{useState} from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import {ArrowLeftIcon} from 'react-native-heroicons/solid';
import { useNavigation } from '@react-navigation/native';
import COLORS from '../constants/colors';
import {firebase} from '../config'
import {LinearGradient} from 'expo-linear-gradient';
import {ChevronDoubleRightIcon} from 'react-native-heroicons/solid'


export default function SignUpScreen() {
    const navigation = useNavigation();
    // const [name,setname]=useState('');
    const [email,setemail]=useState('');
    const [password,setPassword]=useState('');





    const registerUser = async () => {
      try {
        const userCredential = await firebase.auth().createUserWithEmailAndPassword(email, password);
        const user = userCredential.user;
  
  
        await user.updateProfile({
          // displayName: name,
        });
  
        await firebase.firestore().collection('users').doc(user.uid).set({
          // name,
          email,
        });async
  
        alert('User Registered', 'Registration successful');
      } catch (error) {
        console.error('Registration error:', error);
        alert('Registration failed', 'Please try again.');
      }
    };




  return (
    
  <LinearGradient
colors={[COLORS.primary, COLORS.secondary]}  
style={{ flex: 1 }}
>

<SafeAreaView className="flex-1">
<View className="flex-1 flex justify-around my-6">
    <View className='haseeb' style={{display:"flex",alignItems:"center",flexDirection:"row",justifyContent:"center",color:'white',marginTop:-10,marginBottom:-20,}}>
        {/* <ClockIcon size={70} color="black" /> */}
        <Image  source={require('../assets/images/newhero01.png')}/>

        <Text style={{
            fontFamily:'Light',
            fontSize:40,
                fontWeight:400,
            marginBottom:0,
            color:'#450920'}}
            className=" font-semibold text-4xl text-center">
            MyTime
        </Text>
    </View>    
    <View className="flex-row justify-center">
        <Image source={require("../assets/images/img01.png")}
            style={{width: 300, height: 300,}} />
    </View>
    <View className="space-y-4 font-semibold">
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
                fontSize: 37,
                fontStyle: 'normal',
                marginTop:0,
                marginLeft:100,
              }}
                >Sign Up</Text>





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
              backgroundColor:'rgba(69, 9, 32, 0.35)',
              marginLeft:30,
              color:'white',
              marginBottom:-3 ,
              fontFamily:'Light',
              fontSize:20,
            }}
              className="p-4 bg-gray-100 text-gray-700 rounded-2xl mb-3"
              placeholder="Enter Your Email"
              // value="john@gmail.com" 
            onChangeText={(email)=> setemail(email)}

            />
            <Text className="text-gray-700 ml-4 font-semibold "
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
              fontFamily:'Light',
              backgroundColor:'rgba(69, 9, 32, 0.35)',
              marginLeft:30,
              fontSize:20,
              color:'white'
            }}
            onChangeText={(password)=> setPassword(password)}
              className="p-4  rounded-2xl"
              secureTextEntry
              placeholder="Password"
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
                registerUser()
              }}
              >
                
                        
                        <ChevronDoubleRightIcon size={40} style={{color:'#FFFFFF',
                     width:36,marginTop:-12,marginLeft:25,
              height:36,}}/>
                
             </TouchableOpacity>
            
          </View>


          <View className="flex-row justify-center">
                <Text className="font-semibold"
                style={{color:'#450920',marginLeft:-30,fontFamily:'Light',fontSize:20,}}>Already Have An Account?</Text>
                <TouchableOpacity onPress={()=> navigation.navigate('Login')}>
                    <Text className="font-semibold text-yellow-400" style={{color:'#FFFFFF',fontFamily:'Light',fontSize:20,}}> Login</Text>
                </TouchableOpacity>
            </View>






    </View>
</View>
</SafeAreaView>
</LinearGradient>
  )
}

// alert('User Registered', 'Registration successful');
// } catch (error) {
//   console.error('Registration error:', error);
//   alert('Registration failed', 'Please try again.');
// }


// checking checking 
// };


// alert('User Registered', 'Registration successful');
// } catch (error) {
//   console.error('Registration error:', error);
//   alert('Registration failed', 'Please try again.');
// }


// checking checking 
// };

// alert('User Registered', 'Registration successful');
// } catch (error) {
//   console.error('Registration error:', error);
//   alert('Registration failed', 'Please try again.');
// }


// checking checking 
// };

// alert('User Registered', 'Registration successful');
// } catch (error) {
//   console.error('Registration error:', error);
//   alert('Registration failed', 'Please try again.');
// }


// checking checking 
// };
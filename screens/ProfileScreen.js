import { View, Text ,Image,TextInput,TouchableOpacity, ImageBackground} from 'react-native'
import React,{useState,useEffect} from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useFonts } from 'expo-font'
import { useNavigation } from '@react-navigation/native'
import { firebase } from '../config';


export default function ProfileScreen() {
  const navigation =useNavigation();
  const [name,setName]=useState('');



  const handleLogout = async () => {
    try {
      await firebase.auth().signOut(); 
      navigation.navigate('Login'); 
    } catch (error) {
      console.error('Logout error');
    }
  };

  // let [fontLoaded]=useFonts({
  //   'Italic':require('../assets/fonts/AveriaSerifLibre-BoldItalic.ttf'),
  //   'LightItalic':require('../assets/fonts/AveriaSerifLibre-LightItalic.ttf'),
  //   'Light':require('../assets/fonts/AveriaSerifLibre-Light.ttf')
    
  // })


  // if(!fontLoaded){
  //   return <AppLoading/>
  // }
  return (
    <>
    <ImageBackground source={require('../assets/images/background.png')} style={{height:800}}>


  <View 
  style={{
    width:394,
  height:85,flexShrink:0,backgroundColor:'#FFEDDF99'
}}
  >
    <SafeAreaView style={{display:'flex',flexDirection:'row',justifyContent:'center'}}>
    <Image style={{width:50,height:50}} source={require('../assets/images/newhero01.png')}/>

<Text style={{
    marginTop:3,
    color:'#450920',fontSize:40,
    fontFamily:'Light',
  }}
    className="   text-center">
    MyTime
</Text>
 

<TouchableOpacity onPress={handleLogout}>
<Image  style={{width:70,height:60,left:50,}} source={require('../assets/images/newremove.png')}/>
</TouchableOpacity>


    </SafeAreaView>
  </View>



{/* profile photo */}



<View style={{alignSelf:'center'}}>

  <Image source={require('../assets/images/onemore.png')}/>


</View>

{/* informations */}

<View    

style={{width:295,height:355,backgroundColor:'#F4BEBE',borderRadius:28,alignSelf:'center',}}>
            <TextInput 
            style={{
              opacity:0.8,
              width:250,
              marginVertical:20,
              paddingHorizontal:8,
              height:60,
              flexShrink:0,
              backgroundColor:'#A6435C',
              borderRadius:20,
              fontSize:22,
              alignSelf:'center',
              fontFamily:'Light',
            }}
              className="myhaseeb text-white  font-semibold rounded-2xl"
              placeholder="Name"
              value="Name" 
            />

            
            <TextInput 
            style={{
              width:250,
              marginVertical:15,
              opacity:0.8,
              paddingHorizontal:8,
              height:60,
              flexShrink:0,
              backgroundColor:'#A6435C',
              borderRadius:20,
              fontSize:22,
              alignSelf:'center',
              fontFamily:'Light',
            }}
              className="myhaseeb text-white font-semibold rounded-2xl "
              placeholder="Institute"
              value="Institute" 
            />

          <TextInput 
            style={{
              width:250,
              marginVertical:15,
              opacity:0.8,
              paddingHorizontal:8,
              height:60,
              flexShrink:0,
              backgroundColor:'#A6435C',
              borderRadius:20,
              fontSize:22,
              alignSelf:'center',
              fontFamily:'Light',
            }}
              // className="p-4 bg-grey-100 text-gray-700 rounded-2xl"
              className="myhaseeb text-white font-semibold rounded-2xl"
              placeholder="Department"
              value="Department" 
            />



 {/* save and edit button */}

<View  
            style={{display:'flex',gap:100,flexDirection:'row',marginLeft:13, position: 'relative', bottom: 0 }}
            >

<TouchableOpacity
        // onPress={()=> navigation.navigate('SignUp')}
        className="py-2  " style={{
            borderRadius:30,
            backgroundColor:'#450920',
            width:83,
            height:39,
            // marginLeft:60,
            flexShrink:0}}>
            <Text 
                className=" font-semibold text-center " style={{ 
                  fontSize:22,
                  fontFamily:'Light',
                    color:'#E7D1D1',
                }}
            >
                Edit
            </Text>
    </TouchableOpacity>
    <TouchableOpacity
        onPress={()=> navigation.navigate('SignUp')}
        className="py-2 " style={{
            borderRadius:30,
            backgroundColor:'#450920',
            width:83,
            height:39,
            flexShrink:0}}>
            <Text 
                className=" font-semibold text-center " style={{ 
                  fontSize:22,
                  fontFamily:'Light',
                    color:'#E7D1D1',
                }}
            >
                Save
            </Text>
    </TouchableOpacity>

</View>






</View>










{/* </LinearGradient> */}

<View 
  style={{
    width:394,
    position:'absolute',
    bottom:0,
    zIndex:2,
  height:40,flexShrink:0,backgroundColor:'#FFEDDF99'
}}
  >
    <SafeAreaView style={{display:'flex',flexDirection:'row',gap:50,alignSelf:'center'}}>
    

    <TouchableOpacity onPress={() => navigation.navigate('MyProfile')}>
  <Image source={require('../assets/images/bellIcon.png')} style={{ width: 50, height: 40 ,bottom:25,}} />
</TouchableOpacity>


    <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
  <Image source={require('../assets/images/newhero01.png')} style={{width:68,height:68,overflow:'visible',position:'relative',top:-50}} />
</TouchableOpacity>

<TouchableOpacity onPress={() => navigation.navigate('Reason')}>
  <Image source={require('../assets/images/contact.png')} style={{width:50,height:40,marginLeft:15,bottom:25,}} />
</TouchableOpacity>

    </SafeAreaView>
  </View>



  </ImageBackground>

</>


    
  )
}

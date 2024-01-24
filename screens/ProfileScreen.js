import { View, Text ,Image,TextInput,TouchableOpacity, ImageBackground} from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import AppLoading from 'expo-app-loading'
import { useFonts } from 'expo-font'


export default function ProfileScreen() {
  let [fontLoaded]=useFonts({
    'Italic':require('../assets/fonts/AveriaSerifLibre-BoldItalic.ttf'),
    'LightItalic':require('../assets/fonts/AveriaSerifLibre-LightItalic.ttf'),
    'Light':require('../assets/fonts/AveriaSerifLibre-Light.ttf')
    
  })


  if(!fontLoaded){
    return <AppLoading/>
  }
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
 
<Image  style={{width:70,height:60,left:50,}} source={require('../assets/images/newremove.png')}/>

    </SafeAreaView>
  </View>



{/* profile photo */}



<View style={{alignSelf:'center'}}>

  <Image source={require('../assets/images/onemore.png')}/>


</View>

{/* informations */}

<View    

style={{width:295,height:366,backgroundColor:'#F4BEBE',borderRadius:28,alignSelf:'center',}}>
{/* <Text className="text-gray-700 ml-4"
            style={{
              color: '#FFEDDF',
              textAlign: 'center',
              // fontFamily: "Averia Serif Libre",
              fontSize: 20,
              fontStyle: 'normal',
              fontWeight: 700,
              marginLeft:-230,
            }}
            >Password</Text> */}
            <TextInput 
            style={{
              opacity:0.8,
              width:223,
              marginVertical:20,
              paddingHorizontal:8,
              height:45,
              flexShrink:0,
              backgroundColor:'#A6435C',
              borderRadius:20,
              fontSize:22,
              alignSelf:'center',
              fontFamily:'Light',
              // fontWeight:400,
            }}
              // className="p-4 bg-grey-100 text-gray-700 rounded-2xl"
              className="myhaseeb text-white  font-semibold rounded-2xl"
              placeholder="Name"
              value="Name" 
            />

            <TextInput 
            style={{
              width:223,
              opacity:0.8,
              marginVertical:15,
              paddingHorizontal:8,
              height:45,
              flexShrink:0,
              backgroundColor:'#A6435C',
              borderRadius:20,
              fontSize:18,
              fontSize:22,
              alignSelf:'center',
              fontFamily:'Light',
            }}
              // className="p-4 bg-grey-100 text-gray-700 rounded-2xl"
              className="myhaseeb text-white  font-semibold rounded-2xl"
              placeholder="Specialization"
              value="Specialization" 
            />
            
            <TextInput 
            style={{
              width:223,
              marginVertical:15,
              opacity:0.8,
              paddingHorizontal:8,
              height:45,
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
              width:223,
              marginVertical:15,
              opacity:0.8,
              paddingHorizontal:8,
              height:45,
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
            style={{display:'flex',gap:100,flexDirection:'row',marginLeft:13, position: 'relative', bottom: 2 }}
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
            // marginLeft:60,
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
    <Image style={{width:50,height:40}} source={require('../assets/images/bellIcon.png')}/>
    <Image style={{width:68,height:68,overflow:'visible',position:'relative',top:-25}} source={require('../assets/images/newhero01.png')}/>
    <Image style={{width:50,height:40,marginLeft:15}} source={require('../assets/images/contact.png')}/>

 

    </SafeAreaView>
  </View>



  </ImageBackground>

</>


    
  )
}

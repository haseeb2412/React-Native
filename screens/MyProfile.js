import { View, Text ,Image,TextInput,TouchableOpacity,ImageBackground} from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import AppLoading from 'expo-app-loading'
import { useFonts } from 'expo-font'
import { useNavigation } from '@react-navigation/native'


export default function MyProfile() {
  const navigation = useNavigation();
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
    <ImageBackground source={require('../assets/images/background.png')} style={{width:400,}}>


  




      {/* top section  */}

      <View 
  style={{
    width:394,
  height:85,flexShrink:0,backgroundColor:'#FFEDDF99'
}}
  >
    <SafeAreaView style={{display:'flex',flexDirection:'row',justifyContent:'center'}}>
    <Image style={{width:50,height:50}} source={require('../assets/images/newhero01.png')}/>

<Text style={{
    color:'#450920',fontSize:40,
    fontFamily:'Light',marginTop:3,}}
    className=" font-semibold  text-center">
    MyTime
</Text>




<TouchableOpacity onPress={() => navigation.navigate('Profile')}>
<Image  style={{width:70,height:60,left:50,}} source={require('../assets/images/newremove.png')}/>
</TouchableOpacity>

 


    </SafeAreaView>
  </View>




{/* main section */}

<View    style={{display:'flex',flexDirection:'row',gap:5,alignSelf:'center',marginVertical:40,}}>

<Image style={{height:132.123,width:126,flexShrink:0}} source={require('../assets/images/onemore.png')}/>
  <View>
    <Text style={{fontSize:25,fontStyle:'normal',color:'#FFEDDF',fontSize:35,
    fontFamily:'Light',marginTop:30}}>Username</Text>
    <Text style={{color:'#EEE3C8',
    fontFamily:'Light',fontStyle:'normal',fontSize:22}}>Designation</Text>
  </View>
</View>


{/* button */}

<TouchableOpacity
                onPress={()=> navigation.navigate('SignUp')}
                className="py-3  mx-7 " style={{
                    borderRadius:30,
                    opacity:0.8,
                    backgroundColor:'#A6435CCC',
                    width:264,
                    height:54,
                    marginLeft:60,
                    flexShrink:0}}>
                    <Text 
                        className="text-xl font-semibold text-center rounded-30" style={{ 
                            fontWeight:'normal',
                            color:'#FFEDDF',fontSize:25,
                            fontFamily:'Light',
                            
                        }}
                    >
                        AVAILABILITY
                    </Text>
            </TouchableOpacity>



















{/* input Section */}

<View style={{width:400,height:400,backgroundColor:'#FFEDDF66',marginTop:60,borderTopRightRadius:50,}}>

  <View style={{display:'flex',flexDirection:'row',borderBottomWidth:2,borderBottomColor:'#CBB8B8',paddingBottom:10,width:300,alignSelf:'center'}}>
    <Image style={{}} source={require('../assets/images/small.png')}/>
  <Text style={{marginTop:8,fontStyle:'normal',fontSize:28,
    fontFamily:'Light',color:'#FFEDDF',}}>Recently Available</Text>
  </View>




  <TextInput 
            style={{
              width:370,alignSelf:'center',
              borderBottomWidth:2,borderBottomColor:'#CBB8B8',paddingBottom:10,
              // width:398,
              backfaceVisibility:'hidden',
              opacity:0.4,
              marginVertical:0,
              paddingVertical:4,
              paddingHorizontal:5,
              height:60,
              flexShrink:0,
              fontFamily:'Light',
              fontSize:22,
              alignSelf:'center'
            }}
              className="myhaseeb text-white  font-semibold "
              placeholder="Specialization"
              value=" 1)  Your Activity" 
            />
              <TextInput 
            style={{
              width:370,alignSelf:'center',
              borderBottomWidth:2,borderBottomColor:'#CBB8B8',paddingBottom:10,
              // width:398,
              backfaceVisibility:'hidden',
              opacity:0.4,
              marginVertical:0,
              paddingVertical:4,
              paddingHorizontal:5,
              height:60,
              flexShrink:0,
              fontFamily:'Light',
              fontSize:22,
              alignSelf:'center'
            }}
              className="myhaseeb text-white  font-semibold "
              placeholder="Specialization"
              value=" 2)  Your Activity" 
            />
               <TextInput 
            style={{
              width:370,alignSelf:'center',
              borderBottomWidth:2,borderBottomColor:'#CBB8B8',paddingBottom:10,
              // width:398,
              backfaceVisibility:'hidden',
              opacity:0.4,
              marginVertical:0,
              paddingVertical:4,
              paddingHorizontal:5,
              height:60,
              flexShrink:0,
              fontFamily:'Light',
              fontSize:22,
              alignSelf:'center'
            }}
              className="myhaseeb text-white  font-semibold "
              placeholder="Specialization"
              value=" 3)  Your Activity" 
            />
                <TextInput 
            style={{
              width:370,alignSelf:'center',
              borderBottomWidth:2,borderBottomColor:'#CBB8B8',paddingBottom:10,
              // width:398,
              backfaceVisibility:'hidden',
              opacity:0.4,
              marginVertical:0,
              paddingVertical:4,
              paddingHorizontal:5,
              height:60,
              flexShrink:0,
              fontFamily:'Light',
              fontSize:22,
              alignSelf:'center'
            }}
              className="myhaseeb text-white  font-semibold "
              placeholder="Specialization"
              value=" 4)  Your Activity" 
            />
                <TextInput 
            style={{
              width:370,alignSelf:'center',
              borderBottomWidth:2,borderBottomColor:'#CBB8B8',paddingBottom:10,
              // width:398,
              backfaceVisibility:'hidden',
              opacity:0.4,
              marginVertical:0,
              paddingVertical:4,
              paddingHorizontal:5,
              height:60,
              flexShrink:0,
              fontFamily:'Light',
              fontSize:22,
              alignSelf:'center'
            }}
              className="myhaseeb text-white  font-semibold "
              placeholder="Specialization"
              value=" 5)  Your Activity" 
            />

  
</View>


























{/* </LinearGradient>     */}







































{/* footer */}


  </ImageBackground>



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
</>



  )
}
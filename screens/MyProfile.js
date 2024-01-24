import { View, Text ,Image,TextInput,TouchableOpacity,ImageBackground} from 'react-native'
import React from 'react'
import COLORS from '../constants/colors';
import {LinearGradient} from 'expo-linear-gradient';
import { SafeAreaView } from 'react-native-safe-area-context'

export default function MyProfile() {
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
    // fontFamily:'AveriaSerifLibre-Italic',
    color:'#450920',fontSize:31,}}
    className=" font-bold  text-center">
    MyTime
</Text>
 
<Image  style={{width:70,height:60,left:50,}} source={require('../assets/images/newremove.png')}/>

    </SafeAreaView>
  </View>




{/* main section */}

<View    style={{display:'flex',flexDirection:'row',gap:5,alignSelf:'center',marginVertical:40,}}>

<Image style={{height:132.123,width:126,flexShrink:0}} source={require('../assets/images/onemore.png')}/>
  <View>
    <Text style={{fontSize:25,fontStyle:'normal',color:'#FFEDDF',fontWeight:700,marginTop:30}}>Username</Text>
    <Text style={{color:'#EEE3C8',fontWeight:400,fontStyle:'normal',fontSize:20}}>Designation</Text>
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
                    alignContent:'center',
                    marginLeft:60,
                    alignItems:'center',
                    flexShrink:0}}>
                    <Text 
                        className="text-xl font-bold text-center rounded-30" style={{ 
                            // fontFamily:'AveriaSerifLibre-Italic',
                            fontSize:22,fontWeight:'normal',
                            color:'#FFEDDF',fontWeight:'700',
                            
                        }}
                    >
                        AVAILABILITY
                    </Text>
            </TouchableOpacity>



















{/* input Section */}

<View style={{width:400,height:400,backgroundColor:'#FFEDDF66',marginTop:60,borderTopRightRadius:50,}}>

  <View style={{display:'flex',flexDirection:'row',borderBottomWidth:2,borderBottomColor:'#CBB8B8',paddingBottom:10,width:300,alignSelf:'center'}}>
    <Image style={{}} source={require('../assets/images/small.png')}/>
  <Text style={{marginTop:5,fontWeight:700,fontStyle:'normal',fontSize:25,color:'#FFEDDF',}}>Recently Available</Text>
  </View>




  <TextInput 
            style={{
              width:370,alignSelf:'center',
              borderBottomWidth:2,borderBottomColor:'black',paddingBottom:10,
              // width:398,
              backfaceVisibility:'hidden',
              opacity:0.4,
              marginVertical:0,
              paddingVertical:4,
              paddingHorizontal:5,
              height:60,
              flexShrink:0,
              // backgroundColor:'#A6435C',
              // borderRadius:20,
              fontSize:18,
              alignSelf:'center'
            }}
              // className="p-4 bg-grey-100 text-gray-700 rounded-2xl"
              className="myhaseeb text-white  font-bold "
              placeholder="Specialization"
              value=" 1)  Your Activity" 
            />
              <TextInput 
            style={{
              width:370,alignSelf:'center',
              borderBottomWidth:2,borderBottomColor:'#CBB8B8',paddingBottom:10,
              paddingVertical:4,
              backfaceVisibility:'hidden',
              opacity:0.4,
              marginVertical:0,
              paddingHorizontal:5,
              height:60,
              flexShrink:0,
              fontSize:18,
              alignSelf:'center'
            }}
              // className="p-4 bg-grey-100 text-gray-700 rounded-2xl"
              className="myhaseeb text-white  font-bold "
              placeholder="Specialization"
              value=" 2)  Your Activity" 
            />
              <TextInput 
            style={{
              width:370,alignSelf:'center',
              borderBottomWidth:2,borderBottomColor:'#CBB8B8',paddingBottom:10,
              paddingVertical:4,
              backfaceVisibility:'hidden',
              opacity:0.4,
              marginVertical:0,
              paddingHorizontal:5,
              height:60,
              flexShrink:0,
              // borderRadius:20,
              fontSize:18,
              alignSelf:'center'
            }}
              // className="p-4 bg-grey-100 text-gray-700 rounded-2xl"
              className="myhaseeb text-white  font-bold "
              placeholder="Specialization"
              value=" 3)  Your Activity" 
            />
              <TextInput 
            style={{
              width:370,alignSelf:'center',
              borderBottomWidth:2,borderBottomColor:'#CBB8B8',paddingBottom:10,
              paddingVertical:4,
              backfaceVisibility:'hidden',
              opacity:0.4,
              marginVertical:0,
              paddingHorizontal:5,
              height:60,
              flexShrink:0,
              // borderRadius:20,
              fontSize:18,
              alignSelf:'center'
            }}
              // className="p-4 bg-grey-100 text-gray-700 rounded-2xl"
              className="myhaseeb text-white  font-bold "
              placeholder="Specialization"
              value=" 4)  Your Activity" 
            />
              <TextInput 
            style={{
              width:370,alignSelf:'center',
              borderBottomWidth:2,borderBottomColor:'#CBB8B8',paddingBottom:10,
              paddingVertical:4,
              backfaceVisibility:'hidden',
              opacity:0.4,
              marginVertical:0,
              paddingHorizontal:5,
              height:60,
              flexShrink:0,
              // borderRadius:20,
              fontSize:18,
              alignSelf:'center'
            }}
              // className="p-4 bg-grey-100 text-gray-700 rounded-2xl"
              className="myhaseeb text-white  font-bold "
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
    <Image style={{width:50,height:40}} source={require('../assets/images/bellIcon.png')}/>
    <Image style={{width:68,height:68,overflow:'visible',position:'relative',top:-25}} source={require('../assets/images/newhero01.png')}/>
    <Image style={{width:50,height:40,marginLeft:15}} source={require('../assets/images/contact.png')}/>

 

    </SafeAreaView>
  </View>
</>



  )
}
import { View, Text ,Image,TextInput,TouchableOpacity,ImageBackground} from 'react-native'
import {React,useState} from 'react'
import COLORS from '../constants/colors';
import {LinearGradient} from 'expo-linear-gradient';
import { SafeAreaView } from 'react-native-safe-area-context'
import RNPickerSelect from 'react-native-picker-select';

export default function ReasonScreen() {
    const [selectedValue, setSelectedValue] = useState(null);
    const [selectedValue2, setSelectedValue2] = useState(null);

    const placeholder = {
      label: 'Set availability...',
      value: null,
    };
  
    const options = [
      { label: 'Monday', value: 'Monday' },
      { label: 'Tuesday', value: 'Tuesday' },
      { label: 'Wednesday', value: 'Wednesday' },
    ];

    const placeholder2 = {
        label: 'Set Reason...',
        value: null,
      };
    
      const options2 = [
        { label: 'Running', value: 'Running' },
        { label: 'Swimming', value: 'Swimming' },
        { label: 'Walking', value: 'Walking' },
      ];
  return (
  <>
          <ImageBackground source={require('../assets/images/background.png')} style={{width:400,height:800}}>
      
      
        
      
      
      
      
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
      
      <Image style={{height:80,width:90,flexShrink:0,marginTop:20,}} source={require('../assets/images/onemore.png')}/>
        <View>
          <Text style={{fontSize:24,fontStyle:'normal',color:'#FFEDDF',fontWeight:700,marginTop:40}}>Username</Text>
          <Text style={{color:'#EEE3C8',fontWeight:400,fontStyle:'normal',fontSize:20}}></Text>
        </View>
      </View>
            
   
    <View>
        <Text style={{marginLeft:80,color:'#FFEDDF',fontSize:20,fontWeight:700,marginVertical:4}}>Set Availability</Text>
        <TouchableOpacity
                style={{
                borderRadius:30,
                opacity:0.8,
                backgroundColor:'#A6435CCC',
                width:264,
                height:54,
                marginBottom:-20,
                alignContent:'center',
                marginLeft:60,
                alignItems:'center',
                flexShrink:0}}>
            <RNPickerSelect

                placeholder={placeholder}
                items={options}
                onValueChange={(value) => setSelectedValue(value)}
                value={selectedValue}
            />
      </TouchableOpacity>
    </View>

    <View>
        <Text style={{marginLeft:80,marginTop:40,color:'#FFEDDF',fontSize:20,fontWeight:700,marginVertical:4}}>Select Reason</Text>
        <TouchableOpacity
                style={{
                borderRadius:30,
                opacity:0.8,
                backgroundColor:'#FDADAF99',
                width:264,
                height:54,
                alignContent:'center',
                marginLeft:60,
                alignItems:'center',
                flexShrink:0}}>
            <RNPickerSelect

                placeholder={placeholder2}
                items={options2}
                onValueChange={(value) => setSelectedValue2(value)}
                value={selectedValue2}
            />
      </TouchableOpacity>
    </View>
      
      
      
      
      
      
      
      <View>
        <Text style={{alignSelf:'center',fontSize:20,fontWeight:500,color:'#FFEDDF',marginTop:50}}>Leave a custom Message</Text>

        <TextInput 
            style={{
                width:370,alignSelf:'center',
                borderBottomWidth:2,borderBottomColor:'#FFEDDF',paddingBottom:10,
            //   width:400,
            backfaceVisibility:'hidden',
              opacity:0.8,
              marginVertical:15,
              paddingHorizontal:8,
              height:45,
              flexShrink:0,
            //   backgroundColor:'white',
              borderRadius:20,
              fontSize:18,
            //   alignSelf:'center'
            }}
              // className="p-4 bg-grey-100 text-gray-700 rounded-2xl"
              className="myhaseeb text-white  font-bold rounded-2xl"
              placeholder="Specialization"
            //   value="Specialization" 
            />
      </View>
      
      <TouchableOpacity
        // onPress={()=> navigation.navigate('SignUp')}
        className="py-2 " style={{
            borderRadius:30,
            backgroundColor:'#FFEDDFF2',
            width:103,
            height:48,
            alignSelf:'center',
            marginVertical:15,
            flexShrink:0}}>
            <Text 
                className=" font-bold text-center " style={{ 
                    // fontFamily:'AveriaSerifLibre-Italic',
                    color:'#450920',fontWeight:'700',paddingVertical:2,
                    fontSize:18,
                }}
            >
                Done
            </Text>
    </TouchableOpacity>
      
      
      

      
      
      
      
      
      
      
      
      
       
      
      
      
      
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
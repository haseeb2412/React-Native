import { View, Text ,Image,TextInput,TouchableOpacity, ImageBackground} from 'react-native'
import React,{useState,useEffect} from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useNavigation } from '@react-navigation/native'
import { firebase } from '../config';
import { LearnMoreLinks } from 'react-native/Libraries/NewAppScreen';


export default function ProfileScreen() {
  const navigation =useNavigation();
  const [name,setName]=useState('');
  const [institute,setinstitute]=useState('');
  const [department,setdepartment]=useState('');
  const [selectedValue, setSelectedValue] = useState(null);
  const [selectedValue2, setSelectedValue2] = useState(null);


const handleSave = async () => {

  try {
    const user = firebase.auth().currentUser;
    const userEmail = user ? user.email : 'Unknown Email';

    const uid = user.uid;
    const userInformationRef = firebase.database().ref('userInformation/' + uid);

    await userInformationRef.update({
      name: name,
      institute: institute,
      department: department,

    });

    alert('Data saved successfully!');
    setName(''), setdepartment(''), setinstitute('');

  } catch (error) {
    // console.error('Error saving data:', error);
    alert('Failed to save data. Please try again.');
  }
};


  const handleLogout = async () => {
    try {
      await firebase.auth().signOut(); 
      navigation.navigate('Login'); 
    } catch (error) {
      console.error('Logout error');
    }
  };
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




<View style={{alignSelf:'center'}}>

  <Image source={require('../assets/images/onemore.png')}/>


</View>


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
              value={name} 
              onChangeText={(name)=>setName(name)}
              
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
              value={institute}
              onChangeText={(institute)=>{setinstitute(institute)}}
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
              value={department} 
              onChangeText={(department)=>{setdepartment(department)}}
            />




<View  
            style={{display:'flex',gap:100,flexDirection:'row',marginLeft:13, position: 'relative', bottom: 0 }}
            >

<TouchableOpacity
        className="py-2  " style={{
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
                Edit
            </Text>
    </TouchableOpacity>
    <TouchableOpacity
        onPress={handleSave}
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


//   <Image source={require('../assets/images/newhero01.png')} style={{width:68,height:68,overflow:'visible',position:'relative',top:-50}} />
// </TouchableOpacity>

// <TouchableOpacity onPress={() => navigation.navigate('Reason')}>
//   <Image source={require('../assets/images/contact.png')} style={{width:50,height:40,marginLeft:15,bottom:25,}} />
// </TouchableOpacity>

//     </SafeAreaView>
//   </View>



//   </ImageBackground>

// </>


    
//   )
// }


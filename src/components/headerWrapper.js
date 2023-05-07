import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { COLOR_PALATE } from '../constants'

const ScreenTitle=({title})=>{
    return(
        <View style={{width:200,height:50,borderRadius:25,backgroundColor:'#FFFF',shadowOffset: {width: 5, height: 8},
        shadowOpacity:0.2,
        shadowRadius: 3,elevation:20,justifyContent:'center',alignItems:'center'}}>
            <Text style={{letterSpacing:2,fontSize:15,fontWeight:"bold",color:COLOR_PALATE.mainColor}}>{title}</Text>
        </View>
    )
}

export default function HeaderWrapper({children,styleHeader={},title="",navigation}) {
   const onPressBack=()=>{
    navigation.goBack()
   }
  return (
    <View style={{flex:1}}>
      <View style={[{height:70,width:"100%",justifyContent:'center',alignItems:'center'},styleHeader]}> 
         <ScreenTitle title={title} />
         <TouchableOpacity onPress={onPressBack} style={{width:40,height:40,position:'absolute',left:12,top:18,borderRadius:25,backgroundColor:'#FFFF',justifyContent:'center',alignItems:'center'}}>
         <Image source={require("../Assets/images/icons8-back-96.png")} style={{width:40,height:40}} resizeMode='center' />    
         </TouchableOpacity>
      </View>
      {
        children
      }
    </View>
  )
}
import React from "react"
import { Pressable, Text, TouchableOpacity, View } from "react-native"
import {getTimeFormatted} from "../services"
import { COLOR_PALATE } from "../constants"
export default FlightCard=({item,styleContainer,isEditable,removeFlight})=>{
    const {displayData:{airlines:{airlineName},source:{airport:{cityName:sourceCityName},depTime},destination:{airport:{cityName:destinationCityName},arrTime},totalDuration,stopInfo},fare}=item
    return(
      <View style={[{width:"90%",height:80,backgroundColor:'white',borderRadius:5,shadowColor: '#171717',alignSelf:'center',
              shadowOffset: {width: -2, height: 8},
              shadowOpacity:0.2,
              shadowRadius: 3,elevation:20,marginBottom:10},styleContainer]}>
               {isEditable?
                <TouchableOpacity onPress={removeFlight} style={{position:"absolute",top:1,right:1,width:30,height:30,justifyContent:'center',alignItems:'center',zIndex:2}}>
                    <Text style={{fontSize:20,color:COLOR_PALATE.mainColor}}>x</Text>
                </TouchableOpacity>:null
               }
                <View style={{width:'100%',height:"30%",justifyContent:'center',paddingLeft:10}}>
                  <Text style={{fontSize:12,fontWeight:'700'}}>{airlineName}</Text>
                </View>
                <View style={{flex:1,flexDirection:'row'}}>
                  <View style={{minWidth:230,height:"100%",flexDirection:'row'}}>
                    <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                      <Text style={{fontSize:18,fontWeight:'700'}}>{getTimeFormatted(depTime)}</Text>
                      <Text style={{fontSize:12}}>{sourceCityName}</Text>
                    </View>
                    <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                    <Text>{totalDuration}</Text>
                    <View style={{width:50,borderWidth:.5,borderColor:"green"}}>
                    </View >
                    <Text>{stopInfo}</Text>
                    </View>
                    <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                    <Text style={{fontSize:18,fontWeight:'700'}}>{getTimeFormatted(arrTime)}</Text>
                    <Text style={{fontSize:12}}>{destinationCityName}</Text>
                    </View>
                  </View>
                  <View style={{flex:1,justifyContent:'center',alignItems:'flex-end',paddingRight:10}}>
                    <Text style={{fontSize:18,fontWeight:'700'}}>{`\u20B9 ${fare}`}</Text>
                  </View>
                </View>
              </View>
    )
  }
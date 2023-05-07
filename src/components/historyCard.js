import React, { useMemo } from "react"
import { Pressable, Text, TouchableOpacity, View } from "react-native"
import {getTimeFormatted} from "../services"
import { COLOR_PALATE, Months } from "../constants"

let HistoryCard=({item,date,styleContainer})=>{
    let getdate=(date)=>{
        return new Date(date)
    }
    const {displayData:{airlines:{airlineName},source:{airport:{cityName:sourceCityName},depTime},destination:{airport:{cityName:destinationCityName},arrTime},totalDuration,stopInfo},fare}=item
    const dateObj=getdate(date)
    return(
      <View style={[{width:"90%",height:80,backgroundColor:'white',borderRadius:5,shadowColor: '#171717',alignSelf:'center',
              shadowOffset: {width: -2, height: 8},
              shadowOpacity:0.2,
              shadowRadius: 3,elevation:20,marginBottom:10},styleContainer]}>
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
                  <View style={{flex:1,width:250,justifyContent:'center',flexDirection:"row",alignItems:'center',paddingRight:10}}>
                    <View style={{flex:1,justifyContent:"center",alignItems:"flex-end"}}>
                        <Text style={{fontSize:20,fontWeight:"bold"}}>{dateObj.getDate()}</Text>
                    </View>
                    <View style={{flex:1,justifyContent:"center",alignItems:"center"}}>
                        <Text style={{fontSize:20,fontWeight:"bold"}}>{Months[dateObj.getMonth()]}</Text>
                        <Text style={{fontSize:15,fontWeight:"bold"}}>{dateObj.getFullYear()}</Text>
                    </View>
                  </View>
                </View>
              </View>
    )
  }
  export default HistoryCard;
import { View, Text, TextInput, Pressable, Image } from 'react-native'
import React, { memo, useCallback, useState } from 'react'
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { COLOR_PALATE } from '../constants';
import Icon from 'react-native-vector-icons/FontAwesome5';
 function ButtonComponent({title="",onSubmitChange,styleTitle,styleTextInput,styleContainer,date,setDate}) {
    
    const [showDatePicker,setShowDatePicker]=useState(false)

    const onSubmitEditing=(date)=>{
     setDate(date)
     hideDatePicker()
    }

    const hideDatePicker=()=>{
      setShowDatePicker(false)
    }

    // const changeFocus=useCallback(()=>{
    //     setIsFocused((prevState)=>{return !prevState })
    // },[])

  return (
    <View style={[{width:"80%",height:60,marginTop:15,borderRadius:15,padding:5,borderColor:"#79ACC3",borderWidth:1.5,flexDirection:"row"},styleContainer]}>
      <View style={{width:"80%",height:"100%"}}>
        <Text style={[{color:"#CBD0CB",fontWeight:"700",paddingLeft:5,letterSpacing:2,fontSize:10},styleTitle]}>{title}</Text>
        <Text style={[{width:"60%",height:30,fontSize:14,padding:5,paddingLeft:5},styleTextInput]} >
          {date == "" ? "MM/DD/YYYY":new Date(date).toLocaleDateString()}
        </Text>
      </View>
      <Pressable onPress={()=>{setShowDatePicker(true)}} style={{width:"20%",height:"100%",justifyContent:"center",alignItems:"center"}}>
        <Image source={require("../Assets/images/icons8-calendar-48.png")} style={{width:30,height:30}} resizeMode='contain'/>
      </Pressable>  
        <DateTimePickerModal
                isVisible={showDatePicker}
                mode="date"
                date={date}
                onConfirm={onSubmitEditing}
                onCancel={hideDatePicker}
              />
    </View>
  )
}

export default memo(ButtonComponent)
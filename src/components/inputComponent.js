import { View, Text, TextInput } from 'react-native'
import React, { memo, useCallback, useState } from 'react'

 function InputComponent({title="",styleTitle,styleTextInput,styleContainer,textState,updateState,disabled=false}) {
    
    const [isFocused,setIsFocused]=useState(false)

    const onChange=(value)=>{
     updateState(value) 
    }

    const changeFocus=useCallback(()=>{
        setIsFocused((prevState)=>{return !prevState })
    },[])

  return (
    <View style={[{width:"80%",height:60,marginTop:15,borderRadius:15,padding:5,borderColor:"#79ACC3",borderWidth:isFocused?2.5:1.5},styleContainer]}>
        <Text style={[{color:"#CBD0CB",fontWeight:"700",paddingLeft:5,letterSpacing:2,fontSize:10},styleTitle]}>{title}</Text>
        <TextInput editable={!disabled} style={[{width:"80%",height:30,fontSize:14,padding:0,paddingLeft:5},styleTextInput]} value={textState}  onBlur={changeFocus} onFocus={changeFocus} onChangeText={onChange} />
    </View>
  )
}

export default memo(InputComponent)
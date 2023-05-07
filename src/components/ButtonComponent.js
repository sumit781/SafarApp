import { View, Text, Dimensions, TouchableOpacity } from 'react-native'
import React from 'react'
import { COLOR_PALATE } from '../constants'

export default function ButtonComponent({title="",onPress,styleText,styleButton={}}) {
  return (
    <TouchableOpacity style={[{width:Dimensions.get('window').width*.6,height:50,justifyContent:'center',alignItems:'center',backgroundColor:"white",marginTop:25,marginBottom:10,borderRadius:25,shadowColor: '#171717',
            shadowOffset: {width: -2, height: 8},
            shadowOpacity:0.2,
            shadowRadius: 3,elevation:20},styleButton]}
            onPress={onPress}>
              <Text style={{fontWeight:"700",color:COLOR_PALATE.mainColor}}>
                {title}
              </Text>
    </TouchableOpacity>
  )
}
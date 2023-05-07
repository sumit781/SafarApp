import { View, Text } from 'react-native'
import React from 'react'

export default function EmptyListComponent({mainTitle,subTitle}) {
  return (
    <View style={{flex:1,justifyContent:"center",alignItems:"center"}}>
    {mainTitle?<Text style={{fontSize:20,fontWeight:"700"}}>
       {mainTitle}
    </Text>:null}
    {subTitle?<Text style={{marginTop:20,fontWeight:"500"}}>
        {subTitle}
    </Text>:null}
    </View>
  )
}
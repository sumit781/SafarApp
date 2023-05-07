import { View, Text } from 'react-native'
import React from 'react'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

export default function SafeAreaWrapper({children,...props}) {
    const {top,bottom,left,right}=useSafeAreaInsets()
  return (
        <View style={{flex:1, paddingTop: top,
            paddingBottom: bottom,
            paddingLeft: left,
            paddingRight: right}}>
                {children}
        </View>
  )
}
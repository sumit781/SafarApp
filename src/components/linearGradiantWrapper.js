import { View, Text } from 'react-native'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient'

export default function LinearGradiantWrapper(Comp) {
  return (props) => (
    <LinearGradient
    start={{x: 0.0, y: 0.0}} end={{x: 0.0, y: 1.0}}
    locations={[.1,.5,.7,.8]}
    colors={['#A9E4FD', '#70BAD9', '#59A1C0',"#4686A2"]}
    style={{flex:1}}
    >
        <Comp {...props} />
    </LinearGradient>
  )
}
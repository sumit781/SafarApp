import { View, Text } from 'react-native'
import React from 'react'


  class EmptyListComponent extends React.Component{   
    render(){
      let {mainTitle,subTitle}=this.props
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
  }

  export default EmptyListComponent;
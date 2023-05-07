import { View, Text, FlatList, Pressable } from 'react-native'
import React, { useState } from 'react'
import HeaderWrapper from '../../components/headerWrapper'
import { useDispatch, useSelector } from 'react-redux'
import FlightCard from '../../components/FlightCard'
import EmptyListComponent from '../../components/EmptyListComponent'
import HistoryCard from '../../components/historyCard'
import { EDIT_SELECTED_ITEM, updateRequest } from '../../store/actions/enquiry'

let HistoryContainer=({navigation,...props}) => {
  const {enquiry}=useSelector(state => state)
  const dispatch=useDispatch()
  let selectItem=(item,index)=>{
    dispatch({type:EDIT_SELECTED_ITEM,data:{formDetail:item,index}})
    navigation.navigate({name:"Enquiry"})
  }
  return (
    <HeaderWrapper navigation={navigation} {...props} title="History">
      <View style={{flex:1}}>
        {enquiry.history?.length > 0 ?
        <FlatList
        data={enquiry.history}
        keyExtractor={(item,index)=>index+Math.random()*10}
        contentContainerStyle={{paddingTop:10,paddingBottom:10}} 
        renderItem={({item,index})=>{
         return (
          <Pressable onPress={()=>selectItem(item,index)}>
            <HistoryCard item={item.flightDetail} date={item.date} />
          </Pressable>
        )
      }
      }
        />:<EmptyListComponent mainTitle={"No History of Flight"} subTitle={"FILL YOUR LIST WITH SOME BEAUTIFUL JOURNEY !!"}/>
      }
      </View>
    </HeaderWrapper>
  )
}

export default HistoryContainer;
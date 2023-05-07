
import React, { useCallback, useEffect, useState } from 'react'
import SafeAreaWrapper from '../../components/SafeAreaWrapper'
import LinearGradient from 'react-native-linear-gradient'
import { Dimensions, Text, TextInput, View } from 'react-native'
import InputComponent from '../../components/inputComponent'
import ButtonComponent from '../../components/ButtonComponent'
import { connect, useDispatch, useSelector } from 'react-redux'
import { searchFlights } from '../../store/actions/searchFlights'
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { COLOR_PALATE } from '../../constants'
import DateComponent from '../../components/DateComponent'
import { FlightsData } from '../../constants/flight'
import FlightCard from '../../components/FlightCard'
import { CLEAR_EDITING, createRequest, updateRequest } from '../../store/actions/enquiry'

 const EnquiryContainer=({navigation,...props})=> {
  const {isEditing,form,selectedIndex}=useSelector(state => state.enquiry)
  const dispatch = useDispatch()
  let [source,setSource]=useState("")
  let [destination,setDestination]=useState("")
  let [flightDetail,setFlightDetail]=useState(null)
  let [note,setNote]=useState("")
  let [date,setDate]=useState(new Date())
  useEffect(()=>{
    if(isEditing){
      setDate(form.date)
      setFlightDetail(form.flightDetail)
      setDestination(form.to)
      setSource(form.from)
      setNote(form.note)
    }
  },[isEditing])
  const onPressSearchFlight=useCallback(()=>{
    
    if(flightDetail===null){
      dispatch(searchFlights({
        from:source,
        to:destination,
        date:date
      }))
      navigation.push('FlightsSearch',{
        setFlight:setFlight
      })
    }else{
      if(isEditing){
        dispatch(updateRequest({
          from:source,
          to:destination,
          date:date,
          flightDetail,
          note
        }))
      }else{
        dispatch(createRequest({
          from:source,
          to:destination,
          date:date,
          flightDetail,
          note
        }))
      }
      setDate(new Date())
      setFlightDetail(null)
      setDestination("")
      setSource("")
      setNote("")
    }
  },[source,destination,flightDetail,note,date])

  const setFlight=(flightDetail)=>{
    setFlightDetail(flightDetail)
  }

  const removeFlight = ()=>{
    console.log("called")
    setFlightDetail(null)
    setNote("")
  }

  let onclickClear = useCallback(()=>{
    if(isEditing){
      dispatch({
        type:CLEAR_EDITING
      })
    }
        setDate(new Date())
        setFlightDetail(null)
        setDestination("")
        setSource("")
        setNote("")
    
  },[isEditing])

  return (
    <SafeAreaWrapper>
      <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>     
          <View style={{width:Dimensions.get('window').width*.93,minHeight:350,paddingBottom:30,backgroundColor:'white',borderRadius:50,shadowColor: '#171717',
            shadowOffset: {width: -2, height: 8},
            shadowOpacity:0.2,
            shadowRadius: 3,elevation:20,alignItems:'center',paddingTop:25}}>
              <Text style={{fontSize:18,fontWeight:"700",color:COLOR_PALATE.mainColor}}>ENQUIRY FORM</Text>
              <InputComponent disabled={isEditing || flightDetail!==null} title={"From"} textState={source} updateState={setSource} />
              <InputComponent disabled={isEditing || flightDetail!==null} title={"To"} textState={destination} updateState={setDestination} />
              <DateComponent title={"Departure"} date={date} setDate={setDate} /> 
              {flightDetail!==null?
              <>
              <FlightCard isEditable={true} removeFlight={removeFlight} item={flightDetail} styleContainer={{shadowColor:null,alignSelf:'center',
              shadowOffset: {width: -2, height:2},
              shadowOpacity:null,
              shadowRadius: null,elevation:2,marginBottom:0,width:"80%",marginTop:15,borderWidth:1,borderColor:COLOR_PALATE.mainColor}} />
              <InputComponent title={"Note"} textState={note} updateState={setNote}/>
              </>:null
              }
          </View>
          <ButtonComponent title={isEditing && flightDetail?"UPDATE":flightDetail?"REQUEST":"SEARCH FLIGHT"} onPress={onPressSearchFlight}/>
          <ButtonComponent title={"CLEAR ALL"} onPress={onclickClear}/>
      </View>
   </SafeAreaWrapper>
  )
}

export default EnquiryContainer
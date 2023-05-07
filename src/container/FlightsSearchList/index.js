import React, { useCallback, useEffect, useState } from 'react'
import { FlatList, Image, Modal, Pressable, ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import HeaderWrapper from '../../components/headerWrapper';
import { COLOR_PALATE, SORT_TYPES } from '../../constants';
import CheckBox from '@react-native-community/checkbox';
import { updateFlight, updateSort } from '../../store/actions/searchFlights';
import FlightCard from '../../components/FlightCard';


const FilterModal = (props)=>{
  const [selectedTab,setSelectedTab]=useState(0)
  let {flightsList,sortType,filter,filterOptions}=useSelector(state=> state.searchFlight)
  let dispatch=useDispatch()
  let selectCheckBox=(newValue,name)=>{
    if(selectedTab===0){
      dispatch(updateFlight(
        {
          flightName:name
        }
      ))
    }else{
      dispatch(updateSort(
        {
          sortType:name
        }
      ))
    }
  }
  const tabSelected=(tab)=>{
    switch(tab){
      case 0: return(<View sty>
                <Text style={{fontSize:15}}>Airlines</Text>
                <View style={{width:100,borderWidth:1,borderColor:COLOR_PALATE.mainColor}}/>
                {
                  filterOptions.airlines.map((item,index)=>{
                      return (
                        <View style={{width:"100%",height:50,flexDirection:"row",padding:10,alignItems:"center",justifyContent:"space-between"}} key={item.name+index}>
                          <Text aria-label={item.name}>{item.name}</Text>
                          <CheckBox aria-labelledby={item.name} value={filter!==null?filter[item.name]:false}
                            onValueChange={(newValue) => selectCheckBox(newValue,item.name)} tintColors={{true:COLOR_PALATE.mainColor}} />
                        </View>
                      )
                  })
                }
                </View>)
      case 1: return (<View>
                  <Text style={{fontSize:15}}>Fares</Text>
                <View style={{width:100,borderWidth:1,borderColor:COLOR_PALATE.mainColor}}/>
                  <View style={{width:"100%",height:50,flexDirection:"row",padding:10,alignItems:"center",justifyContent:"space-between"}} >
                          <Text aria-label={"Min - Max"}>Min - Max</Text>
                          <CheckBox aria-labelledby={"Min - Max"} value={sortType===SORT_TYPES.ASC?true:false}
                            onValueChange={(newValue) => selectCheckBox(newValue,SORT_TYPES.ASC)} tintColors={{true:COLOR_PALATE.mainColor}} />
                        </View>
                  <View style={{width:"100%",height:50,flexDirection:"row",padding:10,alignItems:"center",justifyContent:"space-between"}} >
                          <Text aria-label={"Max - Min"}>Max - Min</Text>
                          <CheckBox aria-labelledby={"Max - Min"} value={sortType===SORT_TYPES.DESC?true:false}
                            onValueChange={(newValue) => selectCheckBox(newValue,SORT_TYPES.DESC)} tintColors={{true:COLOR_PALATE.mainColor}} />
                        </View>
              </View> )
    }
  }
  return (
    <Modal animationType="slide"
        transparent={true}
        // Dimensions.get("window").height*.5
        visible={props.showModal}
          >
          <View style={{width:"100%",height:"100%",backgroundColor:"black",opacity:.2,position:"absolute"}} />
          <View
          style={{
            height: '50%',
            marginTop: 'auto',
            borderTopLeftRadius:15,
            borderTopRightRadius:15,
            backgroundColor:"#FFFF",
            overflow:"hidden"
          }}>
            <View style={{width:"100%",height:50,justifyContent:"center",alignItems:"flex-end"}}>
              <TouchableOpacity style={{marginRight:20}} onPress={props.closeModal}>
                <Text style={{fontSize:13,fontWeight:"600",color:COLOR_PALATE.mainColor}}>CLOSE</Text>
              </TouchableOpacity>
            </View>
            <View style={{flex:1,alignItems:'flex-start',flexDirection:"row"}}>
              <View style={{width:100,height:150,alignItems:"center",justifyContent:"space-evenly"}}>
                  <Pressable onPress={()=>{setSelectedTab(0)}} >
                      <Text style={{color:COLOR_PALATE.mainColor,fontWeight:selectedTab==0?"800":"400",letterSpacing:2}}>FILTER</Text>
                  </Pressable>
                  <Pressable onPress={()=>{setSelectedTab(1)}}>
                      <Text style={{color:COLOR_PALATE.mainColor,fontWeight:selectedTab==1?"800":"400",letterSpacing:2}}>SORT</Text>
                  </Pressable>
              </View>
              <View style={{flex:1,height:"90%",borderLeftWidth:1,padding:10,borderLeftColor:"grey"}}>
                {tabSelected(selectedTab)}
              </View>
            </View>
          </View>
        </Modal>
  )
}

const useSort=(flightsList,sort)=>{
  let [sortedList,setSortedList]=useState([])
  useEffect(()=>{
    let newArray=[...flightsList]
    newArray.sort((a,b)=>{
      if(sort === SORT_TYPES.ASC){
        return a.fare - b.fare
      }else{
        return b.fare - a.fare
      }
    })
    console.log(newArray)
    setSortedList(newArray)
  },[flightsList,sort])

  return [sortedList]
}

const useFilter=(sortedArray,filterList)=>{
  let [filteredArray,setFilteredArray]=useState([])
  useEffect(()=>{
    let Array=[...sortedArray]
    if(filterList){
     Array = Array.filter((val,idex)=>{
         return filterList[val.displayData.airlines.airlineName]
       })
       console.log(Array,'/// new Array')
    }
    setFilteredArray(Array)
  },[sortedArray,filterList])

  return [filteredArray]
}




const FlightsSearchList=({navigation,...props})=>{
    const dispatch=useDispatch()
    let {flightsList,sortType,filter,filterOptions}=useSelector(state=> state.searchFlight)
    let [sortedList]=useSort(flightsList,sortType)
    let [filteredArray]=useFilter(sortedList,filter)
    let [showModal,setShowModal]=useState(false)
    useEffect(()=>{
      return ()=>{
        dispatch({type:CL})
      }
    },[])
    let modalStateChange= useCallback(()=>{
      setShowModal((prevState)=>{
        return !prevState
      })
    },[])
    let selectItem=(item)=>{
      console.log(item)
      props.route.params?.setFlight(item)
      navigation.goBack()
    }
  return (
    <HeaderWrapper navigation={navigation} {...props} title="Flights">
      <View style={{flex:1}}>
        <FlatList
        data={filteredArray}
        keyExtractor={(item)=>item.id}
        contentContainerStyle={{paddingTop:10,paddingBottom:10}} 
        renderItem={({item})=>(
          <Pressable onPress={()=>selectItem(item)}>
            <FlightCard isEditable={false} item={item} />
          </Pressable>
        )
      }
        />
        <Pressable style={{position:"absolute",bottom:20,right:10,}} onPress={modalStateChange}>
          <Image source={require('../../Assets/images/slider.png')}  style={{width:50,height:50,shadowOffset: {width: 5, height: 8},
        shadowOpacity:0.2,
        shadowRadius: 3,elevation:20}} />
        </Pressable>
        <FilterModal showModal={showModal} closeModal={modalStateChange} />
      </View>
    </HeaderWrapper>
  )
}


export default FlightsSearchList;

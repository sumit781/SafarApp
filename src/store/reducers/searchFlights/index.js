
import { SORT_TYPES } from '../../../constants'
import { FlightsData } from '../../../constants/flight'
import * as SEARCHFLIGHTACTIONS from '../../actions/searchFlights'

const initialState={
    flightsList:[],
    filterOptions:{
        "airlines":[
            {
            name:"JetSpice",
            code:"AB",
 
        },
            {
            name:"Air India",
            code:"CD",

        },
    ]
    },
    filter:null,
    sortType: SORT_TYPES.ASC
}

const searchFlightReducer=(state = initialState,action)=>{
    
    switch(action.type){   
        case SEARCHFLIGHTACTIONS.SEARCH_FLIGHT_END: 
        const result=action.data
        const FlightList=result.reduce((arr,flight)=>{

            flight?.displayData.airlines.forEach((item)=>{
                
                arr.push({...flight,displayData:{...flight.displayData,airlines:{...item}}})
            })
            return arr
        },[])
        console.log(FlightList,'//// flights')
        return {
            ...state,
            flightsList:FlightList
        }
        case SEARCHFLIGHTACTIONS.UPDATE_FILTER:
            let newObj
            if(state.filter===null){
                newObj={[action.data.flightName]:true}
            }else if(state.filter[action.data.flightName]){
                newObj={...state.filter}
                delete newObj[[action.data.flightName]]
                if(Object.keys(newObj).length===0){
                    newObj=null
                }
            }else {
                newObj={...state.filter,[action.data.flightName]:true}
            }
            return {
                ...state,
                filter:newObj
            }
        case SEARCHFLIGHTACTIONS.UPDATE_SORT :
            return {
                ...state,
                sortType:action.data.sortType
            }
        case SEARCHFLIGHTACTIONS.RESET_SEARCH_FLIGHT:
            return {...initialState}
        
        default: return state
    }
}


export default searchFlightReducer;
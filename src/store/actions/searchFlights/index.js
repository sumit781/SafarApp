import axios from "axios"
import { searchFlightApi } from "../../../api"

export const SEARCH_FLIGHT_START="SEARCH_FLIGHT_START" 
export const SEARCH_FLIGHT_END="SEARCH_FLIGHT_END" 
export const SORT_AND_FILTER_SEARCH_FLIGHT="SORT_AND_FILTER_SEARCH_FLIGHT" 
export const UPDATE_FILTER="UPDATE_FILTER"
export const UPDATE_SORT="UPDATE_SORT"
export const RESET_SEARCH_FLIGHT="RESET_SEARCH_FLIGHT"

export const searchFlights=(dataInfo)=>{
    return async (dispatch)=>{
        try{
            const response = await searchFlightApi()
            console.log(response)
            let {data:{result}}=response
            if(response.message === "Success"){
             dispatch({
                 type:SEARCH_FLIGHT_END,
                 data:result.filter((item)=>{
                    let {displayData:{destination,source}}=item
                    
                    // for testing filter and sorting purpose only
                    if(dataInfo.to.toLowerCase()==="" && dataInfo.from.toLowerCase()!==""){
                            return true
                    }else if(dataInfo.to.toLowerCase()!=="" && dataInfo.from.toLowerCase()===""){
                        return true
                    }else
                    return destination.airport.cityName.toLowerCase() === dataInfo.to.toLowerCase() && source.airport.cityName.toLowerCase() === dataInfo.from.toLowerCase()
                 })
             })
            }
        }catch(err){
                console.log(err)
        }
    }
}

export const updateFlight=(data)=>{
    return {
        type:UPDATE_FILTER,
        data
    }
}

export const updateSort=(data)=>{
    return {
        type:UPDATE_SORT,
        data
    }
}
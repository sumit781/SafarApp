import axios from "axios"
import { Alert } from "react-native"
import { createRequestApi } from "../../../api"

export const CREATE_REQUEST="CREATE_REQUEST_START"
export const EDIT_REQUEST="EDIT_REQUEST"
export const CLEAR_REQUEST="CLEAR_REQUEST"
export const EDIT_SELECTED_ITEM="EDIT_SELECTED_ITEM"
export const CLEAR_EDITING="CLEAR_EDITING"
export const UPDATE_SELECTED_ITEM="UPDATE_SELECTED_ITEM"

export const createRequest=(data)=>{
    return async (dispatch)=>{
        try{      
            const response = await createRequestApi()
            Alert.alert("Successfull",JSON.stringify(response))
            if(response){
                dispatch({
                    type:CREATE_REQUEST,
                    data:data
                })
            }
        }catch(err){
           console.log(err)
        }
    }
}

export const updateRequest=(data)=>{
    return async (dispatch)=>{
        try{      
            const response = await createRequestApi()
            if(response){
                dispatch({
                    type:UPDATE_SELECTED_ITEM,
                    data:data
                })
            }
        }catch(err){
           console.log(err)
        }
    }
}

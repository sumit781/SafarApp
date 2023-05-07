import axios from "axios"

export const CREATE_REQUEST="CREATE_REQUEST_START"
export const EDIT_REQUEST="EDIT_REQUEST"
export const CLEAR_REQUEST="CLEAR_REQUEST"
export const EDIT_SELECTED_ITEM="EDIT_SELECTED_ITEM"
export const CLEAR_EDITING="CLEAR_EDITING"
export const UPDATE_SELECTED_ITEM="UPDATE_SELECTED_ITEM"

export const createRequest=(data)=>{
    console.log(data,'/// data')
    return (dispatch)=>{
        try{      
            const response = axios.get("https://api.npoint.io/d0fe9a5513208c354c52")
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
    return (dispatch)=>{
        try{      
            const response = axios.get("https://api.npoint.io/d0fe9a5513208c354c52")
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

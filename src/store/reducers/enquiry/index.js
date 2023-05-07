import { CLEAR_EDITING, CREATE_REQUEST, EDIT_SELECTED_ITEM, UPDATE_SELECTED_ITEM } from "../../actions/enquiry"

const initialState={
    form:{
        from:"",
        to:"",
        date:"",
        selectedFlight:null,
        note:"",
    },
    isEditing:false,
    selectedIndex:null,
    history:[]
}

export const enquiryReducer=(state = initialState,action)=>{
    switch(action.type){   
        case CREATE_REQUEST:
            let history=[...state.history]
            history.push(action.data)
             return {
            ...state,
            history:history
        }

        case EDIT_SELECTED_ITEM:{
            const {formDetail,index} =action.data
        return {
            ...state,
            selectedIndex:index,
            form:{...formDetail},
            isEditing:true
        }
        }

        case UPDATE_SELECTED_ITEM:    
            let newHistory
            if(state.history.length > 0){
                newHistory=[...state.history]
                newHistory[state.selectedIndex]=action.data
            }
        return{
            ...state,
            history:newHistory,
            form:{...initialState.form},
            isEditing:false,
            selectedIndex:initialState.selectedIndex,
        }

        case CLEAR_EDITING:
            return{
                ...state,
                selectedIndex:null,
                isEditing:false,
                form:{...initialState.form}
            }
        default: return state
    }
}
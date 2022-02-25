import { CHANGER_WATCH_LATER_STATE } from "../types/types";

interface addingBtnState{
    activity: boolean
}

const initialState: addingBtnState = {
    activity: false,
}

interface ChangeButtonState{
    type: string
}

export const addingButtonChangeReducer = (state = initialState, action:ChangeButtonState) : addingBtnState=>{
    switch(action.type){
        case CHANGER_WATCH_LATER_STATE:
            return {...state, activity: !(state.activity)} 
        default: 
            return state
    }
}
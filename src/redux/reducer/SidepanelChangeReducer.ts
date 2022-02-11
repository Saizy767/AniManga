import { CHANGER_SIDEPANEL_STATE } from "../types/types";

interface sidePanelState{
    activity: boolean
}

const initialState: sidePanelState = {
    activity: false,
}

interface ChangeSidepanelState{
    type: string
}

export const sidepanelChangeReducer = (state = initialState, action:ChangeSidepanelState) : sidePanelState=>{
    switch(action.type){
        case CHANGER_SIDEPANEL_STATE:
            return {...state, activity: !(state.activity)} 
        default: 
            return state
    }
}
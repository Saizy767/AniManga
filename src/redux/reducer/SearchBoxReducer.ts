import { CHANGER_SEARCH_REQUEST } from "../types/types";
import { ChangeSearchState } from "../action/SearchBoxAction";

export interface SearchBox{
    state: string
}

const initialState: SearchBox = {
    state: '',
}

export const searchChangeReducer = (state = initialState, action:ChangeSearchState)=>{
    switch(action.type){
        case CHANGER_SEARCH_REQUEST:
            return {...state, state: action.action} 
        default: 
            return state
    }
}
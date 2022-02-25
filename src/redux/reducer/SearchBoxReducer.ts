import { CHANGER_SEARCH_REQUEST } from "../types/types";

interface SearchBox{
    text: string
}

const initialState: SearchBox = {
    text: '',
}

interface ChangeSearchState{
    type: string,
    text: string
}

export const searchChangeReducer = (state = initialState, action:ChangeSearchState) : SearchBox=>{
    switch(action.type){
        case CHANGER_SEARCH_REQUEST:
            return {...state, text: (action.text)} 
        default: 
            return state
    }
}
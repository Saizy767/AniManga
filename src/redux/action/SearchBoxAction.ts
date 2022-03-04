import { CHANGER_SEARCH_REQUEST } from "../types/types";

export interface ChangeSearchState{
    type: string,
    action:string
}

export function searchChangerAction(name:string){
    return{
        type: CHANGER_SEARCH_REQUEST,
        action: name,
    } 
}
import { CHANGER_SEARCH_REQUEST } from "../types/types";

export function searchChangerAction(text:string){
    return{
        type: CHANGER_SEARCH_REQUEST,
        action: text,
    }
}
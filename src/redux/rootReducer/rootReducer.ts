import { sidepanelChangeReducer } from './../reducer/SidepanelChangeReducer';
import { combineReducers } from "redux";


const rootReducer = combineReducers({
    sidepanel: sidepanelChangeReducer,
})

export type rootReducerType = ReturnType<typeof rootReducer>;

export default rootReducer
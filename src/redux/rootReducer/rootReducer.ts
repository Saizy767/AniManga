import { addingButtonChangeReducer } from '../reducer/AddingBtnChangeReducer';
import { sidepanelChangeReducer } from './../reducer/SidepanelChangeReducer';
import { searchChangeReducer } from '../reducer/SearchBoxReducer';
import { combineReducers } from "redux";


const rootReducer = combineReducers({
    sidepanel: sidepanelChangeReducer,
    watch_later_btn: addingButtonChangeReducer,
    search_box: searchChangeReducer,
})

export type rootReducerType = ReturnType<typeof rootReducer>;

export default rootReducer
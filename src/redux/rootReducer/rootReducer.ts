import { guideButtonSlice } from './../reducer/sidepanelGuideButton';
import { combineReducers } from "redux";
import { configureStore } from '@reduxjs/toolkit';
import { searchSlice } from '../reducer/searchBoxSlice';
import { scrollUpdatedSlice } from '../reducer/updatedButtonSlice';
import { scrollRecentlySlice } from '../reducer/recentlyButtonSlice';

const rootReducer = combineReducers({
    giudeButton: guideButtonSlice.reducer,
    searchInput: searchSlice.reducer,
    scrollUpdatedCarousel: scrollUpdatedSlice.reducer,
    scrollRecentlyCarousel: scrollRecentlySlice.reducer
})

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer
    })
}

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']

export default rootReducer
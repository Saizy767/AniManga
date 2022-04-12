import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface transformSrcoll{
    numberRecently: number
}

const initialState: transformSrcoll ={
    numberRecently: 0
}

export const scrollRecentlySlice = createSlice({
    name: 'changeRecentlyScroll',
    initialState,
    reducers:{
        changeRecentlyScroll: (state, action: PayloadAction<number>) => {
            state.numberRecently += action.payload
        }
    }
})

export const {changeRecentlyScroll} = scrollRecentlySlice.actions
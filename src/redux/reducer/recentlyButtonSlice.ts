import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface transformSrcoll{
    numberRecently: number,
    weigthRecently: number,
}

const initialState: transformSrcoll ={
    numberRecently: 0,
    weigthRecently: 190
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
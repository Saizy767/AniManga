import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface transformSrcoll{
    numberUpdated: number,
    weigthUpdated: number,
}

const initialState: transformSrcoll ={
    numberUpdated: 0,
    weigthUpdated: 190
}

export const scrollUpdatedSlice = createSlice({
    name: 'scrollUpdatedSlice',
    initialState,
    reducers:{
        changeUpdatedScroll: (state, action: PayloadAction<number>) => {
            state.numberUpdated += action.payload
        }
    }
})

export const {changeUpdatedScroll} = scrollUpdatedSlice.actions
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface transformSrcoll{
    numberUpdated: number
}

const initialState: transformSrcoll ={
    numberUpdated: 0
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
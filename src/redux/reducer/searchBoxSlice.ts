import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface input{
    text: string
}

const initialState: input ={
    text: ''
}

export const searchSlice = createSlice({
    name: 'searchInput',
    initialState,
    reducers:{
        changeInput: (state, action: PayloadAction<string>) => {
            state.text = action.payload
        }
    }
})

export const {changeInput} = searchSlice.actions
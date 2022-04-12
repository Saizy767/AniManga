import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface transformSrcoll{
    numberCharacter: number,
    weigthCharacter: number,
}

const initialState: transformSrcoll ={
    numberCharacter: 0,
    weigthCharacter: 208
}

export const scrollCharacterSlice = createSlice({
    name: 'changeCharacterScroll',
    initialState,
    reducers:{
        changeCharacterScroll: (state, action: PayloadAction<number>) => {
            state.numberCharacter += action.payload
        }
    }
})

export const {changeCharacterScroll} = scrollCharacterSlice.actions
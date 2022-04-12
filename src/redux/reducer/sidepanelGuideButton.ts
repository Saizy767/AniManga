import { AnyAction, createSlice} from "@reduxjs/toolkit";

interface tap{
    sidepanel: boolean
}

const initialState: tap ={
    sidepanel: false
}

export const guideButtonSlice = createSlice({
    name: 'sidepanelButton',
    initialState,
    reducers:{
        changeGuideButton: (state, action: AnyAction) => {
            state.sidepanel = !state.sidepanel
        }
    }
})

export const {changeGuideButton} = guideButtonSlice.actions
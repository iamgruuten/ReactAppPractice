import { createSlice } from '@reduxjs/toolkit'
import { apiCallBegan } from "../api"

const slice = createSlice({
    name: 'buttonOnOff',
    initialState:{
        toggler: true
    },
    reducers: {
        btnToggle: (state, action) => {
            state.toggler = !state.toggler;
        }
    }
})

export const { btnToggle } = slice.actions;
export default slice.reducer;

export const toggleButton = () => apiCallBegan({})
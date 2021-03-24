import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    items: []
}

const users = createSlice({
    name: "sliceUser",
    initialState: {items: []},
    reducers: {
        getUser: (state, action) => {
            console.log("Get", "Getting users from state")
            console.log(state.items)
        },
        getUserSuccess: (state, action) => {
            return {
                ...state,
                items: action.payload.items
            }        
        }
    }
});

export const { getUser, getUserSuccess} = users.actions
export default users.reducer
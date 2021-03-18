import { createSlice } from '@reduxjs/toolkit'

let lastid = 0;

const projectsReducer = createSlice({
    name: "projects",
    initialState: [],
    reducers: {
        projectAdded: (state, action) => {
            state.push({
                id: lastid++,
                name: action.payload.name,
            });
        }
    }
})

export const { projectAdded } = projectsReducer.actions; 
export default projectsReducer.reducer;
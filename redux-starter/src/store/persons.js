import { createSlice } from "@reduxjs/toolkit"
import {createSelector} from 'reselect'

let lastid = 0;

//Slice to add a person
const slice = createSlice(
    {
        name: "person",
        initialState:[],
        reducers: {
            //Adding the actions within reducer
            addPerson: (state, action) =>{
                state.push({
                    personID: lastid++,
                    name: action.payload.name,
                });
            }
        }
    }
)

export const { addPerson } = slice.actions;
export default slice.reducer; 

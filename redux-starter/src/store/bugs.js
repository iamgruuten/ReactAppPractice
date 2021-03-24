import { createSlice } from '@reduxjs/toolkit'
import { createSelector } from 'reselect'
import { fromPairs, initial } from 'lodash';
import { apiCallBegan } from './api'
import moment from 'moment'

const bugsReducer = createSlice({
    name: 'bugs',
    initialState: {
        list: [],
        loading: false,
        lastFetch: null
    },
    reducers: {
        // bugs / bugsFailedToReq
        bugsRequestFailed: (state, action) => {
            state.loading = false;
        },
        // bugs / bugsRequested
         bugsRequested: (state, action) =>{
            state.loading = true;
         },
        // bugs / bugsReceived
        bugsReceived: (state, action) => {
            state.list = action.payload;
            state.lastFetch = Date.now();
            state.loading = false;
        },

        //addBug - BugAdded
        bugAdded: (state, action) => {
            state.list.push(action.payload);
        },

        // resolveBug (command) - bugResolved(event)
        bugResolved: (state, action) => {
            const index = state.list.findIndex(bug => bug.id === action.payload.id)
            state.list[index].resolved = true;
        },
        bugRemoved: (state, action) => {
            return state.list.filter(bugs => bugs.id !== action.payload.id)
        },
        bugAssignedToUser: (bugs, action) => {
            const { id: bugID, userID } = action.payload;
            const index = bugs.list.findIndex(bug => bug.id === bugID);
            bugs.list[index].userId = userID;
        }
    }
});

export const { bugAdded, bugRemoved, bugResolved, bugAssignedToUser, bugsReceived, bugsRequested, bugsRequestFailed } = bugsReducer.actions;
export default bugsReducer.reducer;


//Action Creators
const url = "/bugs";

export const loadBugs = () => (dispatch, getState) => {
    
    const { lastFetch } = getState().entities.bugs;
    const diffInTime = moment().diff(moment(lastFetch), 'minutes');
    console.log(diffInTime)
    if(diffInTime < 10){
        return;
    }

    return dispatch(   
        apiCallBegan({
        url,
        onStart: bugsRequested.type,
        onSuccess: bugsReceived.type,
        onError: bugsRequestFailed.type
    }))
};

export const addBug = bug => apiCallBegan({
    url,
    method: "post",
    data: bug,
    onSuccess: bugAdded.type
})

export const resolveBug = id => apiCallBegan({
    // /bugs
    url: url + '/' + id,
    method: 'patch',
    data: { resolved: true },
    onSuccess: bugResolved.type
})

export const assignBugToUser = (bugID, userID) => apiCallBegan({
    url: url + '/' + bugID,
    method: 'patch',
    data: { userID },
    onSuccess: bugAssignedToUser.type
})

//Selector
export const getUnresolvedBugsSelector = state =>
    state.entities.bugs.filter(bug => !bug.resolved)

// Memoization
// bugs => get unresolved bugs from cache
export const getUnresolvedBugs = createSelector(
    state => state.entities.bugs,
    state => state.entities.projects,

    //If bugs and projects remain unchanged, the selector will not be recalculated
    (bugs, projects) => bugs.filter(bug => !bug.resolved)
)

// bugs => get user with bugs the bugs id
export const getAssignedBugs = (id) => createSelector(
    state => state.entities.bugs,
    bugs => bugs.filter(bug => bug.personID === id)
)
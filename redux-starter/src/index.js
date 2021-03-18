import configureStore from './store/configureStore'
import * as bugsReducer from './store/bugs'
import * as projectsReducer from './store/projects'
import * as personReducer from './store/persons'
import * as actions from "./store/api"
import {loadBugs, resolveBug, assignBugToUser} from "./store/bugs"

const store = configureStore();

// UI Layer
store.dispatch(loadBugs());

setTimeout(() => store.dispatch(assignBugToUser(1,1111)), 2000)

store.dispatch({
    type: "error",
    payload: { message: "An error occured"}
})


store.subscribe(() => {
    console.log("Store changed!");
})

// store.dispatch(bugsReducer.bugAdded({description: "Bug 1"}))
// store.dispatch(bugsReducer.bugAdded({description: "Bug 2"}))
// store.dispatch(bugsReducer.bugAdded({description: "Bug 3"}))

// store.dispatch(bugsReducer.bugResolved({ id : 1, isResolved: true}))

// store.dispatch(projectsReducer.projectAdded({name: "Project 1"}))
// store.dispatch(personReducer.addPerson({name: "Lee Quan Sheng"}))
// store.dispatch(bugsReducer.bugAssignedToUser({personID: 0, bugID: 1}))


// const unResolvedBugs = bugsReducer.getUnresolvedBugs(store.getState());
// const getAssignedBugs = bugsReducer.getAssignedBugs(0)(store.getState());

// console.log(store.getState())
// console.log(unResolvedBugs)
// console.log(getAssignedBugs)
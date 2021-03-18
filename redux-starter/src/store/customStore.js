import reducer from './reducer'

function createStore(reducer){
    let state; //Store internal state of the store
    let listeners = [];

    function subscribe(listener){
        listeners.push(listener)
    }

    function dispatch(action){
        //Call the reducer to get the new state
        state = reducer(state, action);
        for (let index = 0; index < listeners.length; index++) {
            listeners[index]();            
        }
    }

    function getState(){
        return state;
    }
    
    return{
        getState,
        dispatch,
        subscribe
    };
}

export default createStore(reducer);
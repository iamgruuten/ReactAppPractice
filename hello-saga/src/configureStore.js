import createSagaMiddleware from 'redux-saga'
import reducer from './reducers'
import rootSaga from './sagas'
import {configureStore, getDefaultMiddleware} from '@reduxjs/toolkit';

const store = () => {

    //create saga middleware
    const sagaMiddleware = createSagaMiddleware()

    //mouting it to the store
    const configStore = configureStore({
      reducer: reducer,
      middleware: [...getDefaultMiddleware(),  sagaMiddleware],
    });

    sagaMiddleware.run(rootSaga);
    console.log("Saga Middleware is running")

    return configStore;
  };
  
  

export default store
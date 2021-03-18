import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import reducer from './reducer'
import buttonOnOff from './middleware/button'

export default function (){
    return configureStore({ 
        reducer,
        middleware: [
            ...getDefaultMiddleware(),
            buttonOnOff
        ]
    });
};


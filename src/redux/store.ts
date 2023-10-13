import {configureStore} from "@reduxjs/toolkit";
import userReducer from "./slides/userSilde"
export const store  = configureStore({
    reducer:  { 
        user : userReducer,
     }
})

export type RootState = ReturnType<typeof store.getState>
export type Appdispatch = ReturnType<typeof store.dispatch>
import {combineReducers, configureStore} from "@reduxjs/toolkit";
import carSlice from "./reducers/carSlice";

const rootReducer = combineReducers({
    chosenCar : carSlice
})

const store = configureStore({
    reducer: rootReducer
    }
);


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store;
import {createSlice, PayloadAction} from "@reduxjs/toolkit";

interface ICarState {
    car: string
}

const initialState: ICarState = {
    car: "BMW"
}

const carSlice = createSlice({
        name: "carSlice",
        initialState,
        reducers: {
            setCar: (state, action: PayloadAction<string>) => {
            state.car = action.payload;
            }
        }
    }
)

export default carSlice.reducer;
export const carSliceActions = carSlice.actions;
import {createSlice} from "@reduxjs/toolkit";
import {bmwTheme, mercedesTheme} from "../../styles/theme";

const initialState = {
    car: bmwTheme,
}



const carSlice = createSlice({
        name: "carSlice",
        initialState,
        reducers: {
            setCar: (state) => {
          state.car = state.car.type == bmwTheme.type ? mercedesTheme : bmwTheme;
            }
        }
    }
)

export default carSlice.reducer;
export const carSliceActions = carSlice.actions;
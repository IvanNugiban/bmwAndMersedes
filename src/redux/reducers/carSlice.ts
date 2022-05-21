import {createSlice} from "@reduxjs/toolkit";
import {bmwTheme, mercedesTheme} from "../../styles/theme";
import {ITheme} from "../../styles/styleInterfaces/ITheme";

const initialState = {
    car: bmwTheme,
}

function deepEqual(obj1 : ITheme,obj2 : ITheme)  {
    return JSON.stringify(obj1)===JSON.stringify(obj2);
}

const carSlice = createSlice({
        name: "carSlice",
        initialState,
        reducers: {
            setCar: (state) => {
          state.car = deepEqual(state.car, bmwTheme) ? mercedesTheme : bmwTheme;
            }
        }
    }
)

export default carSlice.reducer;
export const carSliceActions = carSlice.actions;
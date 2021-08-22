import { configureStore } from "@reduxjs/toolkit";
import {weatherSlice} from "../actions/weatherSlices"


export const store= configureStore({
    reducer:weatherSlice.reducer,
});

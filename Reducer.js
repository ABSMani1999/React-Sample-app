import { configureStore, createSlice } from "@reduxjs/toolkit";
import Buses from './Busdetails.json';

const Initial = createSlice({
    name : "buses",
    initialState : {Buses},
    reducers : {
    }
});

export const Store = configureStore({
    reducer : {
        BusesDetail : Initial.reducer
    }
})
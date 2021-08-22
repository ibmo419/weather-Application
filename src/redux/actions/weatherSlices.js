import { createAsyncThunk , createSlice } from "@reduxjs/toolkit";
import axios from "axios";
export const fechWeatherAction=createAsyncThunk(
    'weather/fetch',
    async (payload,{rejectWithValue})=>{
    try{
      const {data}=await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${payload}&appid=1e1fbc76935fabdffefb9a3606c7e6d8`);
      return data;
    } 
    catch(error){
        if(!error?.response){
            throw error;
        }
        return rejectWithValue(error?.response?.data);
    }
    }
);

export const weatherSlice=createSlice({
    name:"weather",
    initialState:{},
    extraReducers:builder=>{
        //pending
        builder.addCase(fechWeatherAction.pending,(state,action)=>{
            state.loading=true;
        });
        //fulfilled
        builder.addCase(fechWeatherAction.fulfilled,(state,action)=>{
            state.weather=action?.payload;
            state.loading=false;
            state.error=undefined;
        });
        //rejected
        builder.addCase(fechWeatherAction.rejected,(state,action)=>{
            state.weather=undefined;
            state.loading=false;
            state.error=action?.payload;
        });
    }
})

import { createSlice } from "@reduxjs/toolkit";

export const apiSlice = createSlice({
    name: 'apiSlice',
    initialState:{
        recipeData : null,
        searchData : null
    },
    reducers:{
        addApi:(state,action)=>{
            state.recipeData = action.payload
        },
        searchApi:(state,action)=>{
            state.searchData = action.payload
        }
    }
})
export const {addApi , searchApi} = apiSlice.actions;
export default apiSlice.reducer;

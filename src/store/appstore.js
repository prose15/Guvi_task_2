import { configureStore } from '@reduxjs/toolkit'
import apiSliceReducer from './apiSlice'

export const store = configureStore({
    reducer:{
        createApi : apiSliceReducer
    },
})
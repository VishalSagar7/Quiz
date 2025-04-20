import { configureStore } from '@reduxjs/toolkit'
import answerSlice from './answerSlice.js'

export const store = configureStore({
    reducer: {
        answerSlice: answerSlice
    }
})
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    list: [], 
};

const answersSlice = createSlice({
    name: 'answers',
    initialState,
    reducers: {
        addAnswer: (state, action) => {
            state.list.push(action.payload);
        },
        removeAnswer: (state, action) => {
            state.list = state.list.filter((_, index) => index !== action.payload);
        },
        clearAnswers: (state) => {
            state.list = [];
        },
    },
});

export const { addAnswer, removeAnswer, clearAnswers } = answersSlice.actions;

export default answersSlice.reducer;

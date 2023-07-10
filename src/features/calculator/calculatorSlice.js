import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    currentOperand: "",
    operation: "",
    previousOperand: ""
}

const {actions, reducer} = createSlice({
    name: "calculator",
    initialState,
    reducers: {
        addDigit: (state, {type, payload})=>{
            state.currentOperand = `${state.currentOperand}${payload}`
        },
    }
});

export const calculatorActions = actions;
export const calculatorReducer = reducer;
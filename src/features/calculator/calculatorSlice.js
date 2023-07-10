import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    currentOperand: "",
    operation: "",
    previousOperand: "",
    overwrite: false,
}

const evaluate = ({currentOperand, operation, previousOperand}) => {
    const prev = parseFloat(previousOperand);
    const current = parseFloat(currentOperand);
    if((isNaN(prev) || isNaN(current)) && operation === "") {
        return ""
    }
    
    let result = "";
    switch(operation){
        case "+":
            result = prev + current; break;
        case "*":
            result = prev * current; break;
        case "÷":
            result = prev / current; break;
        case "-":
            result = prev - current; break;
    }
    return result;
}

const {actions, reducer} = createSlice({
    name: "calculator",
    initialState,
    reducers: {
        addDigit: (state, { payload})=>{
            if((payload==="0" && state.currentOperand==="0") || (payload === "." && state.currentOperand.includes(".")))
                return state;
            else if(state.overwrite){
                state.currentOperand = payload;
                state.overwrite = false;
            }
            else
            state.currentOperand = `${state.currentOperand}${payload}`;
        },

        clear: ()=>initialState,

        deleteDigit: (state)=>{

            //if overwrite, then clear current operand
            if(state.overwrite){
                state.overwrite = false;
                state.currentOperand = "";
            }
            else
                state.currentOperand = state.currentOperand.slice(0, -1)
        },

        chooseOperator: (state, {payload})=>{

            //add operator, if it is not already present 
            if(state.currentOperand !== "" && state.previousOperand === ""){
                state.operation = payload
                state.previousOperand = state.currentOperand
                state.currentOperand = ""
            }

            //replace existing operator
            else if(state.operation && state.currentOperand === "")
                state.operation = payload

            // //if previous operand and current operand doesnt exist, reset to initial state
            else if(state.previousOperand === "" && state.currentOperand === "")
                state = initialState;
               

            //if previous operand, current operand exists, display result 
            else if(state.previousOperand !== "" && state.currentOperand !== ""){
                state.previousOperand = evaluate(state)
                state.operation = payload
                state.currentOperand = ""
            }

        },
        evaluate: (state) =>{

            //if current operand and previous operand exists, display result
            if((state.previousOperand || state.previousOperand === 0) && (state.currentOperand || state.currentOperand === 0)){
                state.currentOperand = evaluate(state);
                state.operation = ""
                state.previousOperand = ""
                state.overwrite = true;
            }

            // if current operand is empty but previous operand is not, display previous operand as result
            else if(state.currentOperand === "" && (state.previousOperand===0 || state.previousOperand)){
                state.currentOperand = state.previousOperand;
                state.overwrite = true;
                state.previousOperand = ""
                state.operation = ""
            }
        }
    },
    extraReducers: (builder) => {
        // Default action
        builder.addDefaultCase( 
          (state, {payload}) => {
            // Handle the default action here
            state.previousOperand = evaluate(state)
            state.operation = payload
            state.currentOperand = ""
          }
        );
      }
});

export const calculatorActions = actions;
export const calculatorReducer = reducer;
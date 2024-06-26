import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface ICounter {
    count: number
}

const initialState:ICounter = {count:0}

export const counterSlice = createSlice({
    name:'counter',
    initialState,
    reducers:{
        incrementByValue:(state,actions:PayloadAction<number>)=>{
            state.count = state.count + actions.payload
        },
        increment:(state)=>{
            state.count = state.count + 1
        },
        decrement:(state)=>{
            state.count = state.count - 1
        },
        decrementByValue:(state,actions:PayloadAction<number>)=>{
            state.count = state.count - actions.payload
        },
    },
})


export const  {increment,decrement,incrementByValue,decrementByValue} = counterSlice.actions

export default counterSlice.reducer
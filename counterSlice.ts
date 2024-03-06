//Ducks Pattern//

import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CounterState{
    value: number;
}

const initialState: CounterState = {
    value : 0,
};

const CounterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers:{
        //increment
        incremented(state){
            //its ok to do this bcoz immer makes it immutable
            //under the hood.
            state.value++;
            },
        amountAdded(state,action:PayloadAction<number>){
            state.value += action.payload;
        }
        }
        //decrement
        //reset
    });

export const { incremented,amountAdded } = CounterSlice.actions;
export default CounterSlice.reducer;
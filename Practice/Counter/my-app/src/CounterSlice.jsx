import {createSlice} from '@reduxjs/toolkit'


export const Counterslice = createSlice({
    name: 'Counter',
    initialState: {value: 0},
    reducers: {
        increment:(state)=>{
            state.value +=1
        },

        decrement: (state)=> {
            state.value -=1
        },
    },
});
export const{ increment, decrement} = Counterslice.actions;
export default Counterslice.reducer
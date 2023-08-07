import {createSlice} from '@reduxjs/toolkit';

const cartSlice= createSlice({
    name:'cart',
    initialState:[],
    reducers:{
        add(state,action){
            //redux return[...state ,action.payload];
            //but due to createslice method we can direclty push
            state.push(action.payload);
        },
        remove(state ,action){
            return state.filter(item=>item.id!==action.payload);
        },
    },
});
export const {add,remove} =cartSlice.actions;//create slice create actions and reducers for ourslef
export default cartSlice.reducer;
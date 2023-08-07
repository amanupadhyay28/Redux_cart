import {createSlice,createAsyncThunk} from '@reduxjs/toolkit';
export const STATUSES=Object.freeze(
    {
        IDLE:'idle',
        ERROR:'error',
        LOADING:'loading',
    }
);
const productSlice= createSlice({
    name:'product',
    initialState:{
        data:[],
        status:STATUSES.IDLE,
    },
    reducers:{
        // setProducts(state,action){
        //    //const res=await fetch('https://fakestoreapi.com/products/');
        //    //do not ever call this type of api calls in reducers as reducers cant call any type of sync
        //    //call hote h and they are pure functions
        //     state.data=action.payload;
        // },
        // remove(state ,action){
        //     return state.filter(item=>item.id!==action.payload);
        // },
        // setStatus(state, action){ 
        //     state.status=action.payload;
        
        // } 
    },
    extraReducers:(builder)=>{
     builder.addCase(fetchProducts.pending,(state,action)=>{    //pending is a action type
         state.status=STATUSES.LOADING;
     } )  
        .addCase(fetchProducts.fulfilled,(state,action)=>{    //pending is a action type             

            state.data=action.payload;
            state.status=STATUSES.IDLE;
        } )
        .addCase(fetchProducts.rejected,(state,action)=>{    //pending is a action type  
            state.status=STATUSES.ERROR;
        } );
    },
});
export const {setProducts, setStatus} =productSlice.actions;//create slice create actions and reducers for ourslef
export default productSlice.reducer;

//THUNKS-->it is already confiure in react tool kit earlir version of redux we have to configure it manually
//thunk is a function jiske andr se ek functuon hum return krte h
// export function fetchProducts(){
// return async function fetchProductThunk(dispatch,getState){
//     dispatch(setStatus(STATUSES.LOADING));
//     try{
//         const res=await fetch('https://fakestoreapi.com/products/');
//         const data=await res.json();
//         dispatch(setProducts(data));
//         dispatch(setStatus(STATUSES.IDLE));
//     }catch(err){
//         console.log(err);
//         dispatch(setStatus(STATUSES.ERROR));

//     }
    
// }
// }

//thunk another method to write
//createAsyncThunk is a function which takes two arguments
//1)name of thunk--identifies the thunk
//2)function which returns a promise--aync function
export const fetchProducts=createAsyncThunk('product/fetchProducts',async()=>{  //product is the name of slice
    const res=await fetch('https://fakestoreapi.com/products/');
    const data=await res.json();
    return data;
} );
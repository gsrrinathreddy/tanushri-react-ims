import {createSlice} from '@reduxjs/toolkit';
const initialState={
    noOfCakes:25,
   noOfOrderedcakes:0,
//    
}
const cakeSlice=createSlice({
    name:'cake',
    initialState,
    reducers:{
         ordered:(state,action)=>{
             state.noOfCakes=state.noOfCakes-action.payload
             state.noOfOrderedcakes=state.noOfOrderedcakes+parseInt(action.payload)

           
         },
         restock: (state,action)=>{
            state.noOfCakes+=action.payload
         }
    }
})
export default cakeSlice.reducer;
export const {ordered,restock}=cakeSlice.actions;
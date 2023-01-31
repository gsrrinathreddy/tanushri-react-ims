import {createSlice} from '@reduxjs/toolkit';
const initialState={
    noOfCakes:25,
   noOfOrderedcakes:0,
 cakeList:{
    qty:0,
    title:null,
    actualPrice:null,
    discountedPrice:null
 }
}
const cakeSlice=createSlice({
    name:'cake',
    initialState,
    reducers:{
         ordered:(state,action)=>{
             state.noOfCakes=state.noOfCakes-action.payload.qty
             state.noOfOrderedcakes=state.noOfOrderedcakes+parseInt(action.payload.qty)
               

             state.cakeList.actualPrice=action.payload.actualPrice;
             state.cakeList.discountedPrice=action.payload.discountedPrice;
             state.cakeList.title=action.payload.title;
             state.cakeList.qty=action.payload.qty;
            
         },
         restock: (state,action)=>{
            state.noOfCakes+=action.payload
         }
    }
})
export default cakeSlice.reducer;
export const {ordered,restock}=cakeSlice.actions;
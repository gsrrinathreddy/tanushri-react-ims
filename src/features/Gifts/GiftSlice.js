import  {createSlice}  from "@reduxjs/toolkit"
const initialState={
  noOfGifts:20,
  noOfOrderedgifts:0,
  giftList:{
    qty:0,
    title:null,
    actualPrice:null,
    discountedPrice:null
 }
}
const GiftSlice=createSlice({
    name:'gift',
    initialState,
    reducers:{
        ordered:(state,action)=>{
           
            state.noOfGifts=state.noOfGifts-action.payload.qty;
          state.noOfOrderedgifts+=parseInt(action.payload.qty);
            
          state.giftList.actualPrice=action.payload.actualPrice;
          state.giftList.discountedPrice=action.payload.discountedPrice;
          state.giftList.title=action.payload.title;
          state.giftList.qty=action.payload.qty;

        },
        restock:(state,action)=>{
            state.noOfGifts=state.noOfGifts+action.payload
        }

    }
   
})
export default GiftSlice.reducer;
export const {ordered,restock} = GiftSlice.actions;
import  {createSlice}  from "@reduxjs/toolkit"
const initialState={
    noOfGifts:20,
  noOfOrderedgifts:0
}
const GiftSlice=createSlice({
    name:'gift',
    initialState,
    reducers:{
        ordered:(state,action)=>{
           
            state.noOfGifts=state.noOfGifts-action.payload;
          state.noOfOrderedgifts+=parseInt(action.payload);
            
        },
        restock:(state,action)=>{
            state.noOfGifts=state.noOfGifts+action.payload
        }

    }
   
})
export default GiftSlice.reducer;
export const {ordered,restock} = GiftSlice.actions;
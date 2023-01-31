import  {createSlice}  from "@reduxjs/toolkit"
const initialState={
    noOfFlowers:20,
  noOfOrderedflowers:0,
    flowerList:{
    qty:0,
    title:null,
    actualPrice:null,
    discountedPrice:null
 }
}
const FlowerSlice=createSlice({
    name:'flower',
    initialState,
    reducers:{
        ordered:(state,action)=>{
           
            state.noOfFlowers=state.noOfFlowers-action.payload.qty;
          state.noOfOrderedflowers+=parseInt(action.payload.qty);
            

          state.flowerList.actualPrice=action.payload.actualPrice;
          state.flowerList.discountedPrice=action.payload.discountedPrice;
          state.flowerList.title=action.payload.title;
          state.flowerList.qty=action.payload.qty;
        },
        restock:(state,action)=>{
            state.noOfFlowers=state.noOfFlowers+action.payload
        }

    }
   
})
export default FlowerSlice.reducer;
export const {ordered,restock} = FlowerSlice.actions;
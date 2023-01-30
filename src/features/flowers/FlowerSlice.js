import  {createSlice}  from "@reduxjs/toolkit"
const initialState={
    noOfFlowers:20,
  noOfOrderedflowers:0
}
const FlowerSlice=createSlice({
    name:'flower',
    initialState,
    reducers:{
        ordered:(state,action)=>{
           
            state.noOfFlowers=state.noOfFlowers-action.payload;
          state.noOfOrderedflowers+=parseInt(action.payload);
            
        },
        restock:(state,action)=>{
            state.noOfFlowers=state.noOfFlowers+action.payload
        }

    }
   
})
export default FlowerSlice.reducer;
export const {ordered,restock} = FlowerSlice.actions;
import  {createSlice}  from "@reduxjs/toolkit"
const initialState={
    noOfIcecreams:20,
  noOfOrderedicecreams:0,
  icecreamList:{
    qty:0,
    title:null,
    actualPrice:null,
    discountedPrice:null
 }
}
const IceCreamSlice=createSlice({
    name:'icecream',
    initialState,
    reducers:{
        ordered:(state,action)=>{
            
            state.noOfIcecreams=state.noOfIcecreams-action.payload.qty;
          state.noOfOrderedicecreams=state.noOfOrderedicecreams+action.payload.qty;
            
          state.icecreamList.actualPrice=action.payload.actualPrice;
          state.icecreamList.discountedPrice=action.payload.discountedPrice;
          state.icecreamList.title=action.payload.title;
          state.icecreamList.qty=action.payload.qty;


        },
        restock:(state,action)=>{
            state.noOfIcecreams=state.noOfIcecreams+action.payload
        }

    },
    extraReducers:{
         ['cake/ordered']:(state,action)=>{
            if(action.payload>=2){
                state.noOfIcecreams--;
                state.noOfOrderedicecreams++;
            }
         
         }
    }
})
export default IceCreamSlice.reducer;
export const {ordered,restock} = IceCreamSlice.actions;
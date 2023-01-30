import  {createSlice}  from "@reduxjs/toolkit"
const initialState={
    noOfIcecreams:20,
  noOfOrderedicecreams:0
}
const IceCreamSlice=createSlice({
    name:'icecream',
    initialState,
    reducers:{
        ordered:(state,action)=>{
            if(action.payload>state.noOfIcecreams){
                console.log("out of stock")
            }
            else{
            state.noOfIcecreams=state.noOfIcecreams-action.payload;
          state.noOfOrderedicecreams=state.noOfOrderedicecreams+action.payload;
            } 
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
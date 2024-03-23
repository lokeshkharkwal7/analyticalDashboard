import { createSlice } from "@reduxjs/toolkit";

let inputs = {
    labels : "",
    continous : "",
    loading : false
};
export const navInput = createSlice({
  name: "INPUTDATA",
  initialState: inputs,
  reducers: {
    addInputLabels(state, action) {
         state.labels = action.payload;
    },
    addInputContinious(state, action) {
         state.continous = action.payload;
    }
     
 
     
  },
});

// exporting all reducers
export const NavInputReducer = navInput.reducer;

// exporting all actions to be used in the components
export const { addInputLabels, addInputContinious } = navInput.actions;





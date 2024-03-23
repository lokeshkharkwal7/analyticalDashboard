import { createSlice } from "@reduxjs/toolkit";
const blackCofferData = {
  data: [],
  loading: true,
};
const fetchData = createSlice({
  name: "FETCHDATASLICER",
  initialState: blackCofferData,
  reducers: {
    fetchDataStart: (state, action) => {
      state.loading = true;
      state.data = [];
    },

    fetchDataComplete: (state, action) => {
       state.data.push(action.payload)
      state.loading = false;
    },
    removefetchData : (state , action)=>{
        state.data = []
    }
  },
});

export const fetchDataReducer = fetchData.reducer;
export const { fetchDataComplete, fetchDataStart, removefetchData } = fetchData.actions;

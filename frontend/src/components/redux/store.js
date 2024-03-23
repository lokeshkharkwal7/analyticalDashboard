import { configureStore, createSerializableStateInvariantMiddleware } from "@reduxjs/toolkit";
import { NavInputReducer } from "./slicers/inputslicer";
import { fetchDataReducer } from "./slicers/fetchDataSlicer";
import { filterInputSidebarReducer } from "./slicers/filterSlicer";
 
export const store = configureStore(
  {
  reducer:  // all the reducer are
  {
    INPUTDATA : NavInputReducer ,   
    FETCHDATASLICER : fetchDataReducer,
    FILTERINPUTSLICER: filterInputSidebarReducer
    // Here the imported slicerFetchProduct is the actual slicer while the 
    // fetchProdcutSlicerName which is the key is the name that we passed to the acutal slicer
  }  
}
)

 

  
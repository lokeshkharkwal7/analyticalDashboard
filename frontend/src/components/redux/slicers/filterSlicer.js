import { createSlice } from "@reduxjs/toolkit";

let inputs = {
 
  topic: {
    filter: "",
    name: "",
  },
  sector: {
    filter: "",
    name: "",
  },
  end_year: {
    filter: "",
    name: "",
  },
  region: {
    filter: "",
    name: "",
  },
  pestle: {
    filter: "",
    name: "",
  },
  source: {
    filter: "",
    name: "",
  },
  country: {
    filter: "",
    name: "",
  },
 
};
export const filterInputSidebar = createSlice({
  name: "FILTERINPUTSLICER",
  initialState: inputs,
  reducers: {
    addFilterTopics(state, action) {
      return {
        ...state,
        topic: {
          name: action.payload,
          filter: "topic",
        },
      };
    },
    addFilterSector(state, action) {
      return {
        ...state,
        sector: {
          name: action.payload,
          filter: "sector",
        },
      };
    },

    addFilterEndyear(state, action) {
      return {
        ...state,
        end_year: {
          name: action.payload,
          filter: "end_year",
        },
      };
    },

    addFilterRegion(state, action) {
      return {
        ...state,
        region: {
          name: action.payload,
          filter: "region",
        },
      };
    },

    addFilterPestle(state, action) {
      return {
        ...state,
        pestle: {
          name: action.payload,
          filter: "pestle",
        },
      };
    },

    addFilterSource(state, action) {
      return {
        ...state,
        source: {
          name: action.payload,
          filter: "source",
        },
      };
    },

    addFilterCountry(state, action) {
      return {
        ...state,
        country: {
          name: action.payload,
          filter: "country",
        },
      };
    },
  },
});

// exporting all reducers
export const filterInputSidebarReducer = filterInputSidebar.reducer;

// exporting all actions to be used in the components
export const {
  addFilterTopics,
  addFilterSector,
  addFilterEndyear,
  addFilterRegion,
  addFilterPestle,
  addFilterSource, addFilterCountry
} = filterInputSidebar.actions;

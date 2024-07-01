import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "GPTSlice",
  initialState: { showGPTSearch: false },
  reducers: {
    toggleGPTSearchView: (state) => {
      state.showGPTSearch = !state.showGPTSearch;
    },
  },
});

export const { toggleGPTSearchView } = gptSlice.actions;

export default gptSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  search: "",
  state: "idle",
};

const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    searchValue: (state, action) => {
      state.search = action.payload
    },
  },
});

export const { searchValue } = searchSlice.actions;
export default searchSlice.reducer;

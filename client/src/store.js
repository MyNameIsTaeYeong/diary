import { configureStore, createSlice } from "@reduxjs/toolkit";

const records = createSlice({
  name: "recordsReducer",
  initialState: [],
  reducers: {
    add: (state, action) => {
      state.push(action.payload);
    },
  },
});

export const { add } = records.actions;

export default configureStore({ reducer: records.reducer });

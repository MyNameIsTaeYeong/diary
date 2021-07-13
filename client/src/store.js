import { configureStore, createSlice } from "@reduxjs/toolkit";

const user = createSlice({
  name: "userReducer",
  initialState: {
    _id: "",
    email: "",
    records: [],
  },
  reducers: {
    addId: (state, action) => {
      state._id = action.payload;
    },
    addEmail: (state, action) => {
      state.email = action.payload;
    },
    addRecord: (state, action) => {
      state.records.push(action.payload);
    },
  },
});

export const { addId, addEmail, addRecord } = user.actions;

export default configureStore({ reducer: user.reducer });

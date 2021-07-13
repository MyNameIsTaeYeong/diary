import { configureStore, createSlice } from "@reduxjs/toolkit";

const user = createSlice({
  name: "userReducer",
  initialState: {
    _id: "",
    email: "",
    currentDate: "",
    records: [],
  },
  reducers: {
    addId: (state, action) => {
      state._id = action.payload;
    },
    addEmail: (state, action) => {
      state.email = action.payload;
    },
    addCurrentDate: (state, action) => {
      state.currentDate = action.payload;
    },
    addRecord: (state, action) => {
      state.records.push(action.payload);
    },
    updateRecord: (state, action) => {
      state.records = action.payload;
    },
  },
});

export const { addId, addEmail, addCurrentDate, addRecord, updateRecord } =
  user.actions;

export default configureStore({ reducer: user.reducer });

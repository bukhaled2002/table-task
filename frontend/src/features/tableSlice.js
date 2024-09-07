import { createSlice } from "@reduxjs/toolkit";

const initialState = { table: {}, editedElements: {} };
const tableSlice = createSlice({
  name: "table",
  initialState,
  reducers: {
    setInitalState: (state, aciton) => {
      aciton.payload.forEach((obj) => {
        state.table[obj.id] = { ...obj };
      });
    },
    editElement: (state, action) => {
      const { id, field, value } = action.payload;
      if (!state.editedElements[id]) {
        state.editedElements[id] = {};
      }
      state.editedElements[id][field] = value;
    },
    resetToDefault: (state) => {
      state.editedElements = {};
    },
    addElement: (state, action) => {
      state.table[action.payload.id] = { ...action.payload };
    },
    deleteElement: (state, action) => {},
  },
});
export const {
  addElement,
  deleteElement,
  editElement,
  setInitalState,
  resetToDefault,
} = tableSlice.actions;
export default tableSlice.reducer;

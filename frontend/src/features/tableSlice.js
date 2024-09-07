import { createSlice } from "@reduxjs/toolkit";

const initialState = { table: {}, editedElements: {} };
const tableSlice = createSlice({
  name: "table",
  initialState,
  reducers: {
    setInitalState: (state, aciton) => {
      state.table[aciton.payload.page] = [...aciton.payload.items];
    },
    editElement: (state, action) => {
      const { id, field, value } = action.payload; // Destructure the payload
      if (!state.editedElements[id]) {
        state.editedElements[id] = {};
      }
      state.editedElements[id][field] = value; // Update the specific field
    },
    resetToDefault: (state) => {
      state.editedElements = {};
    },
    addElement: (state, action) => {
      state.table[1] = [action.payload.item, ...state.table[1]];
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

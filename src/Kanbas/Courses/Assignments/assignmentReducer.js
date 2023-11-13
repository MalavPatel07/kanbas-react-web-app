import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  assignments: [],
  assignment: { title: "New Assignment",due:"2014-04-08", description: "New Description",availableUntil:"2014-04-08",availableFrom:"2014-04-08",points:0},
};

const assignmentsSlice = createSlice({
    name: "assignments",
    initialState,
    reducers: {
      setAssignments1: (state, action) => {
        state.assignments = action.payload;
      },

      addAssignment: (state, action) => {
        state.assignments = [action.payload, ...state.assignments];
      },
      deleteAssignment: (state, action) => {
        state.assignments = state.assignments.filter(
          (assignment) => assignment._id !== action.payload
        );
      },
      updateAssignment: (state, action) => {
        state.assignments = state.assignments.map((assignment) => {
          if (assignment._id === action.payload._id) {
            return action.payload;
          } else {
            return assignment;
          }
        });
      },
      setAssignment: (state, action) => {
        state.assignment = action.payload;
      },
    },
  });

  export const {
    addAssignment,
    deleteAssignment,
    updateAssignment,
    setAssignment,
    setAssignments1,
  } = assignmentsSlice.actions;
  export default assignmentsSlice.reducer;
  
  
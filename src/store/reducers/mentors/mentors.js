import { createReducer } from "@reduxjs/toolkit";

import * as types from "../../actions/mentors/mentors";

const initialState = {
    mentors: [],
    loading: false
}

const mentorsReducer = createReducer(initialState, (builder) => {
    builder
    .addCase(types.getMentors, (state, action) => {
        state.mentors.push(action.payload)
    })
})


export default mentorsReducer;
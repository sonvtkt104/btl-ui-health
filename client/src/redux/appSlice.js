import { createSlice } from "@reduxjs/toolkit";

export const appSlice = createSlice({
    name: 'app',
    initialState: {
        name: 'Xuan Son ' + parseInt(Math.random() * 10000),
        image: ''
    },
    reducers: {
        update: (state, action) => {
            state.name = action.payload.name
        }
    }
})

export const { update } = appSlice.actions
export default appSlice.reducer
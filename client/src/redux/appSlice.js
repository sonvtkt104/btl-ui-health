import { createSlice } from "@reduxjs/toolkit";

export const appSlice = createSlice({
    name: 'app',
    initialState: {
        name: 'Xuan Son ' + parseInt(Math.random() * 10000),
        image: '',
        calorie: 1 // nam ; 2k2-3k2, nu: 1k6 - 2k4
    },
    reducers: {
        update: (state, action) => {
            state.name = action.payload.name
        }
    }
})

export const { update } = appSlice.actions
export default appSlice.reducer
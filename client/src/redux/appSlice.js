import { createSlice } from "@reduxjs/toolkit";
import foods from "../assets/data";

let foods_local_storage = JSON.parse(localStorage.getItem("foods"));
if(!foods_local_storage) {
    console.log("local foods")
    foods_local_storage = foods
    localStorage.setItem('foods', JSON.stringify(foods));
}

export const appSlice = createSlice({
    name: 'app',
    initialState: {
        name: 'Son',
        sex: 'male',
        calorieMax: 2146, // nam ; 2k2-3k2, nu: 1k6 - 2k4
        carbsMax: 321,
        proteinMax: 53,
        fatMax: 71,
        foods: foods_local_storage,
        foodsBreakFirst: [],
        foodsLunch: [],
        foodsDinner: [],
        foodsSnack: [],
        exercisesToday: [],
    },
    reducers: {
        update: (state, action) => {
            state.name = action.payload.name
        },
        addFoodBreakFirst: (state, action) => {
            state.foodsBreakFirst.push(action.payload.food)
        },
        addFoodLunch: (state, action) => {
            state.foodsLunch.push(action.payload.food)
        },
        addFoodDinner: (state, action) => {
            state.foodsDinner.push(action.payload.food)
        },
        addFoodSnack: (state, action) => {
            state.foodsSnack.push(action.payload.food)
        },
        removeFoodBreakFirst: (state, action) => {
            state.foodsBreakFirst = state.foodsBreakFirst.filter((food) => {
                return food.foodId != action.payload.id
            })
        },
        removeFoodLunch: (state, action) => {
            state.foodsLunch = state.foodsLunch.filter((food) => {
                return food.foodId != action.payload.id
            })
        },
        removeFoodDinner: (state, action) => {
            state.foodsDinner = state.foodsDinner.filter((food) => {
                return food.foodId != action.payload.id
            })
        },
        removeFoodSnack: (state, action) => {
            state.foodsSnack = state.foodsSnack.filter((food) => {
                return food.foodId != action.payload.id
            })
        },
        addExercise: (state, action) => {
            state.exercisesToday.unshift(action.payload.id)
        }
    }
})

export const { 
    update,
    addFoodBreakFirst ,
    addFoodLunch,
    addFoodDinner,
    addFoodSnack,
    removeFoodBreakFirst,
    removeFoodLunch,
    removeFoodDinner,
    removeFoodSnack,
    addExercise
} = appSlice.actions
export default appSlice.reducer
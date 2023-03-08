import { createSlice } from "@reduxjs/toolkit";
interface ICalcSlise {
    items: [],
    status: 'Construct' | 'Runtime'
}

const CalcSlice = createSlice({
    name: 'Calculator',
    initialState: {
        items: [0],
        status: 'Construct'

    },

    reducers: {
        addValue: (state, action) => {
            const items = state.items
            items.push(action.payload)
        },
        changeStatus: (state, action) => {
            state.status = action.payload
 
        }
    }
})

export const {addValue, changeStatus} = CalcSlice.actions
export default CalcSlice.reducer
import { createSlice } from "@reduxjs/toolkit";


const ElemsSlice = createSlice({
    name: 'Elements',
    initialState: {
        items: [],

    },

    reducers: {
        addElem: (state, action:{payload:string}) => {
            let elements = state.items
            const items = [...new Set([...elements, action.payload])]
            elements.push(items)
        },
       
    }
})

export const {addElem} = ElemsSlice.actions
export default ElemsSlice.reducer
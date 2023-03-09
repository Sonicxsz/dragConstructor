import { createSlice } from "@reduxjs/toolkit";


interface ElementsState {
    items: string[],
}

const initialState: ElementsState = {
    items: []
}

const ElemsSlice = createSlice({
    name: 'Elements',
    initialState,

    reducers: {
        addElem: (state, action:{payload:string}) => {
           const items = state.items;
           items.push(action.payload)
        },
        changePosition: (state, action:{payload:string[]}) => {
            state.items = [...new Set([...action.payload])];
            
        }
       
    }
})

export const {addElem, changePosition} = ElemsSlice.actions
export default ElemsSlice.reducer
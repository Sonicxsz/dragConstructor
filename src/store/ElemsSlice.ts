import { createSlice } from "@reduxjs/toolkit";


interface ElementsState {
    items: string[],
}

interface IPayload {
    payload: string
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
            
        },
        removeElem: (state, action:{payload:string}) => {
            const newItems = state.items.filter(i => {
                return i !== action.payload
            })

            state.items = newItems;
        }
       
    }
})

export const {addElem, changePosition, removeElem} = ElemsSlice.actions
export default ElemsSlice.reducer
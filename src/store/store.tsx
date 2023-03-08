import { configureStore }  from "@reduxjs/toolkit";
import CalcSlice from "./CalcSlice";
import ElemsSlice from './ElemsSlice'
const store = configureStore({
    reducer: {CalcSlice, ElemsSlice}
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store
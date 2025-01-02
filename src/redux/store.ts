import {configureStore} from "@reduxjs/toolkit"
import CounterReducer from "./features/counter/counterSlice";
export const store = configureStore({
    reducer: {
        counter: CounterReducer,
    },
}
);

export type RootState = ReturnType<typeof store.getState>; //.getstate method use korle store ar sob state peye jabo

export type AppDispatch = typeof store.dispatch; //store.dispatch ar type
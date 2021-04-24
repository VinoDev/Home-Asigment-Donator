import {combineReducers} from 'redux';
import {configureStore} from "@reduxjs/toolkit"
import donatorsSlice from './state/donatorsSlice.js';

const rootReducer = combineReducers({
    donators: donatorsSlice.reducer,
})

const store = configureStore({
    reducer: rootReducer
})

export default store;
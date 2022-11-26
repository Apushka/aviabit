import { combineReducers, configureStore } from "@reduxjs/toolkit";
import flightsReducer from "./flights";
import searchReducer from "./search";

const rootReducer = combineReducers({
    flights: flightsReducer,
    search: searchReducer
});

export function createStore() {
    return configureStore({
        reducer: rootReducer
    });
}

export default createStore;

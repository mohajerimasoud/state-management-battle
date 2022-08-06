import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";

import todo from "./todo.store";

const reducer = combineReducers({
  todo,
});

const store = configureStore({
  reducer,
});

export default store;

// export type RootState = ReturnType<typeof store.getState>
// export type AppDispatch = typeof store.dispatch

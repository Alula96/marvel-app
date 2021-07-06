import { applyMiddleware, createStore } from "@reduxjs/toolkit";
import rootReducer from "./reducers";
import thunk from "redux-thunk";


const storeFactory = () =>
  createStore(rootReducer, applyMiddleware(thunk));

export default storeFactory;
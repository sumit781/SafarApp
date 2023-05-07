import { applyMiddleware, createStore } from "redux";
import combineReducers from "./reducers"
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
export default store=createStore(combineReducers,composeWithDevTools(applyMiddleware(thunk)))

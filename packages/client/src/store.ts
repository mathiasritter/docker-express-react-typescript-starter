import { applyMiddleware, combineReducers, createStore as createReduxStore } from "redux";
import thunkMiddleware from "redux-thunk";

const initialState = {};
const reducer = combineReducers({});
const store = createReduxStore(reducer, initialState, applyMiddleware(thunkMiddleware));

export { store };

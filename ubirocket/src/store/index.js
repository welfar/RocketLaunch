import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { Reducer } from "./reducers/Reducer";

const rootReducer = combineReducers({
	Reducer,
});

const middleware = applyMiddleware(thunk);

export const store = createStore(rootReducer, middleware);

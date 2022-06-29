import { combineReducers, applyMiddleware } from "redux";
import { legacy_createStore as createStore } from "redux";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
  // will contain all reducers.
});

const initialState = {};

const middleware = [thunk];

const store = createStore(
  rootReducer,
  initialState,
  applyMiddleware(...middleware)
);

export default store;

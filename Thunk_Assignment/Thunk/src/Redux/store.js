import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import { reducer } from "./Todo/reducer";
import thunk from "redux-thunk";
const rootReducer = combineReducers({
  reducer,
});
// const myMiddleware = (store) => (dispatch) => (action) => {
//   if (typeof action === "function") {
//     return action(dispatch);
//   }
//   return dispatch(action);
// };

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));

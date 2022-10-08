import { createStore } from "redux";
import { combineReducers } from "redux";
import counter from "../modules/counter";

const rootReducer = combineReducers({
  counter: counter, //추가되는 부분.
});
const store = createStore(rootReducer);

export default store;

import { createStore } from "redux";
import { combineReducers } from "redux";

//새롭게 추가한 부분
import counter from "../modules/counter";

const rootReducer = combineReducers({
  counter: counter,
});

const store = createStore(rootReducer);

export default store;

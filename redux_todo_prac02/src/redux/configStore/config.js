import { createStore } from "redux"; //리덕스 만들어주고
import { combineReducers } from "redux"; //리듀서 결합시켜주고
import todo from "../modules/todo";

const rootReducer = combineReducers({
  todo,
});

const store = createStore(rootReducer);

export default store;

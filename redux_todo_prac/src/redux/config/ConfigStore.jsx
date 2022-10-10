// 원래 있던 코드
import { createStore } from "redux"; //리덕스 만들어주고
import { combineReducers } from "redux"; //리듀서 결합시켜주고

// 새롭게 추가한 부분
import todos from "../modules/todos";

const rootReducer = combineReducers({
  todos: todos, // <-- 새롭게 추가한 부분
});
const store = createStore(rootReducer);

export default store;

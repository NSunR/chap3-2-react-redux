// 원래 있던 코드
import { createStore } from "redux";
import { combineReducers } from "redux";

// 새롭게 추가한 부분
import form from "../modules/counter";

const rootReducer = combineReducers({
  form: form, // <-- 새롭게 추가한 부분
});
const store = createStore(rootReducer);

export default store;

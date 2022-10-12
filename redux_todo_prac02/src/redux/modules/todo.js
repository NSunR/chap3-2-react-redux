//Action Values

const ADDBTN = "ADDBTN";
const DELBTN = "DELBTN";
const OKBTN = "OKBTN";

// // Action Creator
export const addBtn = (payload) => {
  return {
    type: ADDBTN,
    payload,
  };
};

export const delBtn = (payload) => {
  return {
    type: DELBTN,
    payload,
  };
};

export const okBtn = (payload) => {
  return {
    type: OKBTN,
    payload,
  };
};

//initialState => useState
const initState = {
  //초기값 , key값은 불러서 쓸 수 있게 부여함.
  todos: [
    { id: 1, title: "혼공자 챕터10", comment: "10-1", isDone: false },
    { id: 2, title: "용이 승천하면", comment: "올라가용", isDone: false },
  ],
};

//reducer => setState
const todo = (state = initState, action) => {
  console.log(action);
  switch (action.type) {
    case "ADDBTN":
      return {
        todos: [...state, action.payload],
      };

    case "DELBTN":
      const TodoId = state.filter((delTodo) => delTodo.id !== action.id);
      return TodoId;
    default:
      return state;
  }
};

//export reducer

export default todo;

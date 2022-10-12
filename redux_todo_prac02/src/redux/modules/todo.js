//Action Values

const ADDBTN = "ADDBTN";
const DELBTN = "DELBTN";
const OKBTN = "OKBTN";
const GETID = "GETID";

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

export const getId = (payload) => {
  return {
    type: GETID,
    payload,
  };
};

//initialState => useState
const initState = {
  //초기값 , key값은 불러서 쓸 수 있게 부여함.
  todos: [
    { id: 1, title: "혼공자 챕터10", comment: "10-1", isDone: false },
    { id: 2, title: "용이 승천하면", comment: "올라가용", isDone: true },
  ],
};

//reducer => setState
const todo = (state = initState, action) => {
  console.log(action);
  switch (action.type) {
    case "ADDBTN":
      return {
        todos: [...state.todos, action.payload],
      };

    case "DELBTN":
      console.log(action.payload);
      return {
        todos: state.todos.filter((todo) => todo.id !== action.payload),
      };

    case "OKBTN":
      // console.log(action.payload);

      return {
        ...state,
        todos: state.todos.map((todo) => {
          if (todo.id === action.payload) {
            return { ...todo, isDone: !todo.isDone };
          } else {
            return { ...todo };
          }
        }),
      };
    case "GETID":
      return {
        ...state,
        todos: state.todos.find((todoId) => {
          return todoId.id === action.payload;
        }),
      };
    default:
      return state;
  }
};

//export reducer

export default todo;

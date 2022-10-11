//Action Value
const ADD_NUMBER = "ADD_NUMBER";
const MINUS_NUMBER = "MINUS_NUMBER";
//Action Creator

export const addNumber = (payload) => {
  return {
    type: ADD_NUMBER,
    payload: payload,
    //key값과 value값이 같으면 단축속성(축약형태)
  };
};
export const minusNumber = (payload) => {
  return {
    type: MINUS_NUMBER,
    payload: payload,
    //key값과 value값이 같으면 단축속성(축약형태)
  };
};
//initialState
const initialState = {
  number: 0,
};

//reducer

const counter = (state = initialState, action) => {
  switch (action.type) {
    case ADD_NUMBER:
      return {
        number: state.number + action.payload,
      };
    case MINUS_NUMBER:
      return {
        number: state.number - action.payload,
      };
    default:
      return state;
  }
};

//export default reducer
export default counter;

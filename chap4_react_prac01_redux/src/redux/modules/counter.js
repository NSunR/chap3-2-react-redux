//src/modules/counter.js
//초기 상태값 : useState 대신
const initialState = {
  number: 0,
};

//리듀서: setState 대신
const counter = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

//모듈파일에서는 리듀서를 export default한다.
export default counter;

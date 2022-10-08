//src/moudules/counter.js

//Action Creater------------------------------------
const PLUS_ONE = "PLUS_ONE"; //value는 상수로 생성
const MINUS_ONE = "MINUS_ONE";

//액션객체를 반환하는 함수 생성
// export가 붙는 이유는
//plusOne()는 밖으로 나가서 사용될 예정이기 때문
export const plusOne = () => {
  return {
    type: PLUS_ONE, //type에는 위에서 만든 상수 사용.
    //vscode에서는 자동완성..;?
  };
};

export const minusOne = () => {
  return {
    type: MINUS_ONE,
  };
};
//---------------------------------------------

//초기 상태값
const initialState = {
  number: 0,
};

//리듀서 = 변화하는 함수.
const counter = (state = initialState, action) => {
  console.log(action);
  switch (action.type) {
    //PLUS_ONE이라는 case를 추가해
    // 여기서 말하는 case란, action.type을 의미해.
    //dispatch로부터 전달받은 action의 type이 "PLUS_ONE"일 때
    // 아래 return 절이 실행 돼.
    case "PLUS_ONE":
      return {
        number: state.number + 1,
      };
    case "MINUS_ONE":
      return {
        number: state.number - 1,
      };

    default:
      return state;
  }
};

//모듈파일에서는 리듀서를 export default 해.
export default counter;

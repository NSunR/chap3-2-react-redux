import React from "react";
import { Link } from "react-router-dom";
import Router from "./shared/Router";

function App() {
  //Router.js를 다른 곳도 아닌 App컴포넌트에 넣어주는 이유는 우리가 만든
  //프로젝트에서 가장 최상위에 존재하는 컴포넌트가 App.js 이기 때문이야.
  return (
    <div>
      <Router>
        <Link to="/Contact">Home</Link>;
      </Router>
    </div>
  );
}

export default App;

// import React from "react";
// import { useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { addNumber, minusNumber } from "./redux/modules/counter";
// //payload
// //state관리하기 위해 hook을 사용해 state를 만들어줘.
// //이벤트핸들러 -> input과 state를 연결.

// const App = () => {
//   const [number, setNumber] = useState(0);
//   const countStore = useSelector((state) => state.counter.number);
//   const dispatch = useDispatch();

//   const onChangehand = (e) => {
//     c;
//     const { value } = e.target;
//     //event.target.value는 문자열이라
//     //숫자형으로 형변환위해 +를 붙여줌
//     setNumber(+value);
//   };

//   console.log(number);

//   const onAddNumberHand = () => {
//     dispatch(addNumber(number));
//   };
//   const onMinusNumberHand = () => {
//     dispatch(minusNumber(number));
//   };

//   //콘솔로 onChangeHand가 잘 연결됐는 지 확인

//   return (
//     <div>
//       <div>{countStore}</div>
//       <input type="number" onChange={onChangehand} />
//       <button onClick={onAddNumberHand}>더하기</button>
//       <button onClick={onMinusNumberHand}>빼기</button>
//     </div>
//   );
// };

// export default App;

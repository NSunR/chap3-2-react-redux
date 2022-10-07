import React from "react";
import { useSelector } from "react-redux"; // import 해주세요.

const App = () => {
  const counterStore = useSelector((state) => state); // 추가해주세요.
  console.log(counterStore); // 스토어를 조회해볼까요?

  return <div></div>;
};

export default App;

// import React from "react";
// import { useState } from "react";

// function Baby(props) {
//   return <div>{props.name}</div>;
// }

// function Child() {
//   return <Baby />;
// }

// function Parent() {
//   return <Child />;
// }

// function App() {
//   const [name] = useState("르탄");
//   return <Parent name={name} />;
// }

// export default App;

// const StBox = styled.div`
//   width: 100px;
//   height: 100px;
//   border: 1px solid red;
//   margin: 20px;
// `;

// const App = () => {
//   //styled-components를 JSX에서 html태그를 사용하듯이 사용해.
//   return <StBox>박스</StBox>;
// };

// export default App;
// src/modules/counter.js

// 초기 상태값
// const initialState = {
//   number: 0,
// };

// // 리듀서
// const counter = (state = initialState, action) => {
//   switch (action.type) {
//     default:
//       return state;
//   }
// };

// // 모듈파일에서는 리듀서를 export default 한다.
// export default counter;

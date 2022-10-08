import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { minusOne, plusOne } from "./redux/modules/counter";

const App = () => {
  const dispatch = useDispatch();
  const number = useSelector((state) => {
    return state.counter.number;
  });
  // console.log(number);

  return (
    <div>
      {/* 더하기버튼 */}
      {number}
      <button
        onClick={() => {
          dispatch(plusOne()); //액션객체를 Action creator로 변경.
          // dispatch({ type: "PLUS_ONE" });
        }}
      >
        + 1
      </button>
      {/* 빼기버튼 */}
      <button
        onClick={() => {
          dispatch(minusOne());
        }}
      >
        - 1
      </button>
    </div>
  );
};

export default App;

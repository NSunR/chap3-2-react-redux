import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addNumber } from "./redux/modules/counter";
import { minusNumber } from "./redux/modules/counter";

function App() {
  //1.dispatch를 사용하기 위해 선언
  const dispatch = useDispatch();
  const [number, setNumber] = useState(0);
  const globalNumber = useSelector((state) => state.counter.number);

  //input의 값 잡고있기
  const onChangeHandler = (e) => {
    const { value } = e.target;
    //event.target.value는 문자열이라
    // 이걸 숫자형으로 형변환해주기 위해서 +를 붙여줌.
    setNumber(+value);
  };
  //2. 더하기 버튼 눌렀을 때 실행할 이벤트핸들러
  const onClickAddNumberHandler = () => {
    //5. Action creator를 dispatch해주고, 그때 Action creator의 인자에
    //number를 넣어줘
    dispatch(addNumber(number));
  };
  const onClickMinusNum = () => {
    //5. Action creator를 dispatch해주고, 그때 Action creator의 인자에
    //number를 넣어줘
    dispatch(minusNumber(number));
  };

  return (
    <div>
      <div>{globalNumber}</div>
      <input type="number" onChange={onChangeHandler} />
      <button onClick={onClickAddNumberHandler}>더하기</button>
      <button onClick={onClickMinusNum}>빼기</button>
    </div>
  );
}

export default App;

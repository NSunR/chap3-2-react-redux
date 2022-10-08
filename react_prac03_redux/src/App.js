import React from "react";
import { useSelector } from "react-redux";

function App() {
  //컴포넌트에서 스토어 조회가능
  const counterStore = useSelector((state) => state);

  return <div className="App">생성</div>;
}

export default App;

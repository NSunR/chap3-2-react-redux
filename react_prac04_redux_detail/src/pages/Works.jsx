//useLocation 사용방법

import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Works = () => {
  const location = useLocation();
  const navigate = useNavigate();
  console.log("location:>>", location); //현재 위치에 대한 정보를 알려줌. 그 역할이 끝이야.
  return (
    <div>
      {/* 이전버튼 */}
      <button onClick={() => navigate("/")}> 이전으로 </button>
    </div>
  );
};

export default Works;

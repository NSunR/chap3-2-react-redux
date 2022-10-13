import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div>
      <button onClick={() => navigate("/Works")}>works 로 이동</button>
    </div>
  );
};

export default Home;

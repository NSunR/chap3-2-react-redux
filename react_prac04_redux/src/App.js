import React from "react";

const App = () => {
  const [number, setNumber] = useState(0);
  return (
    <div>
      <input type="number" />
      <button>더하기</button>
      <button>빼기</button>
    </div>
  );
};

export default App;

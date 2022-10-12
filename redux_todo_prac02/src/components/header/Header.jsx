import React from "react";
import styled from "styled-components";

const HeadBox = styled.div`
  height: 50px;
  padding: 10px 20px;

  margin-bottom: 20px;
  border: 3px solid black;

  box-sizing: border-box;
  /* background-color: lightgreen; */
`;

const Text01 = styled.div`
  float: left;
`;
const Text02 = styled.div`
  float: right;
`;

const Header = () => {
  return (
    <HeadBox>
      <Text01>TodoList</Text01>
      {/* <div>TodoList</div> */}
      <Text02>React</Text02>
    </HeadBox>
  );
};

export default Header;

import React from "react";
import styled from "styled-components";
import Form from "../components/form/Form";

const LayBox = styled.div`
  max-width: 1200px;
  min-width: 800px;
  margin: 0 auto;

  background-color: #cff09e;
`;

const Layout = (props) => {
  return <LayBox className="layout">{props.children}</LayBox>;
};

function App() {
  return <Layout>폼{/* <Form /> */}</Layout>;
}

export default App;

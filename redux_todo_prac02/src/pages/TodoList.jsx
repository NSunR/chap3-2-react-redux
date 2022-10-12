import React from "react";
import styled from "styled-components";
import Header from "../components/header/Header";
import Form from "../components/form/Form";
import List from "../components/list/List";

const Layout = styled.div`
  max-width: 1200px;
  min-width: 800px;
  margin: 0 auto;
`;

const TodoList = () => {
  return (
    <Layout>
      <Header />
      <Form />
      <List />
    </Layout>
  );
};

export default TodoList;

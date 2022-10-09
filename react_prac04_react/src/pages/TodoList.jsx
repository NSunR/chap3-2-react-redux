import React, { useState } from "react";
import Layout from "../components/layout/Layout";
import Header from "../components/header/Header";
import Form from "../components/form/Form";
import List from "../components/list/List";

const TodoList = () => {
  const [todos, setTodos] = useState([
    { id: 1, title: "리액트 공부하기", comment: "리액트기초", isDone: false },
    { id: 2, title: "리덕스 공부하기", comment: "리덕스기초", isDone: true },
  ]);

  return (
    <Layout>
      <Header />
      <Form todos={todos} setTodos={setTodos} />
      <List todos={todos} setTodos={setTodos} />
    </Layout>
  );
};

export default TodoList;

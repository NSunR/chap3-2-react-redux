import React from "react";
import styled from "styled-components";
import Content from "../content/Content";
import { useSelector } from "react-redux";
// import Form from "../form/Form";

const ListBox = styled.div`
  border: 1px solid black;
  /* background-color: ; */
`;

// const H2Box = styled.div``;

const List = () => {
  const todos = useSelector((state) => state.todo.todos);

  return (
    <ListBox>
      <div>
        <h2>Working</h2>
        <div>
          {todos.map((todo) => {
            if (!todo.isDone) {
              return <Content key={todo.id} todo={todo} />;
            } else {
              return null;
            }
          })}
        </div>
      </div>
      <div>
        <h2>Done</h2>
        {todos.map((todo) => {
          if (todo.isDone) {
            return <Content key={todo.id} todo={todo} />;
          } else {
            return null;
          }
        })}
      </div>
    </ListBox>
  );
};

export default List;

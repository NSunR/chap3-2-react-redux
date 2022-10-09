import React from "react";
import Todo from "../todo/Todo";
import "./List.css";

const List = ({ todos, setTodos }) => {
  //삭제버튼 - 조건, 원래 있던 애들 재배열
  const onDeleteHand = (todoId) => {
    const newTodos = todos.filter((todo) => todo.id !== todoId);
    setTodos(newTodos);
  };
  //list에 오는 todo조건들
  //   const working = todos.filter((todo) => todo.isdone === "false");
  //   const done = todos.filter((todo) => todo.isdone === "true");
  //조회분류 -조건
  const onStateHand = (todoId) => {
    const newTodos = todos.map((todo) => {
      if (todo.id === todoId) {
        return { ...todo, isDone: !todo.isDone };
      } else {
        return { ...todo };
      }
    });
    setTodos(newTodos);
  };
  //브라우저
  return (
    <div className="listwrap">
      <h2>Working..!</h2>
      <div className="todoWrap">
        {todos.map((todo) => {
          if (!todo.isDone) {
            return (
              <Todo
                key={todo.id}
                todo={todo}
                setTodos={setTodos}
                onDeleteHand={onDeleteHand}
                onStateHand={onStateHand}
              />
            );
          } else {
            return null;
          }
        })}
      </div>
      <h2>Done..!</h2>
      <div className="todoWrap">
        {todos.map((todo) => {
          if (todo.isDone) {
            return (
              <Todo
                key={todo.id}
                todo={todo}
                setTodos={setTodos}
                onDeleteHand={onDeleteHand}
                onStateHand={onStateHand}
              />
            );
          } else {
            return null;
          }
        })}
      </div>
    </div>
  );
};

export default List;

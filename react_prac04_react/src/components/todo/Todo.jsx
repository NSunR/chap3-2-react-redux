import React from "react";
import "./Todo.css";

function Todo({ todo, onDeleteHand, onStateHand }) {
  return (
    <div className="conBox">
      <div className="board">
        <h2>{todo.title}</h2>
        <div>{todo.comment}</div>
      </div>
      <div className="btnSet">
        <button className="delBtn" onClick={() => onDeleteHand(todo.id)}>
          삭제
        </button>
        <button className="okcanBtn" onClick={() => onStateHand(todo.id)}>
          {todo.isDone ? "취소" : "완료"}
        </button>
      </div>
    </div>
  );
}

export default Todo;

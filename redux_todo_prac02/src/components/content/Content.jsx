// import React from "react";

import React from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux/es";
import { delBtn } from "../../redux/modules/todo";

//contents Wrap
const ConBox = styled.div`
  width: 250px;
  border: 1px solid black;
  border-radius: 10px;
`;

//Button Zone

const Contents = () => {
  const dispatch = useDispatch();
  const reducer = useSelector((state) => state.todo);
  const todos = useSelector((state) => state.todo.todos);

  const onDeleteHand = (id) => {
    dispatch(delBtn(id));
  };

  const onStateHand = () => {
    dispatch();
  };

  // console.log(todo);
  return (
    <ConBox>
      <div className="board">
        <h2>{todos.title}</h2>
        <div>{todos.comment}</div>
        {/* <h2>{todo.title}</h2>
        <div>{todo.comment}</div> */}
      </div>
      {/*Buttons - delBtn, okcanBtn  */}
      <div className="btnSet">
        <button onClick={() => onDeleteHand}>삭제</button>
        <button onClick={() => onStateHand}>
          완료:취소
          {/* {todo.isDone ? "취소" : "완료"} */}
        </button>
      </div>
    </ConBox>
  );
};

export default Contents;

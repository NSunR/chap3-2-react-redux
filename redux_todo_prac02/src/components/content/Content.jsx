// import React from "react";

import React from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux/es";
import { delBtn, okBtn } from "../../redux/modules/todo";

//contents Wrap
const ConBox = styled.div`
  width: 250px;
  border: 1px solid black;
  border-radius: 10px;
`;

//Button Zones
const Contents = ({ todo }) => {
  const dispatch = useDispatch();
  const gstore = useSelector((state) => state.todo.todos);

  console.log(gstore);

  const onDelBtn = (id) => {
    dispatch(delBtn(id));
  };

  const onOkBtn = (id) => {
    dispatch(okBtn(id));
  };

  // console.log(todo);
  return (
    <ConBox>
      <div className="board">
        <h2>{todo.title}</h2>
        <div>{todo.comment}</div>
        {/* <h2>{todo.title}</h2>
        <div>{todo.comment}</div> */}
      </div>
      {/*Buttons - delBtn, okcanBtn  */}
      <div className="btnSet">
        <button onClick={() => onDelBtn(todo.id)}>삭제</button>
        <button onClick={() => onOkBtn(todo.id)}>
          {todo.isDone ? "취소" : "완료"}
        </button>
      </div>
    </ConBox>
  );
};

export default Contents;

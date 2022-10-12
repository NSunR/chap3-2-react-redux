import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux/es";
import { addBtn } from "../../redux/modules/todo";

const Form = () => {
  const dispatch = useDispatch();
  const gstore = useSelector((state) => state); //스토어 안의 initState값 조회
  const todos = useSelector((state) => state.todo.fmTodo);
  const init = useSelector((state) => state.todo);

  console.log(init);
  console.log(gstore); //store
  // console.log(init); //store
  //input 초기값, 세팅값
  const [fmTodo, setFmTodo] = useState();
  console.log(fmTodo);
  const onInputValue = (e) => {
    //value값 지정 저장
    const { name, value } = e.target;
    //value값 새로이 저장 형태
    setFmTodo({ ...fmTodo, [name]: value });
    // console.log(...fmTodo);
  };

  //추가하기

  const onOutputBtn = (e) => {
    e.preventDefault();
    if (fmTodo.title.trim() === "" && fmTodo.comment.trim() === "") return;

    dispatch(addBtn());

    // setTodo(initState);
    // num++;
    // dispatch(addBtn(fmTodo));
    // console.log(outBtn());
  };

  return (
    <form onSubmit={onOutputBtn}>
      <div>
        <label>제목</label>
        <input
          type="text"
          name="title"
          defaultValue="제목을 입력해주세요."
          onChange={onInputValue}
        />
        <label>내용</label>
        <input
          type="text"
          name="comment"
          defaultValue="내용을 입력해주세요."
          value={fmTodo.comment}
          onChange={onInputValue}
        />
        <button>추가하기</button>
      </div>
    </form>
  );
};

export default Form;

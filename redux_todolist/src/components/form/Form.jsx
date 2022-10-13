import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux/es";
import { addBtn } from "../../redux/modules/todo";

const Form = () => {
  const dispatch = useDispatch();
  const gstore = useSelector((state) => state.todo.todos); //스토어 안의 initState값 조회
  // const init = useSelector((state) => state.todo);

  // console.log(init);
  // console.log(gstore); //store

  // console.log(init); //store
  //input 초기값, 세팅값
  // const [fmTodo, setFmTodo] = useState();

  const [title, setTitle] = useState("");
  const [comment, setComment] = useState("");
  // console.log(fmTodo);

  const onInputTitle = (e) => {
    //value값 지정 저장
    //value값 새로이 저장 형태
    const name = e.target.value;

    setTitle(name);
    // console.log(...fmTodo);
  };

  const onInputComment = (e) => {
    //value값 지정 저장
    //value값 새로이 저장 형태
    const comment = e.target.value;

    setComment(comment);
    // console.log(...fmTodo);
  };

  //추가하기

  const onOutputBtn = (e) => {
    e.preventDefault();
    if (title.trim() === "" && comment.trim() === "") return;
    const data = {
      id: gstore[gstore.length - 1].id + 1,
      title: title,
      comment: comment,
      isDone: false,
    };
    dispatch(addBtn(data));
    // setTitle("");
    // setComment("");
    // setTodo(initState);
    // num++;
    // dispatch(addBtn(fmTodo));
    // console.log(outBtn());
  };

  return (
    <form onSubmit={onOutputBtn}>
      <div>
        <label>제목</label>
        <input type="text" name="title" value={title} onChange={onInputTitle} />
        <label>내용</label>
        <input
          type="text"
          name="comment"
          value={comment}
          onChange={onInputComment}
        />
        <button>추가하기</button>
      </div>
    </form>
  );
};

export default Form;

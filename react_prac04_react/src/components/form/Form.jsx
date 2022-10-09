import React, { useState } from "react";

let num = 3;
const Form = ({ todos, setTodos }) => {
  const initState = {
    id: 0,
    title: "",
    comment: "",
    isDone: false,
  };
  console.log(todos);

  const [todo, setTodo] = useState(initState);
  const onChangeCtrl = (e) => {
    const { name, value } = e.target;
    setTodo({ ...todo, [name]: value });
  };

  const onSubmitCtrl = (e) => {
    e.preventDefault();
    setTodos([...todos, { ...todo, id: num }]);
    setTodo(initState);
    num++;
  };

  return (
    <form onSubmit={onSubmitCtrl}>
      <div>
        <label>제목</label>
        <input
          type="text"
          name="title"
          value={todo.title}
          onChange={onChangeCtrl}
        />
        <label>내용</label>
        <input
          type="text"
          name="comment"
          value={todo.comment}
          onChange={onChangeCtrl}
        />
        <button>추가하기</button>
      </div>
    </form>
  );
};

export default Form;

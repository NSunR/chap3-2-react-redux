import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";

//style
const FormBox = styled.form`
  width: 500px;

  padding: 10px;
  background-color: white;
`;

const LabBox = styled.label`
  padding: 20px;
  background-color: gray;
`;

//function

const Form = () => {
  const [value, setValue] = useState("");
  const dispatch = useDispatch();

  const onChangehand = (e) => {
    const { value } = e.target;
    setValue(value);
    setValue("");
  };

  return (
    <FormBox>
      <div>
        <label>Todos의 제목을 입력하세요</label>
        <input type="text" onChange={onChangehand} />
      </div>
      <button>추가하기</button>
    </FormBox>
  );
};

export default Form;

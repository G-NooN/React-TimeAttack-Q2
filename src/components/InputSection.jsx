import React, { useState } from "react";
import { StButton, StSectionTitle, StTitle } from "../styles/GlobalStyle";
import { useDispatch } from "react-redux";
import shortid from "shortid";
import { addTodo } from "../redux/modules/todos";

function InputSection() {
  // state
  const [title, setTitle] = useState(""); // 제목
  const [body, setBody] = useState(""); // 내용

  // onChange event Handlers
  const changeTitle = (event) => {
    setTitle(event.target.value);
  };
  const changeBody = (event) => {
    setBody(event.target.value);
  };

  // dispatch
  const dispatch = useDispatch();

  // 등록
  const addTodoItem = () => {
    // action.payload : 새로운 todo item
    const newTodoItem = {
      id: shortid(),
      title,
      body,
      isDone: false,
    };

    dispatch(addTodo(newTodoItem));
  };

  return (
    <>
      <StSectionTitle>Input Section</StSectionTitle>
      <StTitle>제목</StTitle> : <input value={title} onChange={changeTitle} />
      <StTitle>내용</StTitle> : <input value={body} onChange={changeBody} />
      <StButton onClick={addTodoItem}>등록</StButton>
    </>
  );
}

export default InputSection;

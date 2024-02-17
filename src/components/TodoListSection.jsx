import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { StButton, StSectionTitle, StTitle } from "../styles/GlobalStyle";
import { deleteTodo, switchTodo } from "../redux/modules/todos";
import { useNavigate } from "react-router-dom";

function TodoListSection({ isActive }) {
  const todoList = useSelector((item) => item.todos);

  // dispatch
  const dispatch = useDispatch();

  // todoItem 삭제
  const deleteTodoItem = (todoItemId) => {
    dispatch(deleteTodo(todoItemId));
  };

  // todoItem isDone property 수정
  const switchTodoItem = (todoItemId) => {
    dispatch(switchTodo(todoItemId));
  };

  // navigate
  const navigate = useNavigate();

  return (
    <>
      {/* isActive 속성에 따라 조건부 출력 */}
      {/*
        // REVIEW: 출력 구문 간결화 가능?
        - 삼항연산자를 사용하여 TodoList-DoneList를 분리
        - However, diff = 단순히 filter를 사용하여 todoItem.isDone ?? isActive
        - 나머지 map 부분은 모두 동일
        - 이를 간결하게 출력할 수 있는 방법이 있는가?
      */}
      {isActive === true ? (
        // TodoList
        <>
          <StSectionTitle>TodoList</StSectionTitle>
          {todoList
            .filter((todoItem) => todoItem.isDone !== isActive)
            .map((todoItem) => (
              <div key={todoItem.id}>
                <p>
                  <StTitle>제목</StTitle> : {todoItem.title}
                </p>
                <p>
                  <StTitle>내용</StTitle> : {todoItem.body}
                </p>
                <StButton
                  onClick={() => {
                    switchTodoItem(todoItem.id);
                  }}
                >
                  완료
                </StButton>
                <StButton
                  onClick={() => {
                    deleteTodoItem(todoItem.id);
                  }}
                >
                  삭제
                </StButton>
                <StButton
                  onClick={() => {
                    navigate(`/${todoItem.id}`);
                  }}
                >
                  상세보기
                </StButton>
              </div>
            ))}
        </>
      ) : (
        // DoneList
        <>
          <StSectionTitle>DoneList</StSectionTitle>
          {todoList
            .filter((todoItem) => todoItem.isDone !== isActive)
            .map((todoItem) => (
              <div key={todoItem.id}>
                <p>
                  <StTitle>제목</StTitle> : {todoItem.title}
                </p>
                <p>
                  <StTitle>내용</StTitle> : {todoItem.body}
                </p>
                <StButton
                  onClick={() => {
                    switchTodoItem(todoItem.id);
                  }}
                >
                  취소
                </StButton>
                <StButton
                  onClick={() => {
                    deleteTodoItem(todoItem.id);
                  }}
                >
                  삭제
                </StButton>
                <StButton
                  onClick={() => {
                    navigate(`/${todoItem.id}`);
                  }}
                >
                  상세보기
                </StButton>
              </div>
            ))}
        </>
      )}
    </>
  );
}

export default TodoListSection;

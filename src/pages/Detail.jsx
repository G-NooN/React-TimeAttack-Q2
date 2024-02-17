import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { StButton, StTitle } from "../styles/GlobalStyle";
import { deleteTodo } from "../redux/modules/todos";

const Detail = () => {
  const todoList = useSelector((item) => item.todos);
  const { id } = useParams(); // params
  const foundTodoItem = todoList.find((todo) => todo.id === id);

  // navigate
  const navigate = useNavigate();

  // dispatch
  const dispatch = useDispatch();

  // todoItem 삭제
  const deleteTodoItem = (todoItemId) => {
    dispatch(deleteTodo(todoItemId));
    navigate("/");
  };

  return (
    <>
      <p>
        <StTitle>제목</StTitle> : {foundTodoItem.title}
      </p>
      <p>
        <StTitle>내용</StTitle> : {foundTodoItem.body}
      </p>
      <p>
        <StTitle>완료 여부</StTitle> : {foundTodoItem.isDone.toString()}
      </p>
      <StButton
        onClick={() => {
          deleteTodoItem(foundTodoItem.id);
        }}
      >
        삭제
      </StButton>
      <StButton
        onClick={() => {
          navigate("/");
        }}
      >
        뒤로가기
      </StButton>
    </>
  );
};

export default Detail;

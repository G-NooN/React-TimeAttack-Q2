// import uuid from "react-uuid";
import shortid from "shortid";

// 초기 state
const initialState = [
  {
    id: shortid.generate(),
    title: "제목1",
    body: "내용1",
    isDone: false,
  },
  {
    id: shortid.generate(),
    title: "제목2",
    body: "내용2",
    isDone: true,
  },
];

// action creators
export const addTodo = (payload) => {
  return {
    type: "ADD_TODO",
    payload,
  };
};
export const deleteTodo = (payload) => {
  return {
    type: "DELETE_TODO",
    payload,
  };
};
export const switchTodo = (payload) => {
  return {
    type: "SWITCH_TODO",
    payload,
  };
};

// 리듀서
const todos = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TODO":
      // action.payload : 새로운 todo item
      const newTodoItem = action.payload;
      return [...state, newTodoItem];

    case "DELETE_TODO":
      // action.payload : 삭제할 todo item의 id
      const deleteTargetId = action.payload;
      const deletedTodoList = state.filter((todoItem) => todoItem.id !== deleteTargetId);
      return deletedTodoList;

    case "SWITCH_TODO":
      // action.payload : 변경할 todo item의 id
      const switchTargetId = action.payload;
      const switchedTodoList = state.map((todoItem) => {
        if (todoItem.id === switchTargetId) {
          const switchedTodoItem = { ...todoItem, isDone: !todoItem.isDone };
          return switchedTodoItem;
        } else {
          return todoItem;
        }
      });
      return switchedTodoList;

    default:
      return state;
  }
};

export default todos;

import React from "react";
import InputSection from "../components/InputSection";
import TodoListSection from "../components/TodoListSection";

function Main() {
  return (
    <>
      <InputSection />
      <TodoListSection isActive={true} />
      <TodoListSection isActive={false} />
    </>
  );
}

export default Main;

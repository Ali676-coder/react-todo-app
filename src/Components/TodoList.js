import React from "react";
import Todo from "./Todo";

const TodoList = ({ todos, setTodos, filteredTodos }) => {
  return (
    <div className="todo-list-wrapper">
      <ul className="todo-list">
        {filteredTodos.map((todo) => {
          return (
            <Todo key={todo.id} todo={todo} todos={todos} setTodos={setTodos} />
          );
        })}
      </ul>
    </div>
  );
};

export default TodoList;

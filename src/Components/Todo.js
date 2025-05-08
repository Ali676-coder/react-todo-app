import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

const Todo = ({ todo, todos, setTodos }) => {
  //Events
  const deleteHandler = () => {
    setTodos(
      todos.filter((el) => {
        return el.id !== todo.id;
      })
    );
  };
  const completeHandler = () => {
    setTodos(
      todos.map((item) => {
        if (item.id === todo.id) {
          return {
            ...item,
            completed: !item.completed,
          };
        }
        return item;
      })
    );
  };
  return (
    <>
      <div className="todo">
        <li className={`todo-item ${todo.completed ? "compelted" : ""}`}>
          {todo.text}
        </li>
        <button onClick={completeHandler}>
          <FontAwesomeIcon icon={faCheck} />
        </button>
        <button onClick={deleteHandler}>
          <FontAwesomeIcon icon={faTrash} />
        </button>
      </div>
    </>
  );
};

export default Todo;

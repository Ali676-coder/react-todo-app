import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquarePlus } from "@fortawesome/free-solid-svg-icons";

const Form = ({ inputText, setInputText, todos, setTodos, setStatus }) => {
  const inputTextHandler = (e) => {
    setInputText(e.target.value);
  };
  const sunmitToDoHandler = (e) => {
    e.preventDefault();
    const trimedInputText = inputText.trim();
    if (trimedInputText === "") {
      return;
    }
    setTodos([
      ...todos,
      {
        text: trimedInputText,
        completed: false,
        id: Number.parseInt(Math.random() * 1000),
      },
    ]);
    setInputText("");
  };
  const statusHandler = (e) => {
    setStatus(e.target.value);
  };
  return (
    <div className="form-wrapper">
      <form className="form">
        <input
          placeholder="Task to do..."
          required
          onChange={inputTextHandler}
          type="text"
          className="todo-input"
          value={inputText}
        />

        <button
          type="submit"
          className="todo-button"
          onClick={sunmitToDoHandler}
        >
          <FontAwesomeIcon icon={faSquarePlus} />
        </button>

        <div className="select">
          <select onChange={statusHandler} name="todos" className="filter-todo">
            <option value="All">All</option>
            <option value="completed">completed</option>
            <option value="uncompleted">uncompleted</option>
          </select>
        </div>
      </form>
    </div>
  );
};

export default Form;

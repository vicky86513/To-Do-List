import React from "react";

const Form = ({ todo, setTodo, todos, setTodos }) => {
  const handleSubmit = (e) => {
    e.preventDefault();

    const newTodo = {
      id: new Date().getTime(),
      text: todo
    };
    setTodos([...todos].concat(newTodo));
    setTodo("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        onChange={(e) => setTodo(e.target.value)}
        value={todo}
        className="todo-input"
        placeholder="Plase Enter Todos"
      />
      <button type="submit" className="todo-button">
        Add Todo
      </button>
    </form>
  );
};
export default Form;

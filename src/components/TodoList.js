import React from "react";

const TodoList = ({
  todos,
  setTodos,
  setTodoEditing,
  todoEditing,
  setEditingText,
  editingText
}) => {
  function deleteTodo(id) {
    let updatedTodos = [...todos].filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  }

  function submitEdits(id) {
    const updatedTodos = [...todos].map((todo) => {
      if (todo.id === id) {
        todo.text = editingText;
      }
      return todo;
    });
    setTodos(updatedTodos);
    setTodoEditing(null);
  }
  return (
    <div className="todo-container">
      {todos.map((todo) => {
        return (
          <div key={todo.id}>
            <div className="todo todo-list">
              {todo.id === todoEditing ? (
                <input
                  type="text"
                  className="todo-item"
                  placeholder="Please click to edit here"
                  onChange={(e) => setEditingText(e.target.value)}
                />
              ) : (
                <li>{todo.text}</li>
              )}
            </div>

            <div>
              {todo.id === todoEditing ? (
                <button
                  className="todo complete-btn"
                  onClick={() => submitEdits(todo.id)}
                >
                  Submit Edits
                </button>
              ) : (
                <button
                  className="todo edit-btn"
                  onClick={() => setTodoEditing(todo.id)}
                >
                  EDIT
                </button>
              )}
              <button
                className="todo delete-btn"
                onClick={() => deleteTodo(todo.id)}
              >
                Delete
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};
export default TodoList;

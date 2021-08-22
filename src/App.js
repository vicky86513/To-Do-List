import "./styles.css";
import React, { useEffect, useState } from "react";
import Form from "./components/Form";
import TodoList from "./components/TodoList";

export default function App() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);
  const [todoEditing, setTodoEditing] = useState(null);
  const [editingText, setEditingText] = useState("");

  //Save todos to Local Storage
  useEffect(() => {
    const json = localStorage.getItem("todos");
    const loadedTodos = JSON.parse(json);
    if (loadedTodos) {
      setTodos(loadedTodos);
    }
  }, []);
  useEffect(() => {
    const json = JSON.stringify(todos);
    localStorage.setItem("todos", json);
  }, [todos]);

  return (
    <div className="App">
      <header>
        <h1 style={{ borderBottom: "5px solid blue" }}> Todos</h1>
      </header>
      <Form todos={todos} setTodos={setTodos} todo={todo} setTodo={setTodo} />
      <TodoList
        setTodos={setTodos}
        todos={todos}
        editingText={editingText}
        todoEditing={todoEditing}
        setTodoEditing={setTodoEditing}
        setEditingText={setEditingText}
      />
    </div>
  );
}


import React, { useState } from 'react'
import './App.css';
import Header from "./Header"
import Form from "./form"
import TodoList from "./Todolist"

const App = () => {

  const [inputText, setInputText] = useState('');
  const [todos, setTodos] = useState([]);

  return (
    <div>
      <Header />
      <Form inputText={inputText}
        todos={todos}
        setTodos={setTodos}
        setInputText={setInputText} />
      <TodoList setTodos={setTodos} todos={todos} />
    </div>
  )
}

export default App;

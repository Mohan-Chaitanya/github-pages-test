import React from "react";
import Todo from "./Todo"

const TodoList = ({ todos, setTodos }) => {
    return (
        <div>
            <ul>{todos.map(todo => (
                <Todo setTodos={setTodos}
                    todos={todos}
                    todo={todo}
                    text={todo.text}
                    key={todo.id} />
            ))}</ul>
        </div>
    )
}

export default TodoList;
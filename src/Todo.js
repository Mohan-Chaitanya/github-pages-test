import React from "react";

const Todo = ({ todo, text, todos, setTodos }) => {

    const deleteHandler = () => {
        setTodos(todos.filter(e => e.id !== todo.id))
    }

    return (
        <div>
            <ui>{text}</ui><button onClick={deleteHandler}>❌</button>
        </div>
    );
}

export default Todo;
import React from "react";

const Form = ({ todos, setTodos, setInputText, inputText }) => {
    function inputTextHandler(event) {
        setInputText(event.target.value);
    }
    function submitTodoHandler(event) {
        event.preventDefault();
        setTodos([...todos, {
            text: inputText,
            completed: false,
            id: Math.random() * 100
        }]);
        setInputText('');
    }
    return (
        <form>
            <input className='formInput' value={inputText} onChange={inputTextHandler} required />
            <button onClick={submitTodoHandler} type='submit'>Add</button>
        </form  >
    )
}

export default Form;
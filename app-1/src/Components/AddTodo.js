import React, { useState } from 'react';

const AddTodo = (props) => {
    const [userInput, setUserInput] = useState('')

    function handleAddTodo(e) {
        e.preventDefault() 
        props.addTodo(userInput)
        setUserInput('')
    }

    return (
        <form onSubmit={handleAddTodo}>
            <input
                placeholder="Give Yourself a To Do!"
                value={userInput}
                onChange={(e) => setUserInput(e.target.value)}
            />
            <button>SUBMIT</button>
        </form>
    )
}
export default AddTodo;

import React, { useState } from 'react';
import List from './Components/List';
import AddTodo from './Components/AddTodo';
import './App.css';

function App() {
//create a useState whose array items are todos and setTodos and set useState to be an array
  const [todos, setTodos] = useState([]);

//add an AddTodo function that takes in item as a parameter
//save a variable named newTodos set = to an array that spreads tot todos array and uses the item parameter?
//invoke setTodos from the useState and pass in newTodos in the invocation.
  function addTodo(item) {
    const newTodos = [...todos, item]
    setTodos(newTodos)
  }



  return (
    <div className="App">
      <AddTodo addTodo={addTodo} />
      <List list={todos} />
    </div>
  );
}

export default App;

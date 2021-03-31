import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ListItem from './Components/ListItem';
import SwVehicles from './Components/SwVehicles';
import './App.css';

function App() {
  //create useState right here, right after the function App() 
  const [list, setList] = useState([])
  const [list2, setList2] = useState([])

  //create a useEffect function here to give us our lifecycle functionality and our axios request//
  useEffect(() => {
    axios
      .get('https://swapi.dev/api/people')
      .then((res) => {
        setList(res.data.results)
    })
  }, [])

  useEffect(() => {
    axios
      .get('https://swapi.dev/api/vehicles')
      .then((res) => {
        setList2(res.data.results)
    })
  }, [])

  return (
    <div className="App">
      {list.map((elem, ind) => {
        return <ListItem name={elem.name} key={ind} />
      })}
      {list2.map((elem, ind) => {
        return <SwVehicles name={elem.name} key={ind} />
      })}

    </div>
  );
}

export default App;

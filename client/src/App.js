import React, { useState, useEffect } from 'react';
import Axios from 'axios'
import './App.css';

import useAxiosGet from './useAxiosGet'
import useCustomCrap from './useCustomCrap'

function App() {
  /* const [ players, setPlayers ] = useAxiosGet("http://localhost:5000/api/players") */
  const [players, setPlayers] = useCustomCrap()
  const [number, setNumber] = useState(0)

  useEffect(() => {
    Axios.get("http://localhost:5000/api/players")
    .then(response => setPlayers(response.data))
  }, [])

  useEffect(()=> console.log(players))
  
  return (
    <div className="App">
      <h1>blah blah blah</h1>
      <button onClick={() => setNumber(number+1)}>{number}</button>
      {/* {players.map(element => {
        return <h4>{element.name}</h4>
      })} */}
      {players ? players.map(element => {
        return <h4>{element.name} from {element.country}</h4>
      }) : ''}
    </div>
  );
}

export default App;

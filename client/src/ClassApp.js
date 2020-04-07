import React, { useState, useEffect } from 'react';
import Axios from 'axios'
import App from './App'

class ClassApp extends React.Component {
  constructor() {
    super();
    this.state = {
      players: ''
    }
  }

  componentDidMount() {
    Axios.get("http://localhost:5000/api/players")
    .then(response => {
      this.setState({players: response.data})
      console.log(response.data)
    })
  }

  render() {
    return <App players={this.state.players}/>
  }
}

export default ClassApp
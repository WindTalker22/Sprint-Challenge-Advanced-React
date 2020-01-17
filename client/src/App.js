import React, { Component } from "react"
import axios from "axios"
import "./App.css"
import DarkModeButton from "./components/DarkModeButton"

class App extends Component {
  state = {
    players: []
  }

  componentDidMount() {
    axios
      .get(`http://localhost:5000/api/players`)
      .then(res => {
        this.setState({ players: res.data })
        console.log(this.state)
      })
      .catch(err => {
        console.log(err)
      })
  }

  render() {
    return (
      <div className="App dark-mode">
        <DarkModeButton data-testid="toggles" />
        {this.state.players.map(item => (
          <div className="player">
            <h1>Name: {item.name}</h1>
            <h2>Country: {item.country}</h2>
            <h2>Searches: {item.searches}</h2>
          </div>
        ))}
      </div>
    )
  }
}

export default App

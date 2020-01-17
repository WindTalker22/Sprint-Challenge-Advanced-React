import React, { Component } from "react"
import axios from "axios"

import "./App.css"

class App extends Component {
  state = {
    players: []
  }

  componentDidMount() {
    axios
      .get(`http://localhost:5000/api/players`)
      .then(res => {
        // console.log(res.data, this.state)
        this.setState({
          players: res.data
        })
        console.log(this.state)
      })
      .catch(err => {
        console.log(err)
      })
      .finally(console.log("Axios call complete"))
  }

  render() {
    return <div className="App"></div>
  }
}

export default App

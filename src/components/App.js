import React, { Component } from "react";
import "../App.css";
import Nav from "./Nav";
import hogs from "../porkers_data";
import Filter from "./Filter";
import HogContainer from './HogContainer'

class App extends Component {
  constructor(){
    super()
    this.state = {
      hogs: hogs,
      greased: false
    }
  }

  showGreased = () => {
    this.setState({
      greased: !this.state.greased
    })
  }

  render() {
    return (
      <div className="App">
        <Nav />
        <Filter greased={this.showGreased}/>
        <HogContainer hogs={this.state.hogs}/>
      </div>
    );
  }
}

export default App;

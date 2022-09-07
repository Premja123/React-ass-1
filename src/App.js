

import React, { Component } from "react";
import './App.css';
import StartingForm from "./components/Startingform";

class App extends Component {
  render() {
    return (
      <center>
        <div className="the-whole-block">
          <h1>User Registration List App</h1>
          <StartingForm />
        </div>
      </center>
    );
  }
}


export default App;







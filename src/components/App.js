import React, { Component } from "react";
import "./App.css";
import PrimaryColor from "./PrimaryColor";
import ShowColor from "./ShowColor";
import Shades from "./Shades";

class App extends Component {
  state = {
    RED: "",
    GREEN: "",
    BLUE: ""
  };

  onColorChange = (color, number) => {
    this.setState({ [color]: number });
  };

  render() {
    return (
      <React.Fragment>
        <div className="title">BOUNTIFUL COLOR</div>
        <div className="align-cards">
          <PrimaryColor onChange={this.onColorChange} color="RED" />
          <PrimaryColor onChange={this.onColorChange} color="GREEN" />
          <PrimaryColor onChange={this.onColorChange} color="BLUE" />
        </div>
        <ShowColor
          red={this.state.RED}
          green={this.state.GREEN}
          blue={this.state.BLUE}
        />
        <Shades
          red={this.state.RED}
          green={this.state.GREEN}
          blue={this.state.BLUE}
        />
      </React.Fragment>
    );
  }
}

export default App;

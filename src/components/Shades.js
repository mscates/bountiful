import React, { Component } from "react";
import chroma from "chroma-js";
import DisplayShades from "./DisplayShades";

class Shades extends Component {
  state = {
    colorShadeList: []
  };

  showShades = list => {
    const newShades = list.map(item => {
      return (
        <li style={{ backgroundColor: item }} className="box">
          <p>{item}</p>
        </li>
      );
    });
    return newShades;
  };

  getShades = () => {
    let steps = 3;
    let chromaColor = chroma(this.props.red, this.props.green, this.props.blue);
    let tempArrayDark = [];
    let tempArrayLight = [];
    for (let i = 0; i < steps; i++) {
      tempArrayDark[i] = chromaColor.darken(i).hex();
      tempArrayLight[i] = chromaColor.brighten(i).hex();
    }
    for (let j = 1; j < tempArrayDark.length; j++) {
      tempArrayLight.unshift(tempArrayDark[j]);
    }

    this.setState(
      {
        colorShadeList: [...tempArrayLight]
      },
      () => this.showShades(this.state.colorShadeList)
    );
  };
  render() {
    return (
      <React.Fragment>
        <div>
          <button onClick={this.getShades}>Generate Color Shades</button>
          <DisplayShades
            showShades={this.showShades(this.state.colorShadeList)}
          />
        </div>
      </React.Fragment>
    );
  }
}

export default Shades;

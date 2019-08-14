import React, { Component } from "react";
import "./ShowColor.css";

class ShowColor extends Component {
  state = {};

  colorToHex = color => {
    let hex = color.toString(16);
    return hex.length === 1 ? "0" + hex : hex;
  };

  rgbToHex = (r, g, b) => {
    return `#${this.colorToHex(r)}${this.colorToHex(g)}${this.colorToHex(b)}`;
  };

  render() {
    const { red, blue, green } = this.props;
    return (
      <div className="container">
        <p>Generated Color</p>
        <div
          style={{ backgroundColor: this.rgbToHex(red, green, blue) }}
          className="color-box"
        >
          {this.rgbToHex(red, green, blue)}
        </div>
      </div>
    );
  }
}

export default ShowColor;

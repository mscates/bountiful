import React from "react";
import "./PrimaryColor.css";
import RadioToggle from "./RadioToggle";

const colorToRangeMap = {
  light: {
    min: 0,
    max: 84
  },
  medium: {
    min: 85,
    max: 170
  },
  dark: {
    min: 171,
    max: 255
  }
};

const colors = {
  RED: "red",
  GREEN: "green",
  BLUE: "blue"
};

class PrimaryColor extends React.Component {
  state = {
    shade: "",
    range: {
      min: 0,
      max: 0
    },
    random: 0
  };

  findRandomColor = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  setColorRange = shade => {
    return `(${colorToRangeMap[shade].min} - ${colorToRangeMap[shade].max})`;
  };

  getTitleClasses = () => {
    let classes = "PrimaryColor-align ";
    return (classes += colors[this.props.color]);
  };

  onHandleChange = event => {
    const shade = event.target.value;
    const random = this.findRandomColor(
      colorToRangeMap[shade].min,
      colorToRangeMap[shade].max
    );
    this.setState({
      shade,
      range: {
        min: colorToRangeMap[shade].min,
        max: colorToRangeMap[shade].max
      },
      random
    });
    this.props.onChange(this.props.color, random);
  };

  render() {
    return (
      <div className="PrimaryColor-container">
        <p className={this.getTitleClasses()}>{this.props.color}</p>
        <RadioToggle
          color={this.props.color}
          shade={this.state.shade}
          range={this.state.range}
          setColorRange={this.setColorRange}
          onHandleChange={this.onHandleChange}
        />
        <div className="PrimaryColor-random">{this.state.random}</div>
      </div>
    );
  }
}

export default PrimaryColor;

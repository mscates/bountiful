import React from "react";
import "./RadioToggle.css";

class RadioToggle extends React.Component {
  render() {
    return (
      <form>
        <p className="RadioToggle-palign">
          What amount of {this.props.color.toLowerCase()} do you want?
        </p>
        <ul className="RadioToggle-ulposition">
          <li>
            <label>
              <input
                type="radio"
                value="light"
                checked={this.props.shade === "light"}
                onChange={this.props.onHandleChange}
              />
              Low Intensity
              {this.props.setColorRange("light")}
            </label>
          </li>
          <li>
            <label>
              <input
                type="radio"
                value="medium"
                checked={this.props.shade === "medium"}
                onChange={this.props.onHandleChange}
              />
              Medium Intensity
              {this.props.setColorRange("medium")}
            </label>
          </li>
          <li>
            <label>
              <input
                type="radio"
                value="dark"
                checked={this.props.shade === "dark"}
                onChange={this.props.onHandleChange}
              />
              Bright Intensity
              {this.props.setColorRange("dark")}
            </label>
          </li>
        </ul>
      </form>
    );
  }
}

export default RadioToggle;

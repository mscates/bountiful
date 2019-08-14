import React from "react";
import "./DisplayShades.css";

const DisplayShades = ({ showShades }) => {
  return (
    <div className="DisplayShades-container">
      <div className="DisplayShades-darkcontainer" />
      <div className="DisplayShades-lightcontainer">
        <ul className="align">{showShades}</ul>
      </div>
    </div>
  );
};

export default DisplayShades;

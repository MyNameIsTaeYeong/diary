import React from "react";
import "./Today.css";

class Today extends React.Component {
  render() {
    return (
      <div className="container">
        <ul>
          <div className="card">기분</div>
          <div className="card">수면</div>
          <div className="card">슬픔</div>
          <div className="card">집중력</div>
          <div className="card">컨디션</div>
          <div className="card">기분</div>
          <div className="card">수면</div>
          <div className="card">슬픔</div>
          <div className="card">집중력</div>
          <div className="card">컨디션</div>
        </ul>
      </div>
    );
  }
}

export default Today;

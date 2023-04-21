import React, { Component } from "react";
//import { Link } from "react-router-dom";
import Lifecycle from "./lifecycle.js";

class Stateclass extends Component {
  constructor() {
    super();
    this.state = {
      name: "dharumaraj",
      age: 23,
      arr: [1, 2, 3],
    };
  }
  change = (index) => {
    console.log(index);
    let variable = this.state.arr.map((value, i) =>
      index === i ? value * 2 : value
    );
    this.setState({ arr: variable });
  };
  render() {
    return (
      <div>
        <h1>{this.state.name}</h1>
        <button onClick={() => this.setState({ name: "dharani" })}>
          stateCls name
        </button>
        <h1>{this.state.age}</h1>
        <button onClick={() => this.setState({ age: 22 })}>stateCls age</button>
        {this.state.arr.map((value, index) => {
          return (
            <div key={index}>
              <h3>{value}</h3>
              <button onClick={() => this.change(index)}>stateCls arr</button>
            </div>
          );
        })}
        <Lifecycle />
      </div>
    );
  }
}
export default Stateclass;

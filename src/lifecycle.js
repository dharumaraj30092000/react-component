import React, { Component } from "react";
import Tasklyfcycle from "./tasklyfcycle.js";
import Tasklyffun from "./tasklyffun.js";

class Lifecycle extends Component {
  constructor() {
    super();
    this.state = {
      name: "dharumaraj",
      age: 22,
    };
  }
  changeAge = () => {
    console.log("age changed");
  };
  componentDidMount() {
    this.setState({ age: 20 });
  }
  // componentDidUpdate(pervious, prevent) {
  //   if (prevent.age !== this.state.age) {
  //     this.changeAge();
  //   }
  // }
  render() {
    return (
      <div>
        <h1>{this.state.age}</h1>
        <button
          onClick={() => this.setState({ age: 18 }, () => this.changeAge())}
        >
          lifecycle button
        </button>
        <Tasklyfcycle />
        <Tasklyffun />
      </div>
    );
  }
}
export default Lifecycle;

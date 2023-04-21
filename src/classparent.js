import React, { Component } from "react";
import Classchild from "./classchild.js";

class Classparent extends Component {
  render() {
    const tasks = [
      { name: "Write for Envato Tuts+", duration: 120 },
      { name: "Work out", duration: 60 },
      { name: "Procrastinate on Duolingo", duration: 240 },
    ];
    const filterValue = (event) => {
      var result = tasks.filter((value) => {
        return value.duration > event.duration;
      });
      console.log(result);
    };
    return (
      <div>
        <Classchild topass={tasks} select={filterValue} />
      </div>
    );
  }
}
export default Classparent;

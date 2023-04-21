import React, { Component } from "react";

class Classchild extends Component {
  render() {
    return (
      <div>
        {this.props.topass.map((value, index) => {
          return (
            <div key={index}>
              <p>
                {index + 1}.{value.name}
              </p>
              <button onClick={() => this.props.select(value)}>
                Class task{index + 1}
              </button>
            </div>
          );
        })}
      </div>
    );
  }
}

export default Classchild;

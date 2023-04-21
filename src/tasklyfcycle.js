import React, { Component } from "react";

export default class Tasklyfcycle extends Component {
  constructor() {
    super();
    this.state = {
      arr: [
        {
          id: 1,
          name: "dharumaraj",
          description: "he is good boy",
          iscompleted: false,
        },
        {
          id: 2,
          name: "dharani dharan",
          description: "he is smart boy",
          iscompleted: false,
        },
        {
          id: 3,
          name: "prakash",
          description: "he is rugged boy",
          iscompleted: false,
        },
      ],
    };
  }
  genrate = (index) => {
    var newObj = this.state.arr.map((data) =>
      data.id === index ? { ...data, iscompleted: !data.iscompleted } : data
    );
    this.setState({ arr: newObj });
  };
  remove = () => {
    this.setState({
      arr: this.state.arr.filter((value) => value.iscompleted === true),
    });
  };
  componentDidUpdate() {
    console.log(this.state.arr);
  }
  render() {
    return (
      <div>
        {this.state.arr.map((value, index) => {
          return (
            <div
              key={index}
              style={{
                padding: "30px",
                margin: "30px",
                border: "1px solid gray",
                display: "inline-block",
              }}
            >
              <h3>{value.name}</h3>
              <h3>{value.description}</h3>
              <input
                type="checkbox"
                checked={value.iscompleted}
                onChange={() => this.genrate(value.id)}
              />
              <label>{value.id}</label>
            </div>
          );
        })}
        <div style={{ display: "flex", justifyContent: "center" }}>
          <button style={{ display: "block" }} onClick={() => this.remove()}>
            submit
          </button>
        </div>
      </div>
    );
  }
}

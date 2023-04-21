import React from "react";
import Child from "./child.js";

/*------ first-class ------*/
//const add = "red";
//const arr = ["hello", "hai", "bye"];
//const create = React.createElement("h1", {}, "intro");

const Parent = (props) => {
  let employees = [
    { id: 11, name: "Abhinav", salary: 75000 },
    { id: 2131, name: "Gaurav", salary: 62000 },
    { id: 3012, name: "Raj", salary: 32000 },
  ];

  let send = (menu) => {
    let done = document.getElementById("sub");
    console.log(menu);
    employees.forEach((amount) => {
      if (menu === amount.salary) {
        let parent = document.createElement("h1");
        parent.innerHTML = amount.name;
        done.append(parent);
      }
    });
  };
  const select = (data) => {
    props.onFilter(props.topass[data].duration);
  };
  return (
    <div>
      {props.topass.map((value, index) => {
        return (
          <div key={index}>
            <p>
              {index + 1}.{value.name}
            </p>
            <button onClick={() => select(index)}>Sir task{index + 1}</button>
          </div>
        );
      })}
      <Child employees={employees} buy={send} />
      <div id="sub"></div>
    </div>
  );
};
export default Parent;

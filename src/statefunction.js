import React, { useState } from "react";

const Statefunction = () => {
  const [name, changeName] = useState("dharumaraj");
  const [age, changeAge] = useState(23);
  const [arr, changeArr] = useState([1, 2, 3]);

  let modify = (index) => {
    console.log(index);
    var newValue = arr.map((value, i) => (i === index ? value * 2 : value));
    changeArr(newValue);
  };
  return (
    <div>
      <h1>{name}</h1>
      <button onClick={() => changeName("dharani")}>statefun Name</button>
      <h1>{age}</h1>
      <button onClick={() => changeAge(22)}>statefun Age</button>
      {arr.map((value, index) => {
        return (
          <div key={index}>
            <h3>{value}</h3>
            <button onClick={() => modify(index)}>statefun Arr</button>
          </div>
        );
      })}
    </div>
  );
};
export default Statefunction;

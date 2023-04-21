import React from "react";

const Child = (props) => {
  let call = (data) => {
    props.buy(props.employees[data].salary);
  };
  return (
    <div>
      {props.employees.map((value, index) => {
        return (
          <div key={index}>
            <p>
              {index + 1}.{value.name}
            </p>
            <button onClick={() => call(index)}>Mam task{index + 1}</button>
          </div>
        );
      })}
    </div>
  );
};
export default Child;

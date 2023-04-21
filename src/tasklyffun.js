import React, { useState } from "react";

var items = [
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
    name: "prakash raj",
    description: "he is rugged boy",
    iscompleted: false,
  },
];

const Tasklyffun = () => {
  const [arr, changeArr] = useState(items);
  const [again, changeAgain] = useState(arr);
  const [toggle, setToggle] = useState(false);

  let generate = (data) => {
    changeArr(
      arr.filter((val) =>
        val.id === data.id ? (val.iscompleted = !val.iscompleted) : val
      )
    );
  };
  let remove = () => {
    setToggle(!toggle);
    if (!toggle) {
      changeAgain(
        arr.filter((value) => (value.iscompleted === true ? value : null))
      );
    } else {
      changeAgain(arr);
    }
  };
  let asend = () => {
    let sub = [...again];
    changeAgain(sub.sort((a, b) => (a.name > b.name ? 1 : -1)));
  };
  let desend = () => {
    let sub = [...again];
    changeAgain(sub.sort((a, b) => (b.name < a.name ? -1 : 1)));
  };
  let clear = (i) => {
    let exchange = again.filter((value, index) => {
      return index === i ? "" : value;
    });
    changeAgain(exchange);
  };
  return (
    <div>
      {again.map((value, index) => {
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
              onChange={() => generate(value)}
            />
            <label>{value.id}</label>
            <div>
              <button onClick={() => clear(index)}>delete</button>
            </div>
          </div>
        );
      })}
      <div style={{ display: "flex", justifyContent: "center" }}>
        <button style={{ display: "block" }} onClick={() => remove()}>
          submit
        </button>
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div>
          <button onClick={() => asend()}>asending</button>
        </div>
        <div>
          <button onClick={() => desend()}>desending</button>
        </div>
      </div>
    </div>
  );
};

export default Tasklyffun;

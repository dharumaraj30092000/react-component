import React, { useState } from "react";

const Form = () => {
  const [name, changeName] = useState("");
  const [description, changeDescrip] = useState("");
  const [isComplete, changeComplete] = useState("");
  const [obj, changeObj] = useState([]);
  const [array, setArray] = useState([]);

  const submit = (e) => {
    e.preventDefault();
    let newObj = {
      name: name,
      description: description,
      isComplete: isComplete,
    };
    changeObj([...obj, newObj]);
    setArray([...obj, newObj]);
  };
  return (
    <div>
      <form onSubmit={submit}>
        <fieldset>
          <legend>Task-submition</legend>
          <label htmlFor="name">Name</label>
          <input
            id="name"
            name="name"
            onChange={(e) => changeName(e.target.value)}
          />
          <label htmlFor="descrip">description</label>
          <input
            id="descrip"
            name="descrip"
            onChange={(e) => changeDescrip(e.target.value)}
          />
          <label htmlFor="complete">Iscompleted</label>
          <input
            type="checkbox"
            id="complete"
            name="complete"
            onChange={(e) =>
              changeComplete(e.target.checked === true ? "true" : "false")
            }
          />
        </fieldset>
        <button type="submit">submit</button>
      </form>
      {array.map((val, i) => {
        return (
          <div key={i}>
            <h2>
              Name:<span>{val.name}</span>
            </h2>
            <h4>
              Description:<span>{val.description}</span>
            </h4>
            <p>Iscompleted:{val.isComplete}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Form;

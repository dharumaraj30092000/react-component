import React /* Component*/ from "react";
import Parent from "./parent.js";
import Classparent from "./classparent.js";
import { Link } from "react-router-dom";

/*------ second-class ------*/
//let employees = [
//  { id: 11, name: "Abhinav", salary: 75000 },
// { id: 2131, name: "Gaurav", salary: 62000 },
//  { id: 3012, name: "Raj", salary: 32000 },
//];

// function FilterDEtails() {
//   const count = employees.filter((list) => list.salary > 40000);
//   return (
//     <div>
//       {count.map((value, index) => (
//         <div key={index}>
//           <p>{value.salary}</p>
//         </div>
//       ))}
//     </div>
//   );
// }

/*------ third-class ------*/
// class Laptop extends Component {
//   constructor(model, ram, cost, color, generation) {
//     super();
//     this.model = model;
//     this.ram = ram;
//     this.cost = cost;
//     this.color = color;
//     this.generation = generation;
//   }
//   getModel() {
//     return <div>{this.model}</div>;
//   }
//   getRam() {
//     return <div>{this.ram}</div>;
//   }
//   getCost() {
//     return <div>{this.cost}</div>;
//   }
//   getColor() {
//     console.log(this.color);
//     return <div>{this.color}</div>;
//   }
//   getGeneration() {
//     return <div>{this.generation}</div>;
//   }
//   render() {
//     return (
//       <div>
//         <button onClick={() => assume.getColor()}>click</button>
//       </div>
//     );
//   }
// }
// const assume = new Laptop("hp", "6gp", 20000, "gray", "i6");

const tasks = [
  { name: "Write for Envato Tuts+", duration: 120 },
  { name: "Work out", duration: 60 },
  { name: "Procrastinate on Duolingo", duration: 240 },
];
const filterValue = (event) => {
  let element1 = document.getElementById("result");
  console.log(event);
  tasks.forEach((element) => {
    if (event < element.duration) {
      let element2 = document.createElement("h1");
      element2.innerHTML = element.name;
      element1.append(element2);
    }
  });
};

const Header = () => {
  return (
    <div>
      <Link to={"/statefunction"} style={{ margin: "20px" }}>
        statefunction
      </Link>
      <Link to={"/stateclass"} style={{ margin: "20px" }}>
        stateclass
      </Link>
      <Link to={"/form"} style={{ margin: "20px" }}>
        form
      </Link>
      <Parent topass={tasks} onFilter={filterValue} />
      <h1 id="result">{}</h1>
      {/* {create} */}
      {/* <h1 style={{ color: "blue" }}>Header</h1> */}
      {/* <div style={{ color: "red" }}>{add}</div> */}
      {/* {arr.map((value, index) => (
     <div key={index}>
     <p>{value}</p>
      </div>
     ))} */}
      {/* <FilterDEtails /> */}
      {/* <Laptop /> */}
      <Classparent />
    </div>
  );
};

export default Header;

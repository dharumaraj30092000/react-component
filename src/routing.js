import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Header from "./header.js";
import Statefunction from "./statefunction.js";
import Stateclass from "./stateclass.js";
import Form from "./form.js";

const Routing = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Header />}></Route>
        <Route path="/statefunction" element={<Statefunction />}></Route>
        <Route path="/stateclass" element={<Stateclass />}></Route>
        <Route path="/form" element={<Form />}></Route>
        <Route
          path="*"
          element={<Navigate to={"/header"} element={<Header />} />}
        ></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Routing;

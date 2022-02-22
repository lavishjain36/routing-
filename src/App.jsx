import React from "react";
import {Routes, Route } from "react-router-dom";
import About from "./About";
import Contact from "./Contact";
import Error from "./Error";
import Home from "./Home";

const App=()=>{
  return (
    <>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route exact path="/about" element={<About/>} />
      <Route exact path="/contact" element={<Contact/>} />
      <Route exact path="*" element={<Error/>} />

    </Routes>
    </>
  )
}


export default App;
import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import React from "react";
import Bf from "./birthform";
import Index from "./Index"

function App() {
  return (
    <>
    <div id="Header" >
      <h1><a id="HeaderLink" href="/">MC Form Filler</a></h1>
      <h3><a id="HeaderLink" href="/Birth_Form">Birth Form</a></h3>
    </div>
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<Index/>} />
        <Route path="/Birth_Form" element={<Bf/>}  />
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;

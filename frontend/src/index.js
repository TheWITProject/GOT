import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CareerMap from "./main_pages/CareerMap.js";
import CareerInformation from "./main_pages/CareerInformation.js";



// routes links the pages
// <Route path='/careerinfo' element={<CareerInformation/>} />
ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route index element={<CareerMap />} />
        <Route path="/careermap/" element={<CareerMap />} />

        <Route path="/careerinfo/:id" element={<CareerInformation />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);



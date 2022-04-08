import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import reportWebVitals from './reportWebVitals';
import CareerMap from './main_pages/CareerMap.js';

import CareerInformation from "./main_pages/CareerInformation.js";
import CareerOverview from "./main_pages/CareerOverview.js";

// routes links the pages 
// <Route path='/careerinfo' element={<CareerInformation/>} />
ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
        <Routes> 

        <Route index element={<CareerMap />} />
            
    
            <Route path='/careerinfo' element={<CareerInformation/>} />
  
       
          </Routes>
          </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//<Route path='/careeroverview' element={<CareerOverview/>} />

reportWebVitals();

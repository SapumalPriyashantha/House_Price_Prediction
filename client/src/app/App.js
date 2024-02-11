import React from 'react';
import { Routes, Route } from "react-router-dom";
import {BrowserRouter as Router,} from "react-router-dom";
import Home from "../pages/Home/home.jsx";

function App(){
  return(
    <Router>
        <div>
          <Routes>
            <Route path="/" element={<Home/>} />
          </Routes>
        </div>
    </Router>
  )
}

export default App
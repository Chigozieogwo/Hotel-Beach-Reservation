import React from "react";
import ReactDOM from "react-dom";
import App from "../src/Apps";
import  './App.css'
import {BrowserRouter as Router } from 'react-router-dom'
//import "bootstrap/dist/css/bootstrap.css";



ReactDOM.render(
    <Router>
        < App />
    </Router>
    , document.getElementById("root"));
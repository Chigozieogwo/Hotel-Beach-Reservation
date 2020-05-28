import React from "react";
import ReactDOM from "react-dom";
import App from "../src/Apps";
import  './App.css'
import { BrowserRouter as Router } from 'react-router-dom'
import { RoomProvider } from './context';
//import "bootstrap/dist/css/bootstrap.css";



ReactDOM.render(
    <RoomProvider>
       <Router>    
          < App />
       </Router>
    </RoomProvider>
    
    , document.getElementById("root"));
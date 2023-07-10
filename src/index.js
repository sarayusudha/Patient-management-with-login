import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Login from "./loginn/Login";
import App from "./App";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import reportWebVitals from './reportWebVitals';
import AddPatient from "./patients/AddPatient";
import EditPatient from "./patients/EditPatient";
import ViewPatient from "./patients/ViewPatient";
import Home from "./pages/Home";
import Validation from './Validation';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  
    <Router>
        
          <Routes>
          <Route exact path="/" element={<Login />} />
          <Route exact path="/addpatient" element={<AddPatient />} />
          <Route exact path="/editpatient/:id" element={<EditPatient />} />
          <Route exact path="/viewpatient/:id" element={<ViewPatient />} />
          <Route exact path="/home" element={<Home />} />
          <Route exact path="/app" element={<App />} />
          <Route exact path="/validation" element={<Validation />} />
        </Routes>
        
      </Router>
    
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

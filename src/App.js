import './App.css';
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


import People from './components/people';
import Viewsdetails from './components/peopledetails';

function App() {

  return (
    <>
    <div>
      <Router>
        <Routes>
          <Route exact path="/"  element={<People/>}></Route>
          <Route exact path="/viewsdetails/:name/:id"  element={<Viewsdetails/>}></Route>
        </Routes>
      </Router>
    </div>
    
     </>
    

  )
}

export default App;
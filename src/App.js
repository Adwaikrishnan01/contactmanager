import React from 'react'
import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter as Router,Routes,Route}  from "react-router-dom";
import Home from './components/Home';
import About from './components/About';
import'./components/Contactstyle.css';
import Contactpage from './components/Contactpage.js';


function App() {
  
  return (
    
    <>
      <Router>   <Navbar />
        <Routes>
          <Route exact path='/' element={<Home />}/>
          <Route path='/about' element={< About />}/>
          <Route path='/contactpage' element={< Contactpage/>}/>
        </Routes>
      </Router>
    
    </>

  );
}

export default App;

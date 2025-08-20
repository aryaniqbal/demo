
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'

import Home from './Home';
import Header from '../componts/Header';
import Footer from '../componts/Footer';
function App() {
  return (
   <Router>
    <div className='Container'>
    <Header />
     <Routes>
      <Route path='/' element ={<Home/>} /> 
     </Routes>
<Footer/>
    </div>
   </Router>
    
  );
}

export default App

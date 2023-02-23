import { BrowserRouter,Route, Routes } from 'react-router-dom';
import About from './About';
import './App.css';
import Home from './Home';
import Contact from './Contact';
import { useState } from 'react';
function App() {
  
  const[white,dark]=useState()
  const darkmode=()=>{
    dark("darkmode")
  }
  return (
    <div className={white}>
    <button onClick={darkmode}>click</button>
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="about" element={<About/>}/>
    <Route path="contact" element={<Contact/>}/>
    </Routes>
    </BrowserRouter>
    
    </div>
  );
}

export default App;

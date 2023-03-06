import { BrowserRouter,Route, Routes } from 'react-router-dom';
import About from './About';
import './App.css';
import Home from './Home';
import Contact from './Contact';
import { useState } from 'react';
import moment from 'moment'
function App() {
  
  const[white,dark]=useState("whitemode")
  const[darkm,darkmAfter]=useState("switch to dark mode")
  const[darkswitch,lightswitch]=useState("darkMswitch")
  const darkmode=()=>{

    dark("darkmode")
    if(white==="darkmode"){
      dark("whitemode")
    }
    
    darkmAfter("switch to light mode")
    if(darkm==="switch to light mode"){
      darkmAfter("switch to dark mode")
    }

    lightswitch("lightmswitch")
    if(darkswitch==="lightmswitch"){
      lightswitch("darkMswitch")
    }

  }
  return (
    <div className={white}>
    <button className={darkswitch} onClick={darkmode}>{darkm}</button>
    <div>time -- {moment().format('MMMM Do YYYY, h:mm:ss')}</div>
    
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

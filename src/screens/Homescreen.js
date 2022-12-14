import React from 'react'
import "./homeScreen.css"
import img3 from "../images/bubble.png"
import Header from '../components/Header/Header';

const Homescreen = () => {
  return (
    
      
      <div className="hero">
       <Header/>
       <div className="content">
           <h3>Welcome to the</h3>
           <h1>Decentralized<br></br>cloud</h1>
           <button type="button">Take a tour</button>
       </div>
     
    
      <div className="bubbles">
         <img src={img3} alt=""/>
         <img src={img3} alt=""/>
         <img src={img3} alt=""/>
         <img src={img3} alt=""/>
         <img src={img3} alt=""/>
         <img src={img3} alt=""/>
         <img src={img3} alt=""/>
        
       </div> 
      </div>
    
  );
}

export default Homescreen
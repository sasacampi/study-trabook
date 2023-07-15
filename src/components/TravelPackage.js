import React from "react";
import ReactDOM from 'react-dom';
import Tree from '../img/tree.png'

export default function TravelPackage() {
    return (
        <div className="centered-text">
        <div className="container">
          <div className="container-title">
            <h1>Best <span>vacation plan</span></h1>
            <p>We ensure that you’ll embark on a perfectly planned, safe vacation at a price you can afford.</p>
        </div> 
        <div className="container-title-img">
          <img src={Tree} className="vacation--plans--tree" alt="Tree Img"></img>
        </div>
      </div>
      </div>
    )
}
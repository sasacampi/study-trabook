import React from "react";
import ReactDOM from 'react-dom';
import Exciting from '../img/exciting.svg'
import SignUp from '../img/signup.svg'
import Worth from '../img/worth.svg'
import Airplane from '../img/airplane.png'

export default function VacationPlans() {
    return (
      <div className="vacation--plans">
        <img src={Airplane} className="vacation--plans--plane" alt="Plane Img"></img>
        <h1>Things you need <span>to do</span></h1>
        <p>We ensure that you’ll embark on a perfectly planned, safe vacation at a price you can afford.</p>
        <div className="vacation--plans--li">
            <div className="column">
            <img src={SignUp} className="vacation--plans--li--img" alt="SignUp Icon"></img>
            <h1>Sign Up</h1>
            <p>Completes all the work associated with planning and processing</p>
            </div>
            <div className="column">
            <img src={Worth} className="vacation--plans--li--img" alt="Worth of Money Icon"></img>
            <h1>Worth of Money</h1>
            <p>After successful access then book from exclusive deals & pricing</p>
            </div>
            <div className="column">
            <img src={Exciting} className="vacation--plans--li--img" alt="Exciting Travel Icon"></img>
            <h1>Exciting Travel</h1>
            <p>Start and explore a wide range of exciting travel experience</p>
            </div>
        </div>
      </div> 
       
    );
  }
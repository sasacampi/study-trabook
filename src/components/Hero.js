import React from "react";
import ReactDOM from 'react-dom';
import HeroIMG from '../img/heroimg.png'

export default function Hero() {
    return (
        <div className="hero">
            <img src={HeroIMG} className="hero--image" alt="Hero Image"></img>
            <h1>Get started your <br /> exciting <span>journey</span> <br />with us.</h1>
            <h2>A Team of experienced tourism professionals will <br /> provide you with the best advice and tips for your <br /> desire place. </h2>
            <button type="btn" className="btn">Discover Now</button>
        </div>
    )
}
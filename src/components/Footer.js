import React from "react";
import ReactDOM from 'react-dom';
import Logo from '../img/trabooklogo.svg'
import Facebook from '../img/social__facebook.svg'
import Twitter from '../img/social__twitter.svg'
import Instagram from '../img/social__insta.png'

export default function Footer() {
    return (
      <footer class="footer">
    <div class="footer__addr">
      <h1 class="footer__logo">Trabook</h1>
      <img src={Logo} className="footer__logo__img" alt="Trabook`s logo"></img>
      <address>
      Book your trip in minute, get full
      Control for much longer.
      </address>
      <img src={Facebook} className="footer__socials__img" alt="Facebook Logo"></img>
      <img src={Instagram} className="footer__socials__img" alt="Instagram logo"></img>
      <img src={Twitter} className="footer__socials__img" alt="Twitter logo"></img>

    </div>
    
    <ul class="footer__nav">
      <li class="nav__item">
        <h2 class="nav__title"> Company </h2>
  
        <ul class="nav__ul">
          <li>
            <a href="#">About</a>
          </li>
  
          <li>
            <a href="#">Careers</a>
          </li>
              
          <li>
            <a href="#">Logistic</a>
          </li>

          <li>
            <a href="#">Privacy & Policy</a>
          </li>
        </ul>
      </li>
      
      <li class="nav__item">
        <h2 class="nav__title"> Contact </h2>
        <ul class="nav__ul">
          <li>
            <a href="#">Help/FAQ</a>
          </li>
          
          <li>
            <a href="#">Press</a>
          </li>
          
          <li>
            <a href="#">Affilates</a>
          </li>
          </ul>
      </li>
      
      <li class="nav__item">
        <h2 class="nav__title">More</h2>
        
        <ul class="nav__ul">
          <li>
            <a href="#">Press Centre</a>
          </li>
          
          <li>
            <a href="#">Our Blog</a>
          </li>
          
          <li>
            <a href="#">Low fare tips</a>
          </li>
        </ul>
      </li>
    </ul>
    <div className="line"></div>
    <div class="legal">
      <p>&copy; Copyright, Trabook 2022. All rights reserved.</p>
      
      <div class="legal__links">
        <span>Terms & Conditions</span>
      </div>
    </div>
  </footer>
  );
}

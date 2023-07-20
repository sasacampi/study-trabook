import React from "react";
import ReactDOM from 'react-dom';
import Tree from '../img/element.svg'

export default function Newsletter() {

    return (
        <div className="newsletter-container">
          <div className="bg">
            <div className="newsletter-content">
              <div className="newsletter-title"><p>Subscribe and get exclusive deals & offer</p></div>
              <form class="form-container">
                <div class="input-wrapper">
                 <input type="email" placeholder="Enter your mail" class="custom-input" />
                  <button type="submit" class="custom-button">Subscribe</button>
                 </div>
             </form>

            </div>
          </div>
        </div>
    )

    
}
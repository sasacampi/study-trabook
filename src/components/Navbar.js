import React from "react";
import ReactDOM from 'react-dom';

export default function Navbar() {
    return (
    <div>
        <header>
            <div className="navbar--logo">
            <h1>Trabook</h1>           
                  </div>
                  <input type="checkbox" id="nav-toggle" className="nav-toggle" ></input>
                  <label for="nav-toggle" className = "nav-toggle-label"> 
                    <span className="label-span"></span> 
                  </label>
                  <nav> 
                    <ul>
                      <li><a>Home</a></li>
                      <li><a>About</a></li>
                      <li><a>Destination</a></li>  
                      <li><a>Tour</a></li> 
                      <li><a>Blog</a></li> 
                    </ul>
                  </nav>
                </header>
                  <div class="content">
                  </div>
                </div>

    )
            



}
    